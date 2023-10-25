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
import { PrizmDestroyService, PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PRIZM_MULTI_SELECT_OPTIONS, PrizmMultiSelectOptions } from './multi-select.options';
import {
  PrizmContextWithImplicit,
  PrizmFocusableElementAccessor,
  PrizmNativeFocusableElement,
} from '../../../types';
import { PrizmInputSize, PrizmInputTextComponent } from '../../input';
import { AbstractPrizmControl } from '../../../abstract/control';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemWithChecked,
  PrizmMultiSelectSearchMatcher,
} from './multi-select.model';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';
import { PrizmScrollbarVisibility } from '../../scrollbar';

/**
 * @deprecated
 * use only PrizmMultiSelectInputComponent
 * will be removed after ng 15 update
 * for auto update use our migrator https://prizm.site/forZIIoT/update-from-beta
 * */
@Component({
  selector: 'prizm-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PrizmMultiSelectComponent),
    },
  ],
  exportAs: 'prizmDropdownSelect',
})
export class PrizmMultiSelectComponent<T>
  extends AbstractPrizmControl<T[]>
  implements PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @Input() set items(data: T[]) {
    this.items$.next((data as unknown) ?? []);
  }
  get items(): T[] {
    return this.items$.value;
  }

  @Input()
  @prizmDefaultProp()
  dropdownScroll: PrizmScrollbarVisibility = 'auto';

  @Input()
  @prizmDefaultProp()
  icon = this.options.icon;

  @Input()
  @prizmDefaultProp()
  selectAllItem: T | null = this.options.chooseAllItem;

  @Input()
  @prizmDefaultProp()
  searchable = this.options.searchable;

  @Input()
  @prizmDefaultProp()
  forceClear = this.options.forceClear;

  @Input()
  @prizmDefaultProp()
  isChipsDeletable = this.options.isChipsDeletable;

  @Input()
  @prizmDefaultProp()
  label = this.options.label;

  @Input()
  @prizmDefaultProp()
  minDropdownHeight = this.options.minDropdownHeight;

  @Input()
  @prizmDefaultProp()
  dropdownWidth = this.options.dropdownWidth;

  @Input()
  @prizmDefaultProp()
  maxDropdownHeight = this.options.maxDropdownHeight;

  @Input()
  @prizmDefaultProp()
  placeholder = this.options.placeholder;

  @Input()
  @prizmDefaultProp()
  size: PrizmInputSize = this.options.size;

  @Input()
  @prizmDefaultProp()
  searchMatcher: PrizmMultiSelectSearchMatcher<T> = this.options.searchMatcher;

  @Input()
  @prizmDefaultProp()
  emptyContent: PolymorphContent = this.options.emptyContent;

  /** need only clear function */
  @Input()
  @prizmDefaultProp()
  stringify: PrizmMultiSelectItemStringifyFunc<T> = this.options.stringify;

  @Input()
  @prizmDefaultProp()
  identityMatcher: PrizmMultiSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @prizmDefaultProp()
  valueTemplate: PolymorphContent<PrizmContextWithImplicit<PrizmMultiSelectItemWithChecked<T>>> =
    this.options.valueContent;

  @Input()
  @prizmDefaultProp()
  outer: boolean = this.options.outer;

  override readonly testId_ = 'ui-muilti-select';

  public inputTextElement!: PrizmInputTextComponent | null;
  public readonly defaultIcon = 'chevrons-dropdown';
  readonly prizmIsTextOverflow$ = prizmIsTextOverflow$;
  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;

  public open = false;
  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new UntypedFormControl();
  public readonly searchInputControl = new UntypedFormControl();
  public readonly chipsControl = new UntypedFormControl([] as string[]);

  readonly filteredItems$: Observable<PrizmMultiSelectItemWithChecked<T>[]> = this.controlReady$.pipe(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    switchMap(() =>
      combineLatest([
        this.searchInputControl.valueChanges.pipe(startWith('')),
        this.internalValue$.pipe(debounceTime(0), startWith(this.value)),
      ])
    ),
    switchMap(([searchValue, selectedItems]: [string, T[]]) => {
      return this.items$.pipe(
        map(items => {
          if (!this.searchable || !searchValue?.toString().replace(/[ ]+/g, '')) return items;
          searchValue = this.searchValue = searchValue.toString().trim();
          return items?.filter(item => this.searchMatcher(searchValue, item)) ?? [];
        }),
        map((items: T[]) => {
          const selectItems = items.map((item: T) => {
            return {
              checked: !!selectedItems?.find(selected => this.identityMatcher(selected, item)),
              obj: item,
            } as PrizmMultiSelectItemWithChecked<T>;
          });
          const selectedCount = this.value?.length;
          const allItem = this.items$.value?.length;
          const currentlySearching = this.searchInputControl.value;
          const addSelectAllItem = this.selectAllItem && !currentlySearching;

          return [
            ...((addSelectAllItem ? [this.selectAllItem] : []).map(item => ({
              checked: allItem === selectedCount,
              indeterminate: selectedCount && allItem !== this.value.length,
              obj: item,
            })) as PrizmMultiSelectItemWithChecked<T>[]),
            ...selectItems,
          ];
        }),
        tap(items => {
          this.filteredItems = items;
          this.dropdownHostElement?.reCalculatePositions(1000 / 60);
        }),
        debounceTime(0)
      );
    })
  );

  readonly selectedItems$: Observable<T[]> = this.internalValue$
    .pipe(debounceTime(0), startWith(this.value))
    .pipe(
      switchMap(() => {
        const selectedItems = this.value;
        return this.items$.pipe(
          map(items => {
            return (
              items?.filter(item =>
                (selectedItems ?? []).find(selectedItem => this.identityMatcher(selectedItem, item))
              ) ?? []
            );
          })
        );
      }),
      shareReplay(1)
    );

  readonly chipsSet = new Map<string, T>();
  readonly selectedItemsChips$: Observable<string[]> = this.selectedItems$.pipe(
    map((selectedItems: T[]) => {
      this.chipsSet.clear();
      const result =
        selectedItems?.map(i => {
          const str = this.stringify({
            checked: true,
            obj: i,
          });

          this.chipsSet.set(str, i);
          return str;
        }) ?? [];

      return result;
    }),
    shareReplay(1)
  );

  public filteredItems: PrizmMultiSelectItemWithChecked<T>[] = [];
  private searchValue!: string;

  constructor(
    @Inject(PRIZM_MULTI_SELECT_OPTIONS) private readonly options: PrizmMultiSelectOptions<T>,
    @Optional()
    @Self()
    @Inject(NgControl)
    control: NgControl | null,
    public readonly cdRef: ChangeDetectorRef,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef
  ) {
    super(control, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initControlStatusChangerIfExist();
    this.initControlValueChangerIfExist();
    this.initControlValidatorsIfExist();
    this.selectedItems$
      .pipe(
        tap(items => {
          this.chipsControl.setValue(items as unknown, { emitEvent: true });
          // TODO remove after add update inputs
          if (this.inputTextElement) this.inputTextElement.markAsTouched();
        }),
        tap(() => this.cdRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private initControlStatusChangerIfExist(): void {
    if (this.control instanceof UntypedFormControl)
      PrizmFormControlHelpers.syncStates(this.control as UntypedFormControl, false, this.requiredInputControl)
        .pipe(takeUntil(this.destroy$))
        .subscribe();
  }

  private initControlValueChangerIfExist(): void {
    if (this.control instanceof UntypedFormControl)
      PrizmFormControlHelpers.syncValues(
        this.control as UntypedFormControl,
        i => i?.length,
        null,
        this.requiredInputControl
      )
        .pipe(takeUntil(this.destroy$))
        .subscribe();
  }

  private initControlValidatorsIfExist(): void {
    if (this.control instanceof UntypedFormControl)
      PrizmFormControlHelpers.syncAllValidators(
        this.control as UntypedFormControl,
        false,
        this.requiredInputControl
      )
        .pipe(takeUntil(this.destroy$))
        .subscribe();
  }

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  public onClear(): void {
    this.control?.setValue(null);
  }

  protected getFallbackValue(): T[] {
    return [];
  }

  private isSelectAllItem(item: PrizmMultiSelectItemWithChecked<T>): boolean {
    return Boolean(this.selectAllItem && this.identityMatcher(this.selectAllItem, item.obj));
  }

  public select(item: PrizmMultiSelectItemWithChecked<T>): void {
    const newItemState = !item.checked;
    let values: T[];
    if (this.isSelectAllItem(item)) {
      values = newItemState ? [...this.items] : [];
    } else {
      values = newItemState
        ? [...(this.value ?? []), item.obj]
        : this.value.filter(i => !this.identityMatcher(i, item.obj));
    }

    this.updateValue(values);
    this.dropdownHostElement?.reCalculatePositions();
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement?.nativeElement;
    this.searchInputControl.setValue('');
    this.open =
      !this.open &&
      this.interactive &&
      !!inputElement; /*&& (this.outer || prizmIsNativeFocused(inputElement));*/
    this.changeDetectorRef.markForCheck();
  }

  // TODO remove after finish activezone to dropdown component
  public safeStopPropagation(value: string, $event: Event): void {
    this.open = false;
    this.cdRef.markForCheck();
    if (!value) $event.stopImmediatePropagation();
  }

  public removeChip(str: string): void {
    const item = this.chipsSet.get(str);
    this.select({
      checked: true,
      obj: item,
    } as PrizmMultiSelectItemWithChecked<T>);
  }
}
