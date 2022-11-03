import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import {
  IPaginatorData,
  IPaginatorOptions,
  IPaginatorOutput,
  PaginatorType,
} from './interfaces/pzm-paginator.interface';

@Component({
  selector: 'pzm-paginator',
  templateUrl: './pzm-paginator.component.html',
  styleUrls: ['./pzm-paginator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmPaginatorComponent {
  @Input() public paginatorType: PaginatorType = 'finite';
  // Суммарное количество данных
  @Input() public totalRecords: number | null = null;

  // Сколько номеров видно на экране
  @Input() public pageLinkSize: number | null = null;

  // Сколько данных в одном пакете
  @Input() public rows: number | null = null;

  @Input() public set initialValue(val: number) {
    this.currentPage = val;
  }

  @Input() paginatorOptions: IPaginatorOptions = {
    noRowsSelector: false,
    noRowsSelectorLabel: false,
    noInfo: false,
    noPages: false,
  };

  @Input() public leftButtonLabel = '';
  @Input() public rightButtonLabel = '';

  @Input() public rowsCountOptions: number[] = [];

  @Output() public tabChange: EventEmitter<IPaginatorOutput> = new EventEmitter<IPaginatorOutput>();

  @HostBinding('attr.testId')
  readonly testId = 'pzm_paginator';

  public currentPage = 1;
  // Количесвто пакетов = Суммарное количество данных / Сколько данных в одном пакете
  public pagesCount = 0;

  public get paginationGenerator(): IPaginatorData | null {
    if (this.isDataValid) {
      this.pagesCount = Math.ceil(this.totalRecords / this.rows);
      this.currentPage = this.currentPage > this.pagesCount ? this.pagesCount : this.currentPage;
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
        this.pageLinkSize <= this.rows &&
        this.currentPage <= this.totalRecords
      );
    }
    return false;
  }

  public changePage(page: number): void {
    if (this.currentPage !== page) {
      this.currentPage = page;
      this.emitChangedValues();
    }
  }

  public increase(): void {
    this.currentPage++;
    this.emitChangedValues();
  }

  public decrease(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.emitChangedValues();
    }
  }

  private emitChangedValues(): void {
    this.tabChange.emit({
      page: this.currentPage - 1,
      first: (this.currentPage - 1) * this.rows,
      rows: this.rows,
      tabCount: this.pagesCount,
    });
  }
}
