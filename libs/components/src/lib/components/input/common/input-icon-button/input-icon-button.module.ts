import { NgModule } from '@angular/core';
import { PrizmIconModule } from '../../../icon/icon.module';
import { PrizmInputIconButtonComponent } from './input-icon-button.component';

@NgModule({
  imports: [PrizmIconModule],
  declarations: [PrizmInputIconButtonComponent],
  exports: [PrizmInputIconButtonComponent],
})
export class PrizmInputIconButtonModule {}
