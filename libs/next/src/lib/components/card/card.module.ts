import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiCardComponent } from './card.component';
import { PzmShadowModule } from '../../directives/shadow';

@NgModule({
  imports: [
    CommonModule,
    PzmShadowModule,
  ],
  declarations: [ZuiCardComponent],
  exports: [ZuiCardComponent],
})
export class ZuiCardModule {}
