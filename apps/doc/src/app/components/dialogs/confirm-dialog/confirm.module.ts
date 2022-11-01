import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PzmButtonModule,
  ZuiConfirmDialogModule,
  PzmRadioButtonModule, PzmSelectModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm.component';
import { ZuiDialogServiceExampleComponent } from './examples/base/base.component';
import { ZuiDialogHorizontalExampleComponent } from './examples/horizontal/horizontal.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmSelectModule,
    PzmButtonModule,
    ZuiConfirmDialogModule,
    PzmRadioButtonModule,
    RouterModule.forChild(generateRoutes(ConfirmComponent)),
  ],
  declarations: [
    ZuiDialogServiceExampleComponent,
    ZuiDialogHorizontalExampleComponent,
    ConfirmComponent
  ],
  exports: [ConfirmComponent],
})
export class ConfirmModule {}
