import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-time-with-seconds-example',
  templateUrl: './input-time-with-seconds-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputTimeWithSecondsExampleComponent {
  public readonly value = new FormControl(new PrizmTime(12, 30, 25));
}
