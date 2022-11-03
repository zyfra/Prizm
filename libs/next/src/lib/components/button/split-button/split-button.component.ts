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
import { PzmContent } from '../button-options';
import { PzmDestroyService } from '@digital-plant/zyfra-helpers';
import { PzmSize } from '../../../util';
import { PzmAppearance, PzmAppearanceType } from '../../../types';

@Component({
  selector: 'pzm-split-button',
  styleUrls: ['./split-button.component.less'],
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PzmDestroyService],
})
export class PzmSplitButtonComponent {
  @Input()
  @HostBinding('attr.data-size')
  size: PzmSize;

  /** can pass template or icon class */
  @Input()
  icon: PzmContent = 'chevrons-dropdown';

  @Input()
  @HostBinding('attr.data-appearance')
  appearance: PzmAppearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  appearanceType: PzmAppearanceType;

  @Input()
  disabled = false;

  @Input()
  showLoader = false;

  @Output()
  clickIcon = new EventEmitter<void>();

  @Output()
  clickButton = new EventEmitter<void>();

  @HostBinding('attr.testId')
  readonly testId = 'pzm_split_button';

  @ViewChild('buttonRef', {static: true, read: ElementRef}) buttonEl: ElementRef;
  @ViewChild('iconButtonRef', {static: true, read: ElementRef}) iconButtonEl: ElementRef;

  public updateZIndex(el: ElementRef, focused: boolean): void {
    el.nativeElement.style.zIndex = focused ? '1' : '';
  }
}
