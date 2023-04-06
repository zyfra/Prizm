import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

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
}
