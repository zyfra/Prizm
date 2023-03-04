import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAccordionModule } from '@prizm-ui/components';
import { PrizmAddonDocModule, PrizmDocCodeModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { GettingStartedComponent } from './getting-started.component';

@NgModule({
  exports: [GettingStartedComponent],
  declarations: [GettingStartedComponent],
  imports: [
    PrizmAddonDocModule,
    PrizmAccordionModule,
    RouterModule.forChild(prizmDocGenerateRoutes(GettingStartedComponent)),
  ],
})
export class GettingStartedModule {}
