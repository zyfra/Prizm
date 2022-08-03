import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';

import { ZuiCarouselModule, ZuiInputCommonModule } from '@digital-plant/zui-components';
import { CarouselExampleComponent } from './carousel-example.component';
import { CarouselBasicExampleComponent } from './examples/carousel-basic-example/carousel-basic-example.component';
import { CarouselLightExampleComponent } from './examples/carousel-light-example/carousel-light-example.component';
import { CarouselArrayOfObjectsExampleComponent } from './examples/carousel-array-of-objects-example/carousel-array-of-objects-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(CarouselExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    ZuiCarouselModule,
  ],
  declarations: [
    CarouselExampleComponent,
    CarouselBasicExampleComponent,
    CarouselLightExampleComponent,
    CarouselArrayOfObjectsExampleComponent,
  ],
  exports: [CarouselExampleComponent],
})
export class CarouselExampleModule {}

