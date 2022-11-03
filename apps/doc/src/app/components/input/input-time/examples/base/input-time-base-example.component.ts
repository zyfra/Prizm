import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmTime } from '@digital-plant/zui-components';

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
export class PzmInputTimeBaseExampleComponent {
  public readonly value = new FormControl(new PzmTime(12, 30));
}
