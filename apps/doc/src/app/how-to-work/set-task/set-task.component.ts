import { Component, ChangeDetectionStrategy } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'prizm-set-task',
  templateUrl: './set-task.component.html',
  styleUrls: ['./set-task.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SetTaskComponent {
  public storybookBaseUrl = environment.storybookBaseUrl;
}
