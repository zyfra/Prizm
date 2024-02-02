import { OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { PrizmTheme } from '../types/theme';
import * as i0 from '@angular/core';
export declare class PrizmThemeService implements OnDestroy {
  private document;
  private rootElement_;
  set rootElement(el: HTMLElement | null);
  get rootElement(): HTMLElement;
  private readonly themeStorage;
  private readonly changeSource$;
  readonly change$: Observable<{
    theme: PrizmTheme;
    el?: HTMLElement | undefined;
  }>;
  get value(): string;
  readonly changesTheme$: Observable<string>;
  readonly attThemeKey = 'data-prizm-theme';
  readonly subscription: Subscription;
  constructor(document: Document);
  getLastThemeForElement(el?: HTMLElement): string | null;
  getLastThemeForElement$(el?: HTMLElement): Observable<string | null>;
  getInvertedThemeByElement$(
    element?: HTMLElement,
    pairThemeValues?: Record<string, string>
  ): Observable<string | null>;
  getByElement(el?: HTMLElement): PrizmTheme;
  private setToHtml;
  update(theme: PrizmTheme, el?: HTMLElement): void;
  ngOnDestroy(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PrizmThemeService, never>;
  static ɵprov: i0.ɵɵInjectableDeclaration<PrizmThemeService>;
}
