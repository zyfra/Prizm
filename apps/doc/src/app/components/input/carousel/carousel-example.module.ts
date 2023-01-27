import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';

import { PrizmCarouselModule } from '@prizm-ui/components';
import { PrizmCarouselExampleComponent } from './carousel-example.component';
import { PrizmCarouselBasicExampleComponent } from './examples/carousel-basic-example/carousel-basic-example.component';
import { PrizmCarouselLightExampleComponent } from './examples/carousel-light-example/carousel-light-example.component';
import { PrizmCarouselArrayOfObjectsExampleComponent } from './examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component';
import { PrizmCarouselYearMonthExampleComponent } from './examples/carousel-year-month-example/carousel-year-month-example.component';
import { PrizmMonthExamplePipe } from './examples/carousel-year-month-example/month.pipe';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmCarouselExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PrizmCarouselModule,
  ],
  declarations: [
    PrizmCarouselExampleComponent,
    PrizmCarouselBasicExampleComponent,
    PrizmCarouselLightExampleComponent,
    PrizmCarouselArrayOfObjectsExampleComponent,
    PrizmCarouselYearMonthExampleComponent,
    PrizmMonthExamplePipe,
  ],
  exports: [PrizmCarouselExampleComponent],
})
export class CarouselExampleModule {}
