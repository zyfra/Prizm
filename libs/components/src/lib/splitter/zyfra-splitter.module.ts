import { NgModule } from '@angular/core';
import { ZyfraSplitterComponent } from './zyfra-splitter.component';
import { SplitterModule } from 'primeng/splitter';
import { CommonModule } from '@angular/common';
import { ZyfraSplitterTemplateDirective } from './zyfra-splitter.directives';

@NgModule({
  declarations: [ZyfraSplitterTemplateDirective, ZyfraSplitterComponent],
  imports: [CommonModule, SplitterModule],
  exports: [ZyfraSplitterTemplateDirective, ZyfraSplitterComponent],
})
export class ZyfraSplitterModule {}
