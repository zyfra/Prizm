import { Component, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'zyfra-toggle-button-test',
  templateUrl: './toggle-button-test.component.html',
  styleUrls: ['./toggle-button-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonTestComponent {
  public onLabel = 'I confirm';
  public offLabel = 'I reject';

  public model = true;
}
