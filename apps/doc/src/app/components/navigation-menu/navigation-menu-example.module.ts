import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import {
  PrizmBreadcrumbsModule,
  PrizmButtonModule,
  PrizmHintModule,
  PrizmNavigationMenuModule,
  PrizmScrollbarModule,
  PrizmSplitterModule,
  PrizmWidgetModule,
} from '@prizm-ui/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationMenuBasicExampleComponent } from './examples/navigation-menu-basic-example/navigation-menu-basic-example.component';
import { NavigationMenuExampleComponent } from './navigation-menu-example.component';
import { PrizmIconsSvgModule } from '@prizm-ui/icons';
import { NavigationMenuGroupsExampleComponent } from './examples/navigation-menu-groups-example/navigation-menu-groups-example.component';
import { HintButtonComponent } from './examples/hint-button/hint-button.component';
import { MenuHintComponent } from './examples/menu-hint/menu-hint.component';
import { NavigationMenuChildrenHandlerExampleComponent } from './examples/navigation-menu-children-handler-example/navigation-menu-children-handler-example.component';

@NgModule({
  declarations: [
    NavigationMenuExampleComponent,
    NavigationMenuBasicExampleComponent,
    NavigationMenuGroupsExampleComponent,
    NavigationMenuChildrenHandlerExampleComponent,
    HintButtonComponent,
    MenuHintComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmNavigationMenuModule,
    PrizmIconsSvgModule,
    PrizmButtonModule,
    PrizmHintModule,
    PrizmBreadcrumbsModule,
    PrizmWidgetModule,
    PrizmSplitterModule,
    PrizmScrollbarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(NavigationMenuExampleComponent)),
  ],
})
export class NavigationMenuExampleModule {}
