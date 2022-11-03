import { NgModule } from '@angular/core';
import { PzmButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { PzmWrapperModule } from '../../directives/wrapper';
import { PzmIconModule } from '../icon';
import { PzmCallFuncModule } from '@digital-plant/zyfra-helpers';
import { PzmSplitButtonComponent } from './split-button/split-button.component';
import { PzmLoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [PzmButtonComponent, PzmSplitButtonComponent],
  imports: [
    CommonModule,
    PzmWrapperModule,
    PzmIconModule,
    PzmLoaderModule,
    PzmCallFuncModule,
  ],
  exports: [PzmButtonComponent, PzmSplitButtonComponent],
})
export class PzmButtonModule {}
