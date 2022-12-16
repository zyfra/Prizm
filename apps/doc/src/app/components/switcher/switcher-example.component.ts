import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from '@prizm-ui/components';

@Component({
  selector: 'prizm-switcher-example',
  templateUrl: './switcher-example.component.html',
  styleUrls: ['./switcher-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitcherExampleComponent {
  public readonly switchers: PrizmSwitcherItem[] = [
    {
      title: 'Таблицы',
      icon: 'editor-table',
    },
    {
      title: 'Мнемосхемы',
      icon: 'network-scheme',
    },
    {
      title: 'Дашборды',
      icon: 'view-dashboard',
    },
  ];
  public size: PrizmSwitcherSize = 'l';
  public sizeVariants: PrizmSwitcherSize[] = ['l', 'm', 's'];
  public type: PrizmSwitcherType = 'inner';
  public typeVariants: PrizmSwitcherType[] = ['inner', 'outer'];
  public selectedSwitcherIdx = 0;
  public fullWidth = false;

  public readonly exampleBasicSwitcher: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/switcher-basic-example/switcher-basic-example.component'),
    HTML: import('!!raw-loader!./examples/switcher-basic-example/switcher-basic-example.component.html'),
  };

  public readonly exampleInnerLSwitcher: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/switcher-inner-l-example/switcher-inner-l-example.component'),
    HTML: import('!!raw-loader!./examples/switcher-inner-l-example/switcher-inner-l-example.component.html'),
  };

  public readonly exampleInnerMSwitcher: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/switcher-inner-m-example/switcher-inner-m-example.component'),
    HTML: import('!!raw-loader!./examples/switcher-inner-m-example/switcher-inner-m-example.component.html'),
  };

  public readonly exampleOuterLSwitcher: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/switcher-outer-l-example/switcher-outer-l-example.component'),
    HTML: import('!!raw-loader!./examples/switcher-outer-l-example/switcher-outer-l-example.component.html'),
  };

  public readonly exampleOuterMSwitcher: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/switcher-outer-m-example/switcher-outer-m-example.component'),
    HTML: import('!!raw-loader!./examples/switcher-outer-m-example/switcher-outer-m-example.component.html'),
  };

  public readonly exampleOuterSSwitcher: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/switcher-outer-s-example/switcher-outer-s-example.component'),
    HTML: import('!!raw-loader!./examples/switcher-outer-s-example/switcher-outer-s-example.component.html'),
  };

  public readonly exampleWithIconSwitcher: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/switcher-with-icon-example/switcher-with-icon-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/switcher-with-icon-example/switcher-with-icon-example.component.html'
    ),
  };

  public readonly exampleOnlyIconSwitcher: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/switcher-only-icon-example/switcher-only-icon-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/switcher-only-icon-example/switcher-only-icon-example.component.html'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
