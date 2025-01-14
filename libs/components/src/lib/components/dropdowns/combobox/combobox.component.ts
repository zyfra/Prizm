import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ContentChild,
  effect,
  ElementRef,
  forwardRef,
  inject,
  Inject,
  Injector,
  Input,
  model,
  OnInit,
  signal,
  untracked,
  ViewChild,
} from '@angular/core';
import { Compare, PrizmCallFuncPipe, PrizmDestroyService, PrizmToObservablePipe } from '@prizm-ui/helpers';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { PolymorphContent, PolymorphOutletDirective } from '../../../directives/polymorph';
import {
  injectOptionalMissingValueHandler,
  PRIZM_COMBOBOX_OPTIONS,
  PRIZM_COMBOBOX_SHOW_DROPDOWN_ON_EMPTY,
  PrizmComboboxOptions,
} from './combobox.options';
import { PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputControl, PrizmInputTextModule } from '../../input';
import { prizmIsNativeFocused } from '../../../util';
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { defer, merge, Observable, of, Subject, timer } from 'rxjs';
import {
  PrizmComboboxIdentityMatcher,
  PrizmComboboxStringify,
  PrizmComboboxValueContext,
  PrizmComboboxValueTransformer,
} from './combobox.model';
import {
  PrizmDropdownHostClasses,
  PrizmDropdownHostComponent,
  PrizmDropdownHostStyles,
  PrizmDropdownTriggerClickDirective,
} from '../dropdown-host';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmInputNgControl } from '../../input/common/base/input-ng-control.class';
import { PrizmScrollbarVisibility } from '../../scrollbar';
import { PrizmComboboxOptionService } from './combobox-option.service';
import { PrizmChipsModule } from '../../chips';
import { CommonModule } from '@angular/common';
import {
  PrizmAutoFocusDirective,
  PrizmDropdownControllerDirective,
  PrizmFocusableDirective,
  PrizmLifecycleDirective,
} from '../../../directives';
import { PrizmDataListComponent } from '../../data-list';
import { prizmWatch } from '../../../observables';
import { PrizmComboboxItemComponent } from './combobox-item.component';
import { PrizmComboboxDataListDirective } from './combobox-data-list.directive';
import { BooleanInput } from '@angular/cdk/coercion';
import { PRIZM_SEARCH_TEXT } from '../../../tokens';
import { prizmI18nInitWithKey } from '../../../services';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsMagnifyingGlass, prizmIconsTriangleDown } from '@prizm-ui/icons/full/source';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'prizm-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PolymorphOutletDirective,
    PrizmInputTextModule,
    PrizmChipsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrizmAutoFocusDirective,
    PrizmCallFuncPipe,
    PrizmDropdownControllerDirective,
    PrizmLifecycleDirective,
    PrizmDataListComponent,
    PrizmComboboxItemComponent,
    PrizmDropdownHostComponent,
    PrizmToObservablePipe,
    PrizmIconsFullComponent,
    PrizmFocusableDirective,
    PrizmDropdownTriggerClickDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmComboboxComponent),
      multi: true,
    },
    PrizmDestroyService,
    PrizmComboboxOptionService,
    { provide: PrizmInputControl, useExisting: PrizmComboboxComponent },
    ...prizmI18nInitWithKey(PRIZM_SEARCH_TEXT, 'search'),
  ],
  exportAs: 'prizmCombobox',
})
export class PrizmComboboxComponent<T>
  extends PrizmInputNgControl<T | null>
  implements OnInit, ControlValueAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public override readonly focusableElement?: ElementRef<HTMLInputElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @ContentChild(PrizmComboboxDataListDirective) customItemDataList?: PrizmComboboxDataListDirective;

  search = model<string | null>(null);
  @Input() prizmHintDirection: PrizmOverlayOutsidePlacement = 't';
  @Input() prizmHintCanShow!: BooleanInput;

  items = model.required<T[]>();

  updateSearchAfterItems = effect(() => {
    this.items();
    const search = untracked(this.search);
    if (search) this.updateFromSearch(search);
  });

  @Input()
  dropdownScroll: PrizmScrollbarVisibility = 'auto';

  @Input() dropdownStyles: PrizmDropdownHostStyles;
  @Input() dropdownClasses: PrizmDropdownHostClasses;

  @Input()
  icon = this.options.icon;

  @Input()
  minDropdownHeight = this.options.minDropdownHeight;

  @Input()
  maxDropdownHeight = this.options.maxDropdownHeight;

  @Input()
  placeholder = this.options.placeholder;

  @Input()
  dropdownAutoReposition = this.options.autoReposition;

  @Input()
  dropdownWidth = this.options.dropdownWidth;

  @Input()
  transformer: PrizmComboboxValueTransformer<T> = this.options.transformer;

  @Input()
  emptyContent: PolymorphContent = this.options.emptyContent;

  override readonly clickable = true;

  /**
   * need only clear function
   * */
  @Input()
  stringify: PrizmComboboxStringify<T> = this.options.stringify;

  @Input()
  identityMatcher: PrizmComboboxIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  valueTemplate: PolymorphContent<PrizmComboboxValueContext<T>> = this.options.valueContent;

  @Input()
  listItemTemplate: PolymorphContent<PrizmComboboxValueContext<T>> = this.options.listItemTemplate;

  override readonly testId_ = 'ui_combobox';

  readonly isNotNullish = Compare.isNotNullish;

  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;
  public liveItems$!: Observable<any[]>;
  public readonly defaultIcon = 'triangle-down';
  public readonly nativeElementType = 'combobox';
  public readonly hasClearButton = true;
  readonly isNullish = Compare.isNullish;
  protected userText: string | null = null;
  private searchValue!: string;

  readonly focused$$ = new Subject<boolean>();
  readonly focused$ = this.focused$$.asObservable();
  readonly opened = signal(false);
  readonly dropdownDisabled = computed(() => {
    return !this.showDropdownOnEmpty && !this.items().length;
  });

  private readonly inputSelectOptionService = inject(PrizmComboboxOptionService, {
    self: true,
  });
  private readonly showDropdownOnEmpty =
    inject(PRIZM_COMBOBOX_SHOW_DROPDOWN_ON_EMPTY, {
      optional: true,
      host: true,
    }) ?? true;

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);
  constructor(
    @Inject(PRIZM_COMBOBOX_OPTIONS) private readonly options: PrizmComboboxOptions<T>,
    @Inject(Injector) injector: Injector,
    @Inject(PRIZM_SEARCH_TEXT) readonly searchLabelTranslation$: Observable<string>
  ) {
    super(injector);
    this.iconsFullRegistry.registerIcons(prizmIconsTriangleDown, prizmIconsMagnifyingGlass);
  }

  private initSelectListener() {
    this.inputSelectOptionService.selected$
      .pipe(
        tap(item => {
          this.select(item);
        }),
        prizmWatch(this.changeDetectorRef),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.initSelectListener();
    this.liveItems$ = toObservable(this.items, {
      injector: this.injector,
    }).pipe(
      tap(() => {
        this.dropdownHostElement?.reCalculatePositions(1000 / 60);
      }),
      debounceTime(0),
      shareReplay(1)
    );
  }

  public override get empty(): Observable<boolean> {
    return this.value$.pipe(map(value => value == null && !this.search() && !this.userText));
  }

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  public onClear(): void {
    this.userText = null;
    timer(0)
      .pipe(
        tap(() => {
          this.updateValue(null);
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe();
  }

  public override clear(): void {
    this.userText = null;
    this.updateValue(null);
    this.markAsTouched();
    this.changeDetectorRef.markForCheck();
  }

  public select(item: T): void {
    this.onlySelect(item);
    this.opened.set(false);
  }

  public onlySelect(item: T): void {
    this.userText = null;
    const selectedValue = item && this.transformer(item);

    if (!this.identityMatcher(selectedValue, this.value!)) {
      this.updateValue(selectedValue);
    }
  }

  public override updateValue(value: T | null) {
    super.updateValue(value);
    // set touched on change value
    this.ngControl.control?.markAsTouched();
  }

  protected searchEmit(value: string): void {
    this.userText = value;
    if (!value) this.clear();
    if (this.search() === value) return;
    this.search.set(value);
  }

  private updateFromSearch(searchValue: string) {
    const item = this.items().find(item => this.stringify(item)?.toLowerCase() === searchValue.toLowerCase());
    if (item && item === this.value) return;

    if (!item) {
      const missingValueHandler = injectOptionalMissingValueHandler<T>(this.injector);
      if (!missingValueHandler) return void this.updateValue(null);
      return missingValueHandler.handler(searchValue, this);
    }

    this.onlySelect(item);
  }

  public getValueFromItems(value: T, items: T[]) {
    const newItem = items.find(i => this.identityMatcher(this.transformer(i), value));
    return newItem;
  }

  public getCurrentValue(value: T, items: T[]): string | Observable<string> {
    const newItem = this.getFullObjectOfCurrent(this.value!, items);

    if (Compare.isNullish(newItem)) return '';
    return this.stringify(newItem ?? value);
  }

  public getFullObjectOfCurrent(value: T, items: T[]): T | null {
    if (Compare.isNullish(value)) return null;
    const newItem = this.getValueFromItems(this.value!, items) ?? value ?? null;
    return newItem!;
  }

  public stringifyForInner(
    i: T,
    outer?: boolean,
    label?: string | null,
    placeholder?: string
  ): Observable<string> {
    if (!this.layoutComponent) {
      return defer(() => {
        const result = this.stringify(i);
        return of(result);
      });
    }

    return merge(this.value$, this.layoutComponent.changes$).pipe(
      startWith(),
      switchMap(() => {
        const flow$ = this.stringify(i);
        return of(flow$);
      })
    );
  }

  protected onChangeModalVisible(visible: boolean): void {
    if (!visible && !this.dropdownDisabled()) this.clearSearch();
    this.changeParentFocusedClass(visible);
  }

  protected override refreshLocalValue(value: T | null): void {
    this.userText = null;
    this.search.set(null);
    this.printing.set(null);
    super.refreshLocalValue(value);
  }

  protected changeParentFocusedClass(add: boolean) {
    if (this.disabled) return;

    if (!this.dropdownDisabled()) {
      this.opened.set(add);
    }

    this.focused$$.next(add);
  }
  readonly printing = signal<KeyboardEvent | null>(null);
  private effectOnPrinting = effect(
    () => {
      if (!this.printing()) return;
      this.opened.set(!this.dropdownDisabled());
    },
    {
      allowSignalWrites: true,
    }
  );

  private clearSearch() {
    this.search.set(null);
  }
}
