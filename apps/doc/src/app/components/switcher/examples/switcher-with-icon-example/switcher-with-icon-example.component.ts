import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsDashboardFill, prizmIconsNetworkV2, prizmIconsTable } from '@prizm-ui/icons/full/source';

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

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsTable, prizmIconsNetworkV2, prizmIconsDashboardFill);
  }
}
