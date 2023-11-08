import { NgModule } from '@angular/core';
import { PrizmAccordionComponent } from './accordion.component';
import { AccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionToolsDirective } from './directives/accordion-tools.directive';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';

/**
 * @deprecated
 * use standalone instead
 * */
@NgModule({
  imports: [
    PrizmAccordionComponent,
    AccordionContentDirective,
    AccordionToolsDirective,
    PrizmAccordionItemComponent,
  ],
  exports: [
    PrizmAccordionComponent,
    AccordionContentDirective,
    AccordionToolsDirective,
    PrizmAccordionItemComponent,
  ],
})
export class PrizmAccordionModule {}
