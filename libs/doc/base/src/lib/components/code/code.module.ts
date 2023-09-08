import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { PrizmDocCodeComponent } from './code.component';

@NgModule({
  imports: [CommonModule, HighlightModule],
  declarations: [PrizmDocCodeComponent],
  exports: [PrizmDocCodeComponent],
})
export class PrizmDocCodeModule {}
