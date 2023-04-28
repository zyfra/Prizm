import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmRadioButtonModule,
  PrizmSidebarModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import { PrizmSidebarServiceExampleComponent } from './examples/base/base.component';
import { PrizmSidebarTopBottomExampleComponent } from './examples/top-bottom/top-bottom.component';
import { PrizmSidebarHiddenFooterExampleComponent } from './examples/hidden-footer/hidden-footer.component';
import { PrizmSidebarCustomCloseGuardExampleComponent } from './examples/custom-close-guard/custom-close-guard.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmSidebarModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SidebarComponent)),
  ],
  declarations: [
    PrizmSidebarCustomCloseGuardExampleComponent,
    PrizmSidebarServiceExampleComponent,
    PrizmSidebarTopBottomExampleComponent,
    PrizmSidebarHiddenFooterExampleComponent,
    SidebarComponent,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
