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
import {
  debounceTime,
  distinctUntilChanged,
  map,
  observeOn,
  shareReplay,
  skip,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { animationFrameScheduler, BehaviorSubject, concat, Observable, of, Subject, timer } from 'rxjs';
import { PrizmSelectIdentityMatcher, PrizmSelectSearchMatcher } from './select.model';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDropdownHostComponent } from '../dropdown-host';
import { PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmInputNgControl } from '../../input/common/base/input-ng-control.class';

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

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_select';

  @Output()
  public readonly searchChange = new EventEmitter<string | null>();

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
    if (!this.identityMatcher(item, this.value)) {
      this.updateValue(item);
    }
    this.opened$$.next(false);
  }

  public safeOpenModal(): void {
    // set touched on open modal
    this.ngControl.control.markAsTouched();
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
    const itIsNotCurrentValue = wroteInputValue && !this.identityMatcher(wroteInputValue as T, this.value);
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

  public override isEmpty(value: T): boolean {
    return value == null;
  }

  public getCurrentItem(value: T): string {
    const newItem = this.items.find(i => this.identityMatcher(i, this.value));
    return this.stringify(newItem ?? value);
  }
}
