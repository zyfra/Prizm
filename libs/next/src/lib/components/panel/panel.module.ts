import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PrizmIconModule } from '../icon';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, PrizmIconModule],
  exports: [PanelComponent],
})
export class PrizmPanelModule {}
