import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PrizmButtonComponent, PrizmConfirmPopupModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupExampleComponent } from './confirm-popup-example.component';
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
    PrizmButtonComponent,
    RouterModule.forChild(prizmDocGenerateRoutes(ConfirmPopupExampleComponent)),
  ],
  declarations: [
    PrizmConfirmPopupWithTemplateExampleComponent,
    PrizmConfirmPopupWithComponentExampleComponent,
    PrizmConfirmPopupSomeComponent,
    PrizmConfirmPopupBaseExampleComponent,
    ConfirmPopupExampleComponent,
  ],
  exports: [ConfirmPopupExampleComponent],
})
export class ConfirmPopupExampleModule {}
