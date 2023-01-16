import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-with-menu',
  templateUrl: './tabs-example-with-menu.component.html',
  styleUrls: ['./tabs-example-with-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleWithMenuComponent {
  public tabs: PrizmTabItem[] = [
    {
      title: 'Вкладка 1',
    },
    {
      title: 'Вкладка 2',
    },
    {
      title: 'Вкладка 3',
      disabled: true,
    },
    {
      title: 'Вкладка 4',
    },
    {
      title: 'Вкладка 5',
    },
    {
      title: 'Вкладка 6',
    },
    {
      title: 'Вкладка 7',
    },
    {
      title: 'Вкладка 8',
    },
    {
      title: 'Вкладка 9',
    },
    {
      title: 'Вкладка 10',
    },
    {
      title: 'Вкладка 11',
    },
    {
      title: 'Вкладка 12',
    },
    {
      title: 'Вкладка 13',
    },
    {
      title: 'Вкладка 14',
    },
    {
      title: 'Вкладка 15',
    },
  ];

  public tabCancelClick(): void {
    // do something
  }

  public tabClick(): void {
    // do something
  }
}
