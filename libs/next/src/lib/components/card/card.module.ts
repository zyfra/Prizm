import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmCardComponent } from './card.component';
import { PzmShadowModule } from '../../directives/shadow';

@NgModule({
  imports: [
    CommonModule,
    PzmShadowModule,
  ],
  declarations: [PzmCardComponent],
  exports: [PzmCardComponent],
})
export class PzmCardModule {}
