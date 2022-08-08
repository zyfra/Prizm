import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-select-base-example',
  templateUrl: './select-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiSelectBaseExampleComponent implements OnInit {
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
