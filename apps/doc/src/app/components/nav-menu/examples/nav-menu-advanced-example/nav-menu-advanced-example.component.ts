import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderConfig, PrizmMenuItem, ToolbarConfig } from '@prizm-ui/deprecated';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'prizm-nav-menu-advanced-example',
  templateUrl: './nav-menu-advanced-example.component.html',
  styleUrls: ['./nav-menu-advanced-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuAdvancedExampleComponent {
  public navigationList: PrizmMenuItem[] = [
    {
      label: 'А приложение 1',
      icon: PrimeIcons.BAN,
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
      icon: PrimeIcons.BOOKMARK,
    },
    {
      label: 'Приложение 1',
      icon: PrimeIcons.DOLLAR,
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
      icon: PrimeIcons.CLOCK,
    },
    {
      label: 'Приложение 3',
      icon: PrimeIcons.FLAG,
    },
    {
      label: 'Приложение 4',
      icon: PrimeIcons.THUMBS_DOWN,
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
}
