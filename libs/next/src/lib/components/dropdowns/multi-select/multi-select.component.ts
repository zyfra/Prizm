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
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { ZUI_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { zuiDefaultProp } from '../../../decorators';
import { ZuiDropdownHostComponent } from '../dropdown-host';
import {
  ZuiMultiSelectIdentityMatcher,
  ZuiMultiSelectItemWithChecked,
  ZuiMultiSelectSearchMatcher,
} from './multi-select.model';

// TODO create abstract select component and move to abstract common logic
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
export class ZuiMultiSelectComponent<T>
extends AbstractZuiControl<T[]>
implements ZuiFocusableElementAccessor
{
  @ViewChild('focusableElementRef', {read: ElementRef})
  public readonly focusableElement?: ElementRef<HTMLElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: ZuiDropdownHostComponent;

  @Input() set items(data:T[]) {
    this.items$.next(data);
  }
  get items(): T[] {
    return this.items$.value;
  }

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
  searchMatcher: ZuiMultiSelectSearchMatcher<T> = this.options.searchMatcher;

  @Input()
  @zuiDefaultProp()
  emptyContent: string = this.options.emptyContent;

  @Input()
  @zuiDefaultProp()
  nullContent: string = this.options.nullContent;

  /** need only clear function */
  @Input()
  @zuiDefaultProp()
  stringify: (i: Omit<ZuiMultiSelectItemWithChecked<T>, 'stringify'>, content?: string) => string = this.options.stringify;

  @Input()
  @zuiDefaultProp()
  identityMatcher: ZuiMultiSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @zuiDefaultProp()
  valueTemplate: PolymorphContent<ZuiContextWithImplicit<ZuiMultiSelectItemWithChecked<T>>> = this.options.valueContent;

  @Input()
  @zuiDefaultProp()
  outer: boolean = this.options.outer;

  public open = false;
  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new FormControl();
  public readonly searchInputControl = new FormControl();
  public readonly chipsControl = new FormControl([] as string[]);


  readonly filteredItems$: Observable<ZuiMultiSelectItemWithChecked<T>[]> = this.controlReady$.pipe(
    switchMap(() => combineLatest([
      this.searchInputControl.valueChanges.pipe(startWith('')),
      this.valChange.pipe(startWith(this.value)),
    ])),
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
                checked: !!selectedItems?.find(
                  (selected) => this.identityMatcher(selected, item)
                ),
                obj: item
              } as ZuiMultiSelectItemWithChecked<T>
            }
          )
        }),
        tap((items) => {
          this.filteredItems = items;
          this.dropdownHostElement?.reCalculatePositions(1000/60);
        }),
        debounceTime(0),
        tap(() => this.safeOpenModal())
      )
    }),
  );

  readonly selectedItems$: Observable<T[]> =
    this.valChange.pipe(startWith(this.value)).pipe(
    switchMap((selectedItems: T[]) => {
      return this.items$.pipe(
        map((items) => {
            return items?.filter(
              (item) => (selectedItems ?? []).find(
                (selectedItem) => this.identityMatcher(selectedItem, item)
              ),
            ) ?? [];
          }
        ),
      )
    }),
    shareReplay(1)
  );

  readonly selectedItemsChips$: Observable<string[]> = this.selectedItems$.pipe(
    map((selectedItems: T[]) => {
      const result = selectedItems?.map(
        i => this.stringify({
          checked: true,
          obj: i
        })
      ) ?? [];

      return result;
    }),
    shareReplay(1)
  );

  public filteredItems: ZuiMultiSelectItemWithChecked<T>[] = [];
  private searchValue: string;


  constructor(
    @Inject(ZUI_MULTI_SELECT_OPTIONS) private readonly options: ZuiMultiSelectOptions<T>,
    @Optional()
    @Self()
    @Inject(NgControl) control: NgControl | null,
    public readonly cdRef: ChangeDetectorRef,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
  ) {
    super(control, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initControlStatusChangerIfExist();
    this.selectedItems$.pipe(
      tap(items => this.chipsControl.setValue(items, {emitEvent: true})),
      tap(() => this.cdRef.markForCheck()),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private initControlStatusChangerIfExist(): void {
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

  public onClear(): void {
    this.control?.setValue(null);
  }

  protected getFallbackValue(): T[] {
    return [];
  }

  public select(item: ZuiMultiSelectItemWithChecked<T>): void {
    const values = !item.checked
      ? [
        ...(this.value ?? [] as any),
        item.obj
      ]
      : this.value.filter(i => !this.identityMatcher(i, item.obj));

    this.updateValue(values);
    this.dropdownHostElement?.reCalculatePositions();
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement.nativeElement;
    if (
      !this.open &&
      this.interactive &&
      inputElement &&
      zuiIsNativeFocused(inputElement)
    ) {
      this.open = true;
      this.changeDetectorRef.markForCheck();
    }
  }

  // TODO remove after finish activezone to dropdown component
  public safeStopPropagation(value: string, $event: Event): void {
    if (!value) $event.stopPropagation();
  }
}
