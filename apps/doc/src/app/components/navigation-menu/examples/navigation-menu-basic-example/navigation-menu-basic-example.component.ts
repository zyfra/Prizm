import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { PrizmNavigationMenuItem, PrizmNavigationMenuToolbarConfig } from '@prizm-ui/components';
import { MOKED_ITEMS } from './navigation-menu.constants';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_FULL_SET } from '@prizm-ui/icons/full/source/icon-set';

@Component({
  selector: 'prizm-navigation-menu-basic-example',
  templateUrl: './navigation-menu-basic-example.component.html',
  styleUrls: ['./navigation-menu-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuBasicExampleComponent {
  toolbarConfig: PrizmNavigationMenuToolbarConfig = {
    search: true,
    folderMode: true,
    rubricatorMode: true,
    closeAll: true,
  };

  items: PrizmNavigationMenuItem[] = MOKED_ITEMS;
  activeItem: PrizmNavigationMenuItem;

  constructor(
    private readonly iconRegistry: PrizmIconsFullRegistry,
    private cdr: ChangeDetectorRef
  ) {
    this.iconRegistry.registerIcons(PRIZM_ICONS_FULL_SET);

    const childItemsArray = this.items[0].children as PrizmNavigationMenuItem[];
    this.activeItem = childItemsArray[0];
  }

  public toggleLoading(): void {
    this.items.length ? (this.items = []) : (this.items = MOKED_ITEMS);
    this.cdr.detectChanges();
  }
}
