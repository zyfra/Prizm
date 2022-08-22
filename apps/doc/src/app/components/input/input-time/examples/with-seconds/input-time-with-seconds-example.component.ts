import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-time-with-seconds-example',
  templateUrl: './input-time-with-seconds-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputTimeWithSecondsExampleComponent {
  public readonly value = new FormControl(new ZuiTime(12, 30, 25));
}
