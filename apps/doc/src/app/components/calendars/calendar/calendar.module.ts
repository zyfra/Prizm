import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { PolymorphModule, PzmCalendarModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmCalendarBaseExampleComponent } from './examples/base/calendar-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmCalendarModule,
    RouterModule.forChild(generateRoutes(CalendarComponent)),
  ],
  declarations: [
    PzmCalendarBaseExampleComponent,
    CalendarComponent
  ],
  exports: [CalendarComponent],
})
export class CalendarModule {}
