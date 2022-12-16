import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-outer-m-example',
  templateUrl: './switcher-outer-m-example.component.html',
  styleUrls: ['./switcher-outer-m-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOuterMExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
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
