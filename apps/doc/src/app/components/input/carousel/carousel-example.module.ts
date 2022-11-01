import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';

import { PzmCarouselModule } from '@digital-plant/zui-components';
import { PzmCarouselExampleComponent } from './carousel-example.component';
import { PzmCarouselBasicExampleComponent } from './examples/carousel-basic-example/carousel-basic-example.component';
import { PzmCarouselLightExampleComponent } from './examples/carousel-light-example/carousel-light-example.component';
import { PzmCarouselArrayOfObjectsExampleComponent } from './examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component';
import { PzmCarouselYearMonthExampleComponent } from './examples/carousel-year-month-example/carousel-year-month-example.component';
import { PzmMonthExamplePipe } from './examples/carousel-year-month-example/month.pipe';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(PzmCarouselExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PzmCarouselModule,
  ],
  declarations: [
    PzmCarouselExampleComponent,
    PzmCarouselBasicExampleComponent,
    PzmCarouselLightExampleComponent,
    PzmCarouselArrayOfObjectsExampleComponent,
    PzmCarouselYearMonthExampleComponent,
    PzmMonthExamplePipe,
  ],
  exports: [PzmCarouselExampleComponent],
})
export class CarouselExampleModule {}

