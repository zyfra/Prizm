import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-select-with-template-example',
  templateUrl: './select-with-template-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
      }
    `,
  ],
})
export class PrizmSelectWithTemplateExampleComponent {
  readonly items = ['Красный', 'Зеленый', 'Синий'];
  readonly control = new UntypedFormControl();

  public getColor(item: string): string {
    switch (item) {
      case 'Красный':
        return 'red';
      case 'Зеленый':
        return 'green';
      case 'Синий':
      default:
        return 'blue';
    }
  }
}
