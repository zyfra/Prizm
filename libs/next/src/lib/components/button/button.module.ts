import { NgModule } from '@angular/core';
import { PrizmButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { PrizmWrapperModule } from '../../directives/wrapper';
import { PrizmIconModule } from '../icon';
import { PrizmCallFuncModule } from '@digital-plant/zyfra-helpers';
import { PrizmSplitButtonComponent } from './split-button/split-button.component';
import { PrizmLoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [PrizmButtonComponent, PrizmSplitButtonComponent],
  imports: [
    CommonModule,
    PrizmWrapperModule,
    PrizmIconModule,
    PrizmLoaderModule,
    PrizmCallFuncModule,
  ],
  exports: [PrizmButtonComponent, PrizmSplitButtonComponent],
})
export class PrizmButtonModule {}
