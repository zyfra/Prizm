import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExampleComponent } from './table-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { TableBasicExampleComponent } from './examples/table-basic-example/table-basic-example.component';
import {
  PrizmCheckboxModule,
  PrizmDropdownHostModule,
  PrizmIconModule,
  PrizmInputTextModule,
  PrizmLoaderModule,
  PrizmPaginatorModule,
  PrizmPanelModule,
  PrizmScrollbarModule,
  PrizmStickyModule,
  PrizmTableModule,
  PrizmToggleModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableSelectableExampleComponent } from './examples/table-selectable-example/table-selectable-example.component';
import { TableEditableColExampleComponent } from './examples/table-editable-col-example/table-editable-col-example.component';
import { TableEditableRowExampleComponent } from './examples/table-editable-row-example/table-editable-row-example.component';
import { TableFilterExampleComponent } from './examples/table-filter-example/table-filter-example.component';
import { TableStatusExampleComponent } from './examples/table-status-example/table-status-example.component';
import { TableRowGroupExampleComponent } from './examples/table-row-group-example/table-row-group-example.component';
import { TableSearchExampleComponent } from './examples/table-search-example/table-search-example.component';
import { TableBorderStyleExampleComponent } from './examples/table-border-style-example/table-border-style-example.component';
import { TableSelectableMetaExampleComponent } from './examples/table-selectable-meta/table-selectable-meta-example.component';
import { TableSortExampleComponent } from './examples/table-sort-example/table-sort-example.component';
import { TableServerSortExampleComponent } from './examples/table-server-sort-example/table-server-sort-example.component';
import { TableTreeExampleComponent } from './examples/table-tree-example/table-tree-example.component';
import { TableEmptyExampleComponent } from './examples/table-empty-example/table-empty-example.component';
import { TableLoadingExampleComponent } from './examples/table-loading-example/table-loading-example.component';
import { TableStickyExampleComponent } from './examples/table-sticky-example/table-sticky-example.component';
import { TableDataSourceExampleComponent } from './examples/table-data-source-example/table-data-source-example.component';
import { TableDynamicDynamicRowGroupExampleComponent } from './examples/table-dynamic-row-group-example/table-dynamic-row-group-example.component';

@NgModule({
  declarations: [
    TableExampleComponent,
    TableBasicExampleComponent,
    TableLoadingExampleComponent,
    TableEmptyExampleComponent,
    TableSelectableExampleComponent,
    TableEditableColExampleComponent,
    TableEditableRowExampleComponent,
    TableFilterExampleComponent,
    TableStatusExampleComponent,
    TableSortExampleComponent,
    TableServerSortExampleComponent,
    TableDataSourceExampleComponent,
    TableRowGroupExampleComponent,
    TableSearchExampleComponent,
    TableBorderStyleExampleComponent,
    TableTreeExampleComponent,
    TableStickyExampleComponent,
    TableSelectableMetaExampleComponent,
    TableDynamicDynamicRowGroupExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmToggleModule,
    PrizmAddonDocModule,
    PrizmStickyModule,
    PrizmTableModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TableExampleComponent)),
    FormsModule,
    ReactiveFormsModule,
    PrizmLoaderModule,
    PrizmInputTextModule,
    PrizmIconModule,
    PrizmPaginatorModule,
    PrizmPanelModule,
    PrizmScrollbarModule,
    PrizmDropdownHostModule,
    PrizmCheckboxModule,
  ],
})
export class TableExampleModule {}
