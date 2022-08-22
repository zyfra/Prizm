import { NgModule } from '@angular/core';
import { ZuiHintDirective } from './hint.directive';
import { ZuiHintContainerComponent } from './hint-container.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { ZuiScrollbarModule } from '../../components/scrollbar';

@NgModule({
  imports: [
    CommonModule,
    ZuiScrollbarModule,
    PolymorphModule
  ],
  declarations: [ZuiHintDirective, ZuiHintContainerComponent],
  exports: [ZuiHintDirective],
})
export class ZuiHintModule {}
