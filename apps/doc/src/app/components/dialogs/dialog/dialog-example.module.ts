import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmDialogModule,
  PrizmInputCommonModule,
  PrizmInputSelectModule,
  PrizmRadioButtonModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogExampleComponent } from './dialog-example.component';
import { PrizmDialogServiceExampleComponent } from './examples/base/dialog-base-example.component';
import { PrizmDialogServiceWithButtonsExampleComponent } from './examples/with-buttons/dialog-with-buttons-example.component';
import { PrizmDialogServiceWithParentExampleComponent } from './examples/with-parent/dialog-with-parent-example.component';

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
    RouterModule.forChild(prizmDocGenerateRoutes(DialogExampleComponent)),
    PrizmInputCommonModule,
    PrizmInputSelectModule,
  ],
  declarations: [
    PrizmDialogServiceExampleComponent,
    PrizmDialogServiceWithButtonsExampleComponent,
    PrizmDialogServiceWithParentExampleComponent,
    DialogExampleComponent,
  ],
  exports: [DialogExampleComponent],
})
export class DialogExampleModule {}
