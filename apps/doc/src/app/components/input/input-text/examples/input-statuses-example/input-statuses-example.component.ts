import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'zui-input-statuses-example',
  templateUrl: './input-statuses-example.component.html',
  styleUrls: ['./input-statuses-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputStatusesExampleComponent {}
