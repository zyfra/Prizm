import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuExampleComponent } from './nav-menu-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { NavMenuBasicExampleComponent } from './examples/nav-menu-basic-example/nav-menu-basic-example.component';
import { PrizmNavMenuModule } from '@prizm-ui/components';
import { NavMenuAdvancedExampleComponent } from './examples/nav-menu-advanced-example/nav-menu-advanced-example.component';

@NgModule({
  declarations: [NavMenuExampleComponent, NavMenuBasicExampleComponent, NavMenuAdvancedExampleComponent],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmNavMenuModule,
    RouterModule.forChild(prizmDocGenerateRoutes(NavMenuExampleComponent)),
  ],
})
export class NavMenuExampleModule {}
