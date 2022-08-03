import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPaginatorData, IPaginatorOutput } from './interfaces/zui-paginator.interface';

@Component({
  selector: 'zui-paginator',
  templateUrl: './zui-paginator.component.html',
  styleUrls: ['./zui-paginator.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiPaginatorComponent {
  @Input() public totalRecords: number | null = null;

  // Сколько показать за раз
  @Input() public pageLinkSize: number | null = null;

  // Сколько показать всего
  @Input() public rows: number | null = null;

  @Input() public set initialValue(val: number) {
    this.currentPage = val;
  }

  @Input() leftButtonLabel = '';
  @Input() rightButtonLabel = '';

  @Output() public tabChange: EventEmitter<IPaginatorOutput> = new EventEmitter<IPaginatorOutput>();
  public currentPage = 1;
  public pagesCount = 0;

  public get paginationGenerator(): IPaginatorData | null {
    if (this.isDataValid) {
      this.pagesCount = Math.ceil(this.totalRecords / this.rows);
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

      this.tabChange.emit({
        page: this.currentPage - 1,
        first: (this.currentPage - 1) * this.rows,
        rows: this.rows,
        tabCount: this.pagesCount,
      });

      return {
        mid: mid,
        left: mid[0] === 1 ? null : 1,
        right: mid[mid.length - 1] === this.pagesCount ? null : this.pagesCount,
      };
    }
    return null;
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
    }
  }

  public increase(): void {
    this.currentPage++;
  }

  public decrease(): void {
    this.currentPage--;
  }
}
