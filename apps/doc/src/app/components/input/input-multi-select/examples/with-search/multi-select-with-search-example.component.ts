import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-multi-select-with-search-example',
  templateUrl: './multi-select-with-search-example.component.html',
})
export class PrizmInputMultiSelectWithSearchExampleComponent {
  value = true;
  readonly valueControl = new UntypedFormControl(['Андрей Сафанов']);
  readonly items = [
    'Андрей Сафанов',
    'Сергей Марков',
    'Аня Петрова',
    'Катя Петрова',
    'Саша Дуров',
    'Влад Константинов',
    'Костя Щербаков',
    'Рустам Гусев',
    'Филип Уваров',
    'Филип Уваров с очень длинным текстом с очень длинным текстом ',
  ];
}
