import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb } from '@prizm-ui/components';

@Component({
  selector: 'prizm-breadcrumbs-example-projection',
  templateUrl: './breadcrumbs-example-projection.component.html',
  styleUrls: ['./breadcrumbs-example-projection.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsExampleProjectionComponent {
  public breadcrumbs = [
    { link: '/components/button', name: 'Button' },
    { link: '/components/split-button', name: 'Split' },
    { link: '/components/icon-button', name: 'Icon' },
  ];

  private currentBreadcrumb: IBreadcrumb | null = null;

  public breadcrumbChange(current: IBreadcrumb): void {
    this.currentBreadcrumb = current;
  }
}
