import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { prizmGetFPS } from '@prizm-ui/core';
import { combineLatest, fromEvent, merge, Observable, race, Subject } from 'rxjs';
import {
  debounceTime,
  filter,
  finalize,
  map,
  mapTo,
  startWith,
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
  public readonly inside$$ = new Subject<PrizmOutsideEvent>();
  public readonly outside$$ = new Subject<PrizmOutsideEvent>();

  constructor(
    @SkipSelf() @Optional() private zoneService: OutsizeEventService,
    @Inject(DOCUMENT) private readonly documentRef: Document
  ) {
    this.initChildrenListener();
  }

  private initChildrenListener(): void {
    this.childrenChanges$
      .pipe(
        switchMap(set => {
          const children = [...set.values()];
          return merge(...children.map(i => i.inside$$));
        }),
        tap(i => this.inside$$.next(i)),
        takeUntil(this.destroy$)
      )
      .subscribe();
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
    this.destroy();
    if (eventName && hostElement) {
      this.initOutsideListener(eventName);
      this.initInsideListener(eventName, hostElement);
    }
  }

  private initOutsideListener(eventName: string): void {
    const FPS = 1000 / 60;
    combineLatest([
      fromEvent<UIEvent>(this.documentRef, eventName).pipe(map(ev => ({ ev, time: performance.now() }))),
      this.inside$$.pipe(startWith({ ev: null, time: performance.now() })),
    ])
      .pipe(
        debounceTime(FPS),
        tap(([doc, cont]) => {
          const diff = doc.time - cont.time;
          if (diff > FPS) this.outside$$.next({ event: doc.ev, time: doc.time });
        }),
        takeUntil(this.destroyPrevious$)
      )
      .subscribe();
  }

  private initInsideListener(eventName: string, hostElement: HTMLElement): void {
    fromEvent(hostElement, eventName)
      .pipe(
        map(event => ({ event, time: performance.now() })),
        tap(data => {
          this.inside$$.next(data as PrizmOutsideEvent);
        }),
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
