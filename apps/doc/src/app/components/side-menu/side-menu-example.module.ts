import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuExampleComponent } from './side-menu-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SideMenuExampleBasicComponent } from './examples/side-menu-example-basic/side-menu-example-basic.component';
import { ZuiIconModule, ZuiPanelModule } from '@digital-plant/zui-components';

@NgModule({
  declarations: [SideMenuExampleComponent, SideMenuExampleBasicComponent],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiIconModule,
    RouterModule.forChild(generateRoutes(SideMenuExampleComponent)),
    ZuiPanelModule,
  ],
})
export class SideMenuExampleModule {}
