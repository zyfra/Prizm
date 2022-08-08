import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { FormControl, NgControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { ZUI_MULTI_SELECT_OPTIONS, ZuiMultiSelectOptions } from './multi-select.options';
import { ZuiContextWithImplicit, ZuiFocusableElementAccessor, ZuiNativeFocusableElement } from '../../../types';
import { ZuiInputSize } from '../../input';
import { AbstractZuiControl } from '../../../abstract/control';
import { zuiIsNativeFocused } from '../../../util';
import { debounceTime, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { ZuiMultiSelectIdentityMatcher, ZuiMultiSelectItemWithChecked } from './multi-select.model';
import { ZuiSelectSearchMatcher } from '../select';
import { ZUI_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { zuiDefaultProp } from '../../../decorators';


@Component({
  selector: 'zui-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService,
    {
      provide: ZUI_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => ZuiMultiSelectComponent),
    },
  ],
  exportAs: 'zuiDropdownSelect'
})
export class ZuiMultiSelectComponent<T extends unknown>
extends AbstractZuiControl<T>
implements ZuiFocusableElementAccessor {
  @ViewChild('focusableElementRef', {read: ElementRef})
  public readonly focusableElement?: ElementRef<HTMLElement>;

  @Input() set items(data:T[]) {
    this.items$.next(data);
  }
  get items(): T[] {
    return this.items$.value;
  }

  @Input()
  @zuiDefaultProp()
  emptyContent: string = this.options.emptyContent;

  @Input()

  @zuiDefaultProp()
  searchable = this.options.searchable;
  @Input()
  @zuiDefaultProp()
  label = this.options.label;

  @Input()
  @zuiDefaultProp()
  minDropdownHeight = this.options.minDropdownHeight;
  @Input()
  @zuiDefaultProp()
  maxDropdownHeight = this.options.maxDropdownHeight;

  @Input()
  @zuiDefaultProp()
  placeholder = this.options.placeholder;

  @Input()
  @zuiDefaultProp()
  size: ZuiInputSize =  this.options.size;

  @Input()
  @zuiDefaultProp()
  valueTemplate: PolymorphContent<ZuiContextWithImplicit<ZuiMultiSelectItemWithChecked<T>>> = this.options.valueContent;

  public open = false;
  public readonly items$ = new BehaviorSubject<T[]>([]);
  public readonly requiredInputControl = new FormControl();
  public readonly chipsFormControl = new FormControl();

  get checkboxSize(): 's' | 'l' {
    return this.size !== 'm'
      ? this.size
      : 's';
  }

  readonly filteredItems$ = combineLatest([
      this.requiredInputControl.valueChanges.pipe(startWith('')),
      (this.control?.valueChanges.pipe(startWith([])) ?? of([])),
    ]).pipe(
    switchMap(([searchValue, selectedItems]: [string, T[]]) => {
      return this.items$.pipe(
        map((items) => {
            if (!this.searchable || !searchValue?.toString().replace(/[ ]+/g, '')) return items;
            searchValue = this.searchValue = searchValue.toString().trim();
            return items?.filter(
              (item) => this.searchMatcher(searchValue, item),
            ) ?? [];
          }
        ),
        map((items: T[]) => {
          return items.map(
            (item: T) => {
              return {
                checked: !!selectedItems.find(
                  (selected) => this.identityMatcher(selected, item)
                ),
                obj: item
              } as ZuiMultiSelectItemWithChecked<T>
            }
          )
        }),
        tap((items) => {
          this.filteredItems = items;
        }),
        debounceTime(0),
        tap(() => this.safeOpenModal())
      )
    }),
  );

  public filteredItems: ZuiMultiSelectItemWithChecked<T>[] = [];
  private searchValue: string;

  @Input()
  @zuiDefaultProp()
  searchMatcher: ZuiSelectSearchMatcher<T> = this.options.searchMatcher;

  @Input()
  @zuiDefaultProp()
  identityMatcher: ZuiMultiSelectIdentityMatcher<T> = this.options.identityMatcher;

  /**
   * need only clear function
   * */
  @Input()
  @zuiDefaultProp()
  stringify: (i:T) => string = this.options.stringify;

  constructor(
    @Inject(ZUI_MULTI_SELECT_OPTIONS) private readonly options: ZuiMultiSelectOptions<T>,
    @Optional()
    @Self()
    @Inject(NgControl) control: NgControl | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
  ) {
    super(control, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.requiredInputControl.valueChanges.pipe(
      tap((value) => {
        if (this.searchable && value) return;
        if (value !== this.value) this.updateValue(value)
      }),
      takeUntil(this.destroy$),
    ).subscribe();

    this.control?.statusChanges.pipe(
      tap((value) => {
        if (value === 'DISABLED')
          this.requiredInputControl.disable();
        else if (!this.requiredInputControl.enabled)
          this.requiredInputControl.enable();
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  get nativeFocusableElement(): ZuiNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return zuiIsNativeFocused(this.nativeFocusableElement);
  }

  protected getFallbackValue(): T {
    return null;
  }

  public toggle(state: boolean, item: ZuiMultiSelectItemWithChecked<T>): void {
    let items = (this.value ?? []) as T[];
    if (!state) {
      items = items.filter(i => !this.identityMatcher(i, item.obj));
    } else {
      items = [
        ...items,
        item.obj
      ];
    }
    this.updateValue(items as any);
    this.requiredInputControl.setValue(items);
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement.nativeElement;
    if (
      !this.open &&
      this.interactive &&
      inputElement &&
      zuiIsNativeFocused(inputElement) &&
      (this.filteredItems?.length || this.searchValue)
    ) {
      this.open = true;
      this.changeDetectorRef.markForCheck();
    }
  }
}
