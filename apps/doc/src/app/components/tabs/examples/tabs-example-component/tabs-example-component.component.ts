import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PolymorphComponent, PrizmTabItem } from '@prizm-ui/components';
import { TabsExampleComponentContentComponent } from './tabs-example-content-component.component';

@Component({
  selector: 'prizm-tabs-example-component',
  templateUrl: './tabs-example-component.component.html',
  styleUrls: ['./tabs-example-component.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleComponentComponent {
  public activeTabIndex = 0;
  public content = new PolymorphComponent(TabsExampleComponentContentComponent);
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
  ];
}
