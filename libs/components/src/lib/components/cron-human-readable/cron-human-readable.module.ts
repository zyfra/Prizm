import { NgModule } from '@angular/core';
import { PrizmCronHumanReadablePipe } from './pipe/cron-human-readable.pipe';

@NgModule({
  declarations: [PrizmCronHumanReadablePipe],
  exports: [PrizmCronHumanReadablePipe],
})
export class PrizmCronHumanReadableModule {}
