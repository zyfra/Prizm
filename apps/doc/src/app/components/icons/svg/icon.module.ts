import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { PrizmIconSvgBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconsSvgModule } from '@prizm/icons';
import { PrizmIconSvgSvgExampleComponent } from './examples/svg/icon-svg-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIconsSvgModule,
    RouterModule.forChild(generateRoutes(IconComponent)),
  ],
  declarations: [PrizmIconSvgBaseExampleComponent, PrizmIconSvgSvgExampleComponent, IconComponent],
  exports: [IconComponent],
})
export class IconModule {}
