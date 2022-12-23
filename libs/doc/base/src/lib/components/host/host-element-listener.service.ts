import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import {
  PrizmDocumentationPropertyType,
  PrizmPageComponentEvent,
  PrizmPageComponentInfoEvent,
  PrizmPageInfo,
} from '../../types/pages';
import { take, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrizmDocHostElementListenerService {
  private readonly event$$ = new Subject<PrizmPageComponentEvent>();
  private readonly checkInfo$$ = new Subject<PrizmPageComponentInfoEvent>();

  public readonly event$ = this.event$$.asObservable();
  public readonly checkInfo$ = this.checkInfo$$.asObservable();


  public emit(
    // type: PrizmDocumentationPropertyType,
    hasNotListener: boolean,
    data: unknown,
    event: string,
    type: string,
    page: PrizmPageInfo
  ): void {
    this.event$$.next({
      page,
      data,
      hasNotListener,
      event,
      type
    });
  }

  public emitInfo(
    data: PrizmPageComponentInfoEvent
  ): void {
    this.checkInfo$$.next(
      data
    );
  }
}
