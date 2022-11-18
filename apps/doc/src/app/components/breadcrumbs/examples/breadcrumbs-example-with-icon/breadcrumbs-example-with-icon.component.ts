import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb } from '@prizm-ui/components';

@Component({
  selector: 'prizm-breadcrumbs-example-with-icon',
  templateUrl: './breadcrumbs-example-with-icon.component.html',
  styleUrls: ['./breadcrumbs-example-with-icon.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsExampleWithIconComponent {
  public breadcrumbs: IBreadcrumb[] = [
    {
      name: 'Lady',
      icon: 'account'
    },
    {
      name: 'I\'m your knight in',
      icon: 'account-contact-sync'
    },
    {
      name: 'Shining',
      icon: 'alerts-alarm-light'
    },
    {
      name: 'Armor',
      icon: 'account-shield-1'
    },
  ];

  private currentBreadcrumb: IBreadcrumb = null;

  public breadcrumbChange(current: IBreadcrumb): void {
    this.currentBreadcrumb = current;
  }
}
