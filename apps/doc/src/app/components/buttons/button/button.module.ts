import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';
import { PrizmOutlineButtonsExampleComponent } from './examples/outline/outline-buttons-example.component';
import { PrizmFilledButtonsExampleComponent } from './examples/filled/filled-buttons-example.component';
import { PrizmButtonModule } from '@prizm-ui/components';
import { PrizmGhostButtonsExampleComponent } from './examples/ghost/ghost-buttons-example.component';
import { prizmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ButtonComponent)),
  ],
  declarations: [
    PrizmFilledButtonsExampleComponent,
    PrizmOutlineButtonsExampleComponent,
    prizmIconsButtonsExampleComponent,
    PrizmGhostButtonsExampleComponent,
    ButtonComponent,
  ],
  exports: [ButtonComponent],
})
export class ButtonModule {}
