import { NgModule } from '@angular/core';
import { PrizmHintDirective } from './hint.directive';
import { PrizmHintContainerComponent } from './hint-container.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmScrollbarModule } from '../../components/scrollbar';

@NgModule({
  imports: [CommonModule, PrizmScrollbarModule, PolymorphModule],
  declarations: [PrizmHintDirective, PrizmHintContainerComponent],
  exports: [PrizmHintDirective],
})
export class PrizmHintModule {}
