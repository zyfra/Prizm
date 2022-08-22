import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { PolymorphModule, ZuiCalendarModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiCalendarBaseExampleComponent } from './examples/base/calendar-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiCalendarModule,
    RouterModule.forChild(generateRoutes(CalendarComponent)),
  ],
  declarations: [
    ZuiCalendarBaseExampleComponent,
    CalendarComponent
  ],
  exports: [CalendarComponent],
})
export class CalendarModule {}
