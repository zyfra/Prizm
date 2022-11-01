import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { PolymorphModule, PzmButtonModule, ZuiConfirmPopupModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupComponent } from './confirm-popup.component';
import { ZuiConfirmPopupBaseExampleComponent } from './examples/base/confirm-popup-base-example.component';
import { ZuiConfirmPopupSomeComponent } from './examples/with-component/some.component';
import {
  ZuiConfirmPopupWithTemplateExampleComponent,
} from './examples/with-template/confirm-popup-with-template-example.component';
import {
  ZuiConfirmPopupWithComponentExampleComponent,
} from './examples/with-component/confirm-popup-with-component-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiConfirmPopupModule,
    PzmButtonModule,
    RouterModule.forChild(generateRoutes(ConfirmPopupComponent)),
  ],
  declarations: [
    ZuiConfirmPopupWithTemplateExampleComponent,
    ZuiConfirmPopupWithComponentExampleComponent,
    ZuiConfirmPopupSomeComponent,
    ZuiConfirmPopupBaseExampleComponent,
    ConfirmPopupComponent
  ],
  exports: [ConfirmPopupComponent],
})
export class ConfirmPopupModule {}
