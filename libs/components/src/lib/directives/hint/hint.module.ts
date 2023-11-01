import { NgModule } from '@angular/core';
import { PrizmHintDirective } from './hint.directive';
import { PrizmHintContainerComponent } from './hint-container.component';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmThemeModule } from '@prizm-ui/theme';

/**
 * @deprecated
 * user standalone instead of
 * */
@NgModule({
  imports: [PrizmHintContainerComponent, PrizmHintDirective],
  exports: [PrizmHintDirective],
})
export class PrizmHintModule {}
