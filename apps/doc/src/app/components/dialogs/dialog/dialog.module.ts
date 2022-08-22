import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  ZuiButtonModule,
  ZuiDialogModule,
  ZuiRadioButtonModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog.component';
import { ZuiDialogServiceExampleComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiButtonModule,
    ZuiDialogModule,
    ZuiRadioButtonModule,
    RouterModule.forChild(generateRoutes(DialogComponent)),
  ],
  declarations: [
    ZuiDialogServiceExampleComponent,
    DialogComponent
  ],
  exports: [DialogComponent],
})
export class DialogModule {}
