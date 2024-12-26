import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutTimeTimeComponent } from './input-layout-time.component';
import { PolymorphModule, PrizmInputLayoutTimeModule, PrizmTimePickerComponent } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutTimeBaseExampleComponent } from './examples/base/input-layout-time-base-example.component';
import { PrizmInputLayoutTimeWithSecondsExampleComponent } from './examples/with-seconds/input-layout-time-with-seconds-example.component';
import { PrizmInputLayoutTimeWithPresetExampleComponent } from './examples/with-preset/input-layout-time-with-preset-example.component';
import { PrizmInputLayoutTimeWithMsExampleComponent } from './examples/with-ms/input-layout-time-with-ms-example.component';
import { PrizmInputLayoutTimeCustomTimePickerExampleComponent } from './examples/custom-time-picker/input-layout-time-custom-time-picker-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutTimeModule,
    PrizmTimePickerComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutTimeTimeComponent)),
  ],
  declarations: [
    PrizmInputLayoutTimeBaseExampleComponent,
    PrizmInputLayoutTimeWithSecondsExampleComponent,
    PrizmInputLayoutTimeWithPresetExampleComponent,
    PrizmInputLayoutTimeWithMsExampleComponent,
    PrizmInputLayoutTimeCustomTimePickerExampleComponent,
    InputLayoutTimeTimeComponent,
  ],
  exports: [InputLayoutTimeTimeComponent],
})
export class InputLayoutTimeTimeModule {}
