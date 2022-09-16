import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { ZuiContent } from '../button-options';
import { ZuiDestroyService } from '@digital-plant/zyfra-helpers';
import { ZuiSize } from '../../../util';
import { ZuiAppearance, ZuiAppearanceType } from '../../../types';

@Component({
  selector: 'zui-split-button',
  styleUrls: ['./split-button.component.less'],
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ZuiDestroyService],
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

  @HostBinding('attr.testId')
  readonly testId = 'zui_split_button';

  @ViewChild('buttonRef', {static: true, read: ElementRef}) buttonEl: ElementRef;
  @ViewChild('iconButtonRef', {static: true, read: ElementRef}) iconButtonEl: ElementRef;

  public updateZIndex(el: ElementRef, focused: boolean): void {
    el.nativeElement.style.zIndex = focused ? '1' : '';
  }
}
