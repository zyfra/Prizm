import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton.component';
import {
  PolymorphModule,
  PzmButtonModule, ZuiCardModule,
  PzmInputTextModule,
  PzmSelectModule,
  PzmSkeletonModule,
  ZuiToggleModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiSkeletonBaseExampleComponent } from './examples/base/skeleton-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmButtonModule,
    ZuiCardModule,
    ZuiToggleModule,
    PzmSelectModule,
    PzmInputTextModule,
    PzmSkeletonModule,
    RouterModule.forChild(generateRoutes(SkeletonComponent)),
  ],
  declarations: [
    ZuiSkeletonBaseExampleComponent,
    SkeletonComponent
  ],
  exports: [SkeletonComponent],
})
export class SkeletonModule {}
