import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { ZuiIconModule } from '../icon';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, ZuiIconModule],
  exports: [PanelComponent],
})
export class ZuiPanelModule {}
