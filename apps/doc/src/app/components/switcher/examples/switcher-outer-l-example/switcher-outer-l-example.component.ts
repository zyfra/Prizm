import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISwitcher } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-outer-l-example',
  templateUrl: './switcher-outer-l-example.component.html',
  styleUrls: ['./switcher-outer-l-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOuterLExampleComponent {
  public readonly switchers: ISwitcher[] = [
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
