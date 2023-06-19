import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { PrizmNavigationMenuItem, PrizmNavigationMenuToolbarConfig } from '@prizm-ui/components';
import { PrizmIconsSvgRegistry, PRIZM_ICONS_SVG_SET } from '@prizm-ui/icons';
import { MOKED_ITEMS } from './navigation-menu.constants';

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

  constructor(private readonly iconRegistry: PrizmIconsSvgRegistry, private cdr: ChangeDetectorRef) {
    this.iconRegistry.registerIcons(PRIZM_ICONS_SVG_SET);
  }

  public toggleLoading(): void {
    this.items.length ? (this.items = []) : (this.items = MOKED_ITEMS);
    this.cdr.detectChanges();
  }
}
