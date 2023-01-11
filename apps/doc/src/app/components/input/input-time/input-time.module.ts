import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputTimeTimeComponent } from './input-time.component';
import { PolymorphModule, PrizmInputTimeModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTimeBaseExampleComponent } from './examples/base/input-time-base-example.component';
import { PrizmInputTimeWithSecondsExampleComponent } from './examples/with-seconds/input-time-with-seconds-example.component';
import { PrizmInputTimeWithPresetExampleComponent } from './examples/with-preset/input-time-with-preset-example.component';
import { PrizmInputTimeWithMsExampleComponent } from './examples/with-ms/input-time-with-ms-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputTimeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputTimeTimeComponent)),
  ],
  declarations: [
    PrizmInputTimeBaseExampleComponent,
    PrizmInputTimeWithSecondsExampleComponent,
    PrizmInputTimeWithPresetExampleComponent,
    PrizmInputTimeWithMsExampleComponent,
    InputTimeTimeComponent,
  ],
  exports: [InputTimeTimeComponent],
})
export class InputTimeTimeModule {}
