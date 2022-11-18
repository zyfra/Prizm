import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateRelativeRelativeComponent } from './input-date-relative.component';
import { PolymorphModule, PrizmInputDateRelativeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateRelativeBaseExampleComponent } from './examples/base/input-date-relative-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateRelativeModule,
    RouterModule.forChild(generateRoutes(InputDateRelativeRelativeComponent)),
  ],
  declarations: [
    PrizmInputDateRelativeBaseExampleComponent,
    InputDateRelativeRelativeComponent
  ],
  exports: [InputDateRelativeRelativeComponent],
})
export class InputDateRelativeRelativeModule {}
