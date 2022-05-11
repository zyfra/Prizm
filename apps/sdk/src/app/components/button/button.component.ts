import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-button-test',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
