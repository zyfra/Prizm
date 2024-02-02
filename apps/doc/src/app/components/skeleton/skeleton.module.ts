import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton.component';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmCardModule,
  PrizmInputSelectModule,
  PrizmInputTextModule,
  PrizmSkeletonModule,
  PrizmToggleModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmSkeletonBaseExampleComponent } from './examples/base/skeleton-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmCardModule,
    PrizmToggleModule,
    PrizmInputSelectModule,
    PrizmInputTextModule,
    PrizmSkeletonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(SkeletonComponent)),
  ],
  declarations: [PrizmSkeletonBaseExampleComponent, SkeletonComponent],
  exports: [SkeletonComponent],
})
export class SkeletonModule {}
