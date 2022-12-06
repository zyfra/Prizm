import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExampleComponent } from './table-example.component';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { TableBasicExampleComponent } from './examples/table-basic-example/table-basic-example.component';
import {
  PrizmCheckboxModule,
  PrizmDropdownHostModule,
  PrizmIconSvgModule,
  PrizmInputTextModule,
  PrizmPaginatorModule,
  PrizmPanelModule,
  PrizmScrollbarModule,
  PrizmTableModule,
} from '@prizm-ui/components';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableSelectableExampleComponent } from './examples/table-selectable-example/table-selectable-example.component';
import { TableEditableColExampleComponent } from './examples/table-editable-col-example/table-editable-col-example.component';
import { TableEditableRowExampleComponent } from './examples/table-editable-row-example/table-editable-row-example.component';
import { TableFilterExampleComponent } from './examples/table-filter-example/table-filter-example.component';
import { TableStatusExampleComponent } from './examples/table-status-example/table-status-example.component';
import { TableRowGroupExampleComponent } from './examples/table-row-group-example/table-row-group-example.component';
import { TableSearchExampleComponent } from './examples/table-search-example/table-search-example.component';
import { TableBorderStyleExampleComponent } from './examples/table-border-style-example/table-border-style-example.component';

@NgModule({
  declarations: [
    TableExampleComponent,
    TableBasicExampleComponent,
    TableSelectableExampleComponent,
    TableEditableColExampleComponent,
    TableEditableRowExampleComponent,
    TableFilterExampleComponent,
    TableStatusExampleComponent,
    TableRowGroupExampleComponent,
    TableSearchExampleComponent,
    TableBorderStyleExampleComponent,
  ],
  imports: [
    CommonModule,
    TuiAddonDocModule,
    PrizmTableModule,
    RouterModule.forChild(generateRoutes(TableExampleComponent)),
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    PrizmInputTextModule,
    PrizmIconSvgModule,
    PrizmPaginatorModule,
    PrizmPanelModule,
    PrizmScrollbarModule,
    PrizmDropdownHostModule,
    PrizmCheckboxModule,
  ],
})
export class TableExampleModule {}
