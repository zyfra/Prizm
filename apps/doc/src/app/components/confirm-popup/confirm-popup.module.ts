import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PrizmButtonModule, PrizmConfirmPopupModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupComponent } from './confirm-popup.component';
import { PrizmConfirmPopupBaseExampleComponent } from './examples/base/confirm-popup-base-example.component';
import { PrizmConfirmPopupSomeComponent } from './examples/with-component/some.component';
import { PrizmConfirmPopupWithTemplateExampleComponent } from './examples/with-template/confirm-popup-with-template-example.component';
import { PrizmConfirmPopupWithComponentExampleComponent } from './examples/with-component/confirm-popup-with-component-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmConfirmPopupModule,
    PrizmButtonModule,
    RouterModule.forChild(prizmDocGenerateRoutes(ConfirmPopupComponent)),
  ],
  declarations: [
    PrizmConfirmPopupWithTemplateExampleComponent,
    PrizmConfirmPopupWithComponentExampleComponent,
    PrizmConfirmPopupSomeComponent,
    PrizmConfirmPopupBaseExampleComponent,
    ConfirmPopupComponent,
  ],
  exports: [ConfirmPopupComponent],
})
export class ConfirmPopupModule {}
