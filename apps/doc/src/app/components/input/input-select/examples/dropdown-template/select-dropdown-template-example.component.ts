import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-select-dropdown-template-example',
  templateUrl: './select-dropdown-template-example.component.html',
  styleUrls: ['./select-dropdown-template-example.component.less'],
})
export class PrizmSelectDropdownTemplateExampleComponent {
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
