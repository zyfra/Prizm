import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zui-row-toggler',
  templateUrl: './row-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZuiRowTogglerComponent {
  @Input() data: any;
  @Input() expanded: boolean;
}
