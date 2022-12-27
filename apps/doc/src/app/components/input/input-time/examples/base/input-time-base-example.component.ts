import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-time-base-example',
  templateUrl: './input-time-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputTimeBaseExampleComponent {
  public readonly time = new PrizmTime(12, 30);
  public readonly value = new FormControl(this.time);
}
