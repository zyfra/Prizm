import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';
import { PrizmTabComponent } from './components/tab.component';

@Injectable()
export class PrizmTabsService implements OnDestroy {
  readonly tabs = new Set<PrizmTabComponent>();
  readonly changes$$ = new Subject<Set<PrizmTabComponent>>();
  readonly closeTab$$ = new Subject<Set<PrizmTabComponent>>();
  readonly activeTabIdx$$ = new BehaviorSubject<number>(0);

  public isActiveTab(tab: PrizmTabComponent): Observable<boolean> {
    return combineLatest([
      this.activeTabIdx$$,
      this.changes$$.pipe(startWith(null)),
    ]).pipe(
      map(([activeTabIdx]) => {
        const tabIdx = this.getIndexOfTab(tab);
        return activeTabIdx === tabIdx;
      }),
      distinctUntilChanged()
    )
  }

  public getIndexOfTab(tab: PrizmTabComponent): number {
    return Array.from(this.tabs).findIndex((t) => t === tab);
  }
  public addTab(tab: PrizmTabComponent): void {
    console.log('#mz addTab', {tab, list: Array.from(this.tabs)});
    this.tabs.add(tab);
    this.changes$$.next(this.tabs);

  }

  public removeTab(tab: PrizmTabComponent): void {
    this.tabs.delete(tab);
    const currentTabIdx = this.getIndexOfTab(tab);
    this.correctActiveTabIdx(currentTabIdx);
    this.changes$$.next(this.tabs);
  }

  private correctActiveTabIdx(idx: number = this.activeTabIdx$$.value): void {
    const isActiveTab = this.activeTabIdx$$.value === idx;
    let newIdx = idx - 1;
    if (isActiveTab) newIdx++;
    if (!this.tabs.size) newIdx = 0;
    if (isActiveTab) this.activeTabIdx$$.next(newIdx)
  }

  public selectTab(tab: PrizmTabComponent): void {
    const idx = Array.from(this.tabs).findIndex((t) => t === tab);
    if (idx === -1) {
      return;
    }
    this.activeTabIdx$$.next(idx);
  }

  ngOnDestroy(): void {
    this.closeTab$$.complete();
    this.closeTab$$.unsubscribe();
    this.activeTabIdx$$.complete();
    this.activeTabIdx$$.unsubscribe();
    this.changes$$.unsubscribe();
    this.changes$$.unsubscribe();
  }
}
