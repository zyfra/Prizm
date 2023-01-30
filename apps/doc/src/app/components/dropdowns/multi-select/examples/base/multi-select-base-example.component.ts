import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-multi-select-base-example',
  templateUrl: './multi-select-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmMultiSelectBaseExampleComponent implements OnInit {
  value = true;
  readonly valueControl = new FormControl([]);
  readonly items = [
    'One',
    'Two',
    'Three',
    'Very long text with a lot of characters and spaces and other stuff and things',
  ];
  readonly valueDisabled = new FormControl(false);

  ngOnInit(): void {
    this.valueDisabled.disable();
  }
}
