import { ElementRef, Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounce, debounceTime, tap } from 'rxjs/operators';
import { PrizmTheme } from '../types/theme';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'platform',
})
export class PrizmThemeService {
    private readonly themeSource$ = new BehaviorSubject<PrizmTheme>('light');
    readonly theme$ = this.themeSource$.asObservable();
    get theme(): PrizmTheme {
      return this.themeSource$.value
    }
    public readonly attThemeKey = 'data-prizm-theme';

    constructor(
      @Inject(DOCUMENT) private document: Document,
    ) {
      this.theme$.pipe(
        tap(theme => this.setToHtml(theme))
      ).subscribe();
    }

    public updateElementOnChange(el: HTMLElement): Observable<PrizmTheme> {
      return this.theme$.pipe(
        tap(
          (theme) => this.setToHtml(theme, el)
        )
      )
    }

    private setToHtml(theme: PrizmTheme, el: HTMLElement = this.document.body.parentElement): void {
      el.setAttribute(
        this.attThemeKey,
        theme
      )
    }

    public update(theme: PrizmTheme): void {
      this.themeSource$.next(theme);
    }
}
