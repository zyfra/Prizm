import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { NG_VALUE_ACCESSOR, UntypedFormControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PRIZM_MULTI_SELECT_OPTIONS, PrizmMultiSelectOptions } from './multi-select.options';
import { PrizmContextWithImplicit, PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputControl, PrizmInputNgControl, PrizmInputSize, PrizmInputTextComponent } from '../../input';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, concat, Observable, of, Subject } from 'rxjs';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemWithChecked,
  PrizmMultiSelectSearchMatcher,
} from './multi-select.model';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';

// TODO create abstract select component and move to abstract common logic
@Component({
  selector: 'prizm-input-multi-select',
  templateUrl: './input-multi-select.component.html',
  styleUrls: ['./input-multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   PrizmDestroyService,
  //   {
  //     provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
  //     useExisting: forwardRef(() => PrizmMultiSelectInputComponent),
  //   },
  // ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputMultiSelectComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputMultiSelectComponent },
  ],
})
export class PrizmInputMultiSelectComponent<T> extends PrizmInputNgControl<T[]> {
  readonly nativeElementType = 'multiselect';
  readonly hasClearButton = true;
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @Input() set items(data: T[]) {
    this.items$.next(data ?? []);
  }
  get items(): T[] {
    return this.items$.value;
  }

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
  isChipsDeletable = this.options.isChipsDeletable;

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

  @HostBinding('attr.data-testid')
  readonly testId = 'ui-muilti-select';

  public readonly defaultIcon = 'chevrons-dropdown';
  readonly prizmIsTextOverflow$ = prizmIsTextOverflow$;
  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;

  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new UntypedFormControl();
  public readonly searchInputControl = new UntypedFormControl();
  public readonly chipsControl = new UntypedFormControl([] as string[]);

  public filteredItems$: Observable<PrizmMultiSelectItemWithChecked<T>[]>;

  selectedItems$: Observable<T[]>;
  readonly chipsSet = new Map<string, T>();
  selectedItemsChips$: Observable<string[]>;

  public filteredItems: PrizmMultiSelectItemWithChecked<T>[] = [];
  private searchValue: string;

  readonly focused$$ = new Subject<boolean>();
  readonly focused$ = this.focused$$.asObservable();
  readonly opened$$ = new BehaviorSubject<boolean>(false);
  readonly opened$: Observable<boolean> = this.opened$$.asObservable();

  constructor(
    @Inject(PRIZM_MULTI_SELECT_OPTIONS) private readonly options: PrizmMultiSelectOptions<T>,
    @Inject(Injector) injector: Injector
  ) {
    super(injector);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initFilteredItemsObservables();
    this.initSelectedItemsObservables();
    this.selectedItems$
      .pipe(
        tap(items => {
          this.chipsControl.setValue(items as any, { emitEvent: true });
        }),
        tap(() => this.changeDetectorRef.markForCheck()),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  private initSelectedItemsObservables(): void {
    this.selectedItems$ = this.value$.pipe(debounceTime(0), startWith(this.value)).pipe(
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

    this.selectedItemsChips$ = this.selectedItems$.pipe(
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
  }

  private initFilteredItemsObservables() {
    this.filteredItems$ = combineLatest([
      this.searchInputControl.valueChanges.pipe(startWith('')),
      this.value$.pipe(debounceTime(0)),
    ]).pipe(
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
  }

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    this.updateValue(null);
  }

  protected override getFallbackValue(): T[] {
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
    console.log('#mz safeOpenModal');
    const inputElement = this.focusableElement.nativeElement;
    const open = !this.opened$$.value && !this.disabled && !!inputElement;
    this.opened$$.next(open);
    this.changeDetectorRef.markForCheck();
  }

  // // TODO remove after finish activezone to dropdown component
  // public safeStopPropagation(value: string, $event: Event): void {
  //   this.open = false;
  //   this.changeDetectorRef.markForCheck();
  //   if (!value) $event.stopImmediatePropagation();
  // }

  public removeChip(str: string): void {
    const item = this.chipsSet.get(str);
    this.select({
      checked: true,
      obj: item,
    } as PrizmMultiSelectItemWithChecked<T>);
  }
}
