import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { PolymorphModule, PrizmCalendarModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmCalendarBaseExampleComponent } from './examples/base/calendar-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmCalendarModule,
    RouterModule.forChild(prizmDocGenerateRoutes(CalendarComponent)),
  ],
  declarations: [
    PrizmCalendarBaseExampleComponent,
    CalendarComponent
  ],
  exports: [CalendarComponent],
})
export class CalendarModule {}
