import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';
import { PrizmIcons16Component, PrizmIconsComponent } from '@prizm-ui/icons';
import { PrizmIconsLazyExampleComponent } from './examples/lazy/icons-lazy-example.component';
import { PrizmIconsBaseExampleComponent } from './examples/base/icons-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIconsLazyExampleComponent,
    PrizmIconsBaseExampleComponent,
    PrizmIconsComponent,
    PrizmIcons16Component,
    RouterModule.forChild(prizmDocGenerateRoutes(IconsComponent)),
  ],
  declarations: [IconsComponent],
  exports: [IconsComponent],
})
export class IconsModule {}
