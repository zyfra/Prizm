import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISwitcher } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-switcher-outer-m-example',
  templateUrl: './switcher-outer-m-example.component.html',
  styleUrls: ['./switcher-outer-m-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOuterMExampleComponent {
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
