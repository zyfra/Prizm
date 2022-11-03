import { NgModule } from '@angular/core';

import { PzmInputCommonModule } from '../common/input-common.module';
import { PzmCarouselAuxiliaryLeftComponent } from './carousel-auxiliary-left.component';
import { PzmCarouselAuxiliaryRightComponent } from './carousel-auxiliary-right.component';
import { PzmCarouselComponent } from './carousel.component';

@NgModule({
  imports: [PzmInputCommonModule],
  declarations: [PzmCarouselComponent, PzmCarouselAuxiliaryLeftComponent, PzmCarouselAuxiliaryRightComponent],
  exports: [
    PzmCarouselComponent,
    PzmCarouselAuxiliaryLeftComponent,
    PzmCarouselAuxiliaryRightComponent,
    PzmInputCommonModule,
  ],
})
export class PzmCarouselModule {}

