import { Component, ChangeDetectionStrategy, Input, inject } from '@angular/core';
import { INavigationTree } from '@prizm-ui/components';
import { NAVIGATION_EXAMPLE } from '../../navigation-example.const';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsBars,
  prizmIconsBatteryThreeQuarters,
  prizmIconsDatabase,
  prizmIconsList,
  prizmIconsMusic,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-navigation-basic-example',
  templateUrl: './navigation-basic-example.component.html',
  styleUrls: ['./navigation-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationBasicExampleComponent {
  @Input() public isNavigationAbsolute = false;

  public data: INavigationTree[] = NAVIGATION_EXAMPLE;
  public openDropdown = false;
  public openNavigation = true;
  public parentActiveIdx = 0;
  public activeElement!: INavigationTree | null;

  public readonly logo = 'assets/example/logo-dark.png';

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(private readonly themeSwitcher: PrizmThemeService) {
    this.iconsFullRegistry.registerIcons(
      prizmIconsBars,
      prizmIconsMusic,
      prizmIconsList,
      prizmIconsBatteryThreeQuarters,
      prizmIconsDatabase
    );

    this.activeElement = (this.data[1].children as INavigationTree[])[2];
  }

  public toggleNavigation(): void {
    this.openNavigation = !this.openNavigation;
  }

  public changeNavElement(idx: number): void {
    this.parentActiveIdx = idx;
  }

  public saveActiveIdx(item: INavigationTree): void {
    this.activeElement = null;
    // TODO create recursive func
    const idx = this.data.findIndex(dataItem => {
      return (
        dataItem === item ||
        dataItem.children?.includes(item) ||
        dataItem.children?.find(subChild => subChild?.children?.includes(item))
      );
    });
    if (idx === -1) return;
    if (this.data.indexOf(item) === -1) {
      this.activeElement = item;
    }
    this.parentActiveIdx = idx;
  }
}
