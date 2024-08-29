import { inject, Injectable, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { BehaviorSubject, concat, merge, of, startWith, Subject, takeUntil } from 'rxjs';
import { delay, filter, map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { PrizmOverflowItem } from './model';
import { prizmCreateResizeObservable } from '../../util';
import { hideOverflowElements } from './util';

@Injectable()
export class OverflowService implements OnDestroy {
  private readonly set = new Set<PrizmOverflowItem>();
  private host?: HTMLElement;
  private observer!: MutationObserver;
  private zone = inject(NgZone);
  private renderer = inject(Renderer2);
  private destroyPrevious$$ = new Subject<void>();
  private updatedItems$$ = new Subject<void>();
  private changes$$ = new BehaviorSubject<void>(void null);
  private mutation$$ = new Subject<void>();
  private active = true;

  public readonly items$ = this.updatedItems$$.pipe(
    startWith(),
    map(() => [...this.set]),
    shareReplay(1)
  );

  public readonly hiddenItems$ = this.items$.pipe(
    map(arr => arr.filter(i => i.html.style.display === 'none'))
  );
  public disable() {
    this.active = false;
    this.destroyPrevious();
    this.set.forEach(childItem => {
      this.renderer.setStyle(childItem.html, 'display', '');
      this.renderer.setStyle(childItem.html, 'visibility', '');
    });
  }

  private destroyPrevious() {
    this.destroyPrevious$$.next();
    this.observer?.disconnect();
  }

  public enable() {
    this.active = true;
    this.init(this.host);
  }

  public init(host?: HTMLElement) {
    this.destroyPrevious();
    if (!host) return;
    this.host = host;
    this.observer = new MutationObserver(() => this.mutation$$.next());
    this.observer.observe(host, { childList: true, subtree: true });
    let block = false;
    if (this.host)
      this.zone.runOutsideAngular(() => {
        merge(
          this.mutation$$.pipe(
            filter(() => !block),
            // block all other mutations invokes while we finish
            tap(() => (block = true))
          ),
          prizmCreateResizeObservable(host),
          this.changes$$
        )
          .pipe(
            filter(() => this.active),
            switchMap(() =>
              concat(...[...this.set].map(childItem => of(childItem))).pipe(
                tap(childItem => {
                  if (this.host && this.active) this.updateHost(this.host, childItem.html);
                })
              )
            ),
            // unblock next iteration
            delay(0),
            tap(() => (block = false)),
            takeUntil(this.destroyPrevious$$)
          )
          .subscribe();
      });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  public add(childItem: PrizmOverflowItem) {
    if (this.active) this.unVisible(childItem.html);
    this.set.add(childItem);
    this.changes$$.next();
  }
  public delete(childItem: PrizmOverflowItem) {
    this.set.delete(childItem);
    this.changes$$.next();
  }

  private unVisible(childItem: HTMLElement) {
    this.renderer.setStyle(childItem, 'visibility', 'hidden');
  }

  private updateHost(host: HTMLElement, childItem: HTMLElement) {
    hideOverflowElements(host, childItem);
    this.renderer.setStyle(childItem, 'visibility', 'visible');
    this.updatedItems$$.next();
  }
}
