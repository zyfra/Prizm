import { NgModule } from '@angular/core';
import { PrizmInputZoneDirective } from './input-zone.directive';
import { PrizmInputInZoneDirective } from './input-in-zone.directive';

@NgModule({
  declarations: [PrizmInputZoneDirective, PrizmInputInZoneDirective],
  exports: [PrizmInputZoneDirective, PrizmInputInZoneDirective],
})
export class PrizmInputZoneModule {}
