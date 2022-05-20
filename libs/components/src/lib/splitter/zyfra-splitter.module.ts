import { NgModule } from '@angular/core';
import { ZyfraSplitterComponent } from './zyfra-splitter.component';
import { CommonModule } from '@angular/common';
import { ZyfraSplitterTemplateDirective } from './zyfra-splitter.directives';
import { SplitterModule } from './p-splitter/splitter.module';

@NgModule({
  declarations: [ZyfraSplitterTemplateDirective, ZyfraSplitterComponent],
  imports: [CommonModule, SplitterModule],
  exports: [ZyfraSplitterTemplateDirective, ZyfraSplitterComponent],
})
export class ZyfraSplitterModule {}
