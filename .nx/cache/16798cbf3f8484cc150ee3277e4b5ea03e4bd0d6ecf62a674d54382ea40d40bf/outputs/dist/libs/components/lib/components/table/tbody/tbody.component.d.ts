import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy, QueryList } from '@angular/core';
import { CollectionViewer, ListRange } from '@angular/cdk/collections';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { BehaviorSubject, Observable } from 'rxjs';
import { PolymorphContent } from '../../../directives';
import { PrizmTableEmptyDirective } from '../directives/empty.directive';
import { PrizmTableLoadingDirective } from '../directives/loading.directive';
import { PrizmRowDirective } from '../directives/row.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PrizmTableTreeLoadingDirective } from '../directives/tree-loading.directive';
import { PrizmTableSorterService } from '../service';
import { PrizmTableTreeService } from '../service/tree.service';
import { PrizmTableDataSourceInput } from '../table.types';
import { PrizmTrComponent } from '../tr/tr.component';
import * as i0 from "@angular/core";
export declare class PrizmTbodyComponent<T extends Partial<Record<keyof T, unknown>>> implements CollectionViewer, AfterViewInit, OnDestroy {
    readonly table: PrizmTableDirective<T>;
    readonly sorterService: PrizmTableSorterService<T>;
    readonly tableTreeService: PrizmTableTreeService;
    private readonly destroy$;
    private changeDetectorRef;
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
    set data(dataSource: PrizmTableDataSourceInput<T>);
    get data(): PrizmTableDataSourceInput<T>;
    private _dataSource;
    /**
     * Currently displayed set of data.
     */
    get view(): readonly T[];
    /**
     * Currently displayed set of data.
     *
     * @deprecated
     */
    get sorted(): readonly T[];
    /** Latest data provided by the data source. */
    protected _data: readonly T[];
    renderData$: Observable<readonly T[]>;
    heading: PolymorphContent;
    open: boolean;
    readonly openChange: EventEmitter<boolean>;
    readonly loadingTemplate?: PrizmTableLoadingDirective;
    readonly emptyTemplate?: PrizmTableEmptyDirective;
    readonly treeLoadingTemplate?: PrizmTableTreeLoadingDirective;
    readonly row?: PrizmRowDirective<T>;
    readonly rows: QueryList<PrizmTrComponent<T>>;
    columnsCount: number;
    /**
     * Stream containing the latest information on what rows are being displayed on screen.
     *
     * @private Not used internally, just needed by `CollectionViewer` interface.
     */
    readonly viewChange: BehaviorSubject<ListRange>;
    constructor(table: PrizmTableDirective<T>, sorterService: PrizmTableSorterService<T>, tableTreeService: PrizmTableTreeService, destroy$: PrizmDestroyService, changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    /**
     * Switch to the provided data source by resetting the data and unsubscribing from the current.
     */
    private _switchDataSource;
    sortChildren(children$: Observable<T[]>): Observable<readonly T[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmTbodyComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmTbodyComponent<any>, "[prizmTbody] ", never, { "data": "data"; "heading": "heading"; "open": "open"; }, { "openChange": "openChange"; }, ["loadingTemplate", "emptyTemplate", "treeLoadingTemplate", "row", "rows"], ["*", "[footer]"], false, never>;
}
