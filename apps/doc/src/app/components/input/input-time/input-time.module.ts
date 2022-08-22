import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputTimeTimeComponent } from './input-time.component';
import { PolymorphModule, ZuiInputTimeModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiInputTimeBaseExampleComponent } from './examples/base/input-time-base-example.component';
import {
  ZuiInputTimeWithSecondsExampleComponent,
} from './examples/with-seconds/input-time-with-seconds-example.component';
import {
  ZuiInputTimeWithPresetExampleComponent,
} from './examples/with-preset/input-time-with-preset-example.component';
import { ZuiInputTimeWithMsExampleComponent } from './examples/with-ms/input-time-with-ms-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiInputTimeModule,
    RouterModule.forChild(generateRoutes(InputTimeTimeComponent)),
  ],
  declarations: [
    ZuiInputTimeBaseExampleComponent,
    ZuiInputTimeWithSecondsExampleComponent,
    ZuiInputTimeWithPresetExampleComponent,
    ZuiInputTimeWithMsExampleComponent,
    InputTimeTimeComponent
  ],
  exports: [InputTimeTimeComponent],
})
export class InputTimeTimeModule {}
