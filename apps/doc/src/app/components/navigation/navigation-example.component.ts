import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { INavigationTree } from '@prizm-ui/components';
import { NAVIGATION_EXAMPLE } from './navigation-example.const';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsBatteryThreeQuarters, prizmIconsList } from '@prizm-ui/icons/full/source';
import { prizmIconsMusic } from '@prizm-ui/icons/base/source';

@Component({
  selector: 'prizm-navigation-example',
  templateUrl: './navigation-example.component.html',
  styleUrls: ['./navigation-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class NavigationExampleComponent {
  public readonly exampleNavigationBasic: TuiDocExample = {
    TypeScript: import('./examples/navigation-basic-example/navigation-basic-example.component?raw'),
    Module: import('./examples/navigation-basic-example/navigation-basic-example.module?raw'),
    HTML: import('./examples/navigation-basic-example/navigation-basic-example.component.html?raw'),
    LESS: import('./examples/navigation-basic-example/navigation-basic-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public navigationTree: INavigationTree[] = NAVIGATION_EXAMPLE;
  activeElement = NAVIGATION_EXAMPLE[1];

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(prizmIconsMusic, prizmIconsList, prizmIconsBatteryThreeQuarters);
  }
}
