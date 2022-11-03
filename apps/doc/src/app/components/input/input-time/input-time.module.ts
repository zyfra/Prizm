import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputTimeTimeComponent } from './input-time.component';
import { PolymorphModule, PzmInputTimeModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmInputTimeBaseExampleComponent } from './examples/base/input-time-base-example.component';
import {
  PzmInputTimeWithSecondsExampleComponent,
} from './examples/with-seconds/input-time-with-seconds-example.component';
import {
  PzmInputTimeWithPresetExampleComponent,
} from './examples/with-preset/input-time-with-preset-example.component';
import { PzmInputTimeWithMsExampleComponent } from './examples/with-ms/input-time-with-ms-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmInputTimeModule,
    RouterModule.forChild(generateRoutes(InputTimeTimeComponent)),
  ],
  declarations: [
    PzmInputTimeBaseExampleComponent,
    PzmInputTimeWithSecondsExampleComponent,
    PzmInputTimeWithPresetExampleComponent,
    PzmInputTimeWithMsExampleComponent,
    InputTimeTimeComponent
  ],
  exports: [InputTimeTimeComponent],
})
export class InputTimeTimeModule {}
