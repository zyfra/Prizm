import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-switcher-projection-example',
  templateUrl: './switcher-projection-example.component.html',
  styleUrls: ['./switcher-projection-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherProjectionExampleComponent {
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

  public updateValue() {
    this.control.setValue(3);
  }
}
