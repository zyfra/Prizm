import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PzmButtonModule,
  PzmConfirmDialogModule,
  PzmRadioButtonModule, PzmSelectModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm.component';
import { PzmDialogServiceExampleComponent } from './examples/base/base.component';
import { PzmDialogHorizontalExampleComponent } from './examples/horizontal/horizontal.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmSelectModule,
    PzmButtonModule,
    PzmConfirmDialogModule,
    PzmRadioButtonModule,
    RouterModule.forChild(generateRoutes(ConfirmComponent)),
  ],
  declarations: [
    PzmDialogServiceExampleComponent,
    PzmDialogHorizontalExampleComponent,
    ConfirmComponent
  ],
  exports: [ConfirmComponent],
})
export class ConfirmModule {}
