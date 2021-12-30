import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZyfraDropdownModule } from '@digital-plant/zyfra-components';
import { TranslateModule } from '@digital-plant/zyfra-translate';
import { AppComponent } from './app.component';
import { DropdownTestComponent } from './dropdown-test/dropdown-test.component';

@NgModule({
  declarations: [AppComponent, DropdownTestComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ZyfraDropdownModule,
    HttpClientModule,
    TranslateModule.forRoot()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
