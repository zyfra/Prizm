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
import { PrizmContent } from '../button-options';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmSize } from '../../../util';
import { PrizmAppearance, PrizmAppearanceType } from '../../../types';

@Component({
  selector: 'prizm-split-button',
  styleUrls: ['./split-button.component.less'],
  templateUrl: './split-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PrizmDestroyService],
})
export class PrizmSplitButtonComponent {
  @Input()
  @HostBinding('attr.data-size')
  size: PrizmSize;

  /** can pass template or icon class */
  @Input()
  icon: PrizmContent = 'chevrons-dropdown';

  @Input()
  @HostBinding('attr.data-appearance')
  appearance: PrizmAppearance;

  @Input()
  @HostBinding('attr.data-appearance-type')
  appearanceType: PrizmAppearanceType;

  @Input()
  disabled = false;

  @Input()
  showLoader = false;

  @Output()
  clickIcon = new EventEmitter<void>();

  @Output()
  clickButton = new EventEmitter<void>();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_split_button';

  @ViewChild('buttonRef', {static: true, read: ElementRef}) buttonEl: ElementRef;
  @ViewChild('iconButtonRef', {static: true, read: ElementRef}) iconButtonEl: ElementRef;

  public updateZIndex(el: ElementRef, focused: boolean): void {
    el.nativeElement.style.zIndex = focused ? '1' : '';
  }
}
