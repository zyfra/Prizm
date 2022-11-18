import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-multi-select-with-search-example',
  templateUrl: './multi-select-with-search-example.component.html',
})
export class PrizmMultiSelectWithSearchExampleComponent {
  value = true;
  readonly valueControl = new FormControl(['Андрей Сафанов']);
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
  ]
}
