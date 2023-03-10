import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
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
  private readonly themeStorage = new Map<HTMLElement, string>();

  private readonly changeSource$ = new BehaviorSubject<{
    theme: PrizmTheme;
    el?: HTMLElement;
  }>({
    theme: 'light',
  });
  readonly change$ = this.changeSource$.pipe(tap(data => this.themeStorage.set(data.el, data.theme)));
  public get value(): string {
    return this.changeSource$.value.theme;
  }
  readonly changesTheme$ = this.change$.pipe(map(i => i.theme));
  public readonly attThemeKey = 'data-prizm-theme';
  public readonly subscription = new Subscription();

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.subscription.add(this.change$.pipe(tap(theme => this.setToHtml(theme.theme, theme.el))).subscribe());
  }

  public getLastThemeForElement(el: HTMLElement): string {
    return this.themeStorage.get(el);
  }

  public getLastThemeForElement$(el: HTMLElement = this.rootElement): Observable<string> {
    return this.change$.pipe(
      map(i => this.getLastThemeForElement(el)),
      distinctUntilChanged()
    );
  }

  public getInvertedThemeByElement$(
    element = this.rootElement,
    pairThemeValues: Record<string, string> = {
      light: 'dark',
      dark: 'light',
    }
  ): Observable<string> {
    return this.getLastThemeForElement$(element).pipe(map(theme => pairThemeValues[theme]));
  }

  public getByElement(el?: HTMLElement): PrizmTheme {
    return (el ?? this.rootElement)?.getAttribute(this.attThemeKey);
  }

  private setToHtml(theme: PrizmTheme, el?: HTMLElement): void {
    (el ?? this.rootElement)?.setAttribute(this.attThemeKey, theme);
  }

  public update(theme: PrizmTheme, el: HTMLElement = this.rootElement): void {
    this.changeSource$.next({
      theme,
      el,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
