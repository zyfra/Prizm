import { NgModule } from '@angular/core';
import { PzmIconModule } from '../../../icon/icon.module';
import { PzmInputIconButtonComponent } from './input-icon-button.component';

@NgModule({
  imports: [PzmIconModule],
  declarations: [
    PzmInputIconButtonComponent,
  ],
  exports: [
    PzmInputIconButtonComponent,
  ],
})
export class PzmInputIconButtonModule {}
