import { concat, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

export class PrizmSetSubject<V> extends Set<V> {
  private readonly subject$$ = new Subject<void>();
  public readonly changes$ = this.subject$$.pipe(map(() => this));
  public readonly $ = concat(of(this), this.changes$);

  public override add(value: V): this {
    super.add(value);
    return this;
  }

  public override delete(key: V): boolean {
    return super.delete(key);
  }
}
