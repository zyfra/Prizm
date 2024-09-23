import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-switcher-basic-value-example',
  templateUrl: './switcher-basic-value-example.component.html',
  styleUrls: ['./switcher-basic-value-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherBasicValueExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
      disabled: true,
      id: 'table',
    },
    {
      title: 'Графики',
      id: 'graphic',
    },
    {
      title: 'Мнемосхемы',
      appearanceType: 'outline',
      id: 'mnemonics',
    },
    {
      title: 'Дашборды',
      appearance: 'primary',
      id: 'dashboard',
    },
  ];
  public readonly control = new FormControl('graphic');

  public updateValue() {
    this.control.setValue('dashboard');
  }
}
