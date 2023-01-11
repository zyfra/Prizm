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
      icon: 'charts-donut',
    },
    {
      title: 'Вкладка 2',
      icon: 'selection-radio-off',
    },
    {
      title: 'Вкладка 3',
      icon: 'location-person-pin-circle',
    },
    {
      title: 'Вкладка 4',
      icon: 'editor-format-textdirection-l-to-r',
    },
  ];

  public tabCancelClick(): void {
    // do something
  }

  public activeTabIndexChange(): void {
    // do something
  }
}
