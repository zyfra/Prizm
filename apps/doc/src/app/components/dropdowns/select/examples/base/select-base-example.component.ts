import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pzm-select-base-example',
  templateUrl: './select-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmSelectBaseExampleComponent {
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',

  ]
  readonly control = new FormControl(this.items[1]);

  public setDefaultValue(): void {
    this.control.setValue(this.items[0]);
  }
}
