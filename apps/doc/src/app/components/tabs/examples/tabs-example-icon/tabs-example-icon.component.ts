import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITab } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example-icon',
  templateUrl: './tabs-example-icon.component.html',
  styleUrls: ['./tabs-example-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleIconComponent {
  public tabs: ITab[] = [
    {
      icon: 'view-menu-arrow-right',
    },
    {
      icon: 'view-menu-arrow-left',
    },
    {
      icon: 'view-menu-arrow-down',
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
