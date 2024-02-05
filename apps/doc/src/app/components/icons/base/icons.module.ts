import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icons-base-example.component';
import { PrizmIconSvgSvgExampleComponent } from './examples/svg/icons-svg-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmIconSvgBaseExampleComponent,
    PrizmIconSvgSvgExampleComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(IconsComponent)),
  ],
  declarations: [IconsComponent],
  exports: [IconsComponent],
})
export class IconsModule {}
