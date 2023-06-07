import { NgModule } from '@angular/core';

import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmCarouselComponent } from './carousel.component';
import { PrizmCarouselCommonModule } from './carousel-common.module';

/**
 * @deprecated
 * use - PrizmInputCarouselModule
 * */
@NgModule({
  imports: [PrizmInputCommonModule, PrizmCarouselCommonModule],
  declarations: [PrizmCarouselComponent],
  exports: [PrizmCarouselComponent, PrizmInputCommonModule, PrizmCarouselCommonModule],
})
export class PrizmCarouselModule {}
