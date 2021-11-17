import { NgModule } from '@angular/core';
import { ZyfraSplitterComponent } from './zyfra-splitter.component';
import { SplitterModule } from 'primeng/splitter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ZyfraSplitterTemplateDirective } from './zyfra-splitter.directives';

@NgModule({
  declarations: [ZyfraSplitterTemplateDirective, ZyfraSplitterComponent],
  imports: [CommonModule, BrowserModule, BrowserAnimationsModule, SplitterModule],
  exports: [ZyfraSplitterTemplateDirective, ZyfraSplitterComponent],
})
export class ZyfraSplitterModule {}
