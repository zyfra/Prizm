import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, combineLatest, concat, Observable, of, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, startWith, take, takeUntil, tap } from 'rxjs/operators';
import { PrizmTabComponent } from './components/tab.component';
import { filterTruthy, PrizmDestroyService, prizmFromMutationObserver$ } from '@prizm-ui/helpers';
import { PrizmTabCanOpen } from './tabs.model';

@Injectable()
export class PrizmTabsService implements OnDestroy {
  readonly tabs = new Map<number, PrizmTabComponent>();
  readonly changes$$ = new Subject<Map<number, PrizmTabComponent>>();
  readonly removed$$ = new Subject<PrizmTabComponent>();
  private changeParent$_!: Observable<any>;
  get changeParent$() {
    return this.changeParent$_;
  }
  readonly closeTab$$ = new Subject<Map<number, PrizmTabComponent>>();
  private readonly activeTabIdx$$ = new BehaviorSubject<number>(0);
  readonly activeTabIdx$ = this.activeTabIdx$$.pipe(distinctUntilChanged());

  get activeTabIdx() {
    return this.activeTabIdx$$.value;
  }
  get tabs$() {
    return concat(of(this.tabs), this.changes$$);
  }
  public canOpenTab: PrizmTabCanOpen | null = null;

  constructor(private readonly destroy: PrizmDestroyService) {}

  public initObservingTabsParent(el: HTMLElement) {
    this.changeParent$_ = prizmFromMutationObserver$(el, {
      subtree: true,
      childList: true,
    });
  }
  public isActiveTab(tab: PrizmTabComponent): Observable<boolean> {
    return combineLatest([this.activeTabIdx$$, this.tabs$]).pipe(
      map(([activeTabIdx]) => {
        const tabIdx = this.findTabIdx(tab);
        return activeTabIdx === tabIdx;
      }),
      distinctUntilChanged()
    );
  }

  public getTabByIdx(idx: number): PrizmTabComponent {
    return this.tabs.get(idx) as PrizmTabComponent;
  }

  public updateTab(tab: PrizmTabComponent, idx?: number): void {
    const tabIdx = typeof idx !== 'number' ? this.tabs.size : idx;
    if (this.tabs.get(tabIdx) === tab) return;
    this.tabs.set(tabIdx, tab);
    this.changes$$.next(this.tabs);
  }

  public removeTab(tab: PrizmTabComponent): void {
    const idx = this.findTabIdx(tab);
    this.tabs.delete(idx);
    const currentTabIdx = this.findTabIdx(tab);

    this.removed$$.next(tab);
    if (currentTabIdx === -1) return;
    this.correctActiveTabIdx(currentTabIdx);

    this.changes$$.next(this.tabs);
  }

  private correctActiveTabIdx(idx: number = this.activeTabIdx$$.value): void {
    const isActiveTab = this.activeTabIdx$$.value === idx;
    let newIdx = idx - 1;
    if (isActiveTab) newIdx++;
    if (!this.tabs.size) newIdx = 0;
    if (isActiveTab && this.activeTabIdx$$.value !== newIdx) this.activeTabIdx$$.next(newIdx);
  }
  public findTabIdx(tab: PrizmTabComponent): number {
    return Array.from(this.tabs.entries()).find(([, t]) => t === tab)?.[0] ?? -1;
  }
  public selectTab(tab: PrizmTabComponent): void {
    const idx = this.findTabIdx(tab);
    if (idx === -1) {
      return;
    }
    this.selectTabIfCanOpen(tab, idx);
  }

  private selectTabIfCanOpen(tab: PrizmTabComponent, idx: number): void {
    if (idx === this.activeTabIdx) {
      return;
    }

    (typeof this.canOpenTab === 'function' ? this.canOpenTab(tab) : of(true))
      .pipe(
        take(1),
        filterTruthy(),
        tap(() => this.activeTabIdx$$.next(idx)),
        takeUntil(this.destroy)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.closeTab$$.complete();
    this.closeTab$$.unsubscribe();
    this.activeTabIdx$$.complete();
    this.activeTabIdx$$.unsubscribe();
    this.changes$$.unsubscribe();
    this.changes$$.unsubscribe();
  }

  public updateActiveTab(idx: number): void {
    this.activeTabIdx$$.next(idx);
  }
}
