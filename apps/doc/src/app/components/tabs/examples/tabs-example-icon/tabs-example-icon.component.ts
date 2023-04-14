import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTabItem } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-icon',
  templateUrl: './tabs-example-icon.component.html',
  styleUrls: ['./tabs-example-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleIconComponent {
  public tabs: PrizmTabItem[] = [
    {
      icon: 'view-menu-arrow-right',
    },
    {
      icon: 'view-menu-arrow-left',
    },
    {
      icon: 'view-menu-arrow-down',
      disabled: true,
    },
    {
      icon: 'view-menu-arrow-up',
    },
  ];

  public tabCancelClick(): void {
    // do something
  }

  public tabClick(): void {
    // do something
  }
}
