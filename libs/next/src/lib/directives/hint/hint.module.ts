import { NgModule } from '@angular/core';
import { PzmHintDirective } from './hint.directive';
import { PzmHintContainerComponent } from './hint-container.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PzmScrollbarModule } from '../../components/scrollbar';

@NgModule({
  imports: [
    CommonModule,
    PzmScrollbarModule,
    PolymorphModule
  ],
  declarations: [PzmHintDirective, PzmHintContainerComponent],
  exports: [PzmHintDirective],
})
export class PzmHintModule {}
