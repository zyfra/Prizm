import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-time-base-example',
  templateUrl: './input-time-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputTimeBaseExampleComponent {
  public readonly value = new FormControl(new PrizmTime(12, 30));
}
