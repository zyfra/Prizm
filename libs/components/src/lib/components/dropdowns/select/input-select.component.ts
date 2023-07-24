import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Compare, PrizmDestroyService } from '@prizm-ui/helpers';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PolymorphContent } from '../../../directives';
import { PRIZM_SELECT_OPTIONS, PrizmSelectOptions, PrizmSelectValueContext } from './select.options';
import { PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputControl } from '../../input';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import { debounceTime, distinctUntilChanged, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, concat, Observable, Subject, timer } from 'rxjs';
import {
  PrizmSelectIdentityMatcher,
  PrizmSelectSearchMatcher,
  PrizmSelectValueTransformver,
} from './select.model';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmInputNgControl } from '../../input/common/base/input-ng-control.class';
import { PrizmScrollbarVisibility } from '../../scrollbar';

@Component({
  selector: 'prizm-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmSelectInputComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmSelectInputComponent },
  ],
  exportAs: 'prizmSelectInput',
})
export class PrizmSelectInputComponent<T> extends PrizmInputNgControl<T> implements OnInit {
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @Input() set items(data: T[]) {
    this.items$.next(data);
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
  icon = this.options.icon;

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
  search: string | null = this.options.search;

  @Input()
  @prizmDefaultProp()
  transformer: PrizmSelectValueTransformver<T> = this.options.transformer;

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
  public readonly printing$ = new BehaviorSubject<string>('');

  /**
   * need only clear function
   * */
  @Input()
  @prizmDefaultProp()
  stringify: (i: T, content?: string) => string = this.options.stringify;

  @Input()
  @prizmDefaultProp()
  identityMatcher: PrizmSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @prizmDefaultProp()
  valueTemplate: PolymorphContent<PrizmSelectValueContext<T>> = this.options.valueContent;

  override readonly testId_ = 'ui_select';

  @Output()
  public readonly searchChange = new EventEmitter<string | null>();

  override defaultLabel = this.options.label;
  public readonly direction: PrizmOverlayOutsidePlacement = PrizmOverlayOutsidePlacement.RIGHT;
  public readonly items$ = new BehaviorSubject([]);
  public readonly defaultIcon = 'chevrons-dropdown';
  public readonly nativeElementType = 'select';
  public readonly hasClearButton = true;
  readonly isNullish = Compare.isNullish;

  filteredItems$!: any;

  public filteredItems: T[] = [];
  private searchValue: string;

  readonly focused$$ = new Subject<boolean>();
  readonly focused$ = this.focused$$.asObservable();
  readonly opened$$ = new BehaviorSubject<boolean>(false);
  readonly opened$: Observable<boolean> = this.opened$$.asObservable();

  constructor(
    @Inject(PRIZM_SELECT_OPTIONS) private readonly options: PrizmSelectOptions<T>,
    @Inject(Injector) injector: Injector
  ) {
    super(injector);
  }

  public override ngOnInit() {
    super.ngOnInit();
    this.filteredItems$ = concat(this.printing$.pipe()).pipe(
      tap(value => this.searchEmit(value as string)),
      distinctUntilChanged(),
      switchMap(value => {
        return this.items$.pipe(
          map(items => {
            if (!this.searchable || !value?.toString().replace(/[ ]+/g, '')) return items;
            const searchValue = (this.searchValue = value.toString().trim());
            return items?.filter(item => this.searchMatcher(searchValue, item)) ?? [];
          }),
          map(items => {
            if (this.nullContent && items?.length && items[0] !== null) {
              items = [null, ...items];
            }
            return items;
          }),
          tap(items => {
            this.filteredItems = items;
            this.dropdownHostElement?.reCalculatePositions(1000 / 60);
          }),
          debounceTime(0),
          shareReplay(1)
        );
      })
    );
  }

  public override get empty(): Observable<boolean> {
    return this.value$.pipe(map(value => value == null));
  }

  get nativeFocusableElement(): PrizmNativeFocusableElement | null {
    return this.focusableElement ? this.focusableElement.nativeElement : null;
  }

  get focused(): boolean {
    return prizmIsNativeFocused(this.nativeFocusableElement);
  }

  public onClear(): void {
    timer(0)
      .pipe(
        tap(() => {
          this.select(null);
          this.changeDetectorRef.markForCheck();
        })
      )
      .subscribe();
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    this.updateValue(null);
    this.markAsTouched();

    this.changeDetectorRef.markForCheck();
  }

  public select(item: T): void {
    this.markAsTouched();
    const selectedValue = item && this.transformer(item);
    if (!this.identityMatcher(selectedValue, this.value)) {
      this.updateValue(selectedValue);
    }
    this.opened$$.next(false);
  }

  public safeOpenModal(): void {
    this.printing$.next('');
    const open = !this.opened$$.value && !this.disabled; // && inputElement && prizmIsNativeFocused(inputElement);
    this.opened$$.next(open);
    this.changeDetectorRef.markForCheck();
  }

  public override updateValue(value: T) {
    super.updateValue(value);

    // set touched on change value
    this.ngControl.control.markAsTouched();
  }

  public isMostRelevant(idx: number, items: T[]): boolean {
    const wroteInputValue = this.printing$.value;
    const valueFromItems = this.value && this.getValueFromItems(this.value);
    const itIsNotCurrentValue =
      valueFromItems && wroteInputValue && !this.searchMatcher(wroteInputValue, valueFromItems);
    const isCanSearch = this.searchable;
    const hasNullValue = items[0] === null;
    const result =
      isCanSearch && itIsNotCurrentValue && ((hasNullValue && idx === 1) || (!hasNullValue && idx === 0));

    return result;
  }

  private searchEmit(value: string): void {
    if (this.search === value) return;
    this.search = value;
    this.searchChange.emit(value);
  }

  public getValueFromItems(value: T) {
    const newItem = this.items.find(i => this.identityMatcher(this.transformer(i), value));
    return newItem;
  }

  public getCurrentItem(value: T): string {
    if (Compare.isNullish(value)) return '';
    const newItem = this.getValueFromItems(this.value);
    return this.stringify(newItem ?? value);
  }
}
