import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExampleComponent } from './table-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { TableBasicExampleComponent } from './examples/table-basic-example/table-basic-example.component';
import {
  PrizmButtonComponent,
  PrizmCheckboxComponent,
  PrizmColumnSettingsComponent,
  PrizmDropdownHostComponent,
  PrizmDropdownHostModule,
  PrizmInputTextModule,
  PrizmLoaderComponent,
  PrizmPaginatorComponent,
  PrizmPanelComponent,
  PrizmScrollbarComponent,
  PrizmSelectInputComponent,
  PrizmStickyModule,
  PrizmTableModule,
  PrizmToggleComponent,
  PrizmWidgetComponent,
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
import { TableEmptyExampleComponent } from './examples/table-empty-example/table-empty-example.component';
import { TableLoadingExampleComponent } from './examples/table-loading-example/table-loading-example.component';
import { TableStickyExampleComponent } from './examples/table-sticky-example/table-sticky-example.component';
import { TableDataSourceExampleComponent } from './examples/table-data-source-example/table-data-source-example.component';
import { TableDynamicDynamicRowGroupExampleComponent } from './examples/table-dynamic-row-group-example/table-dynamic-row-group-example.component';
import { TableInheritColsExampleComponent } from './examples/table-inherit-cols/table-inherit-cols-example.component';
import { TableIndexExampleComponent } from './examples/table-index-example/table-index-example.component';
import { TableTreePaginationExampleComponent } from './examples/table-tree-pagination-example/table-tree-pagination-example.component';
import { TableTreeExampleComponent } from './examples/table-tree-example/table-tree-example.component';
import { TableColumnSettingsExampleComponent } from './examples/table-column-settings-example/table-column-settings-example.component';
import { PrizmStickyColumnPipe } from './examples/table-column-settings-example/pipes/column-sticky-pipe.pipe';
import { PrizmStickyHeaderPipe } from './examples/table-column-settings-example/pipes/header-sticky-pipe.pipe';
import { TableTrackByExampleComponent } from './examples/table-track-by-example/table-track-by-example.component';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@NgModule({
  declarations: [
    TableTrackByExampleComponent,
    TableTreeExampleComponent,
    TableIndexExampleComponent,
    TableTreePaginationExampleComponent,
    TableInheritColsExampleComponent,
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
    TableTreePaginationExampleComponent,
    TableStickyExampleComponent,
    TableSelectableMetaExampleComponent,
    TableDynamicDynamicRowGroupExampleComponent,
    TableColumnSettingsExampleComponent,
    PrizmStickyColumnPipe,
    PrizmStickyHeaderPipe,
  ],
  imports: [
    CommonModule,
    PrizmToggleComponent,
    PrizmSelectInputComponent,
    PrizmAddonDocModule,
    PrizmStickyModule,
    PrizmDropdownHostModule,
    PrizmTableModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TableExampleComponent)),
    FormsModule,
    ReactiveFormsModule,
    PrizmLoaderComponent,
    PrizmInputTextModule,
    PrizmPaginatorComponent,
    PrizmPanelComponent,
    PrizmScrollbarComponent,
    PrizmDropdownHostComponent,
    PrizmCheckboxComponent,
    PrizmButtonComponent,
    PrizmWidgetComponent,
    PrizmColumnSettingsComponent,
    PrizmIconsFullComponent,
  ],
})
export class TableExampleModule {}
