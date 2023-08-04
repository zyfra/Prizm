import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-select-with-list-item-template-example',
  templateUrl: './select-with-list-item-template-example.component.html',
  styles: [
    `
      .item {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }

      .circle {
        width: 10px;
        height: 10px;
        border-radius: 2px;
      }
    `,
  ],
})
export class PrizmSelectWithListItemTemplateExampleComponent {
  readonly items = ['Красный', 'Зеленый', 'Синий'];
  readonly control = new UntypedFormControl(this.items[0]);

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
