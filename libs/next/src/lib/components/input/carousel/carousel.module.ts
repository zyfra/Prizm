import { NgModule } from '@angular/core';

import { ZuiInputCommonModule } from '../common/input-common.module';
import { ZuiCarouselAuxiliaryLeftComponent } from './carousel-auxiliary-left.component';
import { ZuiCarouselAuxiliaryRightComponent } from './carousel-auxiliary-right.component';
import { ZuiCarouselComponent } from './carousel.component';

@NgModule({
  imports: [ZuiInputCommonModule],
  declarations: [ZuiCarouselComponent, ZuiCarouselAuxiliaryLeftComponent, ZuiCarouselAuxiliaryRightComponent],
  exports: [
    ZuiCarouselComponent,
    ZuiCarouselAuxiliaryLeftComponent,
    ZuiCarouselAuxiliaryRightComponent,
    ZuiInputCommonModule,
  ],
})
export class ZuiCarouselModule {}

