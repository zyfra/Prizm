import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmCardComponent } from './card.component';
import { PrizmShadowModule } from '../../directives/shadow';

@NgModule({
  imports: [CommonModule, PrizmShadowModule],
  declarations: [PrizmCardComponent],
  exports: [PrizmCardComponent],
})
export class PrizmCardModule {}
