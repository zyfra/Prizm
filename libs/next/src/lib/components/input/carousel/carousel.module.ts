import { NgModule } from '@angular/core';

import { PzmInputCommonModule } from '../common/input-common.module';
import { ZuiCarouselAuxiliaryLeftComponent } from './carousel-auxiliary-left.component';
import { ZuiCarouselAuxiliaryRightComponent } from './carousel-auxiliary-right.component';
import { ZuiCarouselComponent } from './carousel.component';

@NgModule({
  imports: [PzmInputCommonModule],
  declarations: [ZuiCarouselComponent, ZuiCarouselAuxiliaryLeftComponent, ZuiCarouselAuxiliaryRightComponent],
  exports: [
    ZuiCarouselComponent,
    ZuiCarouselAuxiliaryLeftComponent,
    ZuiCarouselAuxiliaryRightComponent,
    PzmInputCommonModule,
  ],
})
export class ZuiCarouselModule {}

