import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISwitcher } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-switcher-inner-m-example',
  templateUrl: './switcher-inner-m-example.component.html',
  styleUrls: ['./switcher-inner-m-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherInnerMExampleComponent {
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
