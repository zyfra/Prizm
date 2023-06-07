import { NgModule } from '@angular/core';

import { PrizmInputCommonModule } from '../common/input-common.module';
import { PrizmInputCarouselComponent } from './input-carousel.component';
import { PrizmCarouselCommonModule } from './carousel-common.module';

@NgModule({
  imports: [PrizmInputCommonModule, PrizmCarouselCommonModule],
  declarations: [PrizmInputCarouselComponent],
  exports: [PrizmInputCarouselComponent, PrizmInputCommonModule, PrizmCarouselCommonModule],
})
export class PrizmInputCarouselModule {}
