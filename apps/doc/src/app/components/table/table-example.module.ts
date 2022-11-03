import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExampleComponent } from './table-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { TableBasicExampleComponent } from './examples/table-basic-example/table-basic-example.component';
import {
  PzmIconModule,
  PzmInputTextModule,
  PzmPaginatorModule,
  PzmTableModule,
} from '@digital-plant/zui-components';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { TableSelectableExampleComponent } from './examples/table-selectable-example/table-selectable-example.component';
import { TableEditableColExampleComponent } from './examples/table-editable-col-example/table-editable-col-example.component';
import { TableEditableRowExampleComponent } from './examples/table-editable-row-example/table-editable-row-example.component';
import { TableGroupExampleComponent } from './examples/table-group-example/table-group-example.component';
import { TableStatusExampleComponent } from './examples/table-status-example/table-status-example.component';

@NgModule({
  declarations: [
    TableExampleComponent,
    TableBasicExampleComponent,
    TableSelectableExampleComponent,
    TableEditableColExampleComponent,
    TableEditableRowExampleComponent,
    TableGroupExampleComponent,
    TableStatusExampleComponent,
  ],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PzmTableModule,
    RouterModule.forChild(generateRoutes(TableExampleComponent)),
    TableModule,
    FormsModule,
    PzmInputTextModule,
    PzmIconModule,
    PzmPaginatorModule,
  ],
})
export class TableExampleModule {}

