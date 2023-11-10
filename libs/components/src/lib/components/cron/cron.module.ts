import { NgModule } from '@angular/core';
import { PrizmCronComponent } from './cron.component';
import { PrizmCronMonthPipe } from './pipes/cron-month.pipe';
import { PrizmCronWeekPipe } from './pipes/cron-week.pipe';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmCronComponent, PrizmCronMonthPipe, PrizmCronWeekPipe],
  exports: [PrizmCronComponent, PrizmCronMonthPipe, PrizmCronWeekPipe],
})
export class PrizmCronModule {}
