import { NgModule } from '@angular/core';
import { ZuiInputCommonModule } from '../common/input-common.module';
import { ZuiInputTextComponent } from './input-text.component';
import { ZuiTextareaDirective } from './textarea.directive';

@NgModule({
  imports: [ZuiInputCommonModule],
  declarations: [ZuiInputTextComponent, ZuiTextareaDirective],
  exports: [ZuiInputCommonModule, ZuiInputTextComponent, ZuiTextareaDirective],
})
export class ZuiInputTextModule {}

