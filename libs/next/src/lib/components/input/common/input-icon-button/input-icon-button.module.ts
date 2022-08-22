import { NgModule } from '@angular/core';
import { ZuiIconModule } from '../../../icon/icon.module';
import { ZuiInputIconButtonComponent } from './input-icon-button.component';

@NgModule({
  imports: [ZuiIconModule],
  declarations: [
    ZuiInputIconButtonComponent,
  ],
  exports: [
    ZuiInputIconButtonComponent,
  ],
})
export class ZuiInputIconButtonModule {

}
