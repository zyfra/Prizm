import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import { FilterMetadata } from 'primeng/api';
import { TreeTable, TreeTableService } from 'primeng/treetable';
import { ZyfraBaseTableComponent } from '../@core/base-table';
import { BaseTableTemplateDirective } from '../@core/base-table/directives/base-table-template.directive';
import { ZyfraTreeTableTemplateDirective } from './directives/tree-table-template.directive';

@Component({
  selector: 'zyfra-tree-table',
  templateUrl: './tree-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TreeTableService,
    {
      provide: TreeTable,
      useFactory: (zyfraTable: ZyfraTreeTableComponent): TreeTable => zyfraTable.table,
      deps: [ZyfraTreeTableComponent],
    },
  ],
})
export class ZyfraTreeTableComponent<T = unknown>
  extends ZyfraBaseTableComponent<T>
  implements AfterContentInit, OnChanges
{
  @ViewChild('table', { static: true }) table: TreeTable;
  @ContentChildren(ZyfraTreeTableTemplateDirective) templates: QueryList<ZyfraTreeTableTemplateDirective>;

  //region Inputs
  /**
   * An array of FilterMetadata objects to provide external filters
   */
  @Input() filters: { [s: string]: FilterMetadata } = {};
  //endregion

  //region Outputs
  /**
   * Change active element
   */
  @Output() activeElementChange: EventEmitter<T> = new EventEmitter<T>();
  /**
   * Callback to invoke when a node is expanded
   */
  @Output() onNodeExpand = new EventEmitter<{ originalEvent: Event; node: unknown }>();
  /**
   * Callback to invoke when a node is collapsed
   */
  @Output() onNodeCollapse = new EventEmitter<{ originalEvent: Event; node: unknown }>();
  /**
   * Callback to invoke when a node is selected
   */
  @Output() onNodeSelect = new EventEmitter<{ originalEvent: Event; node: unknown }>();
  /**
   * Callback to invoke when a node is unselected
   */
  @Output() onNodeUnselect = new EventEmitter<{ originalEvent: Event; node: unknown }>();
  /**
   * Callback to invoke when selection of context menu selection is changed
   */
  @Output() contextMenuSelectionChange = new EventEmitter<unknown>();

  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity
   */
  @Input() rowTrackBy: <K>(index: number, item: K) => K = (index: number, item: any) => item;

  //region Base class overrides
  public override getContentTemplate():QueryList<BaseTableTemplateDirective> {
    return this.templates;
  }

  public override getTable(): TreeTable {
    return this.table
  };

  public override initTemplateByType(item: BaseTableTemplateDirective): void {
    // do nothing
  };
  //endregion
}
