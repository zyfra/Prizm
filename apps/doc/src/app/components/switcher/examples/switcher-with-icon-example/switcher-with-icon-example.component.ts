import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-with-icon-example',
  templateUrl: './switcher-with-icon-example.component.html',
  styleUrls: ['./switcher-with-icon-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherWithIconExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
      icon: 'table',
    },
    {
      title: 'Мнемосхемы',
      icon: 'network-v2',
    },
    {
      title: 'Дашборды',
      icon: 'dashboard-fill',
    },
  ];
}
