import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast.component';
import { ZuiToastInfoExampleComponent } from './examples/message-info-example/message-success-example.component';
import {
  ZuiButtonModule,
  ZuiRadioButtonModule,
  ZuiToastModule,
  zuiToastOptionsProvider,
} from '@digital-plant/zui-components';
import { ZuiToastWarningExampleComponent } from './examples/message-warning-example/message-warning-example.component';
import { ZuiToastSuccessExampleComponent } from './examples/message-success-example/message-success-example.component';
import { ZuiToastDangerExampleComponent } from './examples/message-danger-example/message-success-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiToastExampleComponent } from './examples/toast-example/toast-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    ZuiButtonModule,
    ZuiRadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ZuiToastModule,
    RouterModule.forChild(generateRoutes(ToastComponent)),
  ],
  declarations: [
    ZuiToastInfoExampleComponent,
    ZuiToastWarningExampleComponent,
    ZuiToastExampleComponent,
    ZuiToastSuccessExampleComponent,
    ZuiToastDangerExampleComponent,
    ToastComponent,
  ],
  providers: [
    zuiToastOptionsProvider({
      timer: 1000
    })
  ],
  exports: [ToastComponent],
})
export class ToastModule {}
