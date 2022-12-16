import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmDialogModule,
  PrizmRadioButtonModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog.component';
import { PrizmDialogServiceExampleComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmButtonModule,
    PrizmDialogModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(DialogComponent)),
  ],
  declarations: [
    PrizmDialogServiceExampleComponent,
    DialogComponent
  ],
  exports: [DialogComponent],
})
export class DialogModule {}
