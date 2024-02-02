import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmThemeService } from '../../services/theme.service';
import { PrizmThemeInvertedValuesService } from './theme-inverted-values.service';
import * as i0 from '@angular/core';
export declare class PrizmThemeInvertedDirective implements OnInit {
  readonly themeService: PrizmThemeService;
  readonly elementRef: ElementRef;
  readonly destroy$: PrizmDestroyService;
  readonly themeInvertedValuesService: PrizmThemeInvertedValuesService;
  readonly prizmThemeChange: EventEmitter<string>;
  themeElement: HTMLElement;
  private readonly themeElement$$;
  ngOnInit(): void;
  static ɵfac: i0.ɵɵFactoryDeclaration<PrizmThemeInvertedDirective, never>;
  static ɵdir: i0.ɵɵDirectiveDeclaration<
    PrizmThemeInvertedDirective,
    '[prizmThemeInverted]',
    never,
    { themeElement: { alias: 'themeElement'; required: false } },
    { prizmThemeChange: 'prizmThemeChange' },
    never,
    never,
    false,
    never
  >;
}
