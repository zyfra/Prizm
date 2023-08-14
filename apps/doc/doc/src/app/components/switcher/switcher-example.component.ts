import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSwitcherItem, PrizmSwitcherSize, PrizmSwitcherType } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

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
  public control = new FormControl();
  public size: PrizmSwitcherSize = 'l';
  public sizeVariants: PrizmSwitcherSize[] = ['l', 'm', 's'];
  public type: PrizmSwitcherType = 'inner';
  public typeVariants: PrizmSwitcherType[] = ['inner', 'outer'];
  public selectedSwitcherIdx = 0;
  public fullWidth = false;

  public readonly exampleBasicSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-basic-example/switcher-basic-example.component?raw'),
    HTML: import('./examples/switcher-basic-example/switcher-basic-example.component.html?raw'),
  };

  public readonly exampleInnerLSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-inner-l-example/switcher-inner-l-example.component?raw'),
    HTML: import('./examples/switcher-inner-l-example/switcher-inner-l-example.component.html?raw'),
  };

  public readonly exampleInnerMSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-inner-m-example/switcher-inner-m-example.component?raw'),
    HTML: import('./examples/switcher-inner-m-example/switcher-inner-m-example.component.html?raw'),
  };

  public readonly exampleOuterLSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-outer-l-example/switcher-outer-l-example.component?raw'),
    HTML: import('./examples/switcher-outer-l-example/switcher-outer-l-example.component.html?raw'),
  };

  public readonly exampleOuterMSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-outer-m-example/switcher-outer-m-example.component?raw'),
    HTML: import('./examples/switcher-outer-m-example/switcher-outer-m-example.component.html?raw'),
  };

  public readonly exampleOuterSSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-outer-s-example/switcher-outer-s-example.component?raw'),
    HTML: import('./examples/switcher-outer-s-example/switcher-outer-s-example.component.html?raw'),
  };

  public readonly exampleWithIconSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-with-icon-example/switcher-with-icon-example.component?raw'),
    HTML: import('./examples/switcher-with-icon-example/switcher-with-icon-example.component.html?raw'),
  };

  public readonly exampleOnlyIconSwitcher: TuiDocExample = {
    TypeScript: import('./examples/switcher-only-icon-example/switcher-only-icon-example.component?raw'),
    HTML: import('./examples/switcher-only-icon-example/switcher-only-icon-example.component.html?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
