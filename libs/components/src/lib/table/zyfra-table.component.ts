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
  TemplateRef,
  ViewChild
} from '@angular/core';
import { FilterService } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { ZyfraBaseTableComponent } from '../@core/base-table';
import { BaseTableTemplateDirective } from '../@core/base-table/directives/base-table-template.directive';
import { ZyfraTableTemplateDirective } from './directives/table-template.directive';
import { Filters, RowSelectionEvent } from './zyfra-table.types';

@Component({
  selector: 'zyfra-table',
  templateUrl: './zyfra-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TableService,
    FilterService,
    {
      provide: Table,
      useFactory: (zyfraTable: ZyfraTableComponent): Table => zyfraTable.table,
      deps: [ZyfraTableComponent],
    },
  ],
})
export class ZyfraTableComponent<T = unknown>
  extends ZyfraBaseTableComponent<T>
  implements AfterContentInit, OnChanges
{
  @ViewChild('ptable', { static: true }) table: Table;
  @ContentChildren(ZyfraTableTemplateDirective) templates: QueryList<ZyfraTableTemplateDirective>;

  public expandedRowTemplate: TemplateRef<any>;
  public footerGroupedTemplate: TemplateRef<any>;
  public frozenExpandedRowTemplate: TemplateRef<any>;
  public frozenRowsTemplate: TemplateRef<any>;
  public groupFooterTemplate: TemplateRef<unknown>;
  public groupHeaderTemplate: TemplateRef<unknown>;
  public headerGroupedTemplate: TemplateRef<any>;
  public loadingBodyTemplate: TemplateRef<any>;
  public rowspanTemplate: TemplateRef<any>;

  //region Inputs
  /**
   * An array of objects to display as frozen
   */
  @Input() frozenValue: any[];
  /**
   * Defines the responsive mode
   */
  @Input() responsiveLayout: 'stack' | 'scroll' = 'stack';
  /**
   * The breakpoint to define the maximum width boundary when using stack responsive layout
   */
  @Input() breakpoint = '960px';
  /**
   * Type of the row grouping
   */
  @Input() rowGroupMode: 'subheader' | 'rowspan';

  /**
   * Whether to use the initial sort badge or not
   */
  @Input() showInitialSortBadge = true;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity
   */
  @Input() rowTrackBy: (...args: any[]) => any;
  /**
   * Character to use as the csv separator
   */
  @Input() csvSeparator = ',';
  /**
   * Name of the exported file
   */
  @Input() exportFilename = 'download';

  private _filters: Filters = {};

  /**
   * An array of FilterMetadata objects to provide external filters
   */
  @Input()
  set filters(filters: Filters) {
    this._filters = filters;
  }

  get filters(): Filters {
    return this.table.filters;
  }
  /**
   * Map instance to keep the expanded rows where key of the map is the data key of the row
   */
  @Input() expandedRowKeys: { [s: string]: boolean } = {};
  /**
   * Whether multiple rows can be expanded at any time
   */
  @Input() rowExpandMode: 'single' | 'multiple' = 'multiple';
  /**
   * Orientation of the scrolling
   */
  @Input() scrollDirection: 'vertical' | 'horizontal' | 'both' = 'vertical';
  /**
   * Threshold in milliseconds to delay lazy loading during scrolling
   */
  @Input() virtualScrollDelay = 250;
  /**
   * Defines if the columns should be stacked in smaller screens
   */
  @Input() responsive = false;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value
   */
  @Input() paginatorDropdownScrollHeight = '200px';
  /**
   * A function to implement custom export. Need to return string value
   */
  @Input() exportFunction: (event: { data: any; field: any }) => string;
  /**
   * Unique identifier of a stateful table to use in state storage
   */
  @Input() stateKey: string;
  /**
   * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage
   */
  @Input() stateStorage: 'session' | 'local' = 'session';
  /**
   * Defines the editing mode, valid values are "cell" and "row"
   */
  @Input() editMode: 'cell' | 'row' = 'cell';
  /**
   * Map instance to keep the rows being edited where key of the map is the data key of the row
   */
  @Input() editingRowKeys: { [s: string]: boolean } = {};
  /**
   * One or more field names to use in row grouping
   */
  @Input() groupRowsBy: string | string[];
  /**
   * Order to sort when default row grouping is enabled
   */
  @Input() groupRowsByOrder = 1;

  @Input() className: string = 'zyfra-table-class'

  //endregion

  //region Outputs
  /**
   * Change active element
   */
  @Output() activeElementChange: EventEmitter<T> = new EventEmitter<T>();
  /**
   * Callback to invoke when a row is selected
   */
  @Output() rowSelect = new EventEmitter<RowSelectionEvent>();
  /**
   * Callback to invoke when a row is unselected
   */
  @Output() rowUnselect = new EventEmitter<RowSelectionEvent>();
  /**
   * Callback to invoke when a row is expanded
   */
  @Output() rowExpand = new EventEmitter<{ originalEvent: Event; data: unknown }>();
  /**
   * Callback to invoke when a row is collapsed
   */
  @Output() rowCollapse = new EventEmitter<{ originalEvent: Event; data: unknown }>();
  /**
   * Callback to invoke when a row is reordered
   */
  @Output() rowReorder = new EventEmitter<{ dragIndex: number; dropIndex: number }>();
  /**
   * Callback to invoke table state is saved
   */
  @Output() stateSave = new EventEmitter<unknown>();
  /**
   * Callback to invoke table state is restored
   */
  @Output() stateRestore = new EventEmitter<unknown>();
  /**
   * Callback to invoke first is changed
   */
  @Output() firstChange = new EventEmitter<number>();
  //endregion

  //region Base class overrides
  public override getContentTemplate(): QueryList<BaseTableTemplateDirective> {
    return this.templates;
  }

  public override getTable(): Table {
    return this.table;
  }

  public override initTemplateByType(item: ZyfraTableTemplateDirective): void {
    switch (item.getType()) {
      case 'headergrouped':
        this.headerGroupedTemplate = item.template;
        break;

      case 'loadingbody':
        this.loadingBodyTemplate = item.template;
        break;

      case 'footergrouped':
        this.footerGroupedTemplate = item.template;
        break;

      case 'rowexpansion':
        this.expandedRowTemplate = item.template;
        break;

      case 'groupheader':
        this.groupHeaderTemplate = item.template;
        break;

      case 'rowspan':
        this.rowspanTemplate = item.template;
        break;

      case 'groupfooter':
        this.groupFooterTemplate = item.template;
        break;

      case 'frozenrows':
        this.frozenRowsTemplate = item.template;
        break;

      case 'frozenheader':
        this.frozenHeaderTemplate = item.template;
        break;

      case 'frozenbody':
        this.frozenBodyTemplate = item.template;
        break;

      case 'frozenfooter':
        this.frozenFooterTemplate = item.template;
        break;

      case 'frozencolgroup':
        this.frozenColGroupTemplate = item.template;
        break;

      case 'frozenrowexpansion':
        this.frozenExpandedRowTemplate = item.template;
        break;
    }
  }
  //endregion

  public exportCSV(options?: any): void {
    return this.table.exportCSV(options);
  }

  public clear(): void {
    this.table.clear();
  }
}
