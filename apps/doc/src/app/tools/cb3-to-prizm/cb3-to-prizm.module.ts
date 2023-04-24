import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { Cb3ToPrizmComponent } from './cb3-to-prizm.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(Cb3ToPrizmComponent)),
  ],
  declarations: [Cb3ToPrizmComponent],
  exports: [Cb3ToPrizmComponent],
})
export class Cb3ToPrizmModule {}
