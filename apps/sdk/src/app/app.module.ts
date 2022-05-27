import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ZyfraButtonModule,
  ZyfraDatepickerModule,
  ZyfraDropdownModule,
  ZyfraIconButtonModule,
  ZyfraIconModule,
  ZyfraInputGroupModule,
  ZyfraInputModule,
  ZyfraInputTextModule
} from '@digital-plant/zyfra-components';
import { TranslateModule } from '@digital-plant/zyfra-translate';
import { AppComponent } from './app.component';
import { DropdownTestComponent } from './dropdown-test/dropdown-test.component';
import { CalendarTestComponent } from './calendar-test/calendar-test.component';

@NgModule({
  declarations: [AppComponent, DropdownTestComponent, CalendarTestComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ZyfraDropdownModule,
    ZyfraDatepickerModule,
    ZyfraButtonModule,
    ZyfraInputGroupModule,
    ZyfraInputTextModule,
    ZyfraInputModule,
    ZyfraIconModule,
    ZyfraIconButtonModule,
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
