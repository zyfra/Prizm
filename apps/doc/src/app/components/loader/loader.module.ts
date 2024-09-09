import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader.component';
import { PrizmLoaderBaseExampleComponent } from './examples/base/loader-base-example.component';
import { PrizmLoaderComponent } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmLoaderComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(LoaderComponent)),
  ],
  declarations: [PrizmLoaderBaseExampleComponent, LoaderComponent],
  exports: [LoaderComponent],
})
export class LoaderModule {}
