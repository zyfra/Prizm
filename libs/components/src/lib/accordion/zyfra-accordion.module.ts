import { NgModule } from '@angular/core';
import { ZyfraAccordionComponent } from './zyfra-accordion/zyfra-accordion.component';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import { ZyfraSharedModule } from '../@shared/zyfra-shared.module';
import { ZyfraAccordionTabComponent } from './zyfra-accordion-tab/zyfra-accordion-tab.component';

@NgModule({
  declarations: [ZyfraAccordionComponent, ZyfraAccordionTabComponent],
  imports: [AccordionModule, CommonModule, ZyfraSharedModule],
  exports: [ZyfraAccordionComponent, ZyfraAccordionTabComponent],
})
export class ZyfraAccordionModule {}
