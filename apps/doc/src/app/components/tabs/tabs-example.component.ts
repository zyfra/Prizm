import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { IconDefs, PrizmTabSize, PrizmTabType } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleComponent {
  public type: PrizmTabType = 'line';
  public activeTabIndex = 0;
  public typeVariants: PrizmTabType[] = ['line', 'contained'];
  public size: PrizmTabSize = 'adaptive';
  public sizeVariants: PrizmTabSize[] = ['s', 'adaptive'];
  public title = 'Title';
  iconVariants: string[] = ['', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  icon: string = this.iconVariants[0];
  closeIcon: string | null = null;
  public closable = false;
  public disabled = false;
  public count = 0;

  public readonly tabsExampleBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/tabs-example-basic/tabs-example-basic.component'),
    HTML: import('!!raw-loader!./examples/tabs-example-basic/tabs-example-basic.component.html'),
  };
  public readonly tabsExampleWithMenu: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/tabs-example-with-menu/tabs-example-with-menu.component'),
    HTML: import('!!raw-loader!./examples/tabs-example-with-menu/tabs-example-with-menu.component.html'),
  };

  public readonly tabsLinedExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/tabs-example-lined/tabs-example-lined.component'),
    HTML: import('!!raw-loader!./examples/tabs-example-lined/tabs-example-lined.component.html'),
  };

  public readonly tabsContainedExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/tabs-example-contained/tabs-example-contained.component'),
    HTML: import('!!raw-loader!./examples/tabs-example-contained/tabs-example-contained.component.html'),
  };

  public readonly tabsIconExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/tabs-example-icon/tabs-example-icon.component'),
    HTML: import('!!raw-loader!./examples/tabs-example-icon/tabs-example-icon.component.html'),
  };

  public readonly tabsWithCounterExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/tabs-example-counter/tabs-example-counter.component'),
    HTML: import('!!raw-loader!./examples/tabs-example-counter/tabs-example-counter.component.html'),
  };

  public readonly tabsClosableExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/tabs-example-closable/tabs-example-closable.component'),
    HTML: import('!!raw-loader!./examples/tabs-example-closable/tabs-example-closable.component.html'),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
