import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmPageInfo } from '../../types/pages';
export type PrizmPageType = { header: string; package: string; type: string };

@Injectable()
export class PrizmPageService {
  private readonly info$$ = new BehaviorSubject<PrizmPageInfo>({ header: '', package: '', type: '' });

  public get info(): PrizmPageType {
    return this.info$$.value;
  }

  public setInfo(info: PrizmPageInfo): void {
    this.info$$.next(info);
  }
}
