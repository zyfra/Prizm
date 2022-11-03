import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { IBreadcrumb } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-example-breadcrumbs',
  templateUrl: './breadcrumbs-example.component.html',
  styleUrls: ['./breadcrumbs-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsExampleComponent {
  public isFirstHome = false;
  public breadcrumbs: IBreadcrumb[] = [
    { name: 'Somebody' },
    { name: 'Once' },
    { name: 'Told me' },
    { name: 'The world' },
    { name: 'Is gonna roll me' },
  ];

  public readonly breadcrumbsBasicExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/breadcrumbs-example-basic/breadcrumbs-example-basic.component'
    ),
    HTML: import(
      '!!raw-loader!.//examples/breadcrumbs-example-basic/breadcrumbs-example-basic.component.html'
    ),
  };

  public readonly breadcrumbsWithIconExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/breadcrumbs-example-with-icon/breadcrumbs-example-with-icon.component'
    ),
    HTML: import(
      '!!raw-loader!.//examples/breadcrumbs-example-with-icon/breadcrumbs-example-with-icon.component.html'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
