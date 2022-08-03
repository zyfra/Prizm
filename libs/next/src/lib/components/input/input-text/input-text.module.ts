import { NgModule } from '@angular/core';
import { ZuiInputCommonModule } from '../common/input-common.module';
import { ZuiInputTextComponent } from './input-text.component';

@NgModule({
  imports: [ZuiInputCommonModule],
  declarations: [ZuiInputTextComponent],
  exports: [ZuiInputCommonModule, ZuiInputTextComponent],
})
export class ZuiInputTextModule {}

