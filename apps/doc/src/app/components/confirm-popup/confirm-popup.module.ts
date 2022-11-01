import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PzmButtonModule, PzmConfirmPopupModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupComponent } from './confirm-popup.component';
import { PzmConfirmPopupBaseExampleComponent } from './examples/base/confirm-popup-base-example.component';
import { PzmConfirmPopupSomeComponent } from './examples/with-component/some.component';
import {
  PzmConfirmPopupWithTemplateExampleComponent,
} from './examples/with-template/confirm-popup-with-template-example.component';
import {
  PzmConfirmPopupWithComponentExampleComponent,
} from './examples/with-component/confirm-popup-with-component-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmConfirmPopupModule,
    PzmButtonModule,
    RouterModule.forChild(generateRoutes(ConfirmPopupComponent)),
  ],
  declarations: [
    PzmConfirmPopupWithTemplateExampleComponent,
    PzmConfirmPopupWithComponentExampleComponent,
    PzmConfirmPopupSomeComponent,
    PzmConfirmPopupBaseExampleComponent,
    ConfirmPopupComponent
  ],
  exports: [ConfirmPopupComponent],
})
export class ConfirmPopupModule {}
