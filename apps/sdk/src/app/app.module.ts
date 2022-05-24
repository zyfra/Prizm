import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ButtonModule } from './components/button/button.module';
import { TranslateModule } from './components/translate/translate.module';
import { InputModule } from './components/input/input.module';
import { InputTextModule } from './components/input-text/input-text.module';
import { IconModule } from './components/icon/icon.module';
import { CalendarTestModule } from './components/calendar-test/calendar-test.module';
import { DropdownTestModule } from './components/dropdown-test/dropdown-test.module';
import { ZyfraTabViewModule, ZyfraUiRootModule } from '@digital-plant/zyfra-components';
import { TableTestModule } from './components/table-test/table-test.module';
import { AppDirective } from './app.directive';

@NgModule({
  declarations: [AppComponent, AppDirective],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CalendarTestModule,
    CommonModule,
    DropdownTestModule,
    HttpClientModule,
    IconModule,
    InputModule,
    InputTextModule,
    TableTestModule,
    TranslateModule,
    ZyfraTabViewModule,
      ZyfraUiRootModule
],
  bootstrap: [AppComponent],
})
export class AppModule {}
