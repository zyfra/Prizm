import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  Output,
  QueryList,
} from '@angular/core';

import { CollectionViewer, isDataSource, ListRange } from '@angular/cdk/collections';

import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject, isObservable, Observable } from 'rxjs';
import { filter, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PolymorphContent } from '../../../directives';
import { PrizmCellDirective } from '../directives/cell.directive';
import { PrizmTableEmptyDirective } from '../directives/empty.directive';
import { PrizmTableLoadingDirective } from '../directives/loading.directive';
import { PrizmRowDirective } from '../directives/row.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmTableTreeLoadingDirective } from '../directives/tree-loading.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmTableSorterService } from '../service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableDataSourceInput } from '../table.types';
import { PrizmTrComponent } from '../tr/tr.component';
import { PrizmTableRowService } from '../service/row.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `[prizmTbody] `,
  templateUrl: `./tbody.component.html`,
  styleUrls: [`./tbody.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: PRIZM_TABLE_PROVIDER,
})
export class PrizmTbodyComponent<T extends Partial<Record<keyof T, unknown>>>
  implements CollectionViewer, AfterViewInit, OnDestroy
{
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   * Mutation of an array (push, unshift) will not.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the DataSource's `connect` function and trigger updates when that stream emits new data array
   * values. During the table's `ngOnDestroy` or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function.
   *
   * For a `DataSource`-s we skip internal sorting, so that users can use their own sorting mechanisms
   * i.e. server-side sorting can use different data-base's collation strategies.
   * On the other hand users can connect `sorterService` to `PrizmTableDataSource`:
   *
   * @example
   * ```
   *  \@ViewChild(PrizmTableDirective) table;
   *  \@ViewChild(PrizmPaginatorComponent) paginator;
   *
   *  ngAfterViewInit() {
   *    this.dataSource = new PrizmTableDataSource([]);
   *    this.dataSource.paginator = this.paginator;
   *    this.dataSource.sorter = this.table.sorterService;
   *  }
   * ```
   */
  @Input()
  set data(dataSource: PrizmTableDataSourceInput<T>) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource ?? []);
    }
  }

  get data(): PrizmTableDataSourceInput<T> {
    return this._dataSource;
  }
  private _dataSource!: PrizmTableDataSourceInput<T>;

  /**
   * Currently displayed set of data.
   */
  get view(): readonly T[] {
    return this._data;
  }

  /**
   * Currently displayed set of data.
   *
   * @deprecated
   */
  get sorted(): readonly T[] {
    return this._data;
  }

  /** Latest data provided by the data source. */
  protected _data!: readonly T[];

  /* protected */ renderData$!: Observable<readonly T[]>;

  @Input()
  @prizmDefaultProp()
  heading: PolymorphContent = ``;

  @Input()
  @prizmDefaultProp()
  open = true;

  @Output()
  readonly openChange = new EventEmitter<boolean>();

  @ContentChild(PrizmTableLoadingDirective)
  readonly loadingTemplate?: PrizmTableLoadingDirective;

  @ContentChild(PrizmTableEmptyDirective)
  readonly emptyTemplate?: PrizmTableEmptyDirective;

  @ContentChild(PrizmTableTreeLoadingDirective)
  readonly treeLoadingTemplate?: PrizmTableTreeLoadingDirective;

  @ContentChild(forwardRef(() => PrizmRowDirective))
  readonly row?: PrizmRowDirective<T>;

  @ContentChildren(forwardRef(() => PrizmTrComponent))
  readonly rows: QueryList<PrizmTrComponent<T>> = new QueryList<PrizmTrComponent<T>>();

  columnsCount = 0;
  /**
   * Stream containing the latest information on what rows are being displayed on screen.
   *
   * @private Not used internally, just needed by `CollectionViewer` interface.
   */
  readonly viewChange = new BehaviorSubject<ListRange>({
    start: 0,
    end: Number.MAX_VALUE,
  });

  constructor(
    @Inject(forwardRef(() => PrizmTableDirective))
    readonly table: PrizmTableDirective<T>,
    public readonly sorterService: PrizmTableSorterService<T>,
    public readonly tableTreeService: PrizmTableTreeService,
    private readonly destroy$: PrizmDestroyService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.rows.changes
      .pipe(
        startWith(this.rows),
        map(({ first }: QueryList<PrizmTrComponent<T>>) => first),
        filter((first: PrizmTrComponent<T>) => !!first),
        map(({ colCount }) => colCount),
        takeUntil(this.destroy$)
      )
      .subscribe((columnsCount: number) => {
        this.columnsCount = columnsCount;
        this.changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    if (isDataSource(this.data)) {
      this.data.disconnect(this);
    }
  }

  public onClick(): void {
    this.open = !this.open;
    this.openChange.emit(this.open);
  }

  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current.
   */
  private _switchDataSource(dataSource: PrizmTableDataSourceInput<T>): void {
    this._data = [];

    // Disconnect from previous data source if needed
    if (isDataSource(this.data)) {
      this.data.disconnect(this);
    }

    this._dataSource = dataSource;

    let dataStream: Observable<readonly T[]>;
    if (isDataSource(dataSource)) {
      dataStream = dataSource.connect(this);
    } else if (isObservable(dataSource)) {
      dataStream = dataSource.pipe(switchMap(data => this.sorterService.sort$(data as T[])));
    } else if (Array.isArray(dataSource)) {
      dataStream = this.sorterService.sort$(dataSource);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.renderData$ = dataStream.pipe(
      tap(data => {
        this._data = data || [];
      })
    );
  }

  public sortChildren(children$: Observable<T[]>): Observable<readonly T[]> {
    return children$.pipe(switchMap(children => this.sorterService.sort$(children)));
  }
}
