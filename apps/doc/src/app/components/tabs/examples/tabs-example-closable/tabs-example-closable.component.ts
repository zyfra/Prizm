import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-closable',
  templateUrl: './tabs-example-closable.component.html',
  styleUrls: ['./tabs-example-closable.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleClosableComponent {
  activeTabIndex = 0;
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

  public tabCancelClick(): void {
    // do something
  }

  public tabClick(): void {
    // do something
  }

  public removeTab(tab: PrizmTabItem): void {
    if (this.tabs.length < 2) return;
    this.tabs = this.tabs.filter(item => item !== tab);
  }
}
