import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, EMPTY, fromEvent, merge, Observable, race, Subject, timer } from 'rxjs';
import {
  debounceTime,
  filter,
  map,
  mapTo,
  share,
  shareReplay,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { PrizmOutsideEvent } from './model';
import { DOCUMENT } from '@angular/common';
import { filterTruthy } from '@prizm-ui/helpers';

@Injectable()
export class OutsizeEventService {
  private readonly childrenSet = new Set<OutsizeEventService>();
  private readonly childrenChanges$$ = new Subject<void>();
  private readonly childrenChanges$: Observable<Set<OutsizeEventService>> = this.childrenChanges$$.pipe(
    mapTo(this.childrenSet)
  );
  private parent: OutsizeEventService;
  public readonly destroyPrevious$ = new Subject<void>();
  public readonly destroy$ = new Subject<void>();
  public readonly insideEventSet = new Set<UIEvent>();
  public readonly inside$$ = new Subject<PrizmOutsideEvent>();
  public readonly outside$$ = new Subject<PrizmOutsideEvent>();
  public hostElement$$ = new BehaviorSubject<HTMLElement | null>(null);
  private inOutSideEvents$: Observable<{ event: UIEvent; inside: boolean }>;
  private insideListenedEvents$: Observable<UIEvent>;

  get children(): OutsizeEventService[] {
    return [...this.childrenSet];
  }

  private readonly lastTriggeredEvent$ = new Subject<PrizmOutsideEvent>();
  constructor(
    @SkipSelf() @Optional() private zoneService: OutsizeEventService,
    @Inject(DOCUMENT) private readonly documentRef: Document
  ) {
    this.initChildrenListener();
  }

  private initChildrenListener(): void {
    // this.childrenChanges$
    //   .pipe(
    //     switchMap(set => {
    //       const children = [...set.values()];
    //       return merge(...children.map(i => i.inside$$));
    //     }),
    //     // tap(i => this.inside$$.next(i)),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe();
  }

  public setParent(parent: this): void {
    if (!parent) return;
    this.parent = parent;
    this.parent.addChild(this);
  }

  public addChild(s: this): void {
    this.childrenSet.add(s);
    this.childrenChanges$$.next();
  }
  public removeChild(s: this): void {
    this.childrenSet.delete(s);
    this.childrenChanges$$.next();
  }

  public safeAddListener(eventName: string, hostElement: HTMLElement): void {
    this.hostElement$$.next(hostElement);
    this.destroy();
    if (eventName && hostElement) {
      this.initListener(eventName);
    }
  }

  public getInsideListenedEvents(eventName: string): Observable<UIEvent> {
    return (
      this.insideListenedEvents$ ??
      (this.insideListenedEvents$ = merge(this.hostElement$$, this.childrenChanges$).pipe(
        switchMap(() =>
          !this.hostElement$$.value
            ? EMPTY
            : merge(
                fromEvent<UIEvent>(this.hostElement$$.value, eventName),
                ...this.children.map(service => service.getInsideListenedEvents(eventName))
              )
        ),
        takeUntil(this.destroy$),
        share()
      ))
    );
  }

  public getInOutSideEvents(eventName: string): Observable<{ event: UIEvent; inside: boolean }> {
    const repeat$ = new BehaviorSubject<void>(void 0);
    return this.inOutSideEvents$
      ? this.inOutSideEvents$
      : (this.inOutSideEvents$ = repeat$
          .pipe(
            switchMap(() => {
              return race(
                this.getInsideListenedEvents(eventName).pipe(map(event => ({ event, inside: true }))),
                fromEvent<UIEvent>(this.documentRef, eventName).pipe(
                  debounceTime(0),
                  map(event => ({ event, inside: false }))
                )
              );
            })
          )
          .pipe(
            debounceTime(0),
            tap(() => repeat$.next()),
            takeUntil(this.destroy$),
            share()
          ));
  }

  private initListener(eventName: string): void {
    const repeat$ = new BehaviorSubject<void>(void 0);
    this.getInOutSideEvents(eventName)
      .pipe(
        tap(({ event, inside }) => {
          const time = performance.now();
          const emit = { event, time } as PrizmOutsideEvent;
          if (inside) this.inside$$.next(emit);
          else {
            this.outside$$.next(emit);
          }
        }),
        debounceTime(0),
        tap(() => repeat$.next()),
        takeUntil(this.destroyPrevious$)
      )
      .subscribe();
  }

  public delete(directive: any): void {
    this.childrenSet.delete(directive);
    this.parent?.childrenChanges$$.next();
  }

  public destroy(): void {
    this.destroyPrevious$.next();
  }

  public ngOnDestroy(): void {
    this.parent?.removeChild(this);
    this.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
