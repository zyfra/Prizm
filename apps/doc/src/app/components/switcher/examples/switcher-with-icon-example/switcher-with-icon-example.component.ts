import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISwitcher } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-switcher-with-icon-example',
  templateUrl: './switcher-with-icon-example.component.html',
  styleUrls: ['./switcher-with-icon-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherWithIconExampleComponent {
  public readonly switchers: ISwitcher[] = [
    {
      title: 'Таблицы',
      icon: 'editor-table',
    },
    {
      title: 'Мнемосхемы',
      icon: 'network-scheme',
    },
    {
      title: 'Дашборды',
      icon: 'view-dashboard',
    },
  ];
}
