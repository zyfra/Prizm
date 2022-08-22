import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: 'zui-example-panel',
  templateUrl: './panel-example.component.html',
  styleUrls: ['./panel-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleComponent {
  public withBackButton = true;
  public header = 'Header text is here';
  public subheader = 'Subheader text is here';

  public readonly panelBasicExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!.//examples/panel-example-basic/panel-example-basic.component'),
    HTML: import('!!raw-loader!.//examples/panel-example-basic/panel-example-basic.component.html'),
    LESS: import('!!raw-loader!.//examples/panel-example-basic/panel-example-basic.component.less'),
  };

  public readonly panelWithBackExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!.//examples/panel-example-with-back/panel-example-with-back.component'),
    HTML: import('!!raw-loader!.//examples/panel-example-with-back/panel-example-with-back.component.html'),
    LESS: import('!!raw-loader!.//examples/panel-example-with-back/panel-example-with-back.component.less'),
  };

  public readonly panelWithBreadcrumbsExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/panel-example-with-breadcrumbs/panel-example-with-breadcrumbs.component'
    ),
    HTML: import(
      '!!raw-loader!.//examples/panel-example-with-breadcrumbs/panel-example-with-breadcrumbs.component.html'
    ),
    LESS: import(
      '!!raw-loader!.//examples/panel-example-with-breadcrumbs/panel-example-with-breadcrumbs.component.less'
    ),
  };

  public readonly panelWithTabsExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!.//examples/panel-example-with-tabs/panel-example-with-tabs.component'),
    HTML: import('!!raw-loader!.//examples/panel-example-with-tabs/panel-example-with-tabs.component.html'),
    LESS: import('!!raw-loader!.//examples/panel-example-with-tabs/panel-example-with-tabs.component.less'),
  };

  public readonly panelWithPagesExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/panel-example-with-pages/panel-example-with-pages.component'
    ),
    HTML: import('!!raw-loader!.//examples/panel-example-with-pages/panel-example-with-pages.component.html'),
    LESS: import('!!raw-loader!.//examples/panel-example-with-pages/panel-example-with-pages.component.less'),
  };

  public readonly panelWithInstrumentsSimpleExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/panel-example-with-instruments-simple/panel-example-with-instruments-simple.component'
    ),
    HTML: import(
      '!!raw-loader!.//examples/panel-example-with-instruments-simple/panel-example-with-instruments-simple.component.html'
    ),
    LESS: import(
      '!!raw-loader!.//examples/panel-example-with-instruments-simple/panel-example-with-instruments-simple.component.less'
    ),
  };

  public readonly panelWithInstrumentsHardExample: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!.//examples/panel-example-with-instruments-hard/panel-example-with-instruments-hard.component'
    ),
    HTML: import(
      '!!raw-loader!.//examples/panel-example-with-instruments-hard/panel-example-with-instruments-hard.component.html'
    ),
    LESS: import(
      '!!raw-loader!.//examples/panel-example-with-instruments-hard/panel-example-with-instruments-hard.component.less'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
