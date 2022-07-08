import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraTabViewModule } from '@digital-plant/zyfra-components';
import { AppComponent } from './app.component';
import { AppDirective } from './app.directive';
import { ButtonModule } from './components/button/button.module';
import { CalendarTestModule } from './components/calendar-test/calendar-test.module';
import { CheckboxModule } from './components/checkbox/checkbox.module';
import { DatePickerModule } from './components/datepicker/datepicker.module';
import { DropdownTestModule } from './components/dropdown-test/dropdown-test.module';
import { IconModule } from './components/icon/icon.module';
import { InputGroupModule } from './components/input-group/input-group.module';
import { InputModule } from './components/input/input.module';
import { TableTestModule } from './components/table-test/table-test.module';
import { TranslateModule } from './components/translate/translate.module';

@NgModule({
  declarations: [AppComponent, AppDirective],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarTestModule,
    CheckboxModule,
    CommonModule,
    DropdownTestModule,
    DatePickerModule,
    HttpClientModule,
    IconModule,
    InputModule,
    InputGroupModule,
    TableTestModule,
    TranslateModule,
    ZyfraTabViewModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
