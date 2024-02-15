import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PrizmButtonComponent } from '../button';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, PrizmButtonComponent],
  exports: [PanelComponent],
})
export class PrizmPanelModule {}
