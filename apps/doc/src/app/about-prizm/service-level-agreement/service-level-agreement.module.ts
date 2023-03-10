import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrizmAccordionModule, PrizmTableModule } from '@prizm-ui/components';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { ServiceLevelAgreementComponent } from './service-level-agreement.component';

@NgModule({
  exports: [ServiceLevelAgreementComponent],
  declarations: [ServiceLevelAgreementComponent],
  imports: [
    PrizmAddonDocModule,
    PrizmTableModule,
    PrizmAccordionModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ServiceLevelAgreementComponent)),
  ],
})
export class ServiceLevelAgreementModule {}
