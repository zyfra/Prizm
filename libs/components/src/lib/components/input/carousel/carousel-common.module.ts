import { NgModule } from '@angular/core';
import { PrizmCarouselAuxiliaryLeftComponent } from './carousel-auxiliary-left.component';
import { PrizmCarouselAuxiliaryRightComponent } from './carousel-auxiliary-right.component';
import { PrizmInputCommonModule } from '../common';

@NgModule({
  imports: [PrizmInputCommonModule],
  declarations: [PrizmCarouselAuxiliaryLeftComponent, PrizmCarouselAuxiliaryRightComponent],
  exports: [PrizmCarouselAuxiliaryLeftComponent, PrizmCarouselAuxiliaryRightComponent],
})
export class PrizmCarouselCommonModule {}
