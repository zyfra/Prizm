import { NgModule } from '@angular/core';
import { PzmInputCommonModule } from '../common/input-common.module';
import { ZuiInputTextComponent } from './input-text.component';
import { ZuiTextareaDirective } from './textarea.directive';

@NgModule({
  imports: [PzmInputCommonModule],
  declarations: [ZuiInputTextComponent, ZuiTextareaDirective],
  exports: [PzmInputCommonModule, ZuiInputTextComponent, ZuiTextareaDirective],
})
export class PzmInputTextModule {}

