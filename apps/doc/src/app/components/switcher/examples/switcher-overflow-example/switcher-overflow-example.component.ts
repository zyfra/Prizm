import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-switcher-overflow-example',
  templateUrl: './switcher-overflow-example.component.html',
  styleUrls: ['./switcher-overflow-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOverflowExampleComponent {
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
  public readonly control = new FormControl(10);

  public updateValue() {
    this.control.setValue(3);
  }
}
