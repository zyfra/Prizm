import { Component, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './../../switcher.interface';
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
  @HostBinding('attr.data-size')
  public size: PrizmSwitcherSize = 'l';

  @Input()
  @prizmDefaultProp()
  @HostBinding('attr.switcher-type')
  public type: PrizmSwitcherType = 'inner';

  @Input()
  public data: PrizmSwitcherItem = null;

  @Input()
  @prizmDefaultProp()
  public isActive = false;

  @Input()
  @HostBinding('class.full-width')
  @prizmDefaultProp()
  public fullWidth = false;

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_switcher_item';
}
