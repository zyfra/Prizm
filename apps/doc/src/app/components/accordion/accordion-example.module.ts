import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionExampleComponent } from './accordion-example.component';
import { PrizmAccordionModule, PrizmCheckboxModule } from '@prizm-ui/components';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { AccordionBasicExampleComponent } from './examples/accordion-basic-example/accordion-basic-example.component';
import { AccordionSingleExpandExampleComponent } from './examples/accordion-single-expand-example/accordion-single-expand-example.component';
import { AccordionMultipleExpandExampleComponent } from './examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component';
import { AccordionWithInstrumentsExampleComponent } from './examples/accordion-with-instruments-example/accordion-with-instruments-example.component';
import { AccordionNestedComponent } from './examples/nested/nested.component';
import { PrizmAccordionCustomTitleExampleModule } from './examples/custom-title/custom-title.module';
@NgModule({
  declarations: [
    AccordionExampleComponent,
    AccordionBasicExampleComponent,
    AccordionSingleExpandExampleComponent,
    AccordionMultipleExpandExampleComponent,
    AccordionWithInstrumentsExampleComponent,
    AccordionNestedComponent,
  ],
  imports: [
    CommonModule,
    PrizmAccordionModule,
    PrizmAddonDocModule,
    PrizmCheckboxModule,
    PrizmAccordionCustomTitleExampleModule,
    RouterModule.forChild(prizmDocGenerateRoutes(AccordionExampleComponent)),
  ],
})
export class AccordionExampleModule {}
