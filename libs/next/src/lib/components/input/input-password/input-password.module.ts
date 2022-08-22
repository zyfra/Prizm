import { NgModule } from '@angular/core';
import { ZuiInputCommonModule } from '../common/input-common.module';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { ZuiInputPasswordDefaultControlComponent } from './input-password-auxiliary-control.component';
import { ZuiInputPasswordDirective } from './input-password.directive';

@NgModule({
  imports: [ZuiInputCommonModule, ZuiInputTextModule],
  declarations: [ZuiInputPasswordDirective, ZuiInputPasswordDefaultControlComponent],
  exports: [
    ZuiInputCommonModule,
    ZuiInputTextModule,
    ZuiInputPasswordDirective,
    ZuiInputPasswordDefaultControlComponent,
  ],
})
export class ZuiInputPasswordModule {}

