import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiCardComponent } from './card.component';
import { ZuiShadowModule } from '../../directives/shadow';

@NgModule({
  imports: [
    CommonModule,
    ZuiShadowModule,
  ],
  declarations: [ZuiCardComponent],
  exports: [ZuiCardComponent],
})
export class ZuiCardModule {}
