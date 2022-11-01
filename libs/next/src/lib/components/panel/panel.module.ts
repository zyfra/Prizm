import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PzmIconModule } from '../icon';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, PzmIconModule],
  exports: [PanelComponent],
})
export class PzmPanelModule {}
