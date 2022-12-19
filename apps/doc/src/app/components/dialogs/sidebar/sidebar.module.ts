import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
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
    PrizmSidebarServiceExampleComponent,
    PrizmSidebarTopBottomExampleComponent,
    SidebarComponent,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
