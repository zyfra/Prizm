import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuExampleComponent } from './side-menu-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SideMenuExampleBasicComponent } from './examples/side-menu-example-basic/side-menu-example-basic.component';
import {
  PrizmButtonComponent,
  PrizmInputTextModule,
  PrizmListingItemComponent,
  PrizmPanelComponent,
} from '@prizm-ui/components';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@NgModule({
  declarations: [SideMenuExampleComponent, SideMenuExampleBasicComponent],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SideMenuExampleComponent)),
    PrizmPanelComponent,
    PrizmInputTextModule,
    PrizmButtonComponent,
    PrizmListingItemComponent,
    PrizmIconsFullComponent,
  ],
})
export class SideMenuExampleModule {}
