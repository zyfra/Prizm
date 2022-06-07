import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import {ZuiContent} from "../button-options";
import {ZuiDestroyService} from "@digital-plant/zyfra-helpers";
import {ZuiSize} from "../../../util/zui-size-bigger";
import {ZuiAppearance, ZuiAppearanceType} from "../../../types/appearance.types";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-split-button',
  styleUrls: ['./split-button.component.less'],
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ZuiDestroyService,
  ],
})
export class ZuiSplitButtonComponent {
  @Input()
  @HostBinding('attr.data-size')
  size: ZuiSize;

  /** can pass template or icon class */
  @Input()
  icon: ZuiContent = 'chevrons-dropdown';

  @Input()
  @HostBinding('attr.data-appearance')
  appearance: ZuiAppearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  appearanceType: ZuiAppearanceType;

  @Input()
  disabled = false;

  @Input()
  showLoader = false;

  @Output()
  clickIcon = new EventEmitter<void>();

  @Output()
  clickButton = new EventEmitter<void>();
}
