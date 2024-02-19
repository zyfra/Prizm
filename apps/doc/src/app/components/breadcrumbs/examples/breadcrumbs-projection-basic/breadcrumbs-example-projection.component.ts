import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb } from '@prizm-ui/components';
import { map, timer } from 'rxjs';

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

  breadcrumbs$ = timer(2000).pipe(map(() => this.breadcrumbs));

  private currentBreadcrumb: IBreadcrumb | null = null;

  public breadcrumbChange(current: IBreadcrumb): void {
    this.currentBreadcrumb = current;
  }
}
