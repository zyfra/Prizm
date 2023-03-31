import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrizmAccordionModule, PrizmHintModule } from '@prizm-ui/components';

import { AccordionCustomTitleComponent } from './custom-title.component';
@NgModule({
  declarations: [AccordionCustomTitleComponent],
  exports: [AccordionCustomTitleComponent],
  imports: [CommonModule, PrizmAccordionModule, PrizmHintModule],
})
export class PrizmAccordionCustomTitleExampleModule {}
