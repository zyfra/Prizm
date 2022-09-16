import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'zui-row-toggler',
  templateUrl: './row-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiRowTogglerComponent {
  @Input() data: any;
  @Input() expanded: boolean;

  @HostBinding('attr.testId')
  readonly testId = 'zui_row_toggler';
}
