import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast.component';
import { PrizmToastInfoExampleComponent } from './examples/message-info-example/message-success-example.component';
import {
  PrizmButtonModule,
  PrizmRadioButtonModule,
  PrizmToastModule,
  prizmToastOptionsProvider,
} from '@prizm-ui/components';
import { PrizmToastWarningExampleComponent } from './examples/message-warning-example/message-warning-example.component';
import { PrizmToastSuccessExampleComponent } from './examples/message-success-example/message-success-example.component';
import { PrizmToastDangerExampleComponent } from './examples/message-danger-example/message-success-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmToastExampleComponent } from './examples/toast-example/toast-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonModule,
    PrizmRadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PrizmToastModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ToastComponent)),
  ],
  declarations: [
    PrizmToastInfoExampleComponent,
    PrizmToastWarningExampleComponent,
    PrizmToastExampleComponent,
    PrizmToastSuccessExampleComponent,
    PrizmToastDangerExampleComponent,
    ToastComponent,
  ],
  providers: [
    prizmToastOptionsProvider({
      timer: 1000
    })
  ],
  exports: [ToastComponent],
})
export class ToastModule {}
