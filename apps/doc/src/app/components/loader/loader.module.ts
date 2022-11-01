import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader.component';
import { ZuiLoaderBaseExampleComponent } from './examples/base/loader-base-example.component';
import { PzmLoaderModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmLoaderModule,
    RouterModule.forChild(generateRoutes(LoaderComponent)),
  ],
  declarations: [
    ZuiLoaderBaseExampleComponent,
    LoaderComponent
  ],
  exports: [LoaderComponent],
})
export class LoaderModule {}
