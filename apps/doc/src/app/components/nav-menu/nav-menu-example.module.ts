import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuExampleComponent } from './nav-menu-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { NavMenuBasicExampleComponent } from './examples/nav-menu-basic-example/nav-menu-basic-example.component';
import { NavMenuAdvancedExampleComponent } from './examples/nav-menu-advanced-example/nav-menu-advanced-example.component';
import { PrizmNavMenuModule } from '@prizm-ui/deprecated';
import { NavMenuOneModeExampleComponent } from './examples/nav-menu-one-mode-example/nav-menu-one-mode-example.component';

@NgModule({
  declarations: [
    NavMenuOneModeExampleComponent,
    NavMenuExampleComponent,
    NavMenuBasicExampleComponent,
    NavMenuAdvancedExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmNavMenuModule,
    RouterModule.forChild(prizmDocGenerateRoutes(NavMenuExampleComponent)),
  ],
})
export class NavMenuExampleModule {}
