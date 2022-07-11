import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraAccordionModule } from '@digital-plant/zyfra-components';
import { AccordionComponent } from './accordion.component';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, ZyfraAccordionModule],
  exports: [AccordionComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Accordion', AccordionComponent],
      multi: true,
    },
  ],
})
export class AccordionModule {}
