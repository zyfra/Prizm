/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, forwardRef, HostListener, Input } from '@angular/core';
import { PrizmDestroyService } from '@digital-plant/zyfra-helpers';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PZM_TOOLTIP_OPTIONS } from './tooltip-options';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../polymorph';
import { pzmGenerateId } from '../../util';
import { PZM_HINT_OPTIONS, PrizmHintOptions } from '../hint/hint-options';
import { PrizmHintDirective } from '../hint/hint.directive';

@Directive({
    selector: '[pzmTooltip]:not(ng-container)',
    providers: [
      PrizmDestroyService,
      {
        provide: PZM_HINT_OPTIONS,
        useExisting: forwardRef(() => PZM_TOOLTIP_OPTIONS)
      }
    ],
    exportAs: 'pzmTooltip'
})
export class PrizmTooltipDirective extends PrizmHintDirective {
  @Input('pzmTooltipMode')
  @pzmDefaultProp()
  override pzmHintMode: PrizmHintOptions['mode'] = this.options.mode;

  @Input('pzmAutoReposition')
  @pzmDefaultProp()
  override pzmAutoReposition: PrizmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('pzmTooltipDirection')
  @pzmDefaultProp()
  override pzmHintDirection: PrizmHintOptions['direction'] = this.options.direction;

  @Input('pzmTooltipId')
  @pzmDefaultProp()
  override pzmHintId: string = 'hintId_' + pzmGenerateId();

  @Input('pzmTooltipShowDelay')
  @pzmDefaultProp()
  override pzmHintShowDelay: PrizmHintOptions['showDelay'] = this.options.showDelay;

  @Input('pzmTooltipHideDelay')
  @pzmDefaultProp()
  override pzmHintHideDelay: PrizmHintOptions['hideDelay'] = this.options.hideDelay;

  @Input('pzmTooltipHost')
  @pzmDefaultProp()
  override pzmHintHost: HTMLElement | null = null;

  @Input('pzmTooltip')
  @pzmRequiredSetter()
  override set pzmHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }
  protected override readonly containerComponent = PrizmTooltipContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }
}
