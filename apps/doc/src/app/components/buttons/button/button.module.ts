import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button.component';
import { PrizmOutlineButtonsExampleComponent } from './examples/outline/outline-buttons-example.component';
import { PrizmFilledButtonsExampleComponent } from './examples/filled/filled-buttons-example.component';
import { PrizmButtonComponent, PrizmCounterDirective, PrizmCounterComponent } from '@prizm-ui/components';
import { PrizmGhostButtonsExampleComponent } from './examples/ghost/ghost-buttons-example.component';
import { prizmIconsButtonsExampleComponent } from './examples/icons/icons-buttons-example.component';
import { PrizmButtonWithCounterExampleComponent } from './examples/counter/button-with-counter-example.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import { PrizmButtonTextOverflowExampleComponent } from './examples/overflow/button-text-overflow-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    PrizmCounterDirective,
    PrizmCounterComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ButtonComponent)),

    PrizmFilledButtonsExampleComponent,
    PrizmOutlineButtonsExampleComponent,
    prizmIconsButtonsExampleComponent,
    PrizmGhostButtonsExampleComponent,
    PrizmButtonWithCounterExampleComponent,
    PrizmButtonTextOverflowExampleComponent,
    PrizmIfLanguageDirective,
  ],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class ButtonModule {}
