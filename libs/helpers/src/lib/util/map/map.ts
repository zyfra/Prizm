import { concat, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export class PrizmMap<K, V> extends Map<K, V> {
  private readonly subject$$ = new Subject<void>();
  public readonly changes$ = this.subject$$.pipe(map(() => this));
  public readonly $ = concat(of(this), this.changes$);
  public entries$(): Observable<IterableIterator<[K, V]>> {
    return this.subject$$.pipe(map(() => super.entries()));
  }

  public override set(key: K, value: V): this {
    super.set(key, value);
    return this;
  }
  public override delete(key: K): boolean {
    return super.delete(key);
  }
}
