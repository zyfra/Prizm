import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { IconButtonComponent } from './icon-button.component';
import { PzmButtonModule } from '@digital-plant/zui-components';
import { PzmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmButtonModule,
    RouterModule.forChild(generateRoutes(IconButtonComponent)),
  ],
  declarations: [
    PzmIconsButtonsExampleComponent,
    IconButtonComponent
  ],
  exports: [IconButtonComponent],
})
export class IconButtonModule {}
