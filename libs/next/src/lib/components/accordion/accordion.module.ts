import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { PzmIconModule } from '../icon';
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
  imports: [CommonModule, PzmIconModule],
  exports: [AccordionComponent, AccordionContentDirective, AccordionToolsDirective, AccordionItemComponent],
})
export class PzmAccordionModule {}
