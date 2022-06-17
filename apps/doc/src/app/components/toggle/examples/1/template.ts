import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-toggle-example-1',
  templateUrl: './template.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiToggleExample1Component implements OnInit {
  value = true;
  readonly value2 = new FormControl(false);
  readonly valueDisabled = new FormControl(false);

  ngOnInit(): void {
    this.valueDisabled.disable();
  }
}
