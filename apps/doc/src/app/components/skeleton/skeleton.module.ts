import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton.component';
import {
  PolymorphModule,
  PzmButtonModule, PzmCardModule,
  PzmInputTextModule,
  PzmSelectModule,
  PzmSkeletonModule,
  PzmToggleModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmSkeletonBaseExampleComponent } from './examples/base/skeleton-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmButtonModule,
    PzmCardModule,
    PzmToggleModule,
    PzmSelectModule,
    PzmInputTextModule,
    PzmSkeletonModule,
    RouterModule.forChild(generateRoutes(SkeletonComponent)),
  ],
  declarations: [
    PzmSkeletonBaseExampleComponent,
    SkeletonComponent
  ],
  exports: [SkeletonComponent],
})
export class SkeletonModule {}
