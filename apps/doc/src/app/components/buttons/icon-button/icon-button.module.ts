import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconButtonComponent } from './icon-button.component';
import { PrizmButtonModule } from '@prizm-ui/components';
import { prizmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmButtonModule,
    RouterModule.forChild(generateRoutes(IconButtonComponent)),
  ],
  declarations: [
    prizmIconsButtonsExampleComponent,
    IconButtonComponent
  ],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
