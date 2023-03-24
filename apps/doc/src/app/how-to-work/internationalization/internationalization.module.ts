import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAccordionModule } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { InternationalizationComponent } from './internationalization.component';

@NgModule({
  exports: [InternationalizationComponent],
  declarations: [InternationalizationComponent],
  imports: [
    PrizmAddonDocModule,
    PrizmAccordionModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InternationalizationComponent)),
  ],
})
export class InternationalizationModule {}
