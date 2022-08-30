/* eslint-disable @angular-eslint/no-input-rename */
import { Directive, forwardRef, HostListener, Input } from '@angular/core';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiTooltipContainerComponent } from './tooltip-container.component';
import { ZUI_TOOLTIP_OPTIONS } from './tooltip-options';
import { zuiDefaultProp, zuiRequiredSetter } from '../../decorators';
import { PolymorphContent } from '../polymorph';
import { zuiGenerateId } from '../../util';
import { ZuiHintOptions, ZUI_HINT_OPTIONS } from '../hint/hint-options';
import { ZuiHintDirective } from '../hint/hint.directive';

@Directive({
    selector: '[zuiTooltip]:not(ng-container)',
    providers: [
      ZuiDestroyService,
      {
        provide: ZUI_HINT_OPTIONS,
        useExisting: forwardRef(() => ZUI_TOOLTIP_OPTIONS)
      }
    ],
    exportAs: 'zuiTooltip'
})
export class ZuiTooltipDirective extends ZuiHintDirective {
  @Input('zuiTooltipMode')
  @zuiDefaultProp()
  override zuiHintMode: ZuiHintOptions['mode'] = this.options.mode;

  @Input('zuiAutoReposition')
  @zuiDefaultProp()
  override zuiAutoReposition: ZuiHintOptions['autoReposition'] = this.options.autoReposition;

  @Input('zuiTooltipDirection')
  @zuiDefaultProp()
  override zuiHintDirection: ZuiHintOptions['direction'] = this.options.direction;

  @Input('zuiTooltipId')
  @zuiDefaultProp()
  override zuiHintId: string = 'hintId_' + zuiGenerateId();

  @Input('zuiTooltipShowDelay')
  @zuiDefaultProp()
  override zuiHintShowDelay: ZuiHintOptions['showDelay'] = this.options.showDelay;

  @Input('zuiTooltipHideDelay')
  @zuiDefaultProp()
  override zuiHintHideDelay: ZuiHintOptions['hideDelay'] = this.options.hideDelay;

  @Input('zuiTooltipHost')
  @zuiDefaultProp()
  override zuiHintHost: HTMLElement | null = null;

  @Input('zuiTooltip')
  @zuiRequiredSetter()
  override set zuiHint(value: PolymorphContent | null) {
    if (!value) {
      this.content = '';
      return;
    }

    this.content = value;
  }
  protected override readonly containerComponent = ZuiTooltipContainerComponent;
  protected override readonly onHoverActive = false;

  @HostListener('document:click', ['$event.target']) public onClick(target: HTMLElement): void {
    this.show$.next(this.elementRef.nativeElement.contains(target));
  }
}
