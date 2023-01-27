import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmOverlayComponent } from './overlay.component';
import { PrizmThemeModule } from '../../directives/theme';

// TODO move to seperated lib
@NgModule({
  imports: [CommonModule, PrizmThemeModule],
  declarations: [PrizmOverlayComponent],
  entryComponents: [PrizmOverlayComponent],
})
export class PrizmOverlayModule {}
