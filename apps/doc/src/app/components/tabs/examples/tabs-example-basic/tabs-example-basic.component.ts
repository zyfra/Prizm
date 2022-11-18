import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITab } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-basic',
  templateUrl: './tabs-example-basic.component.html',
  styleUrls: ['./tabs-example-basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleBasicComponent {
  public tabs: ITab[] = [
    {
      title: 'Вкладка 1',
    },
    {
      title: 'Вкладка 2',
    },
    {
      title: 'Вкладка 3',
    },
    {
      title: 'Вкладка 4',
    },
  ];
}
