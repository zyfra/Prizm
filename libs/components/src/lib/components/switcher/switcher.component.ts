import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from './switcher.interface';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmAbstractTestId } from '../../abstract/interactive';

@Component({
  selector: 'prizm-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherComponent extends PrizmAbstractTestId {
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

  override readonly testId_ = 'ui_switcher';

  public selectSwitcher(item: PrizmSwitcherItem, idx: number): void {
    if (item.disabled) return;
    if (this.selectedSwitcherIdx === idx) return;
    this.selectedSwitcherIdxChange.emit((this.selectedSwitcherIdx = idx));
  }
}
