import { NgModule } from '@angular/core';
import { PrizmCronComponent } from './cron.component';
import { CommonModule } from '@angular/common';
import { PrizmButtonModule } from '../button';
import { PrizmSwitcherModule } from '../switcher';
import { PrizmCarouselModule, PrizmInputDateTimeModule, PrizmInputTextModule } from '../input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmToggleModule } from '../toggle';
import { PrizmCronHourComponent } from './components/hour/hour.component';
import { PrizmCronYearComponent } from './components/year/year.component';
import { PrizmCronDayComponent } from './components/day/day.component';
import { PrizmCronMonthComponent } from './components/month/month.component';
import { PrizmRadioButtonModule } from '../radio';
import { PrizmCronScheduleComponent } from './components/schedule/schedule.component';
import { PrizmCronCarouselComponent } from './components/carousel/carousel.component';
import { PrizmCronMinuteComponent } from './components/minute/minute.component';
import { PrizmCronSecondComponent } from './components/second/second.component';
import { PrizmLetModule } from '@prizm-ui/helpers';

@NgModule({
  declarations: [
    PrizmCronComponent,
    PrizmCronScheduleComponent,
    PrizmCronCarouselComponent,
    PrizmCronHourComponent,
    PrizmCronYearComponent,
    PrizmCronDayComponent,
    PrizmCronMonthComponent,
    PrizmCronMinuteComponent,
    PrizmCronSecondComponent,
  ],
  imports: [
    CommonModule,
    PrizmButtonModule,
    PrizmCarouselModule,
    PrizmInputTextModule,
    PrizmRadioButtonModule,
    PrizmSwitcherModule,
    PrizmToggleModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmInputDateTimeModule,
    PrizmLetModule,
  ],
  exports: [PrizmCronComponent],
})
export class PrizmCronModule {}
