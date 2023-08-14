import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmConfirmDialogModule,
  PrizmRadioButtonModule,
  PrizmSelectModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm.component';
import { PrizmDialogServiceExampleComponent } from './examples/base/base.component';
import { PrizmDialogHorizontalExampleComponent } from './examples/horizontal/horizontal.component';
import { FullExampleModule } from './examples/full/full.module';
import { PrizmCallFuncModule } from '@prizm-ui/helpers';
import { PrizmDialogCustomButtonExampleComponent } from './examples/custom-button/custom-button.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmSelectModule,
    FullExampleModule,
    PrizmCallFuncModule,
    PrizmButtonModule,
    PrizmConfirmDialogModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ConfirmComponent)),
  ],
  declarations: [
    PrizmDialogCustomButtonExampleComponent,
    PrizmDialogServiceExampleComponent,
    PrizmDialogHorizontalExampleComponent,
    ConfirmComponent,
  ],
  exports: [ConfirmComponent],
})
export class ConfirmModule {}
