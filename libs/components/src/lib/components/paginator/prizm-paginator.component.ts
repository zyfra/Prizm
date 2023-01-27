import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import {
  PrizmPaginatorData,
  PrizmPaginatorOptions,
  PrizmPaginatorOutput,
  PrizmPaginatorType,
} from './interfaces/prizm-paginator.interface';

@Component({
  selector: 'prizm-paginator',
  templateUrl: './prizm-paginator.component.html',
  styleUrls: ['./prizm-paginator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmPaginatorComponent {
  @Input() public paginatorType: PrizmPaginatorType = 'finite';
  // Суммарное количество данных
  @Input() public totalRecords: number | null = null;

  // Сколько номеров видно на экране
  @Input() public pageLinkSize: number | null = null;
  @Input() public showMoreDisabled = false;

  // Сколько данных в одном пакете
  @Input() public rows: number | null = null;

  @Input() public set page(val: number) {
    this.currentPage = val;
  }

  @Input() paginatorOptions: PrizmPaginatorOptions = {
    noRowsSelector: false,
    noRowsSelectorLabel: false,
    noInfo: false,
    noPages: false,
  };

  @Input() public leftButtonLabel = '';
  @Input() public rightButtonLabel = '';

  @Input() public rowsCountOptions: number[] = [];
  @Output() public paginatorChange: EventEmitter<PrizmPaginatorOutput> =
    new EventEmitter<PrizmPaginatorOutput>();
  @Output() public pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() public rowsChange: EventEmitter<number | null> = new EventEmitter<number | null>();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_paginator';

  public currentPage = 1;
  // Количесвто пакетов = Суммарное количество данных / Сколько данных в одном пакете
  public pagesCount = 0;

  public paginationGenerator(rows: number, currentPage: number): PrizmPaginatorData | null {
    if (this.isDataValid) {
      this.pagesCount = Math.ceil(this.totalRecords / rows);
      this.currentPage = currentPage > this.pagesCount ? this.pagesCount : currentPage;
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

      return {
        mid: mid,
        left: mid[0] === 1 ? null : 1,
        right: mid[mid.length - 1] === this.pagesCount ? null : this.pagesCount,
      };
    }
    return null;
  }

  public get realTotalRecord(): number {
    return (this.totalRecords =
      this.paginatorType === 'infinite' ? this.rows * (this.currentPage + 1) : this.totalRecords);
  }

  public get isDataValid(): boolean {
    if (this.totalRecords) {
      this.rows = this.rows ?? this.totalRecords;
      this.pageLinkSize = this.pageLinkSize ?? this.totalRecords;
      return (
        this.totalRecords >= 0 &&
        this.rows <= this.totalRecords &&
        // this.pageLinkSize <= this.rows &&
        this.currentPage <= this.totalRecords
      );
    }
    return false;
  }

  public changePage(page: number): void {
    if (this.currentPage !== page) {
      this.currentPage = page;
      this.emitPageChange();
    }
  }

  public increase(): void {
    this.currentPage++;
    this.emitPageChange();
  }

  public decrease(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.emitPageChange();
    }
  }

  private emitPageChange(): void {
    const page = this.currentPage;
    if (this.page === page) return;
    this.pageChange.emit(page);
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

  public changeRows(rows: null | number) {
    if (this.rows === rows) return;
    this.rows = rows;
    this.paginationGenerator(rows, this.currentPage);
    this.rowsChange.emit(this.rows);
    this.emitPaginatorChanges();
  }
}
