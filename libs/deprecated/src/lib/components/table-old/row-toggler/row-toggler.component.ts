import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'prizm-row-toggler',
  templateUrl: './row-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmRowTogglerComponent {
  @Input() data: any;
  @Input() expanded: boolean;

  @HostBinding('attr.testId')
  readonly testId = 'prizm_row_toggler';
}
