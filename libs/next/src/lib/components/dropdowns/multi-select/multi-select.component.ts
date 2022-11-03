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
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { FormControl, NgControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PZM_MULTI_SELECT_OPTIONS, PrizmMultiSelectOptions } from './multi-select.options';
import { PrizmContextWithImplicit, PrizmFocusableElementAccessor, PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputSize } from '../../input';
import { AbstractPrizmControl } from '../../../abstract/control';
import { pzmIsNativeFocused, pzmIsTextOverflow$ } from '../../../util';
import { debounceTime, delay, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { PZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { pzmDefaultProp } from '../../../decorators';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemWithChecked,
  PrizmMultiSelectSearchMatcher,
} from './multi-select.model';
import { PrizmOverlayOutsidePlacement } from '../../../modules';

// TODO create abstract select component and move to abstract common logic
@Component({
  selector: 'pzm-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
    {
      provide: PZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PrizmMultiSelectComponent),
    },
  ],
  exportAs: 'pzmDropdownSelect'
})
export class PrizmMultiSelectComponent<T>
extends AbstractPrizmControl<T[]>
implements PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', {read: ElementRef})
  public readonly focusableElement?: ElementRef<HTMLElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @Input() set items(data:T[]) {
    this.items$.next(data ?? []);
  }
  get items(): T[] {
    return this.items$.value;
  }

  @Input()
  @pzmDefaultProp()
  selectAllItem: T | null = this.options.chooseAllItem;

  @Input()
  @pzmDefaultProp()
  searchable = this.options.searchable;

  @Input()
  @pzmDefaultProp()
  forceClear = this.options.forceClear;

  @Input()
  @pzmDefaultProp()
  isChipsDeletable = this.options.isChipsDeletable;

  @Input()
  @pzmDefaultProp()
  label = this.options.label;

  @Input()
  @pzmDefaultProp()
  minDropdownHeight = this.options.minDropdownHeight;

  @Input()
  @pzmDefaultProp()
  dropdownWidth = this.options.dropdownWidth;

  @Input()
  @pzmDefaultProp()
  maxDropdownHeight = this.options.maxDropdownHeight;

  @Input()
  @pzmDefaultProp()
  placeholder = this.options.placeholder;

  @Input()
  @pzmDefaultProp()
  size: PrizmInputSize =  this.options.size;

  @Input()
  @pzmDefaultProp()
  searchMatcher: PrizmMultiSelectSearchMatcher<T> = this.options.searchMatcher;

  @Input()
  @pzmDefaultProp()
  emptyContent: PolymorphContent = this.options.emptyContent;

  /** need only clear function */
  @Input()
  @pzmDefaultProp()
  stringify: PrizmMultiSelectItemStringifyFunc<T> = this.options.stringify;

  @Input()
  @pzmDefaultProp()
  identityMatcher: PrizmMultiSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @pzmDefaultProp()
  valueTemplate: PolymorphContent<PrizmContextWithImplicit<PrizmMultiSelectItemWithChecked<T>>> = this.options.valueContent;

  @Input()
  @pzmDefaultProp()
  outer: boolean = this.options.outer;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_multi_select';


  readonly pzmIsTextOverflow$ = pzmIsTextOverflow$;
  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;

  public open = false;
  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new FormControl();
  public readonly searchInputControl = new FormControl();
  public readonly chipsControl = new FormControl([] as string[]);


  readonly filteredItems$: Observable<PrizmMultiSelectItemWithChecked<T>[]> = this.controlReady$.pipe(
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
            const selectItems = items.map(
            (item: T) => {
              return {
                checked: !!selectedItems?.find(
                  (selected) => this.identityMatcher(selected, item)
                ),
                obj: item
              } as PrizmMultiSelectItemWithChecked<T>
            }
          );
          const selectedCount = this.value?.length;
          const allItem = this.items$.value?.length;
          const currentlySearching = this.searchInputControl.value;
          const addSelectAllItem = this.selectAllItem && !currentlySearching;

          return [
            ...(addSelectAllItem ? [this.selectAllItem] : []).map(
              item => ({
                checked: allItem === selectedCount,
                indeterminate: selectedCount && allItem !== this.value.length,
                obj: item
              })
            ) as PrizmMultiSelectItemWithChecked<T>[],
            ...selectItems
          ];
        }),
        tap((items) => {
          this.filteredItems = items;
          this.dropdownHostElement?.reCalculatePositions(1000/60);
        }),
        debounceTime(0),
      )
    }),
  );

  readonly selectedItems$: Observable<T[]> =
    this.valChange.pipe(delay(0),startWith(this.value)).pipe(
    switchMap(() => {
      const selectedItems = this.value;
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

  readonly chipsSet = new Map<string, T>();
  readonly selectedItemsChips$: Observable<string[]> = this.selectedItems$.pipe(
    map((selectedItems: T[]) => {
      this.chipsSet.clear();
      const result = selectedItems?.map(
        i => {
          const str = this.stringify({
            checked: true,
            obj: i
          });

          this.chipsSet.set(str, i);
          return str;
        }
      ) ?? [];

      return result;
    }),
    shareReplay(1),
  );

  public filteredItems: PrizmMultiSelectItemWithChecked<T>[] = [];
  private searchValue: string;


  constructor(
    @Inject(PZM_MULTI_SELECT_OPTIONS) private readonly options: PrizmMultiSelectOptions<T>,
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

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return pzmIsNativeFocused(this.nativeFocusableElement);
  }

  public onClear(): void {
    this.control?.setValue(null);
  }

  protected getFallbackValue(): T[] {
    return [];
  }

  private isSelectAllItem(
    item: PrizmMultiSelectItemWithChecked<T>
  ): boolean {
    return Boolean(
      this.selectAllItem &&
      this.identityMatcher(
        this.selectAllItem,
        item.obj
      )
    )
  }

  public select(item: PrizmMultiSelectItemWithChecked<T>): void {
    const newItemState = !item.checked;
    let values: T[];
    if (
      this.isSelectAllItem(item)
    ) {
      values = newItemState
        ? [...this.items]
        : [];
    } else {
      values = newItemState
        ? [
          ...(this.value ?? []),
          item.obj
        ]
        : this.value.filter(i => !this.identityMatcher(i, item.obj));
    }

    this.updateValue(values);
    this.dropdownHostElement?.reCalculatePositions();
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement.nativeElement;
    this.open =  (
      !this.open &&
      this.interactive &&
      inputElement &&
      (this.outer || pzmIsNativeFocused(inputElement))
    )
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
    } as PrizmMultiSelectItemWithChecked<T>)
  }
}
