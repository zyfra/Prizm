import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pzm-select-with-template-example',
  templateUrl: './select-with-template-example.component.html',
  styles: [`
    .item {
      display: flex;
      gap: .5rem;
    }
  `]
})
export class PrizmSelectWithTemplateExampleComponent {
  readonly items = [
    'One',
    'Two',
    'Three',
  ]
  readonly control = new FormControl();
}
