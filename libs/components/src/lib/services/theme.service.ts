import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PrizmTheme } from '../types/theme';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class PrizmThemeService implements OnDestroy {
    public rootElement: HTMLElement;
    private readonly themeSource$ = new BehaviorSubject<{
      theme: PrizmTheme,
      el?: HTMLElement
    }>({
      theme: 'light',
    });
    readonly theme$ = this.themeSource$.asObservable();
    readonly value$ = this.theme$.pipe(map(i => i.theme));
    public readonly attThemeKey = 'data-prizm-theme';
    public readonly subscription = new Subscription();

    constructor(
      @Inject(DOCUMENT) private document: Document,
    ) {
      this.subscription.add(
        this.theme$.pipe(
          tap(theme => this.setToHtml(theme.theme, theme.el))
        ).subscribe()
      );
    }

    public theme(el?: HTMLElement): PrizmTheme {
      return (el ?? this.rootElement)?.getAttribute(
        this.attThemeKey,
      )
    }

    public updateElementOnChange(el: HTMLElement): Observable<PrizmTheme> {
      return this.theme$.pipe(
        tap(
          (theme) => this.setToHtml(theme.theme, el)
        ),
        map(i => i.theme)
      )
    }

    private setToHtml(theme: PrizmTheme, el?: HTMLElement): void {
      (el ?? this.rootElement)?.setAttribute(
        this.attThemeKey,
        theme
      );
    }

    public update(
      theme: PrizmTheme,
      el: HTMLElement = this.rootElement ?? this.document.querySelector('body')
    ): void {
      this.themeSource$.next({
        theme,
        el,
      });
    }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
