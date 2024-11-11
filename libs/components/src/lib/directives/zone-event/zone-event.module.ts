import { NgModule } from '@angular/core';
import { PrizmZoneEventDirective } from './zone-event.directive';

@NgModule({
  exports: [PrizmZoneEventDirective],
  imports: [PrizmZoneEventDirective],
})
export class PrizmZoneEventModule {}
