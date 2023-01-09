import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExampleOldComponent } from './table-example-old.component';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { TableBasicExampleComponent } from './examples/table-basic-example/table-basic-example.component';
import {
  PrizmIconModule,
  PrizmInputTextModule,
  PrizmPaginatorModule,
  ZuiTableModule,
} from '@prizm-ui/components';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { TableSelectableExampleComponent } from './examples/table-selectable-example/table-selectable-example.component';
import { TableEditableColExampleComponent } from './examples/table-editable-col-example/table-editable-col-example.component';
import { TableEditableRowExampleComponent } from './examples/table-editable-row-example/table-editable-row-example.component';
import { TableGroupExampleComponent } from './examples/table-group-example/table-group-example.component';
import { TableStatusExampleComponent } from './examples/table-status-example/table-status-example.component';

@NgModule({
  declarations: [
    TableExampleOldComponent,
    TableBasicExampleComponent,
    TableSelectableExampleComponent,
    TableEditableColExampleComponent,
    TableEditableRowExampleComponent,
    TableGroupExampleComponent,
    TableStatusExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    ZuiTableModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TableExampleOldComponent)),
    TableModule,
    FormsModule,
    PrizmInputTextModule,
    PrizmIconModule,
    PrizmPaginatorModule,
  ],
})
export class TableExampleOldModule {}
