import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmInputIconButtonModule,
  PrizmRadioButtonModule,
  PrizmScrollbarModule,
  PrizmSidebarModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import { PrizmSidebarServiceExampleComponent } from './examples/base/base.component';
import { PrizmSidebarTopBottomExampleComponent } from './examples/top-bottom/top-bottom.component';
import { PrizmSidebarHiddenFooterExampleComponent } from './examples/hidden-footer/hidden-footer.component';
import { PrizmSidebarCustomCloseGuardExampleComponent } from './examples/custom-close-guard/custom-close-guard.component';
import { PrizmSidebarCustomHeaderTemplateExampleComponent } from './examples/custom-header-template/custom-header-template.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmSidebarModule,
    PrizmInputIconButtonModule,
    PrizmScrollbarModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SidebarComponent)),
  ],
  declarations: [
    PrizmSidebarCustomHeaderTemplateExampleComponent,
    PrizmSidebarCustomCloseGuardExampleComponent,
    PrizmSidebarServiceExampleComponent,
    PrizmSidebarTopBottomExampleComponent,
    PrizmSidebarHiddenFooterExampleComponent,
    SidebarComponent,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
