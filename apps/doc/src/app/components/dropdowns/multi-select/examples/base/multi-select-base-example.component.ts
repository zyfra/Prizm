import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-multi-select-base-example',
  templateUrl: './multi-select-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiMultiSelectBaseExampleComponent implements OnInit {
  value = true;
  readonly items = [
    'One',
    'Two',
    'Three',
  ]
  readonly valueDisabled = new FormControl(false);

  ngOnInit(): void {
    this.valueDisabled.disable();
  }
}
