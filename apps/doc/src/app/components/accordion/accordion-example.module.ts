import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionExampleComponent } from './accordion-example.component';
import { PrizmAccordionModule, PrizmCheckboxModule } from '@prizm-ui/components';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { AccordionBasicExampleComponent } from './examples/accordion-basic-example/accordion-basic-example.component';
import { AccordionSingleExpandExampleComponent } from './examples/accordion-single-expand-example/accordion-single-expand-example.component';
import { AccordionMultipleExpandExampleComponent } from './examples/accordion-multiple-expand-example/accordion-multiple-expand-example.component';
import { AccordionWithInstrumentsExampleComponent } from './examples/accordion-with-instruments-example/accordion-with-instruments-example.component';

@NgModule({
  declarations: [AccordionExampleComponent, AccordionBasicExampleComponent, AccordionSingleExpandExampleComponent, AccordionMultipleExpandExampleComponent, AccordionWithInstrumentsExampleComponent],
  imports: [
    CommonModule,
    PrizmAccordionModule,
    TuiAddonDocModule,
    PrizmCheckboxModule,
    RouterModule.forChild(generateRoutes(AccordionExampleComponent)),
  ],
})
export class AccordionExampleModule {}
