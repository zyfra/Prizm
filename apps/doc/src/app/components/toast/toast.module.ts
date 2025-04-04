import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast.component';
import { PrizmToastInfoExampleComponent } from './examples/message-info-example/message-info-example.component';
import {
  PrizmButtonComponent,
  PrizmRadioButtonComponent,
  PrizmToastModule,
  prizmToastOptionsProvider,
} from '@prizm-ui/components';
import { PrizmToastWarningExampleComponent } from './examples/message-warning-example/message-warning-example.component';
import { PrizmToastSuccessExampleComponent } from './examples/message-success-example/message-success-example.component';
import { PrizmToastDangerExampleComponent } from './examples/message-danger-example/message-danger-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmToastExampleComponent } from './examples/toast-example/toast-example.component';
import { PrizmToastInnerHtmlExampleComponent } from './examples/inner-html/toast-inner-html-example.component';
import { PrizmToastSecondaryExampleComponent } from './examples/message-secondary-example/message-secondary-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmButtonComponent,
    PrizmRadioButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    // PrizmToastModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ToastComponent)),
  ],
  declarations: [
    PrizmToastInfoExampleComponent,
    PrizmToastInnerHtmlExampleComponent,
    PrizmToastWarningExampleComponent,
    PrizmToastExampleComponent,
    PrizmToastSuccessExampleComponent,
    PrizmToastDangerExampleComponent,
    PrizmToastSecondaryExampleComponent,
    ToastComponent,
  ],
  providers: [
    prizmToastOptionsProvider({
      timer: 1000,
    }),
  ],
  exports: [ToastComponent],
})
export class ToastModule {}
