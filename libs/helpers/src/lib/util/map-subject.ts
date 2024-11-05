import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export class PrizmMapSubject<K, V> extends Map<K, V> {
  private $$ = new BehaviorSubject<void>(void 0);
  public readonly value = this.$$.pipe(map(() => this));
  public override set(key: K, value: V): this {
    this.$$.next();
    return super.set(key, value);
  }
  public override delete(key: K): boolean {
    this.$$.next();
    return super.delete(key);
  }
  public override clear() {
    this.$$.next();
    return super.clear();
  }
}
