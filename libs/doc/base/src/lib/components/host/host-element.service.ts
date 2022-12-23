import { ElementRef, EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent, Subject, Subscription } from 'rxjs';
import { PrizmDocumentationPropertyType, PrizmPageInfo } from '../../types/pages';
import { take, takeUntil, tap } from 'rxjs/operators';
import { PrizmPageService } from '../page/page.service';
import { PrizmDocHostElementListenerService } from './host-element-listener.service';
import { prizmCapitalizeFirstLetter } from '@prizm-ui/core';


export type PrizmDocHosSet = {
  type: string;
  key: string;
};

@Injectable()
export class PrizmDocHostElementService implements OnDestroy {
  private readonly hostElement$$ = new BehaviorSubject<ElementRef | null>(null);
  private readonly subscription = new Subscription();
  private readonly destroyListener$ = new Subject<void>();
  // public readonly inputOutputMap = new Map<string, PrizmDocHosSet>();
  public readonly outputMap = new Map<string, PrizmDocHosSet>();
  public safeReInit(): void {
    this.destroyListener$.next();
    this.hostElement$$.pipe(
        takeUntil(this.destroyListener$),
        tap((el: ElementRef<any>) => {
          const allEventKeys = Object.keys(el.nativeElement).filter(
            (key) => el.nativeElement[key] instanceof EventEmitter
          );
          const notSpecifiedKeys = allEventKeys.filter(
            (key) => !this.outputMap.has(key)
          );
          this.outputMap.forEach(
            ({key, type}) => {
              this.addOutputListener(el, type, key);
            }
          )
          notSpecifiedKeys.forEach(
            (key) => {
              this.addOutputListener(el, 'unknown', key, true);
            }
          )
        })
    ).subscribe()
  }

  private addOutputListener(
    el: ElementRef<any>,
    type: string,
    eventRealKey: string,
    hasNotListener = false
  ): void {
    if (!el.nativeElement?.[eventRealKey]) {
      console.error('Prizm component already exists', {
      });
      return;
    }

    el.nativeElement?.[eventRealKey]?.pipe(
      takeUntil(this.destroyListener$),
      tap(
        (data) => {
          this.emit(data, type, eventRealKey, hasNotListener);
        }
      )
    )
      .subscribe();
  }

  public emit(
    data: unknown,
    type: string,
    event: string,
    hasNotListener: boolean
  ): void {
    this.prizmDocHostElementListenerService.emit(
      hasNotListener,
      data,
      event,
      type,
      this.prizmPageService.info
    );
  }

  public setHostElement(hostElement: ElementRef): void {
    this.hostElement$$.next(new ElementRef<any>(hostElement));
  }

  constructor(
    private readonly prizmPageService: PrizmPageService,
    private readonly prizmDocHostElementListenerService: PrizmDocHostElementListenerService,
  ) {
  }

  public destroy(): void {
    this.hostElement$$.complete();
    this.hostElement$$.unsubscribe();
    this.subscription.unsubscribe();
    this.destroyListener$.next();
    this.destroyListener$.complete();
  }

  public ngOnDestroy(): void {
    this.destroy();
  }

  public addListener(
    propertyMode: PrizmDocumentationPropertyType,
    propertyType: string,
    event: string,
  ): void {
    switch (propertyMode) {
      case 'input-output':
        event = `${event}Change`;
        this.outputMap.set(
          event,
          {
          key: event,
          type: propertyType,
        });
      break;
      case 'output':
        this.outputMap.set(
          event,
          {
          key: event,
          type: propertyType,
        });
      break;
    }

    this.safeReInit();
  }
}
