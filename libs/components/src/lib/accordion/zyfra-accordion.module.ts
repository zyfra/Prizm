import { NgModule } from '@angular/core';
import { ZyfraAccordionComponent } from './zyfra-accordion/zyfra-accordion.component';
import { AccordionModule } from 'primeng/accordion';
import { ZyfraAccordionTabComponent } from './zyfra-accordion-tab/zyfra-accordion-tab.component';
import { CommonModule } from '@angular/common';
import { ZyfraSharedModule } from '../@shared/zyfra-shared.module';
import { ZyfraTemplateDirective } from '../@shared/zyfra-template.directives';

@NgModule({
  declarations: [ZyfraAccordionComponent, ZyfraAccordionTabComponent],
  imports: [AccordionModule, CommonModule, ZyfraSharedModule],
  exports: [ZyfraAccordionComponent, ZyfraAccordionTabComponent, ZyfraTemplateDirective],
})
export class ZyfraAccordionModule {}
