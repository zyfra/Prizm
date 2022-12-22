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
import { PrizmCallFuncModule, PrizmLetModule, PrizmPluckPipeModule } from '@prizm-ui/helpers';
import { PolymorphModule, PrizmHintModule } from '../../directives';
import { PrizmCronMonthPipe } from './pipes/cron-month.pipe';
import { PrizmCronWeekPipe } from './pipes/cron-week.pipe';
import { PrizmScrollbarModule } from '../scrollbar';

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
    PrizmCronMonthPipe,
    PrizmCronWeekPipe,
  ],
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmCallFuncModule,
    PrizmButtonModule,
    PrizmCarouselModule,
    PrizmInputTextModule,
    PrizmRadioButtonModule,
    PrizmSwitcherModule,
    PrizmToggleModule,
    PrizmPluckPipeModule,
    ReactiveFormsModule,
    FormsModule,
    PrizmInputDateTimeModule,
    PrizmLetModule,
    PrizmScrollbarModule,
    PrizmHintModule,
  ],
  exports: [PrizmCronComponent, PrizmCronMonthPipe, PrizmCronWeekPipe],
})
export class PrizmCronModule {}
