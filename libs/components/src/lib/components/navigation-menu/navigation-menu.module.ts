import { NgModule } from '@angular/core';
import { PrizmNavigationMenuToolbarComponent } from './components/prizm-navigation-menu-toolbar/prizm-navigation-menu-toolbar.component';
import { PrizmNavigationMenuComponent } from './components/prizm-navigation-menu/prizm-navigation-menu.component';
import { PrizmNavigationMenuGroupComponent } from './components/prizm-navigation-menu-group/prizm-navigation-menu-group.component';
import { PrizmNavigationMenuItemsComponent } from './components/prizm-navigation-menu-items/prizm-navigation-menu-items.component';
import { PrizmNavigationMenuSearchComponent } from './components/prizm-navigation-menu-search/prizm-navigation-menu-search.component';
import { PrizmNavigationMenuItemComponent } from './components/prizm-navigation-menu-item/prizm-navigation-menu-item.component';

@NgModule({
  imports: [
    PrizmNavigationMenuComponent,
    PrizmNavigationMenuToolbarComponent,
    PrizmNavigationMenuGroupComponent,
    PrizmNavigationMenuItemsComponent,
    PrizmNavigationMenuSearchComponent,
    PrizmNavigationMenuItemComponent,
  ],
  exports: [
    PrizmNavigationMenuComponent,
    PrizmNavigationMenuGroupComponent,
    PrizmNavigationMenuItemsComponent,
  ],
})
export class PrizmNavigationMenuModule {}
