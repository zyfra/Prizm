import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraDatepickerModule } from '@digital-plant/zyfra-components';
import { CalendarTestComponent } from './calendar-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_TOKEN } from '../../app.token';

@NgModule({
  declarations: [CalendarTestComponent],
  imports: [CommonModule, ZyfraDatepickerModule, FormsModule, ReactiveFormsModule],
  exports: [CalendarTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Calendar', CalendarTestComponent],
      multi: true,
    },
  ],
})
export class CalendarTestModule {}
