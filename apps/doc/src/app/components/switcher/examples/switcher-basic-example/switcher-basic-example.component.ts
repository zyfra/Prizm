import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISwitcher } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-switcher-basic-example',
  templateUrl: './switcher-basic-example.component.html',
  styleUrls: ['./switcher-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherBasicExampleComponent {
  public readonly switchers: ISwitcher[] = [
    {
      title: 'Таблицы',
    },
    {
      title: 'Мнемосхемы',
    },
    {
      title: 'Дашборды',
    },
  ];
}
