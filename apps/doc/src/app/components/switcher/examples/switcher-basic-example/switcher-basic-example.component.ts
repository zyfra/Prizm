import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-switcher-basic-example',
  templateUrl: './switcher-basic-example.component.html',
  styleUrls: ['./switcher-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherBasicExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
      disabled: true,
    },
    {
      title: 'Графики',
    },
    {
      title: 'Мнемосхемы',
      appearanceType: 'outline',
    },
    {
      title: 'Дашборды',
      appearance: 'primary',
    },
  ];
  public readonly control = new FormControl(1);
}
