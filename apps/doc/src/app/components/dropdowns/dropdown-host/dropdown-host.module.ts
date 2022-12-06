import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PrizmButtonModule,
  PrizmCheckboxModule,
  PrizmDataListModule,
  PrizmDropdownHostModule,
  PrizmDropdownZoneModule,
  PrizmIconModule,
  PrizmInputDateTimeModule,
  PrizmInputTextModule,
  PrizmRadioButtonModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownHostComponent } from './dropdown-host.component';
import { PrizmDropdownHostExampleWithTemplateComponent } from './examples/with-template/template';
import { PrizmSelectPanelExampleComponent } from './examples/select-panel-example/select-panel-example.component';
import { PrizmDropdownHostDateListExampleComponent } from './examples/date-list/date-list.component';
import { PrizmDropdownHostDateListEditExampleComponent } from './examples/date-list-edit/date-list-edit.component';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmDataListModule,
    PrizmDropdownZoneModule,
    PrizmButtonModule,
    PrizmDropdownHostModule,
    RouterModule.forChild(generateRoutes(DropdownHostComponent)),
    PrizmCheckboxModule,
    PrizmInputDateTimeModule,
    PrizmInputTextModule,
    PrizmIconModule,
    PrizmRadioButtonModule,
    PrizmCallFuncModule,
    PrizmLetModule,
    FormsModule,
  ],
  declarations: [
    PrizmDropdownHostExampleWithTemplateComponent,
    PrizmDropdownHostDateListEditExampleComponent,
    PrizmDropdownHostDateListExampleComponent,
    DropdownHostComponent,
    PrizmSelectPanelExampleComponent,
  ],
  exports: [DropdownHostComponent],
})
export class DropdownHostModule {}

