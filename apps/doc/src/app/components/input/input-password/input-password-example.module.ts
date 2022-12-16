import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { PrizmInputPasswordModule } from '@prizm-ui/components';
import { InputPasswordBasicExampleComponent } from './examples/input-password-basic-example/input-password-basic-example.component';
import { InputPasswordExampleComponent } from './input-password-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputPasswordExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PrizmInputPasswordModule,
  ],
  declarations: [InputPasswordExampleComponent, InputPasswordBasicExampleComponent],
  exports: [InputPasswordExampleComponent],
})
export class InputPasswordExampleModule {}

