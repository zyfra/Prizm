import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  QueryList,
} from '@angular/core';
import { prizmAutoEmit, prizmDefaultProp, prizmObservable } from '@prizm-ui/core';
import { BehaviorSubject, Observable, of, ReplaySubject } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';

import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmThComponent } from '../th/th.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `tr[prizmThGroup]`,
  templateUrl: `./th-group.template.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PRIZM_TABLE_PROVIDER],
})
export class PrizmThGroupComponent<T extends Partial<Record<keyof T, any>>> implements AfterContentInit {
  private readonly columns$$ = new BehaviorSubject<ReadonlyArray<keyof T | string> | null>(null);
  @Input()
  @prizmAutoEmit({
    name: 'columns$$',
  })
  columns: ReadonlyArray<keyof T | string>;

  get cols$(): Observable<ReadonlyArray<keyof T | string>> {
    return this.columns$$.pipe(
      switchMap(currentCols => {
        if (currentCols && Array.isArray(currentCols)) return of(currentCols);
        return this.table.columns$;
      })
    );
  }

  @ContentChild(forwardRef(() => PrizmThComponent))
  readonly th!: PrizmThComponent<T>;

  @ContentChildren(forwardRef(() => PrizmHeadDirective))
  readonly heads: QueryList<PrizmHeadDirective<T>> = new QueryList<PrizmHeadDirective<T>>();

  heads$: Observable<PrizmHeadDirective<T>[]> | null = null;

  constructor(
    @Inject(forwardRef(() => PrizmTableDirective))
    public readonly table: PrizmTableDirective<T>
  ) {}

  ngAfterContentInit(): void {
    this.heads$ = this.heads.changes.pipe(
      startWith(null),
      switchMap(() => this.cols$),
      map(cols => {
        const heads = this.heads.toArray();
        const columns = cols;
        if (!columns || columns.length === 0) {
          return heads;
        }

        // Display heads in order as specified by table's `column` property.
        return columns.map(c => heads.find(h => h.prizmHead === c));
      })
    );
  }
}
