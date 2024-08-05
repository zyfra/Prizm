import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmConfirmDialogModule,
  PrizmInputCommonModule,
  PrizmInputSelectModule,
  PrizmRadioButtonComponent,
  PrizmSelectInputComponent,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm.component';
import { PrizmDialogServiceExampleComponent } from './examples/base/base.component';
import { PrizmDialogHorizontalExampleComponent } from './examples/horizontal/horizontal.component';
import { FullExampleModule } from './examples/full/full.module';
import { PrizmCallFuncPipe } from '@prizm-ui/helpers';
import { PrizmDialogCustomButtonExampleComponent } from './examples/custom-button/custom-button.component';
import { PrizmDialogFooterTemplateExampleComponent } from './examples/footer-template/footer-template.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputSelectModule,
    FullExampleModule,
    PrizmCallFuncPipe,
    PrizmButtonModule,
    PrizmConfirmDialogModule,
    PrizmRadioButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ConfirmComponent)),
    PrizmInputCommonModule,
    PrizmSelectInputComponent,
  ],
  declarations: [
    PrizmDialogCustomButtonExampleComponent,
    PrizmDialogServiceExampleComponent,
    PrizmDialogHorizontalExampleComponent,
    PrizmDialogFooterTemplateExampleComponent,
    ConfirmComponent,
  ],
  exports: [ConfirmComponent],
})
export class ConfirmModule {}
