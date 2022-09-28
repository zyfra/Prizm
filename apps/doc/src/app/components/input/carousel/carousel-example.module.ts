import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';

import { ZuiCarouselModule } from '@digital-plant/zui-components';
import { ZuiCarouselExampleComponent } from './carousel-example.component';
import { ZuiCarouselBasicExampleComponent } from './examples/carousel-basic-example/carousel-basic-example.component';
import { ZuiCarouselLightExampleComponent } from './examples/carousel-light-example/carousel-light-example.component';
import { ZuiCarouselArrayOfObjectsExampleComponent } from './examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component';
import { ZuiCarouselYearMonthExampleComponent } from './examples/carousel-year-month-example/carousel-year-month-example.component';
import { ZuiMonthExamplePipe } from './examples/carousel-year-month-example/month.pipe';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(ZuiCarouselExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    ZuiCarouselModule,
  ],
  declarations: [
    ZuiCarouselExampleComponent,
    ZuiCarouselBasicExampleComponent,
    ZuiCarouselLightExampleComponent,
    ZuiCarouselArrayOfObjectsExampleComponent,
    ZuiCarouselYearMonthExampleComponent,
    ZuiMonthExamplePipe,
  ],
  exports: [ZuiCarouselExampleComponent],
})
export class CarouselExampleModule {}

