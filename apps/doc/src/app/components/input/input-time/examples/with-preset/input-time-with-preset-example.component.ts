import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-time-with-preset-example',
  templateUrl: './input-time-with-preset-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmInputTimeWithPresetExampleComponent {
  public readonly value = new FormControl(new PzmTime(12, 30, 25, 500));
  public readonly items = new Array(24).fill(null).map(
    (_, i) => new PzmTime(i, 0, 0, 0)
  );
}
