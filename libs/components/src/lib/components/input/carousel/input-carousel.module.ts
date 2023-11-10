import { NgModule } from '@angular/core';

import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputCarouselComponent } from './input-carousel.component';
import { PrizmInputCarouselAuxiliaryLeftComponent } from './input-carousel-auxiliary-left.component';
import { PrizmInputCarouselAuxiliaryRightComponent } from './input-carousel-auxiliary-right.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [
    PrizmInputCommonModule,
    PrizmInputCarouselComponent,
    PrizmInputCarouselAuxiliaryLeftComponent,
    PrizmInputCarouselAuxiliaryRightComponent,
  ],
  exports: [PrizmInputCarouselComponent, PrizmInputCommonModule],
})
export class PrizmInputCarouselModule {}
