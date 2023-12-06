import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, map, mapTo, takeUntil, tap } from 'rxjs/operators';
import { PrizmZoneEvent } from './model';
import { DOCUMENT } from '@angular/common';
import { prizmRaceInEmit } from '@prizm-ui/helpers';

@Injectable()
export class PrizmZoneEventService {
  private readonly childrenSet = new Set<PrizmZoneEventService>();
  private readonly childrenChanges$$ = new Subject<void>();
  private readonly childrenChanges$: Observable<Set<PrizmZoneEventService>> = this.childrenChanges$$.pipe(
    mapTo(this.childrenSet)
  );
  private parents = new Set<PrizmZoneEventService>();
  public readonly destroyPrevious$ = new Subject<void>();
  public readonly destroy$ = new Subject<void>();
  public readonly inside$$ = new Subject<PrizmZoneEvent>();
  public readonly outside$$ = new Subject<PrizmZoneEvent>();
  public hostElement$$ = new BehaviorSubject<HTMLElement | null>(null);
  private readonly innerEvent$$ = new Subject<{
    service: PrizmZoneEventService;
    name: string;
    event: UIEvent;
  }>();
  get children(): PrizmZoneEventService[] {
    return [...this.childrenSet];
  }

  constructor(
    @SkipSelf() @Optional() private zoneService: PrizmZoneEventService,
    @Inject(DOCUMENT) private readonly documentRef: Document
  ) {
    if (this.zoneService) this.parents.add(this.zoneService);
  }

  public triggerEvent(
    name: string,
    event: UIEvent,
    service: PrizmZoneEventService,
    guardFromRecursiveCall: Set<PrizmZoneEventService>
  ): void {
    this.innerEvent$$.next({
      name,
      event,
      service,
    });
    guardFromRecursiveCall.add(this);
    this.parents.forEach(parent => {
      if (guardFromRecursiveCall.has(parent)) return;
      parent.triggerEvent(name, event, service, guardFromRecursiveCall);
    });
  }

  public setParent(parent: PrizmZoneEventService): void {
    if (!parent) return;
    this.parents.add(parent);
  }

  public safeAddListener(eventName: string, hostElement: HTMLElement): void {
    this.hostElement$$.next(hostElement);
    this.destroy();
    if (eventName && hostElement) {
      this.initListener(eventName);
    }
  }

  public getInOutSideEvents(eventName: string): Observable<{ event: UIEvent; inside: boolean }> {
    return prizmRaceInEmit(
      [
        this.innerEvent$$.pipe(map(({ event }) => ({ event, inside: true }))),
        fromEvent<UIEvent>(this.documentRef, eventName).pipe(map(event => ({ event, inside: false }))),
      ],
      0
    ).pipe(takeUntil(this.destroy$));
  }

  private initListener(eventName: string): void {
    if (this.hostElement$$.value)
      fromEvent(this.hostElement$$.value, eventName)
        .pipe(
          tap(event => {
            this.triggerEvent(eventName, event as UIEvent, this, new Set());
          }),
          takeUntil(this.destroyPrevious$)
        )
        .subscribe();

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

  public destroy(): void {
    this.destroyPrevious$.next();
  }

  public ngOnDestroy(): void {
    this.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }
}
