import { NgModule } from '@angular/core';
import { ZyfraAccordionComponent } from './zyfra-accordion/zyfra-accordion.component';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { ZyfraTemplateModule } from '../@core/shared/zyfra-template.module';
import { ZyfraAccordionTabComponent } from './zyfra-accordion-tab/zyfra-accordion-tab.component';

@NgModule({
  declarations: [ZyfraAccordionComponent, ZyfraAccordionTabComponent],
  imports: [AccordionModule, CommonModule, ZyfraTemplateModule],
  exports: [ZyfraAccordionComponent, ZyfraAccordionTabComponent],
})
export class ZyfraAccordionModule {}
