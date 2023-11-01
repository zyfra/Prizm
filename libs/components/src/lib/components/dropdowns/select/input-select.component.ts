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
import {
  Compare,
  PrizmCallFuncModule,
  PrizmDestroyService,
  PrizmLetModule,
  PrizmToObservableModule,
  PrizmToObservablePipe,
} from '@prizm-ui/helpers';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { isPolymorphPrimitive, PolymorphContent, PolymorphModule } from '../../../directives/polymorph';
import {
  PRIZM_SELECT_OPTIONS,
  PrizmSelectOptions,
  PrizmSelectStringify,
  PrizmSelectValueContext,
} from './select.options';
import { PrizmNativeFocusableElement } from '../../../types';
import { PrizmInputControl, PrizmInputTextModule } from '../../input';
import { prizmIsNativeFocused, prizmIsTextOverflow$ } from '../../../util';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { BehaviorSubject, concat, fromEvent, Observable, Subject, timer } from 'rxjs';
import {
  PrizmSelectIdentityMatcher,
  PrizmSelectSearchMatcher,
  PrizmSelectValueTransformver,
} from './select.model';
import { prizmDefaultProp } from '@prizm-ui/core';
import {
  PrizmDropdownHostClasses,
  PrizmDropdownHostComponent,
  PrizmDropdownHostModule,
  PrizmDropdownHostStyles,
} from '../dropdown-host';
import { PrizmOverlayModule, PrizmOverlayOutsidePlacement } from '../../../modules/overlay';
import { PrizmInputNgControl } from '../../input/common/base/input-ng-control.class';
import { PrizmScrollbarModule, PrizmScrollbarVisibility } from '../../scrollbar';
import { PrizmInputSelectOptionDirective } from './input-select-option.directive';
import { PrizmInputSelectOptionService } from './input-select-option.service';
import { PrizmChipsModule } from '../../chips';
import { CommonModule } from '@angular/common';
import {
  PrizmAutoFocusModule,
  PrizmDropdownControllerModule,
  PrizmHintModule,
  PrizmLifecycleModule,
} from '../../../directives';
import { PrizmIconModule } from '../../icon';
import { PrizmDataListModule } from '../../data-list';
import { prizmWatch } from '../../../observables';
import { PrizmSelectInputItemComponent } from './input-select-item.component';
import { PrizmInputSelectDataListDirective } from './input-select-data-list.directive';

@Component({
  selector: 'prizm-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PrizmOverlayModule,
    PrizmInputSelectOptionDirective,
    PolymorphModule,
    PrizmInputTextModule,
    PrizmChipsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrizmLetModule,
    PrizmAutoFocusModule,
    PrizmHintModule,
    PrizmIconModule,
    PrizmCallFuncModule,
    PrizmScrollbarModule,
    PrizmDropdownControllerModule,
    PrizmLifecycleModule,
    PrizmDataListModule,
    PrizmSelectInputItemComponent,
    PrizmDropdownHostModule,
    PrizmToObservablePipe,
    PrizmInputSelectOptionDirective,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmSelectInputComponent),
      multi: true,
    },
    PrizmDestroyService,
    PrizmInputSelectOptionService,
    { provide: PrizmInputControl, useExisting: PrizmSelectInputComponent },
  ],
  exportAs: 'prizmSelectInput',
})
export class PrizmSelectInputComponent<T> extends PrizmInputNgControl<T> implements OnInit {
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @ViewChild('dropdownHostRef')
  public readonly dropdownHostElement?: PrizmDropdownHostComponent;

  @ContentChild(PrizmInputSelectDataListDirective) customItemDataList?: PrizmInputSelectDataListDirective;

  @Input() set items(data: T[]) {
    this.items$.next(data as any);
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

  readonly isPolymorphPrimitive = isPolymorphPrimitive;
  readonly prizmIsTextOverflow$ = prizmIsTextOverflow$;
  public readonly printing$ = new BehaviorSubject<string>('');

  /**
   * need only clear function
   * */
  @Input()
  @prizmDefaultProp()
  stringify: PrizmSelectStringify<T> = this.options.stringify;

  @Input()
  @prizmDefaultProp()
  identityMatcher: PrizmSelectIdentityMatcher<T> = this.options.identityMatcher;

  @Input()
  @prizmDefaultProp()
  valueTemplate: PolymorphContent<PrizmSelectValueContext<T>> = this.options.valueContent;

  @Input()
  @prizmDefaultProp()
  listItemTemplate: PolymorphContent<PrizmSelectValueContext<T>> = this.options.listItemTemplate;

  override readonly testId_ = 'ui_select';

  readonly isNotNullish = Compare.isNotNullish;

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
  private searchValue!: string;

  readonly focused$$ = new Subject<boolean>();
  readonly focused$ = this.focused$$.asObservable();
  readonly opened$$ = new BehaviorSubject<boolean>(false);
  readonly opened$: Observable<boolean> = this.opened$$.asObservable();
  private readonly inputSelectOptionService = inject(PrizmInputSelectOptionService, {
    self: true,
  });
  constructor(
    @Inject(PRIZM_SELECT_OPTIONS) private readonly options: PrizmSelectOptions<T>,
    @Inject(Injector) injector: Injector
  ) {
    super(injector);
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
    fromEvent(this.layoutComponent.el.nativeElement, 'click')
      .pipe(
        tap(event => {
          this.safeOpenModal();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();

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
          this.select(null as any);
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
    this.markAsTouched();
    const selectedValue = item && this.transformer(item);
    if (!this.identityMatcher(selectedValue, this.value)) {
      this.updateValue(selectedValue);
    }
    this.opened$$.next(false);
  }

  public safeOpenModal(): void {
    if (this.disabled) return;
    this.printing$.next('');
    const open = !this.opened$$.value && !this.disabled; // && inputElement && prizmIsNativeFocused(inputElement);
    this.opened$$.next(open);
    this.changeDetectorRef.markForCheck();
  }

  public override updateValue(value: T) {
    super.updateValue(value);

    // set touched on change value
    this.ngControl.control?.markAsTouched();
  }

  private searchEmit(value: string): void {
    if (this.search === value) return;
    this.search = value;
    this.searchChange.emit(value);
  }

  public getValueFromItems(value: T, items: T[]) {
    const newItem = items.find(i => this.identityMatcher(this.transformer(i), value));
    return newItem;
  }

  public getCurrentValue(value: T, items: T[]): string | Observable<string> {
    const newItem = this.getFullObjectOfCurrent(this.value, items);
    if (Compare.isNullish(newItem)) return '';
    return this.stringify(newItem ?? value);
  }

  public getFullObjectOfCurrent(value: T, items: T[]): T {
    if (Compare.isNullish(value)) return null as any;
    const newItem = this.getValueFromItems(this.value, items);
    return newItem as any;
  }
}
