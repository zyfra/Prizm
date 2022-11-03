import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast.component';
import { PzmToastInfoExampleComponent } from './examples/message-info-example/message-success-example.component';
import {
  PzmButtonModule,
  PzmRadioButtonModule,
  PzmToastModule,
  pzmToastOptionsProvider,
} from '@digital-plant/zui-components';
import { PzmToastWarningExampleComponent } from './examples/message-warning-example/message-warning-example.component';
import { PzmToastSuccessExampleComponent } from './examples/message-success-example/message-success-example.component';
import { PzmToastDangerExampleComponent } from './examples/message-danger-example/message-success-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmToastExampleComponent } from './examples/toast-example/toast-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmButtonModule,
    PzmRadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PzmToastModule,
    RouterModule.forChild(generateRoutes(ToastComponent)),
  ],
  declarations: [
    PzmToastInfoExampleComponent,
    PzmToastWarningExampleComponent,
    PzmToastExampleComponent,
    PzmToastSuccessExampleComponent,
    PzmToastDangerExampleComponent,
    ToastComponent,
  ],
  providers: [
    pzmToastOptionsProvider({
      timer: 1000
    })
  ],
  exports: [ToastComponent],
})
export class ToastModule {}
