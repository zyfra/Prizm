import { Injectable, OnDestroy, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Injectable()
export class PzmEventZoneService implements OnDestroy {
  private readonly eventSource$ = new BehaviorSubject<number>(Date.now());
  public readonly event$ = this.eventSource$.asObservable();
  private el_: HTMLElement;
  private parent: PzmEventZoneService;
  get el(): HTMLElement {
    return this.el_;
  }

  get rootEl(): HTMLElement {
    if (this.parent) return this.parent.rootEl;
    if (this.parentDropdownZoneService) return this.parentDropdownZoneService.rootEl;
    return this.el_;
  }


  get rootService(): PzmEventZoneService {
    if (this.parent) return this.parent.rootService;
    if (this.parentDropdownZoneService) return this.parentDropdownZoneService.rootService;
    return this;
  }

  private readonly destroyListener$ = new Subject<void>();

  constructor(
    @Optional() @SkipSelf() private readonly parentDropdownZoneService: PzmEventZoneService,
  ) {}

  public init(el: HTMLElement, eventType: string, parent?: PzmEventZoneService): void {
    this.el_ = el;
    this.parent = parent;
    this.destroyListener$.next();

    fromEvent(el, eventType, {
      capture: true
    }).pipe(
      tap(() => this.emit()),
      takeUntil(this.destroyListener$)
    ).subscribe();
  }

  private emit(): void {
    const time = Date.now();
    if (this.parent) this.parent.emit();
    this.eventSource$.next(time)
  }

  ngOnDestroy(): void {
    this.destroyListener$.next();
    this.destroyListener$.complete();
  }
}
