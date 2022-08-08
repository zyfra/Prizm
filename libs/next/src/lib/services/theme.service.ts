import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ZuiTheme } from '../types/theme';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'platform',
})
export class ZuiThemeService {
    private readonly themeSource$ = new BehaviorSubject<ZuiTheme>('light');
    readonly theme$ = this.themeSource$.asObservable();
    get theme(): ZuiTheme {
      return this.themeSource$.value
    }
    private readonly attThemeKey = 'data-zui-theme';

    constructor(
      @Inject(DOCUMENT) private document: Document,
    ) {
      this.theme$.pipe(
        tap(theme => this.setToHtml(theme))
      ).subscribe();
    }

    private setToHtml(theme: ZuiTheme): void {
      document.body.setAttribute(
        this.attThemeKey,
        theme
      )
    }

    public update(theme: ZuiTheme): void {
      this.themeSource$.next(theme);
    }
}
