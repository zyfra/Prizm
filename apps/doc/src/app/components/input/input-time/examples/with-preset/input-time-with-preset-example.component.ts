import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-time-with-preset-example',
  templateUrl: './input-time-with-preset-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputTimeWithPresetExampleComponent {
  public readonly value = new FormControl(new ZuiTime(12, 30, 25, 500));
  public readonly items = new Array(24).fill(null).map(
    (_, i) => new ZuiTime(i, 0, 0, 0)
  );
}
