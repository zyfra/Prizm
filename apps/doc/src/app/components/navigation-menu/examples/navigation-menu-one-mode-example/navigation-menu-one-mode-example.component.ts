import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { PrizmNavigationMenuItem, PrizmNavigationMenuToolbarConfig } from '@prizm-ui/components';
import { MOKED_ITEMS } from './navigation-menu.constants';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { PRIZM_ICONS_FULL_SET } from '@prizm-ui/icons/full/source/icon-set';

@Component({
  selector: 'prizm-navigation-menu-one-mode-example',
  templateUrl: './navigation-menu-one-mode-example.component.html',
  styleUrls: ['./navigation-menu-one-mode-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuOneModeExampleComponent {
  toolbarConfig: PrizmNavigationMenuToolbarConfig = {
    search: true,
    folderMode: false,
    hierarchyMode: false,
    rubricatorMode: false,
    closeAll: false,
  };

  items: PrizmNavigationMenuItem[] = MOKED_ITEMS;

  constructor(private readonly iconRegistry: PrizmIconsFullRegistry, private cdr: ChangeDetectorRef) {
    this.iconRegistry.registerIcons(PRIZM_ICONS_FULL_SET);
  }

  public toggleLoading(): void {
    this.items.length ? (this.items = []) : (this.items = MOKED_ITEMS);
    this.cdr.detectChanges();
  }
}
