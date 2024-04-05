import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsTable, prizmIconsNetworkV2, prizmIconsDashboardFill } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-switcher-only-icon-example',
  templateUrl: './switcher-only-icon-example.component.html',
  styleUrls: ['./switcher-only-icon-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOnlyIconExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      icon: 'table',
      hint: {
        value: 'Таблицы',
        options: {
          theme: 'light',
          direction: 'l',
        },
      },
    },
    {
      icon: 'network-v2',
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
      icon: 'dashboard-fill',
      hint: {
        value: 'Дашборды',
      },
    },
  ];

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsTable, prizmIconsNetworkV2, prizmIconsDashboardFill);
  }
}
