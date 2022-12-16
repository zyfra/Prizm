import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { InputDateRelativeRelativeComponent } from './input-date-relative.component';
import { PolymorphModule, PrizmInputDateRelativeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateRelativeBaseExampleComponent } from './examples/base/input-date-relative-base-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateRelativeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputDateRelativeRelativeComponent)),
  ],
  declarations: [PrizmInputDateRelativeBaseExampleComponent, InputDateRelativeRelativeComponent],
  exports: [InputDateRelativeRelativeComponent],
})
export class InputDateRelativeRelativeModule {}
