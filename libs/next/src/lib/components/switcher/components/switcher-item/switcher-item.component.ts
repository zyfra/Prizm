import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { ISwitcher, SwitcherSize, SwitcherType } from './../../switcher.interface';

@Component({
  selector: 'pzm-switcher-item',
  templateUrl: './switcher-item.component.html',
  styleUrls: ['./switcher-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherItemComponent {
  @Input() @HostBinding('attr.data-size') public size: SwitcherSize = 'l';
  @Input() @HostBinding('attr.switcher-type') public type: SwitcherType = 'inner';

  @Input() public data: ISwitcher = null;
  @Input() public isActive = false;

  @HostBinding('attr.testId')
  readonly testId = 'pzm_switcher_item';
}
