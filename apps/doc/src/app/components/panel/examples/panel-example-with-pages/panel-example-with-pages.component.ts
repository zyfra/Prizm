import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-panel-with-pages',
  templateUrl: './panel-example-with-pages.component.html',
  styleUrls: ['./panel-example-with-pages.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithPagesComponent {
  public pages: PrizmTabItem[] = [
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

  public tabCancelClick(tab: PrizmTabItem): void {
    if (this.pages.length < 2) return;
    this.pages = this.pages.filter(item => item !== tab);
  }

  public activeTabIndexChange(): void {
    // do something
  }
}
