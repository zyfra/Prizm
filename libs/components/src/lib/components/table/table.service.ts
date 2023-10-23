import { Injectable } from '@angular/core';
import { combineLatest, concat, Observable, of, Subject, switchMap } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

type PrizmThGroup = any;
@Injectable()
export class TableService {
  private readonly set = new Set<PrizmThGroup>();
  private readonly changes$ = new Subject<void>();

  constructor() {}

  readonly tableMaxColspan$: Observable<number> = concat(of(void null), this.changes$).pipe(
    switchMap(() => {
      const thGroups = [...this.set];
      return combineLatest(thGroups.map((i: PrizmThGroup) => i.structure$)).pipe(
        map(i => {
          return Math.max(...i.map(i => i.colspan)) as number;
        })
      );
    }),
    shareReplay(1)
  );

  public add(thGroup: PrizmThGroup) {
    this.set.add(thGroup);

    this.changes$.next();
  }

  public remove(thGroup: PrizmThGroup) {
    this.set.delete(thGroup);

    this.changes$.next();
  }
}
