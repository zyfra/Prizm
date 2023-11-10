import { NgModule } from '@angular/core';
import { PrizmAccordionComponent } from './accordion.component';
import { PrizmAccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionToolsDirective } from './directives/accordion-tools.directive';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';

/**
 * @deprecated
 * use standalone instead
 * */
@NgModule({
  imports: [
    PrizmAccordionComponent,
    PrizmAccordionContentDirective,
    AccordionToolsDirective,
    PrizmAccordionItemComponent,
  ],
  exports: [
    PrizmAccordionComponent,
    PrizmAccordionContentDirective,
    AccordionToolsDirective,
    PrizmAccordionItemComponent,
  ],
})
export class PrizmAccordionModule {}
