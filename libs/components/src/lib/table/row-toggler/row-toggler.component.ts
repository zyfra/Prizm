import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'zyfra-row-toggler',
  templateUrl: './row-toggler.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraRowTogglerComponent {
  @Input() data: any;
  @Input() expanded: boolean;
}
