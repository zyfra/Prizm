import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-time-with-ms-example',
  templateUrl: './input-time-with-ms-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputTimeWithMsExampleComponent {
  public readonly value = new FormControl(new ZuiTime(12, 30, 25, 500));
}
