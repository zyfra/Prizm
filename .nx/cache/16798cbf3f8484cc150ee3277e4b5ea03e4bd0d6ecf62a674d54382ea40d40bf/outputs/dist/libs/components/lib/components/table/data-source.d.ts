import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
/**
 * The sorter that holds the current sort state (direction, columns) and able to sort data.
 */
interface PrizmSorter<T = unknown> {
    readonly changes$: Observable<any>;
    sort(data: T[]): T[];
}
/**
 * Interface that matches the required API parts for the `PrizmPaginatorOutput`.
 *
 * Decoupled so that users can depend on their own implementation.
 */
export interface PrizmTableDataSourcePageEvent {
    page: number;
    rows: number;
}
/**
 * Interface that matches the required API parts of the `PrizmPaginatorComponent`.
 *
 * Decoupled so that users can depend on their own implementation.
 */
export interface PrizmTableDataSourcePaginator {
    paginatorChange: Observable<PrizmTableDataSourcePageEvent>;
    /**
     * 1-based index of the currently viewed page.
     */
    currentPage: number;
    rows: number;
    totalRecords: number;
    initialized?: Observable<void>;
}
type FilterPredicate<T> = (o: T, index: number) => boolean;
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting, and pagination.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
export declare class PrizmTableDataSource<T, P extends PrizmTableDataSourcePaginator = PrizmTableDataSourcePaginator> extends DataSource<T> {
    /** Stream that emits when a new data array is set on the data source. */
    private readonly _data;
    /** Stream emitting render data to the table (depends on ordered data changes). */
    private readonly _renderData;
    /** Stream that emits when a new filter is set on the data source. */
    private readonly _filter;
    /** Used to react to internal changes of the paginator that are made by the data source itself. */
    private readonly _internalPageChanges;
    /**
     * Subscription to the changes that should trigger an update to the table's rendered rows, such
     * as filtering, sorting, pagination, or base data changes.
     */
    private _renderChangesSubscription;
    /**
     * The filtered set of data, or all the data if there
     * is no filter. Useful for knowing the set of data the table represents.
     * For example, a 'selectAll()' function would likely want to select the set of filtered data
     * shown to the user rather than all the data.
     */
    filteredData: T[];
    /** Array of data that should be handled by the table, where each object represents one row. */
    get data(): T[];
    set data(data: T[]);
    /**
     * Filter predicate that should be used to filter out objects from the data array.
     */
    get filter(): FilterPredicate<T> | null;
    set filter(filter: FilterPredicate<T> | null);
    /**
     * The connected sorter that holds the current sort state and able to sort data.
     *
     * Sort changes (see {@link PrizmSorter.changes$}) emitted by the sorter will trigger an update to the table's rendered data.
     */
    get sorter(): PrizmSorter<T> | null;
    set sorter(sorter: PrizmSorter<T> | null);
    private _sorter;
    /**
     * Instance of the paginator used by the table to control what page of the data is
     * displayed. Page changes (see {@link PrizmTableDataSourcePaginator.paginatorChange}) emitted by the paginator
     * will trigger an update to the table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * then be sure that the paginator's view has been initialized before assigning it to this data source.
     */
    get paginator(): P | null;
    set paginator(paginator: P | null);
    private _paginator;
    constructor(initialData?: T[]);
    /**
     * Connects to the data source.
     *
     * @returns Observable that emits a new value when the `data` changes.
     */
    connect(): Observable<T[]>;
    /**
     * Disconnects from the data source.
     */
    disconnect(): void;
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    private _updateChangeSubscription;
    /**
     * Returns a filtered data array where each filter object meet the condition specified by the {@link filter} predicate.
     * If no filter is set, returns the data array as is.
     */
    private _filterData;
    /**
     * Returns a sorted copy of the data if sorter is provided, otherwise just returns the data array as is.
     *
     * Called after changes are made to the filtered data or when sort changes are emitted from `PrizmSorter`.
     * @param data The array of data that should be sorted.
     * @param sorter The connected sorter that holds the current sort state and able to sort data.
     */
    private _orderData;
    /**
     * Returns a paged slice of the provided data array according to the provided paginator's page
     * index and length. If there is no paginator provided, returns the data array as provided.
     */
    private _pageData;
    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in async manner to
     * guard against making property changes within a round of change detection.
     */
    private _updatePaginator;
}
export {};
