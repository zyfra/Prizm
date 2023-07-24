/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
import { PrizmDestroyService, prizmGenerateId } from '@prizm-ui/helpers';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PRIZM_TOOLTIP_OPTIONS } from './tooltip-options';
import { prizmDefaultProp, prizmRequiredSetter } from '@prizm-ui/core';
import { PolymorphContent } from '../polymorph';
import { PRIZM_HINT_OPTIONS, PrizmHintOptions } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';

@Directive({
  selector: '[prizmTooltip]:not(ng-container)',
  providers: [
    PrizmDestroyService,
    {
      provide: PRIZM_HINT_OPTIONS,
      useExisting: forwardRef(() => PRIZM_TOOLTIP_OPTIONS),
    },
  ],
  exportAs: 'prizmTooltip',
})
export class PrizmTooltipDirective extends PrizmHintDirective {
  @Input('prizmAutoReposition')
  @prizmDefaultProp()
  override prizmAutoReposition: PrizmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('prizmTooltipDirection')
  @prizmDefaultProp()
  override prizmHintDirection: PrizmHintOptions['direction'] = this.options.direction;

  @Input('prizmTooltipId')
  @prizmDefaultProp()
  override prizmHintId: string = 'hintId_' + prizmGenerateId();

  @Input('prizmTooltipShowDelay')
  @prizmDefaultProp()
  override prizmHintShowDelay: PrizmHintOptions['showDelay'] = this.options.showDelay;

  @Input('prizmTooltipHideDelay')
  @prizmDefaultProp()
  override prizmHintHideDelay: PrizmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input('prizmTooltipHost')
  @prizmDefaultProp()
  override prizmHintHost: HTMLElement | null = null;

  @Input('prizmTooltipContext')
  @prizmDefaultProp()
  override prizmHintContext = {};

  @Input('prizmTooltipCanShow')
  @prizmDefaultProp()
  override prizmHintCanShow = true;

  @Input('prizmTooltip')
  @prizmRequiredSetter()
  override set prizmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('prizmTooltipShowed')
  override prizmHintShowed = new EventEmitter<boolean>();

  protected override readonly containerComponent = PrizmTooltipContainerComponent;
  protected override readonly onHoverActive = false;
  protected clickedInside = false;
  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    const clickOnTooltip = this.elementRef.nativeElement.contains(target);
    if (clickOnTooltip && !this.clickedInside) this.clickedInside = true;
    if (!this.clickedInside) return;
    this.show$.next(clickOnTooltip);
  }

  @HostListener('document:keydown.esc', ['$event'])
  public closeOnEsc(): void {
    if (this.show) this.show = false;
  }
}
