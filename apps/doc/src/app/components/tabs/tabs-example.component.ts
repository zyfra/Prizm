import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  IconDefs,
  PrizmTabCanOpen,
  PrizmTabComponent,
  PrizmTabSize,
  PrizmTabType,
} from '@prizm-ui/components';
import { of } from 'rxjs';

@Component({
  selector: 'prizm-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsExampleComponent {
  public type: PrizmTabType = 'line';
  public activeTabIndex = 0;
  public removed = false;
  public typeVariants: PrizmTabType[] = ['line', 'contained'];
  public size: PrizmTabSize = 'adaptive';
  public canOpenVariants: PrizmTabCanOpen[] = [
    (tab: PrizmTabComponent) => of(true),
    (tab: PrizmTabComponent) => of(tab.idx !== 0),
  ];
  public canOpen: PrizmTabCanOpen = this.canOpenVariants[0];
  public sizeVariants: PrizmTabSize[] = ['s', 'adaptive'];
  public content = 'Tab Content';
  iconVariants: string[] = ['', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  icon: string = this.iconVariants[0];
  closeIcon: string | null = null;
  public closable = false;
  public disabled = false;
  public canShowMenu = true;
  public count = 0;

  public readonly tabsExampleBasic: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-basic/tabs-example-basic.component?raw'),
    HTML: import('./examples/tabs-example-basic/tabs-example-basic.component.html?raw'),
  };
  public readonly tabsExampleComponent: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-component/tabs-example-component.component?raw'),
    HTML: import('./examples/tabs-example-component/tabs-example-component.component.html?raw'),
  };
  public readonly tabsLinedExample: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-lined/tabs-example-lined.component?raw'),
    HTML: import('./examples/tabs-example-lined/tabs-example-lined.component.html?raw'),
  };

  public readonly tabsContainedExample: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-contained/tabs-example-contained.component?raw'),
    HTML: import('./examples/tabs-example-contained/tabs-example-contained.component.html?raw'),
  };

  public readonly tabsIconExample: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-icon/tabs-example-icon.component?raw'),
    HTML: import('./examples/tabs-example-icon/tabs-example-icon.component.html?raw'),
  };

  public readonly tabsWithCounterExample: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-counter/tabs-example-counter.component?raw'),
    HTML: import('./examples/tabs-example-counter/tabs-example-counter.component.html?raw'),
  };

  public readonly tabsClosableExample: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-closable/tabs-example-closable.component?raw'),
    HTML: import('./examples/tabs-example-closable/tabs-example-closable.component.html?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
  public removeTab(): void {
    this.removed = true;
  }
}
