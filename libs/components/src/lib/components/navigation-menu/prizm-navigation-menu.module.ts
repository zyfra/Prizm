import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmIconsSvgModule } from '@prizm-ui/icons';
import { PrizmButtonModule } from '../button';
import { PrizmTreeModule } from '../tree';
import { PrizmNavigationMenuToolbarComponent } from './components/prizm-navigation-menu-toolbar/prizm-navigation-menu-toolbar.component';
import { PrizmNavigationMenuComponent } from './components/prizm-navigation-menu/prizm-navigation-menu.component';
import { PrizmNavigationMenuGroupComponent } from './components/prizm-navigation-menu-group/prizm-navigation-menu-group.component';
import { PrizmNavigationMenuItemsComponent } from './components/prizm-navigation-menu-items/prizm-navigation-menu-items.component';
import { PrizmAccordionModule } from '../accordion';
import { PrizmNavigationMenuSearchComponent } from './components/prizm-navigation-menu-search/prizm-navigation-menu-search.component';
import { PrizmNavigationMenuItemComponent } from './components/prizm-navigation-menu-item/prizm-navigation-menu-item.component';
import { PolymorphModule, PrizmHoveredModule } from '../../directives';

@NgModule({
  declarations: [
    PrizmNavigationMenuComponent,
    PrizmNavigationMenuToolbarComponent,
    PrizmNavigationMenuGroupComponent,
    PrizmNavigationMenuItemsComponent,
    PrizmNavigationMenuSearchComponent,
    PrizmNavigationMenuItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrizmTreeModule,
    PrizmIconsSvgModule,
    PrizmButtonModule,
    PrizmAccordionModule,
    PrizmHoveredModule,
    PolymorphModule,
  ],
  exports: [
    PrizmNavigationMenuComponent,
    PrizmNavigationMenuGroupComponent,
    PrizmNavigationMenuItemsComponent,
  ],
})
export class PrizmNavigationMenuModule {}
