import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputLayoutDateComponent } from './input-layout-date.component';
import { PolymorphModule, PrizmButtonComponent, PrizmInputLayoutDateModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputLayoutDateBaseExampleComponent } from './examples/base/input-layout-date-base-example.component';
import { PrizmInputNativeDateBaseExampleComponent } from './examples/native-date/input-native-date-base-example.component';
import { PrizmInputLayoutDateSeparateExampleComponent } from './examples/range-separate/input-layout-date-range-separate-example.component';
import { PrizmInputDateProviderExampleComponent } from './examples/date-provider/input-date-provider-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputLayoutDateModule,
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(InputLayoutDateComponent)),
  ],
  declarations: [
    PrizmInputLayoutDateBaseExampleComponent,
    PrizmInputLayoutDateSeparateExampleComponent,
    PrizmInputNativeDateBaseExampleComponent,
    PrizmInputDateProviderExampleComponent,
    InputLayoutDateComponent,
  ],
  exports: [InputLayoutDateComponent],
})
export class InputLayoutDateModule {}
