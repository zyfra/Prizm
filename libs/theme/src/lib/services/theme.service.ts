import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PrizmTheme } from '../types/theme';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class PrizmThemeService implements OnDestroy {
    private rootElement_: HTMLElement;
    public set rootElement(el: HTMLElement) {
      this.rootElement_ = el;
    }
    public get rootElement(): HTMLElement {
      return this.rootElement_ ?? this.document.querySelector('body');
    }

    private readonly changeSource$ = new BehaviorSubject<{
      theme: PrizmTheme,
      el?: HTMLElement
    }>({
      theme: 'light',
    });
    readonly change$ = this.changeSource$.asObservable();
    public get value (): string {
      return this.changeSource$.value.theme;
    };
    readonly changesTheme$ = this.change$.pipe(map(i => i.theme));
    public readonly attThemeKey = 'data-prizm-theme';
    public readonly subscription = new Subscription();

    constructor(
      @Inject(DOCUMENT) private document: Document,
    ) {
      this.subscription.add(
        this.change$.pipe(
          tap(theme => this.setToHtml(theme.theme, theme.el))
        ).subscribe()
      );
    }

    public getByElement(el?: HTMLElement): PrizmTheme {
      return (el ?? this.rootElement)?.getAttribute(
        this.attThemeKey,
      )
    }

    public updateElementOnChange(el: HTMLElement): Observable<PrizmTheme> {
      return this.change$.pipe(
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
      el: HTMLElement = this.rootElement
    ): void {
      this.changeSource$.next({
        theme,
        el,
      });
    }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
