import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconButtonComponent } from './icon-button.component';
import { PrizmButtonModule } from '@digital-plant/zui-components';
import { pzmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmButtonModule,
    RouterModule.forChild(generateRoutes(IconButtonComponent)),
  ],
  declarations: [
    pzmIconsButtonsExampleComponent,
    IconButtonComponent
  ],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
