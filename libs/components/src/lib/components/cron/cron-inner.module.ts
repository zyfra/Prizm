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
import { PrizmCallFuncPipe, PrizmLetDirective, PrizmPluckPipe } from '@prizm-ui/helpers';
import { CommonModule } from '@angular/common';
import { PrizmToggleComponent } from '../toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateTimeModule } from '../input/input-date-time';
import { PrizmSwitcherComponent } from '../switcher';
import { PrizmHintDirective } from '../../directives/hint';
import { PrizmRadioButtonComponent } from '../radio';
import { PrizmChipsModule } from '../chips';
import { PrizmInputCarouselModule } from '../input/carousel';
import { PrizmScrollbarComponent } from '../scrollbar/scrollbar.component';
import { PolymorphOutletDirective } from '../../directives/polymorph/directives/outlet';

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
    PolymorphOutletDirective,
    PrizmLetDirective,
    PrizmChipsModule,
    PrizmInputCarouselModule,
    PrizmRadioButtonComponent,
    PrizmHintDirective,
    ReactiveFormsModule,
    PrizmSwitcherComponent,
    PrizmInputLayoutDateTimeModule,
    PrizmToggleComponent,
    PrizmScrollbarComponent,
    PrizmCronMonthPipe,
    PrizmCronWeekPipe,
    PrizmPluckPipe,
    PrizmCallFuncPipe,
  ],
  exports: [
    PrizmCallFuncPipe,
    PrizmLetDirective,
    PolymorphOutletDirective,
    PrizmInputCarouselModule,
    FormsModule,
    PrizmRadioButtonComponent,
    PrizmHintDirective,
    PrizmInputLayoutDateTimeModule,
    ReactiveFormsModule,
    CommonModule,
    PrizmToggleComponent,
    PrizmSwitcherComponent,
    PrizmScrollbarComponent,
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
