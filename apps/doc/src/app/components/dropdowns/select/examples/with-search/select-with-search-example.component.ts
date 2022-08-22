import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-select-with-search-example',
  templateUrl: './select-with-search-example.component.html',
})
export class ZuiSelectWithSearchExampleComponent implements OnInit {
  value = true;
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
  readonly valueDisabled = new FormControl(false);

  ngOnInit(): void {
    this.valueDisabled.disable();
  }
}
