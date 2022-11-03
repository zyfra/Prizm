/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, forwardRef, HostListener, Input } from '@angular/core';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmTooltipContainerComponent } from './tooltip-container.component';
import { PZM_TOOLTIP_OPTIONS } from './tooltip-options';
import { pzmDefaultProp, pzmRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../polymorph';
import { pzmGenerateId } from '../../util';
import { PZM_HINT_OPTIONS, PzmHintOptions } from '../hint/hint-options';
import { PzmHintDirective } from '../hint/hint.directive';

@Directive({
    selector: '[pzmTooltip]:not(ng-container)',
    providers: [
      PzmDestroyService,
      {
        provide: PZM_HINT_OPTIONS,
        useExisting: forwardRef(() => PZM_TOOLTIP_OPTIONS)
      }
    ],
    exportAs: 'pzmTooltip'
})
export class PzmTooltipDirective extends PzmHintDirective {
  @Input('pzmTooltipMode')
  @pzmDefaultProp()
  override pzmHintMode: PzmHintOptions['mode'] = this.options.mode;

  @Input('pzmAutoReposition')
  @pzmDefaultProp()
  override pzmAutoReposition: PzmHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('pzmTooltipDirection')
  @pzmDefaultProp()
  override pzmHintDirection: PzmHintOptions['direction'] = this.options.direction;

  @Input('pzmTooltipId')
  @pzmDefaultProp()
  override pzmHintId: string = 'hintId_' + pzmGenerateId();

  @Input('pzmTooltipShowDelay')
  @pzmDefaultProp()
  override pzmHintShowDelay: PzmHintOptions['showDelay'] = this.options.showDelay;

  @Input('pzmTooltipHideDelay')
  @pzmDefaultProp()
  override pzmHintHideDelay: PzmHintOptions['hideDelay'] = this.options.hideDelay;

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
  protected override readonly containerComponent = PzmTooltipContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }
}
