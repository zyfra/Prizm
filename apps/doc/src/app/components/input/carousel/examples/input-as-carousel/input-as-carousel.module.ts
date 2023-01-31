import { NgModule } from '@angular/core';
import { PrizmInputCommonModule, PrizmInputTextModule } from '@prizm-ui/components';
import { PrizmCarouselInputAsCarouselExampleComponent } from './input-as-carousel.component';

@NgModule({
  imports: [PrizmInputCommonModule, PrizmInputTextModule],
  declarations: [PrizmCarouselInputAsCarouselExampleComponent],
  exports: [PrizmCarouselInputAsCarouselExampleComponent],
})
export class PrizmInputAsCarouselExampleModule {}
