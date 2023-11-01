import { NgModule } from '@angular/core';
import { PrizmHintDirective } from './hint.directive';
import { PrizmHintContainerComponent } from './hint-container.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [PrizmThemeModule, PrizmHintDirective, CommonModule, PrizmScrollbarModule, PolymorphModule],
  declarations: [PrizmHintContainerComponent],
  exports: [PrizmHintDirective],
})
export class PrizmHintModule {}
