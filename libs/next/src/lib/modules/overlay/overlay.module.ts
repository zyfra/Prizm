import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ZuiOverlayComponent} from './overlay.component';
// TODO move to seperated lib
@NgModule({
  imports: [CommonModule],
  declarations: [ZuiOverlayComponent],
  entryComponents: [ZuiOverlayComponent]
})
export class PzmOverlayModule {}
