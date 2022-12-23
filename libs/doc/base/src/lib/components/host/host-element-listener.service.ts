import { ElementRef, Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { PrizmDocumentationPropertyType, PrizmPageComponentEvent, PrizmPageInfo } from '../../types/pages';
import { take, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrizmDocHostElementListenerService {
  private readonly event$$ = new Subject<PrizmPageComponentEvent>();

  public readonly event$ = this.event$$.asObservable();

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
}
