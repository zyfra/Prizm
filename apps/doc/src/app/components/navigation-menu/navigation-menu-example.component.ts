import { Component, ChangeDetectionStrategy, TemplateRef } from '@angular/core';
import {
  PrizmNavigationMenuEmptyMessageConfig,
  PrizmNavigationMenuHeaderConfig,
  PrizmNavigationMenuItem,
  PrizmNavigationMenuSearchConfig,
  PrizmNavigationMenuSettingsConfig,
  PrizmNavigationMenuToolbarConfig,
} from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { MOKED_ITEMS } from './examples/navigation-menu-basic-example/navigation-menu.constants';

@Component({
  selector: 'prizm-navigation-menu-example',
  templateUrl: './navigation-menu-example.component.html',
  styleUrls: ['./navigation-menu-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuExampleComponent {
  public readonly exampleBasicNavigationMenu: TuiDocExample = {
    TS: import('./examples/navigation-menu-basic-example/navigation-menu-basic-example.component?raw'),
    HTML: import('./examples/navigation-menu-basic-example/navigation-menu-basic-example.component.html?raw'),
    LESS: import('./examples/navigation-menu-basic-example/navigation-menu-basic-example.component.less?raw'),
  };

  public readonly exampleChildrenHandlerNavigationMenu: TuiDocExample = {
    TS: import(
      './examples/navigation-menu-children-handler-example/navigation-menu-children-handler-example.component.ts?raw'
    ),
    HTML: import(
      './examples/navigation-menu-children-handler-example/navigation-menu-children-handler-example.component.html?raw'
    ),
    Constants: import(
      './examples/navigation-menu-children-handler-example/navigation-menu-children-handler-example.constants?raw'
    ),
  };

  public readonly exampleChildrenOneModeMenu: TuiDocExample = {
    TS: import(
      './examples/navigation-menu-one-mode-example/navigation-menu-one-mode-example.component.ts?raw'
    ),
    HTML: import(
      './examples/navigation-menu-one-mode-example/navigation-menu-one-mode-example.component.html?raw'
    ),
    Constants: import('./examples/navigation-menu-one-mode-example/navigation-menu.constants?raw'),
  };

  public readonly exampleGroupsNavigationMenu: TuiDocExample = {
    TS: import('./examples/navigation-menu-groups-example/navigation-menu-groups-example.component?raw'),
    HTML: import(
      './examples/navigation-menu-groups-example/navigation-menu-groups-example.component.html?raw'
    ),
    LESS: import(
      './examples/navigation-menu-groups-example/navigation-menu-groups-example.component.less?raw'
    ),
    'item-groups.service.ts': import(
      './examples/navigation-menu-groups-example/example-data/item-groups.service.ts?raw'
    ),
    'item-groups.constants.ts': import(
      './examples/navigation-menu-groups-example/example-data/item-groups.constants.ts?raw'
    ),
    'expanded-items.service.ts': import(
      './examples/navigation-menu-groups-example/example-data/expanded-items.service.ts?raw'
    ),
    'interfaces.ts': import('./examples/navigation-menu-groups-example/example-data/interfaces.ts?raw'),
    'hint-button.ts': import('./examples/hint-button/hint-button.component.html?raw'),
    'hint-button.html': import('./examples/hint-button/hint-button.component.html?raw'),
    'hint-button.less': import('./examples/hint-button/hint-button.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  title = 'Demo';

  items: PrizmNavigationMenuItem[] = MOKED_ITEMS;

  toolbarConfig: PrizmNavigationMenuToolbarConfig = {
    search: true,
    folderMode: true, // temporary unavailable
    rubricatorMode: true,
    closeAll: true,
  };

  toolbarExtraTemplate: TemplateRef<any> = null;
  itemExtraTemplate: TemplateRef<any> = null;
  headerExtraTemplate: TemplateRef<any> = null;
  activeItem: any = null;
  itemKeyName = 'id';
  expandedItemsMap = new Map<any, boolean>();
  expandedGroupsMap = new Map<string, boolean>();
  emptySearchResultMessageConfig: PrizmNavigationMenuEmptyMessageConfig = null;
  emptyDataMessageConfig: PrizmNavigationMenuEmptyMessageConfig = null;
  searchConfig: PrizmNavigationMenuSearchConfig = null;
  settingsConfig: PrizmNavigationMenuSettingsConfig = {};
  headerConfig: PrizmNavigationMenuHeaderConfig = null;
}
