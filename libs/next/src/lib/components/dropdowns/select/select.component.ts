import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { FormControl, NgControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PZM_SELECT_OPTIONS, PzmSelectOptions, PzmSelectValueContext } from './select.options';
import { PzmFocusableElementAccessor, PzmNativeFocusableElement } from '../../../types';
import { PzmInputSize } from '../../input';
import { AbstractPzmControl } from '../../../abstract/control';
import { pzmIsNativeFocused, pzmIsTextOverflow$ } from '../../../util';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, concat, timer } from 'rxjs';
import { PzmSelectIdentityMatcher, PzmSelectSearchMatcher } from './select.model';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { pzmDefaultProp } from '../../../decorators';
import { PzmDropdownHostComponent } from '../dropdown-host';
import { PzmOverlayOutsidePlacement } from '../../../modules';

// TODO create abstract select component and move to abstract common logic
@Component({
  selector: 'pzm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PzmDestroyService,
    {
      provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PzmSelectComponent),
    },
  ],
  exportAs: 'pzmDropdownSelect'
})
export class PzmSelectComponent<T>
extends AbstractPzmControl<T>
implements PzmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', {read: ElementRef})
  public readonly focusableElement?: ElementRef<HTMLElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PzmDropdownHostComponent;

  @Input() set items(data:T[]) {
    this.items$.next(data);
  }
  get items(): T[] {
    return this.items$.value;
  }

  @Input()
  @pzmDefaultProp()
  searchable = this.options.searchable;

  @Input()
  @pzmDefaultProp()
  forceClear = this.options.forceClear;

  @Input()
  @pzmDefaultProp()
  label = this.options.label;

  @Input()
  @pzmDefaultProp()
  minDropdownHeight = this.options.minDropdownHeight;

  @Input()
  @pzmDefaultProp()
  maxDropdownHeight = this.options.maxDropdownHeight;

  @Input()
  @pzmDefaultProp()
  placeholder = this.options.placeholder;

  @Input()
  @pzmDefaultProp()
  dropdownWidth = this.options.dropdownWidth;

  @Input()
  @pzmDefaultProp()
  size: PzmInputSize = this.options.size;

  @Input()
  @pzmDefaultProp()
  searchMatcher: PzmSelectSearchMatcher<T> = this.options.searchMatcher;

  @Input()
  @pzmDefaultProp()
  emptyContent: PolymorphContent = this.options.emptyContent;

  @Input()
  @pzmDefaultProp()
  nullContent: PolymorphContent = this.options.nullContent;

  readonly pzmIsTextOverflow$ = pzmIsTextOverflow$;

  private readonly stop$ = new BehaviorSubject(false);

  /**
   * need only clear function
   * */
  @Input()
  @pzmDefaultProp()
  stringify: (i:T, content?: string) => string = this.options.stringify;

  @Input()
  @pzmDefaultProp()
  identityMatcher: PzmSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @pzmDefaultProp()
  valueTemplate: PolymorphContent<PzmSelectValueContext<T>> = this.options.valueContent;

  @Input()
  @pzmDefaultProp()
  outer: boolean = this.options.outer;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_select';

  public open = false;
  public readonly direction: PzmOverlayOutsidePlacement = PzmOverlayOutsidePlacement.RIGHT;
  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new FormControl();

  readonly filteredItems$ = this.requiredInputControl.valueChanges.pipe(
    startWith(''),
    switchMap((value) => {
      return this.items$.pipe(
        map((items) => {
            if (!this.searchable || !value?.toString().replace(/[ ]+/g, '')) return items;
            const searchValue = this.searchValue = value.toString().trim();
            return items?.filter(
              (item) => this.searchMatcher(searchValue, item),
            ) ?? [];
          }
        ),
        map((items) => {
          if (this.nullContent && items?.length && items[0] !== null) {
            items = [
              null,
              ...items,
            ]
          }
          return items;
        }),
        tap((items) => {
          this.filteredItems = items;
          this.dropdownHostElement?.reCalculatePositions(1000/60);
        }),
        debounceTime(0),
        // tap(() => this.safeOpenModal())
      )
    }),
  );

  public filteredItems: T[] = [];
  private searchValue: string;


  constructor(
    @Inject(PZM_SELECT_OPTIONS) private readonly options: PzmSelectOptions<T>,
    @Optional()
    @Self()
    @Inject(NgControl) control: NgControl | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
  ) {
    super(control, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.initControlStatusChangerIfExist();
    this.initControlValueChangerIfExist();
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

  private initControlValueChangerIfExist(): void {
    concat(
      timer(0).pipe(map(() => this.control?.value)),
      this.control?.valueChanges,
    ).pipe(
      distinctUntilChanged(),
      tap((value) => {
        if (value) {
          value = this.items$.value?.find(
            i => value && i && this.identityMatcher(value, i),
          );
        }
        this.select(value);
        this.updateValue(value);
      }),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  get nativeFocusableElement(): PzmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return pzmIsNativeFocused(this.nativeFocusableElement);
  }

  public onClear(): void {
    this.select(null);
  }

  protected getFallbackValue(): T {
    return null;
  }

  public select(item: T): void {
    this.updateValue(item);
    this.requiredInputControl.setValue(item && this.stringify(item));
    this.open = false;
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement.nativeElement;
    // if (this.stop$.value) return
    const open = (
      !this.open &&
      this.interactive &&
      inputElement &&
      pzmIsNativeFocused(inputElement)
    )
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  // TODO remove after finish activezone to dropdown component
  public safeStopPropagation(value: string, $event: Event): void {
    this.open = false;
    this.changeDetectorRef.markForCheck();
    if (!value) $event.stopImmediatePropagation();
  }
}
