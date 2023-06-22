import { NgModule } from '@angular/core';
import { PrizmDocHostDirective } from './host.directive';
import { PrizmDocHostElementDirective } from './host-element.directive';

@NgModule({
  declarations: [PrizmDocHostDirective, PrizmDocHostElementDirective],
  exports: [PrizmDocHostDirective, PrizmDocHostElementDirective],
})
export class PrizmDocHostModule {}
