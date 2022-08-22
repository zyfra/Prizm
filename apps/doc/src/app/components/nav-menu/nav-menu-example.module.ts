import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuExampleComponent } from './nav-menu-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { NavMenuBasicExampleComponent } from './examples/nav-menu-basic-example/nav-menu-basic-example.component';
import { ZuiNavMenuModule } from '@digital-plant/zui-components';
import { NavMenuAdvancedExampleComponent } from './examples/nav-menu-advanced-example/nav-menu-advanced-example.component';

@NgModule({
  declarations: [NavMenuExampleComponent, NavMenuBasicExampleComponent, NavMenuAdvancedExampleComponent],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiNavMenuModule,
    RouterModule.forChild(generateRoutes(NavMenuExampleComponent)),
  ],
})
export class NavMenuExampleModule {}
