import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  QueryList,
  Self,
} from '@angular/core';
import { prizmAutoEmit } from '@prizm-ui/core';
import { BehaviorSubject, concat, defer, Observable, of, timer } from 'rxjs';
import { map, mapTo, shareReplay, startWith, switchMap } from 'rxjs/operators';

import { PrizmHeadDirective } from '../directives/head.directive';
import { PrizmTableDirective } from '../directives/table.directive';
import { PRIZM_TABLE_PROVIDER } from '../providers/table.provider';
import { PrizmThComponent } from '../th/th.component';
import { moveInEventLoopIteration } from '@prizm-ui/helpers';
import { TableService } from '../table.service';
import { PrizmThGroupService } from './th-group.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: `tr[prizmThGroup]`,
  templateUrl: `./th-group.template.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PRIZM_TABLE_PROVIDER, PrizmThGroupService],
})
export class PrizmThGroupComponent<T extends Partial<Record<keyof T, any>>>
  implements AfterContentInit, OnDestroy
{
  private readonly columns$$ = new BehaviorSubject<ReadonlyArray<keyof T | string> | null>(null);
  @Input()
  @prizmAutoEmit({
    name: 'columns$$',
  })
  columns!: ReadonlyArray<keyof T | string>;

  get cols$(): Observable<ReadonlyArray<keyof T | string>> {
    return this.columns$$.pipe(
      switchMap(currentCols => {
        if (currentCols && Array.isArray(currentCols)) return of(currentCols);
        return this.table.columns$;
      })
    );
  }

  // @ContentChild(forwardRef(() => PrizmThComponent))
  // readonly th!: PrizmThComponent<T>;

  @ContentChildren(forwardRef(() => PrizmThComponent), { descendants: true })
  readonly th!: QueryList<PrizmThComponent<T>>;

  @ContentChildren(forwardRef(() => PrizmHeadDirective))
  readonly heads: QueryList<PrizmHeadDirective<T>> = new QueryList<PrizmHeadDirective<T>>();

  heads$: Observable<PrizmHeadDirective<T>[]> | null = null;

  readonly structure$ = concat(
    timer(0).pipe(mapTo([])),
    defer(() => of(this.th.toArray())),
    defer(() => this.th.changes.pipe(map(() => this.th.toArray())))
  ).pipe(
    map((cols: PrizmThComponent<T>[]) => {
      const colspan = cols.reduce((acc, element) => acc + element.el.nativeElement.colSpan, 0);
      return {
        cols,
        colspan,
      };
    }),
    shareReplay(1)
  );

  constructor(
    @Inject(forwardRef(() => PrizmTableDirective))
    public readonly table: PrizmTableDirective<T>,
    public readonly tableService: TableService,
    @Self() public readonly thGroupService: PrizmThGroupService
  ) {
    this.tableService.add(this);
  }

  ngAfterContentInit(): void {
    this.heads$ = this.heads.changes.pipe(
      startWith(null),
      switchMap(() => this.cols$),
      switchMap(cols => {
        const heads = this.heads.toArray();
        const columns = cols;

        if (!columns || columns.length === 0) {
          return of(heads);
        }

        // Display heads in order as specified by table's `column` property.
        return concat(
          of(new Array(columns.length).fill(null)),
          of(columns.map(c => heads.find(h => h.prizmHead === c))).pipe(moveInEventLoopIteration(2))
        );
      })
    ) as any;
  }

  ngOnDestroy(): void {
    this.tableService.remove(this);
  }
}
