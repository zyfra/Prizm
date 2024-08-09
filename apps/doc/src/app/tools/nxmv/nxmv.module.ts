import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { NxmvComponent } from './nxmv.component';
import { PrizmButtonComponent } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(NxmvComponent)),
  ],
  declarations: [NxmvComponent],
  exports: [NxmvComponent],
})
export class NxmvModule {}
