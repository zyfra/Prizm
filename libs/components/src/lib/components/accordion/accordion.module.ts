import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAccordionComponent } from './accordion.component';
import { PrizmIconModule } from '../icon';
import { AccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionToolsDirective } from './directives/accordion-tools.directive';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { PolymorphModule } from '../../directives/polymorph';

@NgModule({
  declarations: [
    PrizmAccordionComponent,
    AccordionContentDirective,
    AccordionToolsDirective,
    PrizmAccordionItemComponent,
  ],
  imports: [CommonModule, PrizmIconModule, PolymorphModule],
  exports: [
    PrizmAccordionComponent,
    AccordionContentDirective,
    AccordionToolsDirective,
    PrizmAccordionItemComponent,
  ],
})
export class PrizmAccordionModule {}
