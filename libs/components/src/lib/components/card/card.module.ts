import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCardComponent } from './card.component';
import { PrizmShadowModule } from '../../directives/shadow';

/**
 * @deprecated
 * user standalone
 * */
@NgModule({
  imports: [PrizmCardComponent],
  exports: [PrizmCardComponent],
})
export class PrizmCardModule {}
