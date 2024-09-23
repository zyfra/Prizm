import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  inject,
  Inject,
  Injector,
  Input,
  ViewChild,
} from '@angular/core';
import { PrizmCallFuncPipe, PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import {
  PolymorphContent,
  PolymorphOutletDirective,
  PrizmAutoFocusModule,
  PrizmDropdownControllerModule,
  PrizmFocusableModule,
  PrizmHintDirective,
  PrizmLifecycleDirective,
} from '../../../directives';
import { PRIZM_MULTI_SELECT_OPTIONS, PrizmMultiSelectOptions } from './multi-select.options';
import { PrizmContextWithImplicit, PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputControl, PrizmInputNgControl, PrizmInputTextModule } from '../../input';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, Subject, timer } from 'rxjs';
import { prizmDefaultProp } from '@prizm-ui/core';
import {
  PrizmDropdownHostClasses,
  PrizmDropdownHostComponent,
  PrizmDropdownHostStyles,
} from '../dropdown-host';
import {
  PrizmMultiSelectIdentityMatcher,
  PrizmMultiSelectItemStringifyFunc,
  PrizmMultiSelectItemWithChecked,
  PrizmMultiSelectSearchMatcher,
  PrizmMultiSelectValueTransformer,
} from './multi-select.model';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay/models';
import { PrizmScrollbarComponent, PrizmScrollbarVisibility } from '../../scrollbar';
import { PrizmChipsModule } from '../../chips';
import { CommonModule } from '@angular/common';
import { PrizmDataListComponent } from '../../data-list';
import { PrizmCheckboxComponent } from '../../checkbox';
import { PrizmOverlayComponent } from '../../../modules/overlay/overlay.component';
import { prizmI18nInitWithKey } from '../../../services';
import { PRIZM_SEARCH_TEXT } from '../../../tokens/i18n';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { prizmIconsMagnifyingGlass, prizmIconsTriangleDown } from '@prizm-ui/icons/full/source';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';

// TODO create abstract select component and move to abstract common logic
@Component({
  selector: 'prizm-input-multi-select',
  templateUrl: './input-multi-select.component.html',
  styleUrls: ['./input-multi-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PrizmOverlayComponent,
    PolymorphOutletDirective,
    PrizmInputTextModule,
    PrizmChipsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrizmLetDirective,
    PrizmHintDirective,
    PrizmCallFuncPipe,
    PrizmAutoFocusModule,
    PrizmScrollbarComponent,
    PrizmDropdownControllerModule,
    PrizmDataListComponent,
    PrizmCheckboxComponent,
    PrizmLifecycleDirective,
    PrizmDropdownHostComponent,
    PrizmIconsFullComponent,
    PrizmFocusableModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputMultiSelectComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputMultiSelectComponent },
    ...prizmI18nInitWithKey(PRIZM_SEARCH_TEXT, 'search'),
  ],
})
export class PrizmInputMultiSelectComponent<T> extends PrizmInputNgControl<T[]> implements AfterViewInit {
  readonly nativeElementType = 'multiselect';
  readonly hasClearButton = true;
  override defaultLabel = this.options.label;
  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @Input()
  @prizmDefaultProp()
  transformer: PrizmMultiSelectValueTransformer<T> = this.options.transformer;

  @Input() set items(data: T[]) {
    this.items$.next((data as any) ?? []);
  }
  get items(): T[] {
    return this.items$.value;
  }

  @Input()
  @prizmDefaultProp()
  dropdownScroll: PrizmScrollbarVisibility = 'auto';
  @Input() dropdownStyles: PrizmDropdownHostStyles;
  @Input() dropdownClasses: PrizmDropdownHostClasses;
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
  dropdownAutoReposition = this.options.autoReposition;

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

  override hidden = true;

  readonly button_layout_width = 64;
  override readonly testId_ = 'ui-muilti-select';

  @HostBinding('style.display')
  get display(): string {
    return this.value?.length ? 'none' : '';
  }

  @HostBinding('class.inner')
  get inner(): boolean {
    return !this.layoutComponent?.outer ?? false;
  }

  @HostBinding('class.empty')
  get emptyChips(): boolean {
    return !this.chipsSet.size;
  }

  @HostBinding('attr.data-size')
  get size(): string {
    return this.layoutComponent?.size ?? 'l';
  }

  public readonly defaultIcon = 'triangle-down';
  readonly prizmIsTextOverflow$ = prizmIsTextOverflow$;
  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;

  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new UntypedFormControl();
  public readonly searchInputControl = new UntypedFormControl();
  public readonly chipsControl = new UntypedFormControl([] as string[]);

  public filteredItems$!: Observable<PrizmMultiSelectItemWithChecked<T>[]>;

  selectedItems$!: Observable<T[]>;
  readonly chipsSet = new Map<string, T>();
  selectedItemsChips$!: Observable<string[]>;

  override fallbackValue = [] as T[];
  public filteredItems: PrizmMultiSelectItemWithChecked<T>[] = [];
  private searchValue!: string;

  readonly focused$$ = new Subject<boolean>();
  readonly focused$ = this.focused$$.asObservable();
  readonly opened$$ = new BehaviorSubject<boolean>(false);
  readonly opened$: Observable<boolean> = this.opened$$.asObservable();

  override get empty(): boolean {
    return !this.value?.length;
  }

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    @Inject(PRIZM_SEARCH_TEXT) readonly searchLabelTranslation$: Observable<string>,
    @Inject(PRIZM_MULTI_SELECT_OPTIONS) private readonly options: PrizmMultiSelectOptions<T>,
    @Inject(Injector) injector: Injector
  ) {
    super(injector);

    this.iconsFullRegistry.registerIcons(prizmIconsTriangleDown, prizmIconsMagnifyingGlass);
  }

  public ngAfterViewInit(): void {
    // NEED for initial sync with parent params
    timer(0)
      .pipe(tap(() => this.changeDetectorRef.markForCheck()))
      .subscribe();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initParentClickListener();
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

  protected initParentClickListener(): void {
    this.layoutComponent?.innerClick$
      .pipe(
        tap(() => this.opened$$.next(this.disabled ? false : !this.opened$$.value)),
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
            return selectedItems.filter(selectedItem => {
              return items.find(item => this.identityMatcher(selectedItem, this.transformer(item)));
            });
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
      switchMap(([searchValue]: [string, T[]]) => {
        const selectedItems = this.value;
        return this.items$.pipe(
          map(items => {
            if (!this.searchable || !searchValue?.toString().replace(/[ ]+/g, '')) return items;
            searchValue = this.searchValue = searchValue.toString().trim();
            return items?.filter(item => this.searchMatcher(searchValue, item)) ?? [];
          }),
          map((items: T[]) => {
            const selectItems = items.map((item: T) => {
              return {
                checked: !!selectedItems?.find(selected =>
                  this.identityMatcher(selected, this.transformer(item))
                ),
                obj: item,
              } as PrizmMultiSelectItemWithChecked<T>;
            });
            const selectedCount = this.value?.length;
            const allItem = this.items$.value?.length;
            const currentlySearching = this.searchInputControl.value;
            const addSelectAllItem = allItem && this.selectAllItem && !currentlySearching;

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
          debounceTime(1000 / 60)
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
    this.updateValue(null as any);
    this.markAsTouched();
  }

  private isSelectAllItem(item: PrizmMultiSelectItemWithChecked<T>): boolean {
    return Boolean(this.selectAllItem && this.identityMatcher(this.selectAllItem, item.obj));
  }

  public select(item: PrizmMultiSelectItemWithChecked<T>): void {
    const newItemState = !item.checked;
    let values: T[];
    if (this.isSelectAllItem(item)) {
      values = newItemState ? this.items.map(item => this.transformer(item)) : [];
    } else {
      const selectedValue = this.transformer(item.obj);
      values = newItemState
        ? [...(this.value ?? []), selectedValue]
        : this.value.filter(i => !this.identityMatcher(i, selectedValue));
    }

    this.updateValue(values);
    this.dropdownHostElement?.reCalculatePositions();
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement?.nativeElement;
    const open = !this.opened$$.value && !this.disabled && !!inputElement;
    this.opened$$.next(open);
  }

  public removeChip(str: string): void {
    const item = this.chipsSet.get(str);
    this.select({
      checked: true,
      obj: item,
    } as PrizmMultiSelectItemWithChecked<T>);
  }

  public trackBy(index: number): number {
    return index;
  }
}
