import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';

import { PrizmInputCarouselModule } from '@prizm-ui/components';
import { PrizmInputCarouselExampleComponent } from './input-carousel-example.component';
import { PrizmInputCarouselBasicExampleComponent } from './examples/carousel-basic-example/carousel-basic-example.component';
import { PrizmInputCarouselLightExampleComponent } from './examples/carousel-light-example/carousel-light-example.component';
import { PrizmInputCarouselArrayOfObjectsExampleComponent } from './examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component';
import { PrizmInputCarouselYearMonthExampleComponent } from './examples/carousel-year-month-example/carousel-year-month-example.component';
import { PrizmMonthExamplePipe } from './examples/carousel-year-month-example/month.pipe';
import { PrizmInputAsCarouselExampleModule } from './examples/input-as-carousel/input-as-carousel.module';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmInputCarouselExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PrizmInputCarouselModule,
    PrizmInputAsCarouselExampleModule,
  ],
  declarations: [
    PrizmInputCarouselExampleComponent,
    PrizmInputCarouselBasicExampleComponent,
    PrizmInputCarouselLightExampleComponent,
    PrizmInputCarouselArrayOfObjectsExampleComponent,
    PrizmInputCarouselYearMonthExampleComponent,
    PrizmMonthExamplePipe,
  ],
  exports: [PrizmInputCarouselExampleComponent],
})
export class InputCarouselExampleModule {}
