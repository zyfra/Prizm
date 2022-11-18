import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITab } from '@prizm-ui/components';

@Component({
  selector: 'prizm-panel-with-tabs',
  templateUrl: './panel-example-with-tabs.component.html',
  styleUrls: ['./panel-example-with-tabs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithTabsComponent {
  public tabs: ITab[] = [
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

  public tabClick(): void {
    // do something
  }
}
