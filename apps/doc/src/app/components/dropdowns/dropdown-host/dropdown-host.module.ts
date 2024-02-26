import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonComponent,
  PrizmCheckboxComponent,
  PrizmDataListComponent,
  PrizmDropdownHostModule,
  PrizmInputLayoutDateTimeComponent,
  PrizmInputTextModule,
  PrizmRadioButtonComponent,
  PrizmChipsComponent,
  PrizmChipsModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownHostComponent } from './dropdown-host.component';
import { PrizmDropdownHostExampleWithTemplateComponent } from './examples/with-template/template';
import { PrizmSelectPanelExampleComponent } from './examples/select-panel-example/select-panel-example.component';
import { PrizmDropdownHostDateListEditExampleComponent } from './examples/date-list-edit/date-list-edit.component';
import { PrizmCallFuncPipe, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmDropdownHostExampleWithCustomContextComponent } from './examples/with-custom-context/with-custom-context.component';
import { PrizmDropdownHostDateListExampleComponent } from './examples/date-list-with-nested/date-list.component';
import { PrizmDropdownHostCustomStyleComponent } from './examples/custom-style/custom-style-example.component';
import { PrizmDropdownHostExampleByMethodComponent } from './examples/by-method/by-method-example.component';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmDataListComponent,
    PrizmDropdownHostModule,
    RouterModule.forChild(prizmDocGenerateRoutes(DropdownHostComponent)),
    PrizmCheckboxComponent,
    PrizmInputLayoutDateTimeComponent,
    PrizmInputTextModule,
    PrizmRadioButtonComponent,
    PrizmCallFuncPipe,
    PrizmLetDirective,
    PrizmButtonComponent,
    FormsModule,
    PrizmIconsFullComponent,
    PrizmChipsModule,
  ],
  declarations: [
    PrizmDropdownHostExampleByMethodComponent,
    PrizmDropdownHostCustomStyleComponent,
    PrizmDropdownHostExampleWithTemplateComponent,
    PrizmDropdownHostDateListEditExampleComponent,
    PrizmDropdownHostDateListExampleComponent,
    PrizmDropdownHostExampleWithCustomContextComponent,
    DropdownHostComponent,
    PrizmSelectPanelExampleComponent,
  ],
  exports: [DropdownHostComponent],
})
export class DropdownHostModule {}
