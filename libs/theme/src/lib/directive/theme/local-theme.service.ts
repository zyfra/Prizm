import { Injectable } from '@angular/core';
import { PrizmTheme } from '../../types';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PrizmLocalThemeService {
  private readonly theme$$ = new BehaviorSubject<PrizmTheme | null>(null);
  readonly theme$ = this.theme$$.asObservable();

  public setTheme(theme: PrizmTheme | null): void {
    this.theme$$.next(theme);
  }
}
