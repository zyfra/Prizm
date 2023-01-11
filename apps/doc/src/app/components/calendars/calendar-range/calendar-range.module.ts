import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { CalendarRangeComponent } from './calendar-range.component';
import { PolymorphModule, PrizmCalendarRangeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCalendarRangeBaseExampleComponent } from './examples/base/calendar-range-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmCalendarRangeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(CalendarRangeComponent)),
  ],
  declarations: [PrizmCalendarRangeBaseExampleComponent, CalendarRangeComponent],
  exports: [CalendarRangeComponent],
})
export class CalendarRangeModule {}
