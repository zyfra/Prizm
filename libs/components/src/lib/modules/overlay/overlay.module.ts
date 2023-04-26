import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmThemeModule } from '@prizm-ui/theme';
import { PrizmOverlayComponent } from './overlay.component';

// TODO move to seperated lib
@NgModule({
  imports: [CommonModule, PrizmThemeModule],
  declarations: [PrizmOverlayComponent],
  entryComponents: [PrizmOverlayComponent],
})
export class PrizmOverlayModule {}
