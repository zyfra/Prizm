import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { ISwitcher, SwitcherSize, SwitcherType } from './switcher.interface';
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
  public size: SwitcherSize = 'l';

  @Input()
  @prizmDefaultProp()
  public type: SwitcherType = 'inner';

  @Input()
  @prizmDefaultProp()
  public switchers: ISwitcher[] = [];

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

  public selectSwitcher(idx: number): void {
    if (this.selectedSwitcherIdx !== idx) {
      this.selectedSwitcherIdxChange.emit(idx);
      this.selectedSwitcherIdx = idx;
    }
  }
}
