import { NgModule } from '@angular/core';
import { PzmInputCommonModule } from '../common/input-common.module';
import { PzmInputTextComponent } from './input-text.component';
import { PzmTextareaDirective } from './textarea.directive';

@NgModule({
  imports: [PzmInputCommonModule],
  declarations: [PzmInputTextComponent, PzmTextareaDirective],
  exports: [PzmInputCommonModule, PzmInputTextComponent, PzmTextareaDirective],
})
export class PzmInputTextModule {}

