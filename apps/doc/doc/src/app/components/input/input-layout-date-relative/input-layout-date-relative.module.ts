import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutDateRelativeRelativeComponent } from './input-layout-date-relative.component';
import { PolymorphModule, PrizmInputLayoutDateRelativeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateRelativeBaseExampleComponent } from './examples/base/input-layout-date-relative-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutDateRelativeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutDateRelativeRelativeComponent)),
  ],
  declarations: [PrizmInputLayoutDateRelativeBaseExampleComponent, InputLayoutDateRelativeRelativeComponent],
  exports: [InputLayoutDateRelativeRelativeComponent],
})
export class InputLayoutDateRelativeRelativeModule {}
