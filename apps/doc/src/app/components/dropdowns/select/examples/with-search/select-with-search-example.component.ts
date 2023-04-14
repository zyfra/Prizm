import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-select-with-search-example',
  templateUrl: './select-with-search-example.component.html',
})
export class PrizmSelectWithSearchExampleComponent {
  value = true;
  readonly control = new FormControl();
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
  ];
}
