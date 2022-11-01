import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-time-with-ms-example',
  templateUrl: './input-time-with-ms-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmInputTimeWithMsExampleComponent {
  public readonly value = new FormControl(new PzmTime(12, 30, 25, 500));
}
