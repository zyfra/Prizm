import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { PrizmIconBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PrizmIconModule } from '@prizm-ui/components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmIconModule,
    RouterModule.forChild(generateRoutes(IconComponent)),
  ],
  declarations: [
    PrizmIconBaseExampleComponent,
    IconComponent
  ],
  exports: [IconComponent],
})
export class IconModule {}
