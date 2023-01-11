import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-counter',
  templateUrl: './tabs-example-counter.component.html',
  styleUrls: ['./tabs-example-counter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleCounterComponent {
  public tabs: PrizmTabItem[] = [
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
      closable: true,
    },
    {
      title: 'Вкладка 4',
      count: 4,
    },
    {
      title: 'Вкладка 5',
      count: 432,
      closable: true,
    },
  ];

  public removeTab(tab: PrizmTabItem): void {
    if (this.tabs.length < 2) return;
    this.tabs = this.tabs.filter((item) => item !== tab);
  }

  public tabClick(): void {
    // do something
  }
}
