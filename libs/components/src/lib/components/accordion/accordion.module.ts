import { NgModule } from '@angular/core';
import { PrizmAccordionComponent } from './accordion.component';
import { PrizmAccordionContentDirective } from './directives/accordion-content.directive';
import { AccordionToolsDirective } from './directives/accordion-tools.directive';
import { PrizmAccordionItemComponent } from './components/accordion-item/accordion-item.component';
<<<<<<< HEAD
=======
import { PolymorphModule } from '../../directives/polymorph';
import { PrizmButtonModule } from '../button';
>>>>>>> 2c00b47f2 (feat: accordion and breadcrumbs v3 colors #929)

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
<<<<<<< HEAD
=======
  imports: [CommonModule, PrizmIconModule, PolymorphModule, PrizmButtonModule],
>>>>>>> 2c00b47f2 (feat: accordion and breadcrumbs v3 colors #929)
  exports: [
    PrizmAccordionComponent,
    PrizmAccordionContentDirective,
    AccordionToolsDirective,
    PrizmAccordionItemComponent,
  ],
})
export class PrizmAccordionModule {}
