import { coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  inject,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';
import {
  PrizmPaginatorData,
  PrizmPaginatorDirection,
  PrizmPaginatorOptions,
  PrizmPaginatorOutput,
  PrizmPaginatorType,
} from './interfaces/prizm-paginator.interface';
import { PolymorphContent, PolymorphOutletDirective } from '../../directives';
import { PrizmAbstractTestId } from '../../abstract/interactive';
import { PrizmLanguagePaginator } from '@prizm-ui/i18n';
import { PRIZM_PAGINATOR } from '../../tokens';
import { prizmI18nInitWithKey } from '../../services';
import { CommonModule } from '@angular/common';
import { PrizmCallFuncPipe, PrizmLetDirective, PrizmPluckPipe } from '@prizm-ui/helpers';
import { PrizmInputSelectModule } from '../dropdowns/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmButtonComponent } from '../button';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsAngleLeft,
  prizmIconsAngleRight,
  prizmIconsChevronsDoubleLeft,
  prizmIconsChevronsDoubleRight,
} from '@prizm-ui/icons/full/source';
import { prizmDefaultProp } from '@prizm-ui/core';

@Component({
  selector: 'prizm-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...prizmI18nInitWithKey(PRIZM_PAGINATOR, 'paginator')],
  standalone: true,
  imports: [
    CommonModule,
    PrizmCallFuncPipe,
    PolymorphOutletDirective,
    PrizmLetDirective,
    PrizmInputSelectModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmButtonComponent,
    PrizmPluckPipe,
  ],
})
export class PrizmPaginatorComponent extends PrizmAbstractTestId implements OnInit {
  @Input() public paginatorType: PrizmPaginatorType = 'finite';
  @Input() textOnPage: PolymorphContent;
  @Input() public leftButtonLabel = '';
  @Input() public rightButtonLabel = '';
  @Input() public moreButtonLabel = '';
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  @Input()
  get totalRecords(): number | null {
    return this.paginatorType === 'finite' ? this._totalRecords : null;
  }
  set totalRecords(value: NumberInput) {
    this._totalRecords = Math.max(coerceNumberProperty(value), 0);
    this.changeDetectorRef.markForCheck();
  }
  private _totalRecords = 0;

  // Сколько номеров видно на экране
  @Input() public pageLinkSize: number = Number.POSITIVE_INFINITY;
  @Input() public showMoreDisabled = false;
  // disabled
  @Input() public disabled = false;

  /** Number of items to display on a page. */
  @Input()
  get rows(): number {
    return this._rows;
  }
  set rows(value: NumberInput) {
    this._rows = Math.max(coerceNumberProperty(value), 0);
    if (!this._rows) {
      this._rows = this.rowsCountOptions[0];
    }

    this.changeDetectorRef.markForCheck();
  }
  private _rows!: number;

  /** The 1-based page index of the displayed list of items. Defaulted to 1. */
  @Input()
  get page(): number {
    return this.currentPage;
  }
  set page(value: NumberInput) {
    this.currentPage = Math.max(coerceNumberProperty(value), 1);
    this.changeDetectorRef.markForCheck();
  }

  @Input() paginatorOptions: PrizmPaginatorOptions = {
    noRowsSelector: false,
    noRowsSelectorLabel: false,
    noInfo: false,
    noPages: false,
  };

  @Input() public rowsCountOptions: number[] = [];

  @Input()
  @prizmDefaultProp()
  public direction: PrizmPaginatorDirection = 'right';

  @HostBinding('class.direction-left')
  public get directionLeft(): boolean {
    return this.direction === 'left';
  }

  @Output()
  public paginatorChange: EventEmitter<PrizmPaginatorOutput> = new EventEmitter<PrizmPaginatorOutput>();
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() public rowsChange: EventEmitter<number | null> = new EventEmitter<number | null>();

  override readonly testId_ = 'ui_paginator';

  /**
   * The 1-based page index of the displayed list of items.
   */
  public currentPage = 1;
  // Количесвто пакетов = Суммарное количество данных / Сколько данных в одном пакете
  public pagesCount = 0;

  // `AsyncSubject` used so what late subscribers notified immediately.
  private readonly initialized$$ = new AsyncSubject<void>();

  public readonly initialized = this.initialized$$.asObservable();

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    @Inject(PRIZM_PAGINATOR)
    public readonly paginator$: Observable<PrizmLanguagePaginator['paginator']>,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super();

    this.iconsFullRegistry.registerIcons(
      prizmIconsChevronsDoubleLeft,
      prizmIconsChevronsDoubleRight,
      prizmIconsAngleRight,
      prizmIconsAngleLeft
    );
  }

  ngOnInit(): void {
    this.paginationGenerator();
    this.initialized$$.next();
    this.initialized$$.complete();
  }

  /**
   * Updates the list of page options to display to the user.
   */
  public paginationGenerator(): PrizmPaginatorData | null {
    if (this.isDataValid) {
      const allNumbers = new Array(this.pagesCount).fill(0).map((page, i) => i + 1);

      let mid: number[];
      if (this.currentPage - Math.ceil((this.pageLinkSize - 1) / 2) <= 1) {
        mid = allNumbers.filter(item => item <= this.pageLinkSize);
      } else if (this.currentPage + Math.ceil((this.pageLinkSize - 1) / 2) >= this.pagesCount) {
        mid = allNumbers.filter(item => item > this.pagesCount - this.pageLinkSize);
      } else {
        mid = allNumbers.filter(
          item =>
            item >= this.currentPage - Math.ceil((this.pageLinkSize - 1) / 2) &&
            item <= this.currentPage + Math.floor((this.pageLinkSize - 1) / 2)
        );
      }

      this.changeDetectorRef.markForCheck();

      return {
        mid: mid,
        left: mid[0] === 1 ? null : 1,
        right: mid[mid.length - 1] === this.pagesCount ? null : this.pagesCount,
      };
    }

    return null;
  }

  public get realTotalRecord(): number | null {
    return this.paginatorType === 'infinite' ? this.rows * (this.currentPage + 1) : this.totalRecords;
  }

  /**
   * Tries to normalize paginator configuration.
   */
  public get isDataValid(): boolean {
    if (!this.rows) return false;
    if (!this.totalRecords) return false;

    this.pagesCount = Math.ceil(this.totalRecords / this.rows);
    this.currentPage = Math.min(this.currentPage, this.pagesCount) || 1;

    return true;
  }

  public changePage(page: number): void {
    const prev = this.currentPage;
    this.page = page;

    // Emit only if real value was changed by the setter
    if (this.currentPage !== prev) {
      this.emitPageChange();
    }
  }

  public increase(): void {
    this.changePage(this.page + 1);
  }

  public decrease(): void {
    this.changePage(this.page - 1);
  }
  public toLastPage(): void {
    this.changePage(this.pagesCount);
  }

  public toFirstPage(): void {
    this.changePage(0);
  }

  private emitPageChange(): void {
    this.pageChange.emit(this.currentPage);
    this.emitPaginatorChanges();
  }

  private emitPaginatorChanges(): void {
    this.paginatorChange.emit({
      page: this.currentPage,
      first: (this.currentPage - 1) * this.rows + 1,
      rows: this.rows,
      pagesCount: this.paginatorType === 'infinite' ? null : this.pagesCount,
    });
  }

  public changeRows(rows: null | number): void {
    if (this.rows === rows) return;
    this.rows = rows;
    this.paginationGenerator();
    this.rowsChange.emit(this.rows);
    this.emitPaginatorChanges();
  }
}
