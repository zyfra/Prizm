import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable, race, Subject } from 'rxjs';
import {
  debounceTime,
  filter,
  finalize,
  map,
  mapTo,
  raceWith,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs/operators';
import { PrizmOutsideEvent } from './model';
import { DOCUMENT } from '@angular/common';

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
  public hostElement: HTMLElement;

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
    this.hostElement = hostElement;
    this.destroy();
    if (eventName && hostElement) {
      this.initListener(eventName);
      // this.initOutsideListener();
      // this.initInsideListener(eventName);
    }
  }

  private initOutsideListener(): void {
    // const FPS = 1000 / 60;
    // combineLatest([
    //   this.lastTriggeredEvent$,
    //   this.inside$$.pipe(startWith({ ev: null, time: performance.now() })),
    // ])
    //   .pipe(
    //     tap(([lastClick, insideClick]) => {
    //       const diff = lastClick.time - insideClick.time;
    //       if (diff > FPS) this.outside$$.next({ event: lastClick.event, time: lastClick.time });
    //     }),
    //     takeUntil(this.destroyPrevious$)
    //   )
    //   .subscribe();
  }

  private isInChildren(eventTriggeredElement: UIEvent): boolean {
    return !![...this.childrenSet].find(service => service.isIn(eventTriggeredElement));
  }

  public isInSelf(eventTriggeredElement: UIEvent): boolean {
    return this.insideEventSet.has(eventTriggeredElement);
  }

  public isIn(eventTriggeredElement: UIEvent) {
    const result = this.isInSelf(eventTriggeredElement) || this.isInChildren(eventTriggeredElement);
    return result;
  }

  private initListener(eventName: string): void {
    const repeat$ = new BehaviorSubject<void>(void 0);
    let lastInsideEvent: any;
    merge(this.childrenChanges$, repeat$)
      .pipe(
        switchMap(() => {
          return race(
            merge(
              fromEvent(this.hostElement, eventName).pipe(
                tap(() => console.log('#mz in main', this.hostElement, this.childrenSet))
              ),
              ...[...this.childrenSet]
                .filter(service => service.hostElement)
                .map(service => fromEvent<UIEvent>(service.hostElement, eventName))
            ).pipe(map(event => ({ event, inside: true }))),
            fromEvent<UIEvent>(this.documentRef, eventName).pipe(map(event => ({ event, inside: false })))
          );
        }),
        tap(({ event, inside }) => {
          const time = performance.now();
          const emit = { event, time } as PrizmOutsideEvent;
          if (inside) this.inside$$.next(emit);
          else this.outside$$.next(emit);
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
