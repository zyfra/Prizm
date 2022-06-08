import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'zui-toggle-example-1',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiToggleExample1 {
  value = true;
  readonly value2 = new FormControl(false);
  readonly value3 = new FormControl(true);
}
