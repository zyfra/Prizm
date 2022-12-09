import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { ISwitcher, SwitcherSize, SwitcherType } from './../../switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';

@Component({
  selector: 'prizm-switcher-item',
  templateUrl: './switcher-item.component.html',
  styleUrls: ['./switcher-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherItemComponent {
  @Input()
  @prizmDefaultProp()
  @HostBinding('attr.data-size') public size: SwitcherSize = 'l';

  @Input()
  @prizmDefaultProp()
  @HostBinding('attr.switcher-type') public type: SwitcherType = 'inner';

  @Input()
  public data: ISwitcher = null;

  @Input()
  @prizmDefaultProp()
  public isActive = false;

  @Input()
  @HostBinding('class.full-width')
  @prizmDefaultProp()
  public fullWidth = false;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_switcher_item';
}
