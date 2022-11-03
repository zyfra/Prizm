import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-breadcrumbs-basic',
  templateUrl: './breadcrumbs-example-basic.component.html',
  styleUrls: ['./breadcrumbs-example-basic.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsExampleBasicComponent {
  public breadcrumbs: IBreadcrumb[] = [{ name: 'Home' }, { name: 'Sweet' }, { name: 'Home' }];

  private currentBreadcrumb: IBreadcrumb = null;

  public breadcrumbChange(current: IBreadcrumb): void {
    this.currentBreadcrumb = current;
  }
}
