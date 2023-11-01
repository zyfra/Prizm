import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PrizmIconModule } from '../icon';
import { PrizmButtonModule } from '../button';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, PrizmIconModule, PrizmButtonModule],
  exports: [PanelComponent],
})
export class PrizmPanelModule {}
