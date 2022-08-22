import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISwitcher } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-switcher-only-icon-example',
  templateUrl: './switcher-only-icon-example.component.html',
  styleUrls: ['./switcher-only-icon-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherOnlyIconExampleComponent {
  public readonly switchers: ISwitcher[] = [
    {
      icon: 'editor-table',
    },
    {
      icon: 'network-scheme',
    },
    {
      icon: 'view-dashboard',
    },
  ];
}
