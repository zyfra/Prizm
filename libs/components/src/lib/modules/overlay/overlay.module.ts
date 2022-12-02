import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PrizmOverlayComponent} from './overlay.component';
// TODO move to seperated lib
@NgModule({
  imports: [CommonModule],
  declarations: [PrizmOverlayComponent],
  entryComponents: [PrizmOverlayComponent]
})
export class PrizmOverlayModule {}
