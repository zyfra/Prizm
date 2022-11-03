import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PzmButtonModule,
  PzmDialogModule,
  PzmRadioButtonModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog.component';
import { PzmDialogServiceExampleComponent } from './examples/base/base.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmButtonModule,
    PzmDialogModule,
    PzmRadioButtonModule,
    RouterModule.forChild(generateRoutes(DialogComponent)),
  ],
  declarations: [
    PzmDialogServiceExampleComponent,
    DialogComponent
  ],
  exports: [DialogComponent],
})
export class DialogModule {}
