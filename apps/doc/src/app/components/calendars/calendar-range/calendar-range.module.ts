import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CalendarRangeComponent } from './calendar-range.component';
import { PolymorphModule, PzmCalendarRangeModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmCalendarRangeBaseExampleComponent } from './examples/base/calendar-range-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmCalendarRangeModule,
    RouterModule.forChild(generateRoutes(CalendarRangeComponent)),
  ],
  declarations: [
    PzmCalendarRangeBaseExampleComponent,
    CalendarRangeComponent
  ],
  exports: [CalendarRangeComponent],
})
export class CalendarRangeModule {}
