import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PrizmPageInfo } from '../../types/pages';

@Injectable()
export class PrizmPageService {
  private readonly info$$ = new BehaviorSubject<PrizmPageInfo>({header: '', package: '', type: ''});

  public get info() {
    return this.info$$.value;
  }

  public setInfo(info: PrizmPageInfo): void {
    this.info$$.next(info);
  }
}
