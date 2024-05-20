/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, forwardRef, HostListener, inject, Input } from '@angular/core';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PRIZM_TOOLTIP_OPTIONS } from './tooltip-options';
import { PolymorphContent } from '../polymorph';
import { PRIZM_HINT_OPTIONS } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';
import { PrizmTheme } from '@prizm-ui/theme';

@Directive({
  selector: '[prizmTooltip]:not(ng-container)',
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_HINT_OPTIONS,
      useExisting: forwardRef(() => PRIZM_TOOLTIP_OPTIONS),
    },
  ],
  hostDirectives: [
    {
      directive: PrizmHintDirective,
      inputs: [
        'prizmAutoReposition: prizmAutoReposition',
        'prizmHintHideDelay: prizmTooltipHideDelay',
        'prizmHintDirection: prizmTooltipDirection',
        'prizmHintId: prizmTooltipId',
        'prizmHint: prizmTooltip',
        'prizmHintShowDelay: prizmTooltipShowDelay',
        'prizmHintTheme: prizmTooltipTheme',
        'prizmHintHost: prizmTooltipHost',
        'prizmHintContext: prizmTooltipContext',
        'prizmHintCanShow: prizmTooltipCanShow',
      ],
      outputs: ['prizmHintShowed: prizmTooltipShowed'],
    },
  ],
  exportAs: 'prizmTooltip',
})
export class PrizmTooltipDirective {
  @Input()
  set prizmTooltip(value: PolymorphContent | null) {
    if (!value) {
      this.hostedHint.content = '';
      return;
    }

    this.hostedHint.content = value;
    this.hostedHint.prizmHint = value;
  }
  get prizmTooltip() {
    return this.hostedHint.content;
  }

  /**
   * @deprecate since v4
   * now for tooltip use only prizmTooltipTheme
   * */
  @Input()
  set prizmHintTheme(theme: PrizmTheme | null) {
    this.hostedHint.prizmHintTheme = theme;
  }
  /**
   * @deprecate since v4
   * now for tooltip use only prizmTooltipTheme
   * */
  get prizmHintTheme(): PrizmTheme | null {
    return this.hostedHint.prizmHintTheme;
  }

  public readonly hostedHint = inject(PrizmHintDirective);

  constructor() {
    this.hostedHint.containerComponent = PrizmTooltipContainerComponent;
    this.hostedHint.onHoverActive = false;
  }

  protected clickedInside = false;
  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    if (this.hostedHint.overlay?.viewEl?.contains(target)) return;
    const clickedOnElement = this.hostedHint.elementRef.nativeElement.contains(target);
    if (clickedOnElement && !this.clickedInside) this.clickedInside = true;
    if (!this.clickedInside) return;
    this.hostedHint.show$.next(clickedOnElement);
  }

  @HostListener('document:keydown.esc', ['$event'])
  public closeOnEsc(): void {
    if (this.hostedHint.show) this.hostedHint.show = false;
  }
}
