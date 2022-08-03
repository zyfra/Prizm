import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITab } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-tabs-example-counter',
  templateUrl: './tabs-example-counter.component.html',
  styleUrls: ['./tabs-example-counter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleCounterComponent {
  public tabs: ITab[] = [
    {
      title: 'Вкладка 1',
      count: 10,
    },
    {
      title: 'Вкладка 2',
      count: 0,
    },
    {
      title: 'Вкладка 3',
      count: 3999,
    },
    {
      title: 'Вкладка 4',
      count: 4,
    },
    {
      title: 'Вкладка 5',
      count: 432,
    },
  ];

  public tabCancelClick(): void {
    // do something
  }

  public tabClick(): void {
    // do something
  }
}
