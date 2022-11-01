import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';
import { ZuiIconBaseExampleComponent } from './examples/base/icon-base-example.component';
import { PzmIconModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmIconModule,
    RouterModule.forChild(generateRoutes(IconComponent)),
  ],
  declarations: [
    ZuiIconBaseExampleComponent,
    IconComponent
  ],
  exports: [IconComponent],
})
export class IconModule {}
