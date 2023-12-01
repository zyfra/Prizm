import { Injectable } from '@angular/core';
import { combineLatest, concat, isObservable, Observable, of, Subject, switchMap } from 'rxjs';
import { map, shareReplay, takeUntil } from 'rxjs/operators';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmThComponent } from './th/th.component';

type PrizmThGroup = any;
@Injectable()
export class PrizmTableService {
  private readonly set = new Set<PrizmThGroup>();
  private readonly changes$ = new Subject<void>();

  readonly tableMaxColspan$: Observable<number> = concat(of(void null), this.changes$).pipe(
    switchMap(() => {
      const thGroups = [...this.set];
      const flows$ = thGroups.map((i: PrizmThGroup) => i.groupStructure$).filter(isObservable) as Observable<{
        cols: PrizmThComponent<any>[];
        colspan: number;
      }>[];
      return combineLatest(flows$).pipe(
        map(i => {
          return Math.max(...i.map(i => i.colspan)) as number;
        })
      );
    }),
    shareReplay(1),
    takeUntil(this.destroy$)
  );

  constructor(private readonly destroy$: PrizmDestroyService) {}

  public addThGroup(thGroup: PrizmThGroup) {
    this.set.add(thGroup);

    this.changes$.next();
  }

  public removeThGroup(thGroup: PrizmThGroup) {
    this.set.delete(thGroup);

    this.changes$.next();
  }
}
