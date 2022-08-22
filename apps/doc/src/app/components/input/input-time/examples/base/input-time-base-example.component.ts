import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-time-base-example',
  templateUrl: './input-time-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputTimeBaseExampleComponent {
  public readonly value = new FormControl(new ZuiTime(12, 30));
}
