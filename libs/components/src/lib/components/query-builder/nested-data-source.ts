import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, merge, map } from 'rxjs';

/**
 * Data source for nested tree.
 */
export class NestedDataSource<T> extends DataSource<T> {
  /**
   * Data for the nested tree
   */
  get data() {
    return this._data.value;
  }
  set data(value: T[]) {
    this._data.next(value);
  }
  private readonly _data = new BehaviorSubject<T[]>([]);

  connect(collectionViewer: CollectionViewer): Observable<T[]> {
    return merge(collectionViewer.viewChange, this._data).pipe(map(() => this.data));
  }

  disconnect() {
    // no op
  }
}
