import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, EMPTY, fromEvent, merge, Observable, race, Subject } from 'rxjs';
import { debounceTime, map, mapTo, share, switchMap, takeUntil, tap } from 'rxjs/operators';
import { PrizmZoneEvent } from './model';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class PrizmZoneEventService {
  private readonly childrenSet = new Set<PrizmZoneEventService>();
  private readonly childrenChanges$$ = new Subject<void>();
  private readonly childrenChanges$: Observable<Set<PrizmZoneEventService>> = this.childrenChanges$$.pipe(
    mapTo(this.childrenSet)
  );
  private readonly parents = new Set<PrizmZoneEventService>();
  public readonly destroyPrevious$ = new Subject<void>();
  public readonly destroy$ = new Subject<void>();
  public readonly inside$$ = new Subject<PrizmZoneEvent>();
  public readonly outside$$ = new Subject<PrizmZoneEvent>();
  public hostElement$$ = new BehaviorSubject<HTMLElement | null>(null);
  private inOutSideEvents$!: Observable<{ event: UIEvent; inside: boolean }>;
  private insideListenedEvents$!: Observable<UIEvent>;
  private needUpdateListeners$ = merge(this.hostElement$$, this.childrenChanges$);
  get children(): PrizmZoneEventService[] {
    return [...this.childrenSet];
  }

  constructor(
    @SkipSelf() @Optional() private zoneService: PrizmZoneEventService,
    @Inject(DOCUMENT) private readonly documentRef: Document
  ) {}

  public setParent(parent: this): void {
    if (!parent) return;
    this.parents.add(parent);
    this.parents.forEach(parent => parent.addChild(this));
    // this.parent = parent;
    // this.parent.addChild(this);
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

  // TODO need refactoring (think about detect as in overlay-control)
  public getInsideListenedEvents(eventName: string): Observable<UIEvent> {
    return (
      this.insideListenedEvents$ ??
      (this.insideListenedEvents$ = this.needUpdateListeners$.pipe(
        switchMap(() =>
          this.hostElement$$.value
            ? merge(
                fromEvent<UIEvent>(this.hostElement$$.value, eventName),
                ...this.children.map(service => service.getInsideListenedEvents(eventName))
              )
            : EMPTY
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
                this.needUpdateListeners$.pipe(
                  debounceTime(0),
                  switchMap(() => fromEvent<UIEvent>(this.documentRef, eventName).pipe(debounceTime(0))),
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
          const emit = { event, time } as PrizmZoneEvent;
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

  public delete(service: PrizmZoneEventService): void {
    this.childrenSet.delete(service);
    this.parents.forEach(parent => parent.childrenChanges$$.next());
  }

  public destroy(): void {
    this.destroyPrevious$.next();
  }

  public ngOnDestroy(): void {
    this.parents.forEach(parent => parent.removeChild(this));
    this.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
