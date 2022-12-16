import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuExampleComponent } from './side-menu-example.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { SideMenuExampleBasicComponent } from './examples/side-menu-example-basic/side-menu-example-basic.component';
import { PrizmIconModule, PrizmInputTextModule, PrizmPanelModule } from '@prizm-ui/components';

@NgModule({
  declarations: [SideMenuExampleComponent, SideMenuExampleBasicComponent],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIconModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SideMenuExampleComponent)),
    PrizmPanelModule,
    PrizmInputTextModule,
  ],
})
export class SideMenuExampleModule {}
