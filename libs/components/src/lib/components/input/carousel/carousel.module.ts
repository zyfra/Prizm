import { NgModule } from '@angular/core';

import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmCarouselAuxiliaryLeftComponent } from './carousel-auxiliary-left.component';
import { PrizmCarouselAuxiliaryRightComponent } from './carousel-auxiliary-right.component';
import { PrizmCarouselComponent } from './carousel.component';

@NgModule({
  imports: [PrizmInputCommonModule],
  declarations: [
    PrizmCarouselComponent,
    PrizmCarouselAuxiliaryLeftComponent,
    PrizmCarouselAuxiliaryRightComponent,
  ],
  exports: [
    PrizmCarouselComponent,
    PrizmCarouselAuxiliaryLeftComponent,
    PrizmCarouselAuxiliaryRightComponent,
    PrizmInputCommonModule,
  ],
})
export class PrizmCarouselModule {}
