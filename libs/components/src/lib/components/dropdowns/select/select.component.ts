import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  Optional,
  Output,
  Self,
  ViewChild,
} from '@angular/core';
import { Compare, PrizmDestroyService, PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PRIZM_SELECT_OPTIONS, PrizmSelectOptions, PrizmSelectValueContext } from './select.options';
import { PrizmFocusableElementAccessor, PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputSize, PrizmInputTextComponent } from '../../input';
import { AbstractPrizmControl } from '../../../abstract/control';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  startWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { BehaviorSubject, concat, timer } from 'rxjs';
import { PrizmSelectIdentityMatcher, PrizmSelectSearchMatcher } from './select.model';
import { PRIZM_FOCUSABLE_ITEM_ACCESSOR } from '../../../tokens';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmScrollbarVisibility } from '../../scrollbar';

/**
 * @deprecated
 * use only PrizmSelectInputComponent
 * will be removed after ng 15 update
 * for auto update use our migrator https://prizm.site/forZIIoT/update-from-beta
 * */
@Component({
  selector: 'prizm-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_FOCUSABLE_ITEM_ACCESSOR,
      useExisting: forwardRef(() => PrizmSelectComponent),
    },
  ],
  exportAs: 'prizmDropdownSelect',
})
export class PrizmSelectComponent<T>
  extends AbstractPrizmControl<T>
  implements PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @Input() set items(data: T[]) {
    this.items$.next(data as unknown);
  }
  get items(): T[] {
    return this.items$.value;
  }

  @Input()
  @prizmDefaultProp()
  dropdownScroll: PrizmScrollbarVisibility = 'auto';

  @Input()
  @prizmDefaultProp()
  searchable = this.options.searchable;

  @Input()
  @prizmDefaultProp()
  forceClear = this.options.forceClear;

  @Input()
  @prizmDefaultProp()
  icon = this.options.icon;

  @Input()
  @prizmDefaultProp()
  label = this.options.label;

  @Input()
  @prizmDefaultProp()
  minDropdownHeight = this.options.minDropdownHeight;

  @Input()
  @prizmDefaultProp()
  maxDropdownHeight = this.options.maxDropdownHeight;

  @Input()
  @prizmDefaultProp()
  placeholder = this.options.placeholder;

  @Input()
  @prizmDefaultProp()
  dropdownWidth = this.options.dropdownWidth;

  @Input()
  @prizmDefaultProp()
  size: PrizmInputSize = this.options.size;

  @Input()
  @prizmDefaultProp()
  search: string | null = this.options.search;

  @Input()
  @prizmDefaultProp()
  searchMatcher: PrizmSelectSearchMatcher<T> = this.options.searchMatcher;

  @Input()
  @prizmDefaultProp()
  emptyContent: PolymorphContent = this.options.emptyContent;

  @Input()
  @prizmDefaultProp()
  nullContent: PolymorphContent = this.options.nullContent;

  readonly prizmIsTextOverflow$ = prizmIsTextOverflow$;

  private readonly stop$ = new BehaviorSubject(false);

  /**
   * need only clear function
   * */
  @Input()
  @prizmDefaultProp()
  stringify: (i: T, content?: string) => unknown = this.options.stringify as unknown;

  @Input()
  @prizmDefaultProp()
  identityMatcher: PrizmSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @prizmDefaultProp()
  valueTemplate: PolymorphContent<PrizmSelectValueContext<T>> = this.options.valueContent;

  @Input()
  @prizmDefaultProp()
  outer: boolean = this.options.outer;

  override readonly testId_ = 'ui_select';

  @Output()
  public readonly searchChange = new EventEmitter<string | null>();

  public inputTextElement!: PrizmInputTextComponent | null;
  public open = false;
  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;
  public readonly items$ = new BehaviorSubject([]);
  public readonly requiredInputControl = new UntypedFormControl();
  public readonly defaultIcon = 'chevrons-dropdown';

  readonly filteredItems$ = this.requiredInputControl.valueChanges.pipe(
    tap(value => this.searchEmit(value)),
    startWith(''),
    switchMap(value => {
      return this.items$.pipe(
        map(items => {
          if (!this.searchable || !value?.toString().replace(/[ ]+/g, '')) return items;
          const searchValue = (this.searchValue = value.toString().trim());
          return items?.filter(item => this.searchMatcher(searchValue, item)) ?? [];
        }),
        map(items => {
          if (this.nullContent && items?.length && items[0] !== null) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            items = [null, ...items];
          }
          return items;
        }),
        tap(items => {
          this.filteredItems = items;
          this.dropdownHostElement?.reCalculatePositions(1000 / 60);
        }),
        debounceTime(0)
        // tap(() => this.safeOpenModal())
      );
    })
  );

  public filteredItems: T[] = [];
  private searchValue!: string;
  readonly isNullish = Compare.isNullish;

  constructor(
    @Inject(PRIZM_SELECT_OPTIONS) private readonly options: PrizmSelectOptions<T>,
    @Optional()
    @Self()
    @Inject(NgControl)
    control: NgControl | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef
  ) {
    super(control, changeDetectorRef);
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit(): void {
    this.initControlStatusChangerIfExist();
    this.initControlValueChangerIfExist();
    this.initControlValidatorsIfExist();
  }

  private initControlValidatorsIfExist(): void {
    if (this.control)
      PrizmFormControlHelpers.syncAllValidators(
        this.control as UntypedFormControl,
        false,
        this.requiredInputControl
      )
        .pipe(takeUntil(this.destroy$))
        .subscribe();
  }

  private initControlStatusChangerIfExist(): void {
    if (this.control)
      PrizmFormControlHelpers.syncValidators(
        this.control as UntypedFormControl,
        false,
        this.requiredInputControl
      )
        .pipe(
          // debounceTime(0),
          // tap(() => this.changeDetectorRef.detectChanges()),
          takeUntil(this.destroy$)
        )
        .subscribe();
  }

  private initControlValueChangerIfExist(): void {
    let counter = 0;
    concat(timer(0).pipe(map(() => this.control?.value)), this.internalValue$.pipe(debounceTime(0)))
      .pipe(
        distinctUntilChanged(),
        tap(value => {
          if (value) {
            value = this.items$.value?.find(i => value && i && this.identityMatcher(value, i));
          }
          this.select(value);
          this.updateValue(value);
          if (counter === 0) this.control?.markAsPristine();
          counter++;
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  public onClear(): void {
    this.select(null as unknown);
  }

  protected getFallbackValue(): T {
    return null as unknown;
  }

  public select(item: T): void {
    if (!this.identityMatcher(item, this.value)) {
      this.updateValue(item);
    }
    this.requiredInputControl.setValue(item !== undefined && this.stringify(item));
    // TODO remove after add update inputs
    if (this.inputTextElement) this.inputTextElement.markAsTouched();
    this.open = false;
  }

  public safeOpenModal(): void {
    const inputElement = this.focusableElement?.nativeElement;
    // if (this.stop$.value) return
    const open = !this.open && this.interactive && inputElement && prizmIsNativeFocused(inputElement);
    this.open = !!open;
    this.changeDetectorRef.markForCheck();
  }

  // TODO remove after finish activezone to dropdown component
  public safeStopPropagation(value: string, $event: Event): void {
    this.open = false;
    this.changeDetectorRef.markForCheck();
    if (!value) $event.stopImmediatePropagation();
  }

  public isMostRelevant(idx: number, items: T[], wroteInputValue: string): boolean {
    const itIsNotCurrentValue = wroteInputValue && !this.identityMatcher(wroteInputValue as T, this.value);
    const isCanSearch = this.searchable;
    const hasNullValue = items[0] === null;
    const result =
      isCanSearch && itIsNotCurrentValue && ((hasNullValue && idx === 1) || (!hasNullValue && idx === 0));

    return !!result;
  }

  private searchEmit(value: string): void {
    if (this.search === value) return;
    this.search = value;
    this.searchChange.emit(value);
  }
}
