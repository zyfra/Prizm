import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import {
  PrizmBreadcrumbsModule,
  PrizmButtonComponent,
  PrizmHintDirective,
  PrizmNavigationMenuModule,
  PrizmScrollbarModule,
  PrizmSplitterModule,
  PrizmWidgetComponent,
} from '@prizm-ui/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationMenuBasicExampleComponent } from './examples/navigation-menu-basic-example/navigation-menu-basic-example.component';
import { NavigationMenuExampleComponent } from './navigation-menu-example.component';
import { NavigationMenuGroupsExampleComponent } from './examples/navigation-menu-groups-example/navigation-menu-groups-example.component';
import { HintButtonComponent } from './examples/hint-button/hint-button.component';
import { MenuHintComponent } from './examples/menu-hint/menu-hint.component';
import { NavigationMenuChildrenHandlerExampleComponent } from './examples/navigation-menu-children-handler-example/navigation-menu-children-handler-example.component';
import { NavigationMenuOneModeExampleComponent } from './examples/navigation-menu-one-mode-example/navigation-menu-one-mode-example.component';

@NgModule({
  declarations: [
    NavigationMenuExampleComponent,
    NavigationMenuBasicExampleComponent,
    NavigationMenuOneModeExampleComponent,
    NavigationMenuGroupsExampleComponent,
    NavigationMenuChildrenHandlerExampleComponent,
    HintButtonComponent,
    MenuHintComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmNavigationMenuModule,
    PrizmButtonComponent,
    PrizmHintDirective,
    PrizmBreadcrumbsModule,
    PrizmWidgetComponent,
    PrizmSplitterModule,
    PrizmScrollbarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(NavigationMenuExampleComponent)),
  ],
})
export class NavigationMenuExampleModule {}
