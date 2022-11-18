import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CalendarRangeComponent } from './calendar-range.component';
import { PolymorphModule, PrizmCalendarRangeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCalendarRangeBaseExampleComponent } from './examples/base/calendar-range-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmCalendarRangeModule,
    RouterModule.forChild(generateRoutes(CalendarRangeComponent)),
  ],
  declarations: [
    PrizmCalendarRangeBaseExampleComponent,
    CalendarRangeComponent
  ],
  exports: [CalendarRangeComponent],
})
export class CalendarRangeModule {}
