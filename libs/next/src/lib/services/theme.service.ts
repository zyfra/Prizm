import { ElementRef, Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounce, debounceTime, tap } from 'rxjs/operators';
import { PzmTheme } from '../types/theme';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'platform',
})
export class PzmThemeService {
    private readonly themeSource$ = new BehaviorSubject<PzmTheme>('light');
    readonly theme$ = this.themeSource$.asObservable();
    get theme(): PzmTheme {
      return this.themeSource$.value
    }
    public readonly attThemeKey = 'data-zui-theme';

    constructor(
      @Inject(DOCUMENT) private document: Document,
    ) {
      this.theme$.pipe(
        tap(theme => this.setToHtml(theme))
      ).subscribe();
    }

    public updateElementOnChange(el: HTMLElement): Observable<PzmTheme> {
      return this.theme$.pipe(
        tap(
          (theme) => this.setToHtml(theme, el)
        )
      )
    }

    private setToHtml(theme: PzmTheme, el: HTMLElement = this.document.body.parentElement): void {
      el.setAttribute(
        this.attThemeKey,
        theme
      )
    }

    public update(theme: PzmTheme): void {
      this.themeSource$.next(theme);
    }
}
