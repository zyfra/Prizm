import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CalendarRangeComponent } from './calendar-range.component';
import { PolymorphModule, ZuiCalendarRangeModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiCalendarRangeBaseExampleComponent } from './examples/base/calendar-range-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiCalendarRangeModule,
    RouterModule.forChild(generateRoutes(CalendarRangeComponent)),
  ],
  declarations: [
    ZuiCalendarRangeBaseExampleComponent,
    CalendarRangeComponent
  ],
  exports: [CalendarRangeComponent],
})
export class CalendarRangeModule {}
