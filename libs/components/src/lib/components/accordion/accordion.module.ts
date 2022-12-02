import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { PrizmIconModule } from '../icon';
import { AccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionToolsDirective } from './directives/accordion-tools.directive';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

@NgModule({
  declarations: [
    AccordionComponent,
    AccordionContentDirective,
    AccordionToolsDirective,
    AccordionItemComponent,
  ],
  imports: [CommonModule, PrizmIconModule],
  exports: [AccordionComponent, AccordionContentDirective, AccordionToolsDirective, AccordionItemComponent],
})
export class PrizmAccordionModule {}
