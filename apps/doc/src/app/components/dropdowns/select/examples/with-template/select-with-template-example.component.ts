import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-select-with-template-example',
  templateUrl: './select-with-template-example.component.html',
  styles: [`
    .item {
      display: flex;
      gap: .5rem;
    }
  `]
})
export class ZuiSelectWithTemplateExampleComponent implements OnInit {
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
