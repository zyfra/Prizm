import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-example-panel',
  templateUrl: './panel-example.component.html',
  styleUrls: ['./panel-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelExampleComponent {
  public withBackButton = true;
  public header = 'Header text is here';
  public radius: string | null = null;
  public subheader = 'Subheader text is here';

  public readonly panelBasicExample: TuiDocExample = {
    TypeScript: import('./examples/panel-example-basic/panel-example-basic.component?raw'),
    HTML: import('./examples/panel-example-basic/panel-example-basic.component.html?raw'),
    LESS: import('./examples/panel-example-basic/panel-example-basic.component.less?raw'),
  };

  public readonly panelWithBackExample: TuiDocExample = {
    TypeScript: import('./examples/panel-example-with-back/panel-example-with-back.component?raw'),
    HTML: import('./examples/panel-example-with-back/panel-example-with-back.component.html?raw'),
    LESS: import('./examples/panel-example-with-back/panel-example-with-back.component.less?raw'),
  };

  public readonly panelWithBreadcrumbsExample: TuiDocExample = {
    TypeScript: import(
      './examples/panel-example-with-breadcrumbs/panel-example-with-breadcrumbs.component?raw'
    ),
    HTML: import(
      './examples/panel-example-with-breadcrumbs/panel-example-with-breadcrumbs.component.html?raw'
    ),
    LESS: import(
      './examples/panel-example-with-breadcrumbs/panel-example-with-breadcrumbs.component.less?raw'
    ),
  };

  public readonly panelWithTabsExample: TuiDocExample = {
    TypeScript: import('./examples/panel-example-with-tabs/panel-example-with-tabs.component?raw'),
    HTML: import('./examples/panel-example-with-tabs/panel-example-with-tabs.component.html?raw'),
    LESS: import('./examples/panel-example-with-tabs/panel-example-with-tabs.component.less?raw'),
  };

  public readonly panelWithPagesExample: TuiDocExample = {
    TypeScript: import('./examples/panel-example-with-pages/panel-example-with-pages.component?raw'),
    HTML: import('./examples/panel-example-with-pages/panel-example-with-pages.component.html?raw'),
    LESS: import('./examples/panel-example-with-pages/panel-example-with-pages.component.less?raw'),
  };

  public readonly panelWithInstrumentsSimpleExample: TuiDocExample = {
    TypeScript: import(
      './examples/panel-example-with-instruments-simple/panel-example-with-instruments-simple.component?raw'
    ),
    HTML: import(
      './examples/panel-example-with-instruments-simple/panel-example-with-instruments-simple.component.html?raw'
    ),
    LESS: import(
      './examples/panel-example-with-instruments-simple/panel-example-with-instruments-simple.component.less?raw'
    ),
  };

  public readonly panelWithInstrumentsHardExample: TuiDocExample = {
    TypeScript: import(
      './examples/panel-example-with-instruments-hard/panel-example-with-instruments-hard.component?raw'
    ),
    HTML: import(
      './examples/panel-example-with-instruments-hard/panel-example-with-instruments-hard.component.html?raw'
    ),
    LESS: import(
      './examples/panel-example-with-instruments-hard/panel-example-with-instruments-hard.component.less?raw'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
