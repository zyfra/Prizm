import { NgModule } from '@angular/core';
import { PrizmDropdownZoneDirective } from './event-zone.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmDropdownZoneDirective],
  exports: [PrizmDropdownZoneDirective],
})
export class PrizmDropdownZoneModule {}
