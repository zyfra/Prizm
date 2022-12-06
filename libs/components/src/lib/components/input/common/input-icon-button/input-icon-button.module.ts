import { NgModule } from '@angular/core';
import { PrizmIconSvgModule } from '../../../icon/icon.module';
import { PrizmInputIconButtonComponent } from './input-icon-button.component';

@NgModule({
  imports: [PrizmIconSvgModule],
  declarations: [
    PrizmInputIconButtonComponent,
  ],
  exports: [
    PrizmInputIconButtonComponent,
  ],
})
export class PrizmInputIconButtonModule {}
