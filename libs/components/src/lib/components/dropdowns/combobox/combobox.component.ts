import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  inject,
  Inject,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Compare, PrizmCallFuncPipe, PrizmDestroyService, PrizmToObservablePipe } from '@prizm-ui/helpers';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import {
  isPolymorphPrimitive,
  PolymorphContent,
  PolymorphOutletDirective,
} from '../../../directives/polymorph';
import { PRIZM_COMBOBOX_OPTIONS, PrizmComboboxOptions } from './combobox.options';
import { PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputControl, PrizmInputTextModule } from '../../input';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import { debounceTime, map, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, defer, merge, Observable, of, Subject, timer } from 'rxjs';
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

  @Input() search: string | null = null;
  @Input() prizmHintDirection: PrizmOverlayOutsidePlacement = 't';
  @Input() prizmHintCanShow!: BooleanInput;

  @Input() set items(data: T[]) {
    this.items$.next(data);
    if (this.search) this.updateFromSearch(this.search);
  }
  get items(): T[] {
    return this.items$.value;
  }

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
  readonly isPolymorphPrimitive = isPolymorphPrimitive;
  readonly prizmIsTextOverflow$ = prizmIsTextOverflow$;

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

  override readonly testId_ = 'ui_select';

  readonly isNotNullish = Compare.isNotNullish;

  @Output()
  public readonly searchChange = new EventEmitter<string | null>();

  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;
  public readonly items$ = new BehaviorSubject<T[]>([]);
  public liveItems$!: Observable<any[]>;
  public readonly defaultIcon = 'triangle-down';
  public readonly nativeElementType = 'combobox';
  public readonly hasClearButton = true;
  readonly isNullish = Compare.isNullish;
  protected userText: string | null = null;
  private searchValue!: string;

  readonly focused$$ = new Subject<boolean>();
  readonly focused$ = this.focused$$.asObservable();
  readonly opened$$ = new BehaviorSubject<boolean>(false);
  readonly opened$: Observable<boolean> = this.opened$$.asObservable();
  private readonly inputSelectOptionService = inject(PrizmComboboxOptionService, {
    self: true,
  });
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
    this.liveItems$ = this.items$.pipe(
      tap(() => {
        this.dropdownHostElement?.reCalculatePositions(1000 / 60);
      }),
      debounceTime(0),
      shareReplay(1)
    );
  }

  public override get empty(): Observable<boolean> {
    return this.value$.pipe(map(value => value == null && !this.search && !this.userText));
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

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    this.updateValue(null as any);
    this.markAsTouched();
    this.changeDetectorRef.markForCheck();
  }

  public select(item: T): void {
    this._select(item);
    this.opened$$.next(false);
  }

  private _select(item: T): void {
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
    if (this.search === value) return;
    this.searchChange.emit((this.search = value));
  }

  private updateFromSearch(searchValue: string) {
    const item = this.items.find(item => this.stringify(item)?.toLowerCase() === searchValue.toLowerCase());
    if (item === this.value) return;
    if (!item) return void this.updateValue(null);
    this._select(item);
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
    const newItem = this.getValueFromItems(this.value!, items);
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
    if (!visible) this.clearSearch();
    this.changeParentFocusedClass(visible);
  }

  protected changeParentFocusedClass(add: boolean) {
    if (this.disabled) return;
    this.opened$$.next(add);
    this.focused$$.next(add);
  }

  private clearSearch() {
    this.searchChange.emit((this.search = null));
  }
}
