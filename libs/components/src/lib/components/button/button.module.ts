import { NgModule } from '@angular/core';
import { PrizmButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { PrizmWrapperModule } from '../../directives/wrapper';
import { PrizmIconModule } from '../icon';
import { PrizmCallFuncModule } from '@prizm-ui/helpers';
import { PrizmSplitButtonComponent } from './split-button/split-button.component';
import { PrizmLoaderModule } from '../loader/loader.module';
import { PolymorphModule } from '../../directives';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmButtonComponent, PrizmSplitButtonComponent],
  exports: [PrizmButtonComponent, PrizmSplitButtonComponent],
})
export class PrizmButtonModule {}
