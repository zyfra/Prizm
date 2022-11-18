import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmConfirmDialogModule,
  PrizmRadioButtonModule, PrizmSelectModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm.component';
import { PrizmDialogServiceExampleComponent } from './examples/base/base.component';
import { PrizmDialogHorizontalExampleComponent } from './examples/horizontal/horizontal.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmSelectModule,
    PrizmButtonModule,
    PrizmConfirmDialogModule,
    PrizmRadioButtonModule,
    RouterModule.forChild(generateRoutes(ConfirmComponent)),
  ],
  declarations: [
    PrizmDialogServiceExampleComponent,
    PrizmDialogHorizontalExampleComponent,
    ConfirmComponent
  ],
  exports: [ConfirmComponent],
})
export class ConfirmModule {}
