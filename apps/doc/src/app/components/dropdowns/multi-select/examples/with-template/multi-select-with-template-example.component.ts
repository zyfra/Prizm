import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-multi-select-with-template-example',
  templateUrl: './multi-select-with-template-example.component.html',
  styles: [`
    .item {
      display: flex;
      gap: .5rem;
    }
  `]
})
export class ZuiMultiSelectWithTemplateExampleComponent implements OnInit {
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
