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
      name: '',
      icon: 'house-mini',
    },
    {
      name: 'Lady',
      icon: 'user',
    },
    {
      name: "I'm your knight in",
      icon: 'user-arrows-swap',
    },
    {
      name: 'Battery',
      icon: 'battery-full',
    },
  ];

  private currentBreadcrumb: IBreadcrumb | null = null;

  public breadcrumbChange(current: IBreadcrumb): void {
    this.currentBreadcrumb = current;
  }
}
