import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAccordionModule } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { ForDevelopersComponent } from './for-developers.component';

@NgModule({
  exports: [ForDevelopersComponent],
  declarations: [ForDevelopersComponent],
  imports: [
    PrizmAddonDocModule,
    PrizmAccordionModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ForDevelopersComponent)),
  ],
})
export class ForDevelopersModule {}
