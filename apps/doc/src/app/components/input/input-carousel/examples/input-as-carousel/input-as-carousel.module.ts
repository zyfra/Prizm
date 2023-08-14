import { NgModule } from '@angular/core';
import { PrizmInputCommonModule, PrizmInputTextModule } from '@prizm-ui/components';
import { PrizmInputCarouselInputAsCarouselExampleComponent } from './input-as-carousel.component';

@NgModule({
  imports: [PrizmInputCommonModule, PrizmInputTextModule],
  declarations: [PrizmInputCarouselInputAsCarouselExampleComponent],
  exports: [PrizmInputCarouselInputAsCarouselExampleComponent],
})
export class PrizmInputAsCarouselExampleModule {}
