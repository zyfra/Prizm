import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PrizmPageComponentEvent, PrizmPageComponentInfoEvent, PrizmPageInfo } from '../../types/pages';

@Injectable({
  providedIn: 'root',
})
export class PrizmDocHostElementListenerService {
  private readonly event$$ = new Subject<PrizmPageComponentEvent>();
  private readonly checkInfo$$ = new Subject<PrizmPageComponentInfoEvent>();

  public readonly event$ = this.event$$.asObservable();
  public readonly checkInfo$ = this.checkInfo$$.asObservable();

  public emit(
    hasNotListener: boolean,
    listenerElementKey: string,
    data: unknown,
    event: string,
    type: string,
    page: PrizmPageInfo
  ): void {
    this.event$$.next({
      page,
      data,
      key: listenerElementKey,
      hasNotListener,
      event,
      type,
    });
  }

  public emitInfo(data: PrizmPageComponentInfoEvent): void {
    this.checkInfo$$.next(data);
  }
}
