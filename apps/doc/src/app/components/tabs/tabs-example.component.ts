import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PrizmTabCanOpen,
  PrizmTabComponent,
  PrizmTabCounterOptions,
  PrizmTabItem,
  PrizmTabSize,
  PrizmTabType,
} from '@prizm-ui/components';
import { of } from 'rxjs';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';

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
    (tab: PrizmTabComponent) => {
      return of(tab.idx !== 1);
    },
  ];
  public canOpen: PrizmTabCanOpen = this.canOpenVariants[0];
  public sizeVariants: PrizmTabSize[] = ['s', 'adaptive'];
  public content = 'Big Tab #1';
  iconVariants: string[] = ['', ...PRIZM_ICONS_NAMES];
  icon: string = this.iconVariants[0];
  closeIcon: string | null = null;
  public closable = false;
  public disabled = false;
  public canShowMenu = true;
  public count = 0;
  public counterOptions: Partial<PrizmTabCounterOptions> = {
    status: 'info',
    maxValue: 99,
    disabled: false,
  };
  public prizmTabButtonMaxWidth = 'unset';

  public counterOptionsVariants: Partial<PrizmTabCounterOptions>[] = [
    this.counterOptions,
    {
      status: 'danger',
      maxValue: 99,
      disabled: false,
    },
    {
      status: 'warning',
      maxValue: 99,
      disabled: false,
    },
    {
      status: 'success',
      disabled: false,
    },
    {
      status: 'warning',
      disabled: true,
    },
  ];

  public simpleTabs: PrizmTabItem[] = [
    {
      title: 'Вкладка 3',
    },
    {
      title: 'Вкладка 4',
    },
    {
      title: 'Вкладка 5',
    },
    {
      title: 'Вкладка 6',
    },
    {
      title: 'Вкладка 7',
    },
    {
      title: 'Вкладка 8',
    },
    {
      title: 'Вкладка 9',
    },
    {
      title: 'Вкладка 10',
    },
  ];

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

  public readonly panelWithTabsExample: TuiDocExample = {
    TypeScript: import('./examples/tabs-example-in-panel/tabs-example-in-panel.component?raw'),
    HTML: import('./examples/tabs-example-in-panel/tabs-example-in-panel.component.html?raw'),
    LESS: import('./examples/tabs-example-in-panel/tabs-example-in-panel.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
  public removeTab(): void {
    this.removed = true;
  }
}
