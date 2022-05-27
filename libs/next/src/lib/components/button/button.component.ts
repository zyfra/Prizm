import {ChangeDetectionStrategy, Component, HostBinding, Inject, Input, ViewEncapsulation,} from '@angular/core';
import {ZUI_BUTTON_OPTIONS, ZuiAppearance, ZuiButtonOptions, ZuiContent} from "./button-options";
import {AbstractZuiInteractive} from "../../abstract/interactive";
import {isNativeFocused} from "../../util/is-native-focused";

@Component({
  selector: 'zui-button',
  templateUrl: './button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiButtonComponent extends AbstractZuiInteractive {
  @Input()
  @HostBinding('attr.data-size')
  size = this.options.size;

  /** can pass template or icon class */
  @Input()
  icon: ZuiContent<unknown>;

  @Input()
  @HostBinding('attr.data-appearance')
  appearance: ZuiAppearance = this.options.appearance;

  @Input()
  disabled = false;

  @Input()
  showLoader = false;

  get focused(): boolean {
    return !this.showLoader && isNativeFocused(this.elementRef.nativeElement);
  }

  constructor(
    @Inject(ZUI_BUTTON_OPTIONS) private readonly options: ZuiButtonOptions,
  ) {super(0)}
}
