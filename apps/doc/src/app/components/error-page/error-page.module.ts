import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';

import { PrizmErrorPageModule } from '@prizm-ui/components';
import { PrizmErrorPageExampleComponent } from './error-page.component';
import { PrizmErrorPageBaseComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmErrorPageModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmErrorPageExampleComponent)),
  ],
  declarations: [PrizmErrorPageExampleComponent, PrizmErrorPageBaseComponent],
})
export class PrizmErrorPageExampleModule {}
