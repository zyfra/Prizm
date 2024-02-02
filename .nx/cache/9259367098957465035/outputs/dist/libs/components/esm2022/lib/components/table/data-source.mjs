import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, combineLatest, merge, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Data source that accepts a client-side data array and includes native support of filtering,
 * sorting, and pagination.
 *
 * **Note:** This class is meant to be a simple data source to help you get started. As such
 * it isn't equipped to handle some more advanced cases like robust i18n support or server-side
 * interactions. If your app needs to support more advanced use cases, consider implementing your
 * own `DataSource`.
 */
export class PrizmTableDataSource extends DataSource {
    /** Array of data that should be handled by the table, where each object represents one row. */
    get data() {
        return this._data.value;
    }
    set data(data) {
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
    get filter() {
        return this._filter.value;
    }
    set filter(filter) {
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
    get sorter() {
        return this._sorter;
    }
    set sorter(sorter) {
        this._sorter = sorter;
        this._updateChangeSubscription();
    }
    /**
     * Instance of the paginator used by the table to control what page of the data is
     * displayed. Page changes (see {@link PrizmTableDataSourcePaginator.paginatorChange}) emitted by the paginator
     * will trigger an update to the table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * then be sure that the paginator's view has been initialized before assigning it to this data source.
     */
    get paginator() {
        return this._paginator;
    }
    set paginator(paginator) {
        this._paginator = paginator;
        this._updateChangeSubscription();
    }
    constructor(initialData = []) {
        super();
        /** Stream emitting render data to the table (depends on ordered data changes). */
        this._renderData = new BehaviorSubject([]);
        /** Stream that emits when a new filter is set on the data source. */
        this._filter = new BehaviorSubject(null);
        /** Used to react to internal changes of the paginator that are made by the data source itself. */
        this._internalPageChanges = new Subject();
        /**
         * Subscription to the changes that should trigger an update to the table's rendered rows, such
         * as filtering, sorting, pagination, or base data changes.
         */
        this._renderChangesSubscription = null;
        this._data = new BehaviorSubject(initialData);
        this._updateChangeSubscription();
    }
    /**
     * Connects to the data source.
     *
     * @returns Observable that emits a new value when the `data` changes.
     */
    connect() {
        if (!this._renderChangesSubscription) {
            this._updateChangeSubscription();
        }
        return this._renderData;
    }
    /**
     * Disconnects from the data source.
     */
    disconnect() {
        this._renderChangesSubscription?.unsubscribe();
        this._renderChangesSubscription = null;
    }
    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        // Sorting and/or pagination should be watched if sort and/or paginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        const sortChange = this._sorter
            ? merge(this._sorter.changes$, of(null) // TODO this._sorter.initialized
            )
            : of(null);
        const pageChange = this._paginator
            ? merge(this._paginator.paginatorChange, this._internalPageChanges, this._paginator.initialized ?? of(null))
            : of(null);
        const dataStream = this._data;
        // Watch for base data or filter changes to provide a filtered set of data.
        const filteredData = combineLatest([dataStream, this._filter]).pipe(map(([data]) => this._filterData(data)));
        // Watch for filtered data or sort changes to provide an ordered set of data.
        const orderedData = combineLatest([filteredData, sortChange]).pipe(map(([data]) => this._orderData(data)));
        // Watch for ordered data or page changes to provide a paged set of data.
        const paginatedData = combineLatest([orderedData, pageChange]).pipe(map(([data]) => this._pageData(data)));
        // Watched for paged data changes and send the result to the table to render.
        this._renderChangesSubscription?.unsubscribe();
        this._renderChangesSubscription = paginatedData.subscribe(data => this._renderData.next(data));
    }
    /**
     * Returns a filtered data array where each filter object meet the condition specified by the {@link filter} predicate.
     * If no filter is set, returns the data array as is.
     */
    _filterData(data) {
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
    _orderData(data) {
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
    _pageData(data) {
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
    _updatePaginator(filteredDataLength) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1zb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL2NvbXBvbmVudHMvc3JjL2xpYi9jb21wb25lbnRzL3RhYmxlL2RhdGEtc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBc0NyQzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sT0FBTyxvQkFHWCxTQUFRLFVBQWE7SUEyQnJCLCtGQUErRjtJQUMvRixJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxJQUFTO1FBQ2hCLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QiwwREFBMEQ7UUFDMUQsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLE1BQWlDO1FBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FB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QyxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztvQkFFckMsK0RBQStEO29CQUMvRCxrRUFBa0U7b0JBQ2xFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDbEM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIG1lcmdlLCBPYnNlcnZhYmxlLCBvZiwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogVGhlIHNvcnRlciB0aGF0IGhvbGRzIHRoZSBjdXJyZW50IHNvcnQgc3RhdGUgKGRpcmVjdGlvbiwgY29sdW1ucykgYW5kIGFibGUgdG8gc29ydCBkYXRhLlxuICovXG5pbnRlcmZhY2UgUHJpem1Tb3J0ZXI8VCA9IHVua25vd24+IHtcbiAgcmVhZG9ubHkgY2hhbmdlcyQ6IE9ic2VydmFibGU8YW55PjtcbiAgc29ydChkYXRhOiBUW10pOiBUW107XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHRoYXQgbWF0Y2hlcyB0aGUgcmVxdWlyZWQgQVBJIHBhcnRzIGZvciB0aGUgYFByaXptUGFnaW5hdG9yT3V0cHV0YC5cbiAqXG4gKiBEZWNvdXBsZWQgc28gdGhhdCB1c2VycyBjYW4gZGVwZW5kIG9uIHRoZWlyIG93biBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcml6bVRhYmxlRGF0YVNvdXJjZVBhZ2VFdmVudCB7XG4gIHBhZ2U6IG51bWJlcjtcbiAgcm93czogbnVtYmVyO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSB0aGF0IG1hdGNoZXMgdGhlIHJlcXVpcmVkIEFQSSBwYXJ0cyBvZiB0aGUgYFByaXptUGFnaW5hdG9yQ29tcG9uZW50YC5cbiAqXG4gKiBEZWNvdXBsZWQgc28gdGhhdCB1c2VycyBjYW4gZGVwZW5kIG9uIHRoZWlyIG93biBpbXBsZW1lbnRhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcml6bVRhYmxlRGF0YVNvdXJjZVBhZ2luYXRvciB7XG4gIHBhZ2luYXRvckNoYW5nZTogT2JzZXJ2YWJsZTxQcml6bVRhYmxlRGF0YVNvdXJjZVBhZ2VFdmVudD47XG4gIC8qKlxuICAgKiAxLWJhc2VkIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgdmlld2VkIHBhZ2UuXG4gICAqL1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICByb3dzOiBudW1iZXI7XG4gIHRvdGFsUmVjb3JkczogbnVtYmVyO1xuICBpbml0aWFsaXplZD86IE9ic2VydmFibGU8dm9pZD47XG59XG5cbnR5cGUgRmlsdGVyUHJlZGljYXRlPFQ+ID0gKG86IFQsIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW47XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgdGhhdCBhY2NlcHRzIGEgY2xpZW50LXNpZGUgZGF0YSBhcnJheSBhbmQgaW5jbHVkZXMgbmF0aXZlIHN1cHBvcnQgb2YgZmlsdGVyaW5nLFxuICogc29ydGluZywgYW5kIHBhZ2luYXRpb24uXG4gKlxuICogKipOb3RlOioqIFRoaXMgY2xhc3MgaXMgbWVhbnQgdG8gYmUgYSBzaW1wbGUgZGF0YSBzb3VyY2UgdG8gaGVscCB5b3UgZ2V0IHN0YXJ0ZWQuIEFzIHN1Y2hcbiAqIGl0IGlzbid0IGVxdWlwcGVkIHRvIGhhbmRsZSBzb21lIG1vcmUgYWR2YW5jZWQgY2FzZXMgbGlrZSByb2J1c3QgaTE4biBzdXBwb3J0IG9yIHNlcnZlci1zaWRlXG4gKiBpbnRlcmFjdGlvbnMuIElmIHlvdXIgYXBwIG5lZWRzIHRvIHN1cHBvcnQgbW9yZSBhZHZhbmNlZCB1c2UgY2FzZXMsIGNvbnNpZGVyIGltcGxlbWVudGluZyB5b3VyXG4gKiBvd24gYERhdGFTb3VyY2VgLlxuICovXG5leHBvcnQgY2xhc3MgUHJpem1UYWJsZURhdGFTb3VyY2U8XG4gIFQsXG4gIFAgZXh0ZW5kcyBQcml6bVRhYmxlRGF0YVNvdXJjZVBhZ2luYXRvciA9IFByaXptVGFibGVEYXRhU291cmNlUGFnaW5hdG9yXG4+IGV4dGVuZHMgRGF0YVNvdXJjZTxUPiB7XG4gIC8qKiBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGEgbmV3IGRhdGEgYXJyYXkgaXMgc2V0IG9uIHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZGF0YTogQmVoYXZpb3JTdWJqZWN0PFRbXT47XG5cbiAgLyoqIFN0cmVhbSBlbWl0dGluZyByZW5kZXIgZGF0YSB0byB0aGUgdGFibGUgKGRlcGVuZHMgb24gb3JkZXJlZCBkYXRhIGNoYW5nZXMpLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9yZW5kZXJEYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxUW10+KFtdKTtcblxuICAvKiogU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBhIG5ldyBmaWx0ZXIgaXMgc2V0IG9uIHRoZSBkYXRhIHNvdXJjZS4gKi9cbiAgcHJpdmF0ZSByZWFkb25seSBfZmlsdGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxGaWx0ZXJQcmVkaWNhdGU8VD4gfCBudWxsPihudWxsKTtcblxuICAvKiogVXNlZCB0byByZWFjdCB0byBpbnRlcm5hbCBjaGFuZ2VzIG9mIHRoZSBwYWdpbmF0b3IgdGhhdCBhcmUgbWFkZSBieSB0aGUgZGF0YSBzb3VyY2UgaXRzZWxmLiAqL1xuICBwcml2YXRlIHJlYWRvbmx5IF9pbnRlcm5hbFBhZ2VDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIHRvIHRoZSBjaGFuZ2VzIHRoYXQgc2hvdWxkIHRyaWdnZXIgYW4gdXBkYXRlIHRvIHRoZSB0YWJsZSdzIHJlbmRlcmVkIHJvd3MsIHN1Y2hcbiAgICogYXMgZmlsdGVyaW5nLCBzb3J0aW5nLCBwYWdpbmF0aW9uLCBvciBiYXNlIGRhdGEgY2hhbmdlcy5cbiAgICovXG4gIHByaXZhdGUgX3JlbmRlckNoYW5nZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyZWQgc2V0IG9mIGRhdGEsIG9yIGFsbCB0aGUgZGF0YSBpZiB0aGVyZVxuICAgKiBpcyBubyBmaWx0ZXIuIFVzZWZ1bCBmb3Iga25vd2luZyB0aGUgc2V0IG9mIGRhdGEgdGhlIHRhYmxlIHJlcHJlc2VudHMuXG4gICAqIEZvciBleGFtcGxlLCBhICdzZWxlY3RBbGwoKScgZnVuY3Rpb24gd291bGQgbGlrZWx5IHdhbnQgdG8gc2VsZWN0IHRoZSBzZXQgb2YgZmlsdGVyZWQgZGF0YVxuICAgKiBzaG93biB0byB0aGUgdXNlciByYXRoZXIgdGhhbiBhbGwgdGhlIGRhdGEuXG4gICAqL1xuICBmaWx0ZXJlZERhdGEhOiBUW107XG5cbiAgLyoqIEFycmF5IG9mIGRhdGEgdGhhdCBzaG91bGQgYmUgaGFuZGxlZCBieSB0aGUgdGFibGUsIHdoZXJlIGVhY2ggb2JqZWN0IHJlcHJlc2VudHMgb25lIHJvdy4gKi9cbiAgZ2V0IGRhdGEoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YS52YWx1ZTtcbiAgfVxuXG4gIHNldCBkYXRhKGRhdGE6IFRbXSkge1xuICAgIGRhdGEgPSBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtdO1xuICAgIHRoaXMuX2RhdGEubmV4dChkYXRhKTtcblxuICAgIC8vIE5vcm1hbGx5IHRoZSBgZmlsdGVyZWREYXRhYCBpcyB1cGRhdGVkIGJ5IHRoZSByZS1yZW5kZXJcbiAgICAvLyBzdWJzY3JpcHRpb24sIGJ1dCB0aGF0IHdvbid0IGhhcHBlbiBpZiBpdCdzIGluYWN0aXZlLlxuICAgIGlmICghdGhpcy5fcmVuZGVyQ2hhbmdlc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fZmlsdGVyRGF0YShkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlsdGVyIHByZWRpY2F0ZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIGZpbHRlciBvdXQgb2JqZWN0cyBmcm9tIHRoZSBkYXRhIGFycmF5LlxuICAgKi9cbiAgZ2V0IGZpbHRlcigpOiBGaWx0ZXJQcmVkaWNhdGU8VD4gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsdGVyLnZhbHVlO1xuICB9XG5cbiAgc2V0IGZpbHRlcihmaWx0ZXI6IEZpbHRlclByZWRpY2F0ZTxUPiB8IG51bGwpIHtcbiAgICB0aGlzLl9maWx0ZXIubmV4dChmaWx0ZXIpO1xuXG4gICAgLy8gTm9ybWFsbHkgdGhlIGBmaWx0ZXJlZERhdGFgIGlzIHVwZGF0ZWQgYnkgdGhlIHJlLXJlbmRlclxuICAgIC8vIHN1YnNjcmlwdGlvbiwgYnV0IHRoYXQgd29uJ3QgaGFwcGVuIGlmIGl0J3MgaW5hY3RpdmUuXG4gICAgaWYgKCF0aGlzLl9yZW5kZXJDaGFuZ2VzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9maWx0ZXJEYXRhKHRoaXMuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb25uZWN0ZWQgc29ydGVyIHRoYXQgaG9sZHMgdGhlIGN1cnJlbnQgc29ydCBzdGF0ZSBhbmQgYWJsZSB0byBzb3J0IGRhdGEuXG4gICAqXG4gICAqIFNvcnQgY2hhbmdlcyAoc2VlIHtAbGluayBQcml6bVNvcnRlci5jaGFuZ2VzJH0pIGVtaXR0ZWQgYnkgdGhlIHNvcnRlciB3aWxsIHRyaWdnZXIgYW4gdXBkYXRlIHRvIHRoZSB0YWJsZSdzIHJlbmRlcmVkIGRhdGEuXG4gICAqL1xuICBnZXQgc29ydGVyKCk6IFByaXptU29ydGVyPFQ+IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRlcjtcbiAgfVxuXG4gIHNldCBzb3J0ZXIoc29ydGVyOiBQcml6bVNvcnRlcjxUPiB8IG51bGwpIHtcbiAgICB0aGlzLl9zb3J0ZXIgPSBzb3J0ZXI7XG4gICAgdGhpcy5fdXBkYXRlQ2hhbmdlU3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0ZXIhOiBQcml6bVNvcnRlcjxUPiB8IG51bGw7XG5cbiAgLyoqXG4gICAqIEluc3RhbmNlIG9mIHRoZSBwYWdpbmF0b3IgdXNlZCBieSB0aGUgdGFibGUgdG8gY29udHJvbCB3aGF0IHBhZ2Ugb2YgdGhlIGRhdGEgaXNcbiAgICogZGlzcGxheWVkLiBQYWdlIGNoYW5nZXMgKHNlZSB7QGxpbmsgUHJpem1UYWJsZURhdGFTb3VyY2VQYWdpbmF0b3IucGFnaW5hdG9yQ2hhbmdlfSkgZW1pdHRlZCBieSB0aGUgcGFnaW5hdG9yXG4gICAqIHdpbGwgdHJpZ2dlciBhbiB1cGRhdGUgdG8gdGhlIHRhYmxlJ3MgcmVuZGVyZWQgZGF0YS5cbiAgICpcbiAgICogTm90ZSB0aGF0IHRoZSBkYXRhIHNvdXJjZSB1c2VzIHRoZSBwYWdpbmF0b3IncyBwcm9wZXJ0aWVzIHRvIGNhbGN1bGF0ZSB3aGljaCBwYWdlIG9mIGRhdGFcbiAgICogc2hvdWxkIGJlIGRpc3BsYXllZC4gSWYgdGhlIHBhZ2luYXRvciByZWNlaXZlcyBpdHMgcHJvcGVydGllcyBhcyB0ZW1wbGF0ZSBpbnB1dHMsXG4gICAqIHRoZW4gYmUgc3VyZSB0aGF0IHRoZSBwYWdpbmF0b3IncyB2aWV3IGhhcyBiZWVuIGluaXRpYWxpemVkIGJlZm9yZSBhc3NpZ25pbmcgaXQgdG8gdGhpcyBkYXRhIHNvdXJjZS5cbiAgICovXG4gIGdldCBwYWdpbmF0b3IoKTogUCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl9wYWdpbmF0b3I7XG4gIH1cblxuICBzZXQgcGFnaW5hdG9yKHBhZ2luYXRvcjogUCB8IG51bGwpIHtcbiAgICB0aGlzLl9wYWdpbmF0b3IgPSBwYWdpbmF0b3I7XG4gICAgdGhpcy5fdXBkYXRlQ2hhbmdlU3Vic2NyaXB0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9wYWdpbmF0b3IhOiBQIHwgbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihpbml0aWFsRGF0YTogVFtdID0gW10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2RhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFRbXT4oaW5pdGlhbERhdGEpO1xuICAgIHRoaXMuX3VwZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3RzIHRvIHRoZSBkYXRhIHNvdXJjZS5cbiAgICpcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIGEgbmV3IHZhbHVlIHdoZW4gdGhlIGBkYXRhYCBjaGFuZ2VzLlxuICAgKi9cbiAgcHVibGljIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxUW10+IHtcbiAgICBpZiAoIXRoaXMuX3JlbmRlckNoYW5nZXNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbigpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZW5kZXJEYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2Nvbm5lY3RzIGZyb20gdGhlIGRhdGEgc291cmNlLlxuICAgKi9cbiAgcHVibGljIGRpc2Nvbm5lY3QoKTogdm9pZCB7XG4gICAgdGhpcy5fcmVuZGVyQ2hhbmdlc1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9yZW5kZXJDaGFuZ2VzU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdG8gY2hhbmdlcyB0aGF0IHNob3VsZCB0cmlnZ2VyIGFuIHVwZGF0ZSB0byB0aGUgdGFibGUncyByZW5kZXJlZCByb3dzLiBXaGVuIHRoZVxuICAgKiBjaGFuZ2VzIG9jY3VyLCBwcm9jZXNzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWx0ZXIsIHNvcnQsIGFuZCBwYWdpbmF0aW9uIGFsb25nIHdpdGhcbiAgICogdGhlIHByb3ZpZGVkIGJhc2UgZGF0YSBhbmQgc2VuZCBpdCB0byB0aGUgdGFibGUgZm9yIHJlbmRlcmluZy5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZUNoYW5nZVN1YnNjcmlwdGlvbigpOiB2b2lkIHtcbiAgICAvLyBTb3J0aW5nIGFuZC9vciBwYWdpbmF0aW9uIHNob3VsZCBiZSB3YXRjaGVkIGlmIHNvcnQgYW5kL29yIHBhZ2luYXRvciBhcmUgcHJvdmlkZWQuXG4gICAgLy8gVGhlIGV2ZW50cyBzaG91bGQgZW1pdCB3aGVuZXZlciB0aGUgY29tcG9uZW50IGVtaXRzIGEgY2hhbmdlIG9yIGluaXRpYWxpemVzLCBvciBpZiBub1xuICAgIC8vIGNvbXBvbmVudCBpcyBwcm92aWRlZCwgYSBzdHJlYW0gd2l0aCBqdXN0IGEgbnVsbCBldmVudCBzaG91bGQgYmUgcHJvdmlkZWQuXG4gICAgLy8gVGhlIGBzb3J0Q2hhbmdlYCBhbmQgYHBhZ2VDaGFuZ2VgIGFjdHMgYXMgYSBzaWduYWwgdG8gdGhlIGNvbWJpbmVMYXRlc3RzIGJlbG93IHNvIHRoYXQgdGhlXG4gICAgLy8gcGlwZWxpbmUgY2FuIHByb2dyZXNzIHRvIHRoZSBuZXh0IHN0ZXAuIE5vdGUgdGhhdCB0aGUgdmFsdWUgZnJvbSB0aGVzZSBzdHJlYW1zIGFyZSBub3QgdXNlZCxcbiAgICAvLyB0aGV5IHB1cmVseSBhY3QgYXMgYSBzaWduYWwgdG8gcHJvZ3Jlc3MgaW4gdGhlIHBpcGVsaW5lLlxuICAgIGNvbnN0IHNvcnRDaGFuZ2U6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLl9zb3J0ZXJcbiAgICAgID8gbWVyZ2UoXG4gICAgICAgICAgdGhpcy5fc29ydGVyLmNoYW5nZXMkLFxuICAgICAgICAgIG9mKG51bGwpIC8vIFRPRE8gdGhpcy5fc29ydGVyLmluaXRpYWxpemVkXG4gICAgICAgIClcbiAgICAgIDogb2YobnVsbCk7XG4gICAgY29uc3QgcGFnZUNoYW5nZTogT2JzZXJ2YWJsZTxQcml6bVRhYmxlRGF0YVNvdXJjZVBhZ2VFdmVudCB8IG51bGwgfCB2b2lkPiA9IHRoaXMuX3BhZ2luYXRvclxuICAgICAgPyAobWVyZ2UoXG4gICAgICAgICAgdGhpcy5fcGFnaW5hdG9yLnBhZ2luYXRvckNoYW5nZSxcbiAgICAgICAgICB0aGlzLl9pbnRlcm5hbFBhZ2VDaGFuZ2VzLFxuICAgICAgICAgIHRoaXMuX3BhZ2luYXRvci5pbml0aWFsaXplZCA/PyBvZihudWxsKVxuICAgICAgICApIGFzIE9ic2VydmFibGU8UHJpem1UYWJsZURhdGFTb3VyY2VQYWdlRXZlbnQgfCB2b2lkPilcbiAgICAgIDogb2YobnVsbCk7XG4gICAgY29uc3QgZGF0YVN0cmVhbSA9IHRoaXMuX2RhdGE7XG5cbiAgICAvLyBXYXRjaCBmb3IgYmFzZSBkYXRhIG9yIGZpbHRlciBjaGFuZ2VzIHRvIHByb3ZpZGUgYSBmaWx0ZXJlZCBzZXQgb2YgZGF0YS5cbiAgICBjb25zdCBmaWx0ZXJlZERhdGEgPSBjb21iaW5lTGF0ZXN0KFtkYXRhU3RyZWFtLCB0aGlzLl9maWx0ZXJdKS5waXBlKFxuICAgICAgbWFwKChbZGF0YV0pID0+IHRoaXMuX2ZpbHRlckRhdGEoZGF0YSkpXG4gICAgKTtcblxuICAgIC8vIFdhdGNoIGZvciBmaWx0ZXJlZCBkYXRhIG9yIHNvcnQgY2hhbmdlcyB0byBwcm92aWRlIGFuIG9yZGVyZWQgc2V0IG9mIGRhdGEuXG4gICAgY29uc3Qgb3JkZXJlZERhdGEgPSBjb21iaW5lTGF0ZXN0KFtmaWx0ZXJlZERhdGEsIHNvcnRDaGFuZ2VdKS5waXBlKFxuICAgICAgbWFwKChbZGF0YV0pID0+IHRoaXMuX29yZGVyRGF0YShkYXRhKSlcbiAgICApO1xuXG4gICAgLy8gV2F0Y2ggZm9yIG9yZGVyZWQgZGF0YSBvciBwYWdlIGNoYW5nZXMgdG8gcHJvdmlkZSBhIHBhZ2VkIHNldCBvZiBkYXRhLlxuICAgIGNvbnN0IHBhZ2luYXRlZERhdGEgPSBjb21iaW5lTGF0ZXN0KFtvcmRlcmVkRGF0YSwgcGFnZUNoYW5nZV0pLnBpcGUoXG4gICAgICBtYXAoKFtkYXRhXSkgPT4gdGhpcy5fcGFnZURhdGEoZGF0YSkpXG4gICAgKTtcblxuICAgIC8vIFdhdGNoZWQgZm9yIHBhZ2VkIGRhdGEgY2hhbmdlcyBhbmQgc2VuZCB0aGUgcmVzdWx0IHRvIHRoZSB0YWJsZSB0byByZW5kZXIuXG4gICAgdGhpcy5fcmVuZGVyQ2hhbmdlc1N1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLl9yZW5kZXJDaGFuZ2VzU3Vic2NyaXB0aW9uID0gcGFnaW5hdGVkRGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB0aGlzLl9yZW5kZXJEYXRhLm5leHQoZGF0YSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmaWx0ZXJlZCBkYXRhIGFycmF5IHdoZXJlIGVhY2ggZmlsdGVyIG9iamVjdCBtZWV0IHRoZSBjb25kaXRpb24gc3BlY2lmaWVkIGJ5IHRoZSB7QGxpbmsgZmlsdGVyfSBwcmVkaWNhdGUuXG4gICAqIElmIG5vIGZpbHRlciBpcyBzZXQsIHJldHVybnMgdGhlIGRhdGEgYXJyYXkgYXMgaXMuXG4gICAqL1xuICBwcml2YXRlIF9maWx0ZXJEYXRhKGRhdGE6IFRbXSk6IFRbXSB7XG4gICAgdGhpcy5maWx0ZXJlZERhdGEgPSB0eXBlb2YgdGhpcy5maWx0ZXIgPT09ICdmdW5jdGlvbicgPyBkYXRhLmZpbHRlcih0aGlzLmZpbHRlcikgOiBkYXRhO1xuXG4gICAgaWYgKHRoaXMucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLl91cGRhdGVQYWdpbmF0b3IodGhpcy5maWx0ZXJlZERhdGEubGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZERhdGE7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBjb3B5IG9mIHRoZSBkYXRhIGlmIHNvcnRlciBpcyBwcm92aWRlZCwgb3RoZXJ3aXNlIGp1c3QgcmV0dXJucyB0aGUgZGF0YSBhcnJheSBhcyBpcy5cbiAgICpcbiAgICogQ2FsbGVkIGFmdGVyIGNoYW5nZXMgYXJlIG1hZGUgdG8gdGhlIGZpbHRlcmVkIGRhdGEgb3Igd2hlbiBzb3J0IGNoYW5nZXMgYXJlIGVtaXR0ZWQgZnJvbSBgUHJpem1Tb3J0ZXJgLlxuICAgKiBAcGFyYW0gZGF0YSBUaGUgYXJyYXkgb2YgZGF0YSB0aGF0IHNob3VsZCBiZSBzb3J0ZWQuXG4gICAqIEBwYXJhbSBzb3J0ZXIgVGhlIGNvbm5lY3RlZCBzb3J0ZXIgdGhhdCBob2xkcyB0aGUgY3VycmVudCBzb3J0IHN0YXRlIGFuZCBhYmxlIHRvIHNvcnQgZGF0YS5cbiAgICovXG4gIHByaXZhdGUgX29yZGVyRGF0YShkYXRhOiBUW10pOiBUW10ge1xuICAgIC8vIElmIHRoZXJlIGlzIG5vIHNvcnRlciwgcmV0dXJuIHRoZSBkYXRhIHdpdGhvdXQgdHJ5aW5nIHRvIHNvcnQuXG4gICAgaWYgKCF0aGlzLnNvcnRlcikge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc29ydGVyLnNvcnQoZGF0YS5zbGljZSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgcGFnZWQgc2xpY2Ugb2YgdGhlIHByb3ZpZGVkIGRhdGEgYXJyYXkgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCBwYWdpbmF0b3IncyBwYWdlXG4gICAqIGluZGV4IGFuZCBsZW5ndGguIElmIHRoZXJlIGlzIG5vIHBhZ2luYXRvciBwcm92aWRlZCwgcmV0dXJucyB0aGUgZGF0YSBhcnJheSBhcyBwcm92aWRlZC5cbiAgICovXG4gIHByaXZhdGUgX3BhZ2VEYXRhKGRhdGE6IFRbXSk6IFRbXSB7XG4gICAgaWYgKCF0aGlzLnBhZ2luYXRvcikge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRJbmRleCA9ICh0aGlzLnBhZ2luYXRvci5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdpbmF0b3Iucm93cztcbiAgICByZXR1cm4gZGF0YS5zbGljZShzdGFydEluZGV4LCBzdGFydEluZGV4ICsgdGhpcy5wYWdpbmF0b3Iucm93cyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcGFnaW5hdG9yIHRvIHJlZmxlY3QgdGhlIGxlbmd0aCBvZiB0aGUgZmlsdGVyZWQgZGF0YSwgYW5kIG1ha2VzIHN1cmUgdGhhdCB0aGUgcGFnZVxuICAgKiBpbmRleCBkb2VzIG5vdCBleGNlZWQgdGhlIHBhZ2luYXRvcidzIGxhc3QgcGFnZS4gVmFsdWVzIGFyZSBjaGFuZ2VkIGluIGFzeW5jIG1hbm5lciB0b1xuICAgKiBndWFyZCBhZ2FpbnN0IG1ha2luZyBwcm9wZXJ0eSBjaGFuZ2VzIHdpdGhpbiBhIHJvdW5kIG9mIGNoYW5nZSBkZXRlY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIF91cGRhdGVQYWdpbmF0b3IoZmlsdGVyZWREYXRhTGVuZ3RoOiBudW1iZXIpOiB2b2lkIHtcbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcblxuICAgICAgaWYgKCFwYWdpbmF0b3IpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwYWdpbmF0b3IudG90YWxSZWNvcmRzID0gZmlsdGVyZWREYXRhTGVuZ3RoO1xuXG4gICAgICAvLyBJZiB0aGUgcGFnZSBpbmRleCBpcyBzZXQgYmV5b25kIHRoZSBwYWdlLCByZWR1Y2UgaXQgdG8gdGhlIGxhc3QgcGFnZS5cbiAgICAgIGlmIChwYWdpbmF0b3IuY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgICAgIGNvbnN0IGxhc3RQYWdlSW5kZXggPSBNYXRoLmNlaWwocGFnaW5hdG9yLnRvdGFsUmVjb3JkcyAvIHBhZ2luYXRvci5yb3dzKTtcbiAgICAgICAgY29uc3QgbmV3UGFnZUluZGV4ID0gTWF0aC5taW4ocGFnaW5hdG9yLmN1cnJlbnRQYWdlLCBsYXN0UGFnZUluZGV4KTtcblxuICAgICAgICBpZiAobmV3UGFnZUluZGV4ICE9PSBwYWdpbmF0b3IuY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICBwYWdpbmF0b3IuY3VycmVudFBhZ2UgPSBuZXdQYWdlSW5kZXg7XG5cbiAgICAgICAgICAvLyBTaW5jZSB0aGUgcGFnaW5hdG9yIG9ubHkgZW1pdHMgYWZ0ZXIgdXNlci1nZW5lcmF0ZWQgY2hhbmdlcyxcbiAgICAgICAgICAvLyB3ZSBuZWVkIG91ciBvd24gc3RyZWFtIHNvIHdlIGtub3cgdG8gc2hvdWxkIHJlLXJlbmRlciB0aGUgZGF0YS5cbiAgICAgICAgICB0aGlzLl9pbnRlcm5hbFBhZ2VDaGFuZ2VzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=