import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton.component';
import {
  PolymorphModule,
  PrizmButtonModule, PrizmCardModule,
  PrizmInputTextModule,
  PrizmSelectModule,
  PrizmSkeletonModule,
  PrizmToggleModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmSkeletonBaseExampleComponent } from './examples/base/skeleton-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmCardModule,
    PrizmToggleModule,
    PrizmSelectModule,
    PrizmInputTextModule,
    PrizmSkeletonModule,
    RouterModule.forChild(generateRoutes(SkeletonComponent)),
  ],
  declarations: [
    PrizmSkeletonBaseExampleComponent,
    SkeletonComponent
  ],
  exports: [SkeletonComponent],
})
export class SkeletonModule {}
