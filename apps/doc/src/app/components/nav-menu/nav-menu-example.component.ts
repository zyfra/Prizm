import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { HeaderConfig, ToolbarConfig, PrizmMenuItem } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-nav-menu-example',
  templateUrl: './nav-menu-example.component.html',
  styleUrls: ['./nav-menu-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuExampleComponent {
  public menuTitle = 'Наименование приложения';
  public emptyMessage = 'Пусто';
  public navigationList: PrizmMenuItem[] = [
    {
      label: 'А приложение 1',
      icon: 'settings',
      items: [
        {
          label: 'А риложение 1.1',
        },
        {
          label: 'А приложение 1.2',
        },
        {
          label: 'А приложение 1.3',
        },
      ],
    },
    {
      label: 'А приложение 2',
      icon: 'settings',
    },
    {
      label: 'Приложение 1',
      icon: 'settings',
      items: [
        {
          label: 'Приложение 1.1',
        },
        {
          label: 'Приложение 1.2',
          items: [
            {
              label: 'Приложение 1.2.1',
            },
            {
              label: 'Приложение 1.2.2',
            },
            {
              label: 'Приложение 1.2.3',
            },
          ],
        },
        {
          label: 'Приложение 1.3',
        },
      ],
    },
    {
      label: 'Приложение 2',
      icon: 'settings',
    },
    {
      label: 'Приложение 3',
      icon: 'settings',
    },
    {
      label: 'Приложение 4',
      icon: 'settings',
    },
  ];
  public toolbarConfig: ToolbarConfig = {
    filesMode: true,
    rubricatorMode: true,
    search: true,
    closeAll: true,
    filter: true,
    group: true,
    refresh: true,
  };
  public headerConfig: HeaderConfig = {
    settings: true,
    home: true,
  };

  public readonly exampleBasicNavMenu: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/nav-menu-basic-example/nav-menu-basic-example.component'),
    HTML: import('!!raw-loader!./examples/nav-menu-basic-example/nav-menu-basic-example.component.html'),
    LESS: import('./examples/nav-menu-basic-example/nav-menu-basic-example.component.less?raw'),
  };

  public readonly exampleAdvancedNavMenu: TuiDocExample = {
    TypeScript: import(
      '!!raw-loader!./examples/nav-menu-advanced-example/nav-menu-advanced-example.component'
    ),
    HTML: import(
      '!!raw-loader!./examples/nav-menu-advanced-example/nav-menu-advanced-example.component.html'
    ),
    LESS: import(
      './examples/nav-menu-advanced-example/nav-menu-advanced-example.component.less?raw'
    ),
  };

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');
}
