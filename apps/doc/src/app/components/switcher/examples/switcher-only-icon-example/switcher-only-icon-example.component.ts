import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-only-icon-example',
  templateUrl: './switcher-only-icon-example.component.html',
  styleUrls: ['./switcher-only-icon-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOnlyIconExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      icon: 'editor-table',
      hint: {
        value: 'Таблицы',
        options: {
          theme: 'light',
          direction: 'l',
        },
      },
    },
    {
      icon: 'network-scheme',
      hint: {
        value: 'Мнемосхемы',
        options: {
          theme: 'light',
          showDelay: 100,
          hideDelay: 500,
          autoReposition: false,
          direction: 'br',
        },
      },
    },
    {
      icon: 'view-dashboard',
      hint: {
        value: 'Дашборды',
      },
    },
  ];
}
