import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeTableModule } from 'primeng/treetable';

import { ZyfraTreeTableComponent } from './tree-table.component';
import { ZyfraTreeTableRowDirective } from './directives/tree-table-row.directive';
import { ZyfraTreeTableSelectableRowDirective } from './directives/tree-table-selectable-row.directive';
import { ZyfraTreeTableTogglerComponent } from './tree-table-toggler/tree-table-toggler.component';
import { ZyfraTreeTableCheckboxComponent } from './tree-table-checkbox/tree-table-checkbox.component';
import { ZyfraTreeTableHeaderCheckboxComponent } from './tree-table-header-checkbox/tree-table-header-checkbox.component';
import { ZyfraTreeTableSortableColumnDirective } from './directives/tree-table-sortable-column.directive';
import { ZyfraTreeTableSortIconComponent } from './tree-table-sort-icon/tree-table-sort-icon.component';
import { ZyfraTreeTableCellEditorComponent } from './tree-table-cell-editor/tree-table-cell-editor.component';
import { ZyfraTreeTableEditableColumnDirective } from './directives/tree-table-editable-column.directive';
import { ZyfraTreeTableReorderableColumnDirective } from './directives/tree-table-reorderable-column.directive';
import { ZyfraTreeTableTemplateDirective } from './directives/tree-table-template.directive';

@NgModule({
  declarations: [
    ZyfraTreeTableComponent,
    ZyfraTreeTableRowDirective,
    ZyfraTreeTableSelectableRowDirective,
    ZyfraTreeTableTogglerComponent,
    ZyfraTreeTableCheckboxComponent,
    ZyfraTreeTableHeaderCheckboxComponent,
    ZyfraTreeTableSortableColumnDirective,
    ZyfraTreeTableSortIconComponent,
    ZyfraTreeTableCellEditorComponent,
    ZyfraTreeTableEditableColumnDirective,
    ZyfraTreeTableReorderableColumnDirective,
    ZyfraTreeTableTemplateDirective,
    ZyfraTreeTableRowDirective,
  ],
  imports: [CommonModule, TreeTableModule],
  exports: [
    ZyfraTreeTableComponent,
    ZyfraTreeTableRowDirective,
    ZyfraTreeTableSelectableRowDirective,
    ZyfraTreeTableTogglerComponent,
    ZyfraTreeTableCheckboxComponent,
    ZyfraTreeTableHeaderCheckboxComponent,
    ZyfraTreeTableSortableColumnDirective,
    ZyfraTreeTableSortIconComponent,
    ZyfraTreeTableCellEditorComponent,
    ZyfraTreeTableEditableColumnDirective,
    ZyfraTreeTableReorderableColumnDirective,
    ZyfraTreeTableTemplateDirective,
    ZyfraTreeTableRowDirective,
  ],
})
export class ZyfraTreeTableModule {}
