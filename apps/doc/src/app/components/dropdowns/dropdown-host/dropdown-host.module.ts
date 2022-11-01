import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  PzmButtonModule,
  PzmCheckboxModule,
  PzmDataListModule,
  PzmDropdownHostModule,
  PzmDropdownZoneModule,
  PzmIconModule,
  PzmInputDateTimeModule,
  PzmInputTextModule,
  PzmRadioButtonModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownHostComponent } from './dropdown-host.component';
import { PzmDropdownHostExampleWithTemplateComponent } from './examples/with-template/template';
import { PzmSelectPanelExampleComponent } from './examples/select-panel-example/select-panel-example.component';
import { PzmDropdownHostDateListExampleComponent } from './examples/date-list/date-list.component';
import { PzmDropdownHostDateListEditExampleComponent } from './examples/date-list-edit/date-list-edit.component';
import { PzmCallFuncModule, PzmLetModule } from '@digital-plant/zyfra-helpers';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmDataListModule,
    PzmDropdownZoneModule,
    PzmButtonModule,
    PzmDropdownHostModule,
    RouterModule.forChild(generateRoutes(DropdownHostComponent)),
    PzmCheckboxModule,
    PzmInputDateTimeModule,
    PzmInputTextModule,
    PzmIconModule,
    PzmRadioButtonModule,
    PzmCallFuncModule,
    PzmLetModule,
    FormsModule,
  ],
  declarations: [
    PzmDropdownHostExampleWithTemplateComponent,
    PzmDropdownHostDateListEditExampleComponent,
    PzmDropdownHostDateListExampleComponent,
    DropdownHostComponent,
    PzmSelectPanelExampleComponent,
  ],
  exports: [DropdownHostComponent],
})
export class DropdownHostModule {}

