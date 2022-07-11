import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-input-switch-component',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSwitchComponent {
  public checked = false;
}
