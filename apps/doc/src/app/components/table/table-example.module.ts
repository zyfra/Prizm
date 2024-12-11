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
  PrizmInputLayoutDateComponent,
  PrizmInputLayoutInsertedDirective,
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
import { TableEmptyExampleComponent } from './examples/table-empty-example/table-empty-example.component';
import { TableLoadingExampleComponent } from './examples/table-loading-example/table-loading-example.component';
import { TableDataSourceExampleComponent } from './examples/table-data-source-example/table-data-source-example.component';
import { TableColumnSettingsExampleComponent } from './examples/table-column-settings-example/table-column-settings-example.component';
import { PrizmStickyColumnPipe } from './examples/table-column-settings-example/pipes/column-sticky-pipe.pipe';
import { PrizmStickyHeaderPipe } from './examples/table-column-settings-example/pipes/header-sticky-pipe.pipe';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

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
    TableDataSourceExampleComponent,
    TableRowGroupExampleComponent,
    TableSearchExampleComponent,
    TableBorderStyleExampleComponent,
    TableSelectableMetaExampleComponent,
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
    PrizmInputLayoutInsertedDirective,
    PrizmInputLayoutDateComponent,
  ],
})
export class TableExampleModule {}
