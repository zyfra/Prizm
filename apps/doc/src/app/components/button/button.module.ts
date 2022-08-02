import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';
import { ZuiOutlineButtonsExampleComponent } from './examples/outline/outline-buttons-example.component';
import { ZuiFilledButtonsExampleComponent } from './examples/filled/filled-buttons-example.component';
import { ZuiButtonModule } from '@digital-plant/zui-components';
import { ZuiGhostButtonsExampleComponent } from './examples/ghost/ghost-buttons-example.component';
import { ZuiIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';
import { ZuiSplitButtonsExampleComponent } from './examples/split/split-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiButtonModule,
    RouterModule.forChild(generateRoutes(ButtonComponent)),
  ],
  declarations: [
    ZuiFilledButtonsExampleComponent,
    ZuiOutlineButtonsExampleComponent,
    ZuiGhostButtonsExampleComponent,
    ZuiIconsButtonsExampleComponent,
    ZuiSplitButtonsExampleComponent,
    ButtonComponent
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
