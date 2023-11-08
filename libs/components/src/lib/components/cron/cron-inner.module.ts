import { NgModule } from '@angular/core';
import { PrizmCronMonthPipe } from './pipes/cron-month.pipe';
import { PrizmCronWeekPipe } from './pipes/cron-week.pipe';
import { PrizmCronScheduleComponent } from './components/schedule/schedule.component';
import { PrizmCronCarouselComponent } from './components/carousel/carousel.component';
import { PrizmCronHourComponent } from './components/hour/hour.component';
import { PrizmCronYearComponent } from './components/year/year.component';
import { PrizmCronDayComponent } from './components/day/day.component';
import { PrizmCronMonthComponent } from './components/month/month.component';
import { PrizmCronMinuteComponent } from './components/minute/minute.component';
import { PrizmCronSecondComponent } from './components/second/second.component';
import { PrizmPluckPipe } from '@prizm-ui/helpers';
import { CommonModule } from '@angular/common';
import { PrizmScrollbarModule } from '../scrollbar/scrollbar.module';
import { PrizmToggleModule } from '../toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateTimeModule } from '../input/input-date-time';
import { PrizmSwitcherModule } from '../switcher';
import { PrizmHintDirective } from '../../directives/hint';
import { PrizmRadioButtonModule } from '../radio';
import { PrizmChipsModule } from '../chips';
import { PrizmInputCarouselModule } from '../input/carousel';

@NgModule({
  declarations: [
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
    FormsModule,
    PrizmChipsModule,
    PrizmInputCarouselModule,
    PrizmRadioButtonModule,
    PrizmHintDirective,
    ReactiveFormsModule,
    PrizmSwitcherModule,
    PrizmInputLayoutDateTimeModule,
    PrizmToggleModule,
    PrizmScrollbarModule,
    PrizmCronMonthPipe,
    PrizmCronWeekPipe,
    PrizmPluckPipe,
  ],
  exports: [
    PrizmInputCarouselModule,
    FormsModule,
    PrizmRadioButtonModule,
    PrizmHintDirective,
    PrizmInputLayoutDateTimeModule,
    ReactiveFormsModule,
    CommonModule,
    PrizmToggleModule,
    PrizmSwitcherModule,
    PrizmScrollbarModule,
    PrizmChipsModule,
    PrizmPluckPipe,
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
})
export class PrizmCronInnerModule {}
