import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmSwitcherItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-inner-l-example',
  templateUrl: './switcher-inner-l-example.component.html',
  styleUrls: ['./switcher-inner-l-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherInnerLExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
    },
    {
      title: 'Мнемосхемы',
    },
    {
      title: 'Дашборды',
    },
  ];
}
