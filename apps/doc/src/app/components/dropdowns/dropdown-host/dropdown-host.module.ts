import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import {
  PolymorphModule,
  ZuiButtonModule,
  ZuiCheckboxModule,
  ZuiDataListModule,
  ZuiDropdownHostModule,
  ZuiDropdownZoneModule,
  ZuiIconModule,
  ZuiInputDateTimeModule,
  ZuiInputTextModule,
  ZuiRadioButtonModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownHostComponent } from './dropdown-host.component';
import { ZuiDropdownHostExampleWithTemplateComponent } from './examples/with-template/template';
import { ZuiSelectPanelExampleComponent } from './examples/select-panel-example/select-panel-example.component';
import { ZuiDropdownHostDateListExampleComponent } from './examples/date-list/date-list.component';
import { ZuiDropdownHostDateListEditExampleComponent } from './examples/date-list-edit/date-list-edit.component';
import { ZuiCallFuncModule, ZuiLetModule } from '@digital-plant/zyfra-helpers';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiDataListModule,
    ZuiDropdownZoneModule,
    ZuiButtonModule,
    ZuiDropdownHostModule,
    RouterModule.forChild(generateRoutes(DropdownHostComponent)),
    ZuiCheckboxModule,
    ZuiInputDateTimeModule,
    ZuiInputTextModule,
    ZuiIconModule,
    ZuiRadioButtonModule,
    ZuiCallFuncModule,
    ZuiLetModule,
    FormsModule,
  ],
  declarations: [
    ZuiDropdownHostExampleWithTemplateComponent,
    ZuiDropdownHostDateListEditExampleComponent,
    ZuiDropdownHostDateListExampleComponent,
    DropdownHostComponent,
    ZuiSelectPanelExampleComponent,
  ],
  exports: [DropdownHostComponent],
})
export class DropdownHostModule {}

