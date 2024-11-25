import { Component, ChangeDetectionStrategy, Input, inject } from '@angular/core';
import { INavigationTree } from '@prizm-ui/components';
import { NAVIGATION_EXAMPLE } from '../../navigation-example.const';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsBars,
  prizmIconsBatteryThreeQuarters,
  prizmIconsCameraMovie,
  prizmIconsDatabase,
  prizmIconsList,
  prizmIconsMusic,
} from '@prizm-ui/icons/full/source';
import { LOCAL_STORAGE } from '@ng-web-apis/common';

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
  private readonly localStorage = inject(LOCAL_STORAGE) as Storage;

  constructor(private readonly themeSwitcher: PrizmThemeService) {
    this.iconsFullRegistry.registerIcons(
      prizmIconsBars,
      prizmIconsMusic,
      prizmIconsList,
      prizmIconsBatteryThreeQuarters,
      prizmIconsDatabase,
      prizmIconsCameraMovie
    );

    this.processNavigationState();
    this.activeElement = this.getActiveElement() ?? (this.data[1].children as INavigationTree[])[1];
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
    this.localStorage.setItem('NAVIGATION_ACTIVE_ITEM_TITLE_EXAMPLE', item.title);
  }

  public saveNavigationState(tree: INavigationTree[]): void {
    this.localStorage.setItem('NAVIGATION_EXPANDED_ITEMS_EXAMPLE', JSON.stringify(tree));
  }

  private processNavigationState() {
    const navigationState = this.localStorage.getItem('NAVIGATION_EXPANDED_ITEMS_EXAMPLE');

    if (navigationState) {
      const parsedState = JSON.parse(navigationState);
      this.restoreExpanded(this.data, parsedState);
    } else {
      this.saveNavigationState(this.data);
    }
  }

  private restoreExpanded(menuItems: INavigationTree[], storedMenuItems: INavigationTree[]) {
    storedMenuItems.forEach(stordeItem => {
      const menuItem = menuItems.find(el => el.title === stordeItem.title);

      if (menuItem) {
        menuItem.isExpanded = stordeItem.isExpanded;
      }

      if (stordeItem.children && menuItem?.children) {
        this.restoreExpanded(menuItem.children, stordeItem.children);
      }
    });
  }

  private getActiveElement(): INavigationTree | null {
    const activeElTitile = this.localStorage.getItem('NAVIGATION_ACTIVE_ITEM_TITLE_EXAMPLE');
    if (activeElTitile) {
      return this.findActiveItem(this.data, activeElTitile);
    }
    return null;
  }

  private findActiveItem(menuItems: INavigationTree[], title: string): INavigationTree | null {
    for (const item of menuItems) {
      if (item.title === title) {
        return item;
      }

      if (item.children) {
        const currElement = this.findActiveItem(item.children, title);
        if (currElement) {
          return currElement;
        }
      }
    }

    return null;
  }
}
