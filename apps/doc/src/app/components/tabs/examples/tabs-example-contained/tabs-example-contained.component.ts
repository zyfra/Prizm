import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-contained',
  templateUrl: './tabs-example-contained.component.html',
  styleUrls: ['./tabs-example-contained.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleContainedComponent {
  public tabs: PrizmTabItem[] = [
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
    {
      title: 'Вкладка 5',
    },
  ];

  public removeTab(tab: PrizmTabItem): void {
    if (this.tabs.length < 2) return;
    this.tabs = this.tabs.filter(item => item !== tab);
  }

  public tabClick(): void {
    // do something
  }
}
