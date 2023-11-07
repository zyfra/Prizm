import { NgModule } from '@angular/core';
import { PrizmCronHumanReadablePipe } from './pipe/cron-human-readable.pipe';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmCronHumanReadablePipe],
  exports: [PrizmCronHumanReadablePipe],
})
export class PrizmCronHumanReadableModule {}
