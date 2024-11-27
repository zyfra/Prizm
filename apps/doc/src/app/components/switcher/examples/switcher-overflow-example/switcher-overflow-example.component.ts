import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsEllipsisV } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-switcher-overflow-example',
  templateUrl: './switcher-overflow-example.component.html',
  styleUrls: ['./switcher-overflow-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOverflowExampleComponent {
  public openList = false;
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
    },
    {
      title: 'Графики',
    },
    {
      title: 'Мнемосхемы',
    },
    {
      title: 'Дашборды',
    },
    {
      title: 'Карты месторождений',
    },
  ];

  public readonly control = new FormControl(4);

  constructor(private readonly iconsFullRegistry: PrizmIconsFullRegistry) {
    this.iconsFullRegistry.registerIcons(prizmIconsEllipsisV);
  }

  public toggle() {
    this.openList = !this.openList;
  }
}
