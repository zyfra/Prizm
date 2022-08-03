import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IBreadcrumb } from '@digital-plant/zui-components';

interface ITranslator extends IBreadcrumb {
  prop: string;
}

@Component({
  selector: 'zui-panel-with-breadcrumbs',
  templateUrl: './panel-example-with-breadcrumbs.component.html',
  styleUrls: ['./panel-example-with-breadcrumbs.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleWithBreadcrumbsComponent {
  public breadcrumbs: ITranslator[] = [
    {
      name: 'Дом',
      prop: 'Home',
    },
    {
      name: 'Крадущийся',
      prop: 'Crouching',
    },
    {
      name: 'Тигр',
      prop: 'Tiger',
    },
    {
      name: 'Затаившийся',
      prop: 'Hidden',
    },
    {
      name: 'Дракон',
      prop: 'Dragon',
    },
  ];
  public currentBreadcrumbName: string | number = '';

  public changeCrumbListener(breadcrumb: IBreadcrumb): void {
    this.currentBreadcrumbName = breadcrumb?.name;
  }
}
