import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'zyfra-progress-test-component',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  public value = 80;
}
