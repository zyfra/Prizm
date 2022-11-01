import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PzmOverlayComponent} from './overlay.component';
// TODO move to seperated lib
@NgModule({
  imports: [CommonModule],
  declarations: [PzmOverlayComponent],
  entryComponents: [PzmOverlayComponent]
})
export class PzmOverlayModule {}
