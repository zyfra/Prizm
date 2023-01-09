import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherComponent {
  @Input()
  @prizmDefaultProp()
  public size: PrizmSwitcherSize = 'l';

  @Input()
  @prizmDefaultProp()
  public type: PrizmSwitcherType = 'inner';

  @Input()
  @prizmDefaultProp()
  public switchers: PrizmSwitcherItem[] = [];

  @Input()
  @prizmDefaultProp()
  public selectedSwitcherIdx = 0;

  @Input()
  @HostBinding('class.full-width')
  @prizmDefaultProp()
  public fullWidth = false;

  @Output() public selectedSwitcherIdxChange: EventEmitter<number> = new EventEmitter();

  @HostBinding('attr.testId')
  readonly testId = 'prizm_switcher';

  public selectSwitcher(item: PrizmSwitcherItem, idx: number): void {
    this.selectedSwitcherIdxChange.emit((this.selectedSwitcherIdx = idx));
  }
}
