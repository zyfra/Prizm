import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { PrizmIconBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconsModule } from '@prizm-ui/icons';
import { PrizmIconSvgExampleComponent } from './examples/svg/icon-svg-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIconsModule,
    RouterModule.forChild(generateRoutes(IconComponent)),
  ],
  declarations: [
    PrizmIconBaseExampleComponent,
    PrizmIconSvgExampleComponent,
    IconComponent
  ],
  exports: [IconComponent],
})
export class IconModule {}
