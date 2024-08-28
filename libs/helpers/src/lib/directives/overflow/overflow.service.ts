import { inject, Injectable, NgZone, OnDestroy, Renderer2 } from '@angular/core';
import { hideOverflowElements } from '@prizm-ui/helpers';
import { BehaviorSubject, concat, fromEvent, merge, of, Subject, takeUntil } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable()
export class OverflowService implements OnDestroy {
  private readonly set = new Set<HTMLElement>();
  private host?: HTMLElement;
  private observer!: MutationObserver;
  private zone = inject(NgZone);
  private renderer = inject(Renderer2);
  private resize$ = fromEvent(document, 'resize');
  private destroyPrevious$$ = new Subject<void>();
  private changes$$ = new BehaviorSubject<void>(void null);
  private mutation$$ = new Subject<void>();

  public init(host: HTMLElement) {
    this.destroyPrevious$$.next();
    this.host = host;
    this.observer?.disconnect();
    this.observer = new MutationObserver(() => this.mutation$$.next());
    this.observer.observe(this.host, { childList: true, subtree: true });
    if (this.host)
      this.zone.runOutsideAngular(() => {
        merge(this.mutation$$, this.resize$, this.changes$$)
          .pipe(
            switchMap(() =>
              concat(...[...this.set].map(childItem => of(childItem))).pipe(
                tap(childItem => {
                  if (this.host) this.updateHost(this.host, childItem);
                })
              )
            ),
            takeUntil(this.destroyPrevious$$)
          )
          .subscribe();
      });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  public add(childItem: HTMLElement) {
    this.unVisible(childItem);
    this.set.add(childItem);
    this.changes$$.next();
  }
  public delete(childItem: HTMLElement) {
    this.set.delete(childItem);
    this.changes$$.next();
  }

  private unVisible(childItem: HTMLElement) {
    this.renderer.setStyle(childItem, 'visibility', 'hidden');
  }

  private updateHost(host: HTMLElement, childItem: HTMLElement) {
    this.renderer.setStyle(childItem, 'visibility', 'visible');
    hideOverflowElements(host, childItem);
  }
}
