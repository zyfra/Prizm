import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, combineLatest, merge, Observable, of, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
export class PrizmTableDataSource<
  T,
  P extends PrizmTableDataSourcePaginator = PrizmTableDataSourcePaginator
> extends DataSource<T> {
  /** Stream that emits when a new data array is set on the data source. */
  private readonly _data: BehaviorSubject<T[]>;

  /** Stream emitting render data to the table (depends on ordered data changes). */
  private readonly _renderData = new BehaviorSubject<T[]>([]);

  /** Stream that emits when a new filter is set on the data source. */
  private readonly _filter = new BehaviorSubject<FilterPredicate<T> | null>(null);

  /** Used to react to internal changes of the paginator that are made by the data source itself. */
  private readonly _internalPageChanges = new Subject<void>();

  /**
   * Subscription to the changes that should trigger an update to the table's rendered rows, such
   * as filtering, sorting, pagination, or base data changes.
   */
  private _renderChangesSubscription: Subscription | null = null;

  /**
   * The filtered set of data, or all the data if there
   * is no filter. Useful for knowing the set of data the table represents.
   * For example, a 'selectAll()' function would likely want to select the set of filtered data
   * shown to the user rather than all the data.
   */
  filteredData!: T[];

  /** Array of data that should be handled by the table, where each object represents one row. */
  get data(): T[] {
    return this._data.value;
  }

  set data(data: T[]) {
    data = Array.isArray(data) ? data : [];
    this._data.next(data);

    // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.
    if (!this._renderChangesSubscription) {
      this._filterData(data);
    }
  }

  /**
   * Filter predicate that should be used to filter out objects from the data array.
   */
  get filter(): FilterPredicate<T> | null {
    return this._filter.value;
  }

  set filter(filter: FilterPredicate<T> | null) {
    this._filter.next(filter);

    // Normally the `filteredData` is updated by the re-render
    // subscription, but that won't happen if it's inactive.
    if (!this._renderChangesSubscription) {
      this._filterData(this.data);
    }
  }

  /**
   * The connected sorter that holds the current sort state and able to sort data.
   *
   * Sort changes (see {@link PrizmSorter.changes$}) emitted by the sorter will trigger an update to the table's rendered data.
   */
  get sorter(): PrizmSorter<T> | null {
    return this._sorter;
  }

  set sorter(sorter: PrizmSorter<T> | null) {
    this._sorter = sorter;
    this._updateChangeSubscription();
  }

  private _sorter!: PrizmSorter<T> | null;

  /**
   * Instance of the paginator used by the table to control what page of the data is
   * displayed. Page changes (see {@link PrizmTableDataSourcePaginator.paginatorChange}) emitted by the paginator
   * will trigger an update to the table's rendered data.
   *
   * Note that the data source uses the paginator's properties to calculate which page of data
   * should be displayed. If the paginator receives its properties as template inputs,
   * then be sure that the paginator's view has been initialized before assigning it to this data source.
   */
  get paginator(): P | null {
    return this._paginator;
  }

  set paginator(paginator: P | null) {
    this._paginator = paginator;
    this._updateChangeSubscription();
  }

  private _paginator!: P | null;

  constructor(initialData: T[] = []) {
    super();
    this._data = new BehaviorSubject<T[]>(initialData);
    this._updateChangeSubscription();
  }

  /**
   * Connects to the data source.
   *
   * @returns Observable that emits a new value when the `data` changes.
   */
  public connect(): Observable<T[]> {
    if (!this._renderChangesSubscription) {
      this._updateChangeSubscription();
    }

    return this._renderData;
  }

  /**
   * Disconnects from the data source.
   */
  public disconnect(): void {
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = null;
  }

  /**
   * Subscribe to changes that should trigger an update to the table's rendered rows. When the
   * changes occur, process the current state of the filter, sort, and pagination along with
   * the provided base data and send it to the table for rendering.
   */
  private _updateChangeSubscription(): void {
    // Sorting and/or pagination should be watched if sort and/or paginator are provided.
    // The events should emit whenever the component emits a change or initializes, or if no
    // component is provided, a stream with just a null event should be provided.
    // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
    // pipeline can progress to the next step. Note that the value from these streams are not used,
    // they purely act as a signal to progress in the pipeline.
    const sortChange: Observable<void> = this._sorter
      ? merge(
          this._sorter.changes$,
          of(null) // TODO this._sorter.initialized
        )
      : of(null);
    const pageChange: Observable<PrizmTableDataSourcePageEvent | null | void> = this._paginator
      ? (merge(
          this._paginator.paginatorChange,
          this._internalPageChanges,
          this._paginator.initialized ?? of(null)
        ) as Observable<PrizmTableDataSourcePageEvent | void>)
      : of(null);
    const dataStream = this._data;

    // Watch for base data or filter changes to provide a filtered set of data.
    const filteredData = combineLatest([dataStream, this._filter]).pipe(
      map(([data]) => this._filterData(data))
    );

    // Watch for filtered data or sort changes to provide an ordered set of data.
    const orderedData = combineLatest([filteredData, sortChange]).pipe(
      map(([data]) => this._orderData(data))
    );

    // Watch for ordered data or page changes to provide a paged set of data.
    const paginatedData = combineLatest([orderedData, pageChange]).pipe(
      map(([data]) => this._pageData(data))
    );

    // Watched for paged data changes and send the result to the table to render.
    this._renderChangesSubscription?.unsubscribe();
    this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
  }

  /**
   * Returns a filtered data array where each filter object meet the condition specified by the {@link filter} predicate.
   * If no filter is set, returns the data array as is.
   */
  private _filterData(data: T[]): T[] {
    this.filteredData = typeof this.filter === 'function' ? data.filter(this.filter) : data;

    if (this.paginator) {
      this._updatePaginator(this.filteredData.length);
    }

    return this.filteredData;
  }

  /**
   * Returns a sorted copy of the data if sorter is provided, otherwise just returns the data array as is.
   *
   * Called after changes are made to the filtered data or when sort changes are emitted from `PrizmSorter`.
   * @param data The array of data that should be sorted.
   * @param sorter The connected sorter that holds the current sort state and able to sort data.
   */
  private _orderData(data: T[]): T[] {
    // If there is no sorter, return the data without trying to sort.
    if (!this.sorter) {
      return data;
    }

    return this.sorter.sort(data.slice());
  }

  /**
   * Returns a paged slice of the provided data array according to the provided paginator's page
   * index and length. If there is no paginator provided, returns the data array as provided.
   */
  private _pageData(data: T[]): T[] {
    if (!this.paginator) {
      return data;
    }

    const startIndex = (this.paginator.currentPage - 1) * this.paginator.rows;
    return data.slice(startIndex, startIndex + this.paginator.rows);
  }

  /**
   * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
   * index does not exceed the paginator's last page. Values are changed in async manner to
   * guard against making property changes within a round of change detection.
   */
  private _updatePaginator(filteredDataLength: number): void {
    queueMicrotask(() => {
      const paginator = this.paginator;

      if (!paginator) {
        return;
      }

      paginator.totalRecords = filteredDataLength;

      // If the page index is set beyond the page, reduce it to the last page.
      if (paginator.currentPage > 1) {
        const lastPageIndex = Math.ceil(paginator.totalRecords / paginator.rows);
        const newPageIndex = Math.min(paginator.currentPage, lastPageIndex);

        if (newPageIndex !== paginator.currentPage) {
          paginator.currentPage = newPageIndex;

          // Since the paginator only emits after user-generated changes,
          // we need our own stream so we know to should re-render the data.
          this._internalPageChanges.next();
        }
      }
    });
  }
}
