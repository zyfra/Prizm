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
      icon: 'arrow-right-between-lines',
    },
    {
      icon: 'arrow-left-between-lines',
    },
    {
      icon: 'arrow-down-between-lines',
      disabled: true,
    },
    {
      icon: 'arrow-up-between-lines',
    },
  ];

  public tabCancelClick(): void {
    // do something
  }

  public tabClick(): void {
    // do something
  }
}
