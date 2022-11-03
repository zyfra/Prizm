import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';
import { PzmOutlineButtonsExampleComponent } from './examples/outline/outline-buttons-example.component';
import { PzmFilledButtonsExampleComponent } from './examples/filled/filled-buttons-example.component';
import { PzmButtonModule } from '@digital-plant/zui-components';
import { PzmGhostButtonsExampleComponent } from './examples/ghost/ghost-buttons-example.component';
import { PzmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmButtonModule,
    RouterModule.forChild(generateRoutes(ButtonComponent)),
  ],
  declarations: [
    PzmFilledButtonsExampleComponent,
    PzmOutlineButtonsExampleComponent,
    PzmIconsButtonsExampleComponent,
    PzmGhostButtonsExampleComponent,
    ButtonComponent
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
