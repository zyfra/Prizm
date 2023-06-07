import { NgModule } from '@angular/core';

import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmCarouselComponent } from './carousel.component';
import { PrizmCarouselAuxiliaryLeftComponent } from './carousel-auxiliary-left.component';
import { PrizmCarouselAuxiliaryRightComponent } from './carousel-auxiliary-right.component';

/**
 * @deprecated
 * use - PrizmInputCarouselModule
 * */
@NgModule({
  imports: [PrizmInputCommonModule],
  declarations: [
    PrizmCarouselComponent,
    PrizmCarouselAuxiliaryLeftComponent,
    PrizmCarouselAuxiliaryRightComponent,
  ],
  exports: [
    PrizmCarouselComponent,
    PrizmInputCommonModule,
    PrizmCarouselAuxiliaryLeftComponent,
    PrizmCarouselAuxiliaryRightComponent,
  ],
})
export class PrizmCarouselModule {}
