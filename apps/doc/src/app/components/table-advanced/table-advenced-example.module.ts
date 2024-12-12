import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAdvancedExampleComponent } from './table-advanced-example.component';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
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
import { TableSearchExampleComponent } from './examples/table-search-example/table-search-example.component';
import { TableServerSortExampleComponent } from './examples/table-server-sort-example/table-server-sort-example.component';
import { TableStickyExampleComponent } from './examples/table-sticky-example/table-sticky-example.component';
import { TableDynamicDynamicRowGroupExampleComponent } from './examples/table-dynamic-row-group-example/table-dynamic-row-group-example.component';
import { TableInheritColsExampleComponent } from './examples/table-inherit-cols/table-inherit-cols-example.component';
import { TableIndexExampleComponent } from './examples/table-index-example/table-index-example.component';
import { TableTreePaginationExampleComponent } from './examples/table-tree-pagination-example/table-tree-pagination-example.component';
import { TableTreeExampleComponent } from './examples/table-tree-example/table-tree-example.component';
import { TableTrackByExampleComponent } from './examples/table-track-by-example/table-track-by-example.component';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { TableEditableLayoutsExampleComponent } from './examples/table-editable-layouts-example/table-editable-layouts-example.component';

@NgModule({
  declarations: [
    TableTrackByExampleComponent,
    TableTreeExampleComponent,
    TableIndexExampleComponent,
    TableTreePaginationExampleComponent,
    TableInheritColsExampleComponent,
    TableAdvancedExampleComponent,
    TableServerSortExampleComponent,
    TableSearchExampleComponent,
    TableTreePaginationExampleComponent,
    TableStickyExampleComponent,
    TableDynamicDynamicRowGroupExampleComponent,
    TableEditableLayoutsExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmToggleComponent,
    PrizmSelectInputComponent,
    PrizmAddonDocModule,
    PrizmStickyModule,
    PrizmDropdownHostModule,
    PrizmTableModule,
    RouterModule.forChild(prizmDocGenerateRoutes(TableAdvancedExampleComponent)),
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
export class TableAdvancedExampleModule {}
