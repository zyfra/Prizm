import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-in-panel',
  templateUrl: './tabs-example-in-panel.component.html',
  styleUrls: ['./tabs-example-in-panel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleInPanelComponent {
  public tabs: PrizmTabItem[] = [
    {
      title: 'Вкладка 1',
      icon: 'pie-line',
    },
    {
      title: 'Вкладка 2',
      icon: 'temp-selection-radio-off',
    },
    {
      title: 'Вкладка 3',
      icon: 'location-user',
    },
    {
      title: 'Вкладка 4',
      icon: 'pi',
    },
  ];

  public tabCancelClick(): void {
    // do something
  }

  public activeTabIndexChange(): void {
    // do something
  }
}
