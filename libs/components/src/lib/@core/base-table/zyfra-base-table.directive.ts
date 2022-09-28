import {
  AfterContentInit,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

import { SortMeta } from 'primeng/api';
import { TableSortEvent } from '../../table/zyfra-table.types';
import { BaseTableTemplateDirective } from './directives/base-table-template.directive';
import { LazyLoadEvent, SortOrder } from './shared-table.types';

@Directive({
  selector: '[zyfraBaseTable]',
})
export class ZyfraBaseTableComponent<T = unknown> implements OnChanges, AfterContentInit {
  @Output() activeElementChange: EventEmitter<T>;

  styleClasses = 'p-datatable-gridlines';

  public bodyTemplate: TemplateRef<any>;
  public captionTemplate: TemplateRef<any>;
  public colGroupTemplate: TemplateRef<any>;
  public emptyMessageTemplate: TemplateRef<any>;
  public footerTemplate: TemplateRef<any>;
  public frozenBodyTemplate: TemplateRef<any>;
  public frozenColGroupTemplate: TemplateRef<any>;
  public frozenFooterTemplate: TemplateRef<any>;
  public frozenHeaderTemplate: TemplateRef<any>;
  public headerTemplate: TemplateRef<any>;
  public paginatorDropdownItemTemplate: TemplateRef<any>;
  public paginatorLeftTemplate: TemplateRef<any>;
  public paginatorRightTemplate: TemplateRef<any>;
  public summaryTemplate: TemplateRef<any>;

  //region Inputs
  /**
   * Table title
   */
  @Input() title = '';
  /**
   * An array of objects to display
   */
  @Input() value: T[] = [];
  /**
   * An array of objects to represent dynamic columns
   */
  @Input() columns: any[];
  /**
   * Inline style of the component
   */
  @Input() style: any;
  /**
   * Style class of the component
   */
  @Input() styleClass: string;
  /**
   * Inline style of the table
   */
  @Input() tableStyle: Record<string, string>;
  /**
   * Style class of the table
   */
  @Input() tableStyleClass: string;
  /**
   * Whether the cell widths scale according to their content or not
   */
  @Input() autoLayout: boolean;
  /**
   * Defines if data is loaded and interacted with in lazy manner
   */
  @Input() lazy = false;
  /**
   * Whether to call lazy loading on initialization
   */
  @Input() lazyLoadOnInit = true;
  /**
   * When specified as true, enables the pagination
   */
  @Input() paginator: boolean;
  /**
   * Number of rows to display per page
   */
  @Input() rows = 10;
  /**
   * Index of the first row to be displayed
   */
  @Input() first = 0;
  /**
   * Number of total records, defaults to length of value when not defined
   */
  @Input() pageLinks = 5;
  /**
   * Number of page links to display in paginator
   */
  @Input() rowsPerPageOptions: any[];
  /**
   * Whether to show it even there is only one page
   */
  @Input() alwaysShowPaginator = true;
  /**
   * Position of the paginator, options are "top","bottom" or "both"
   */
  @Input() paginatorPosition: 'top' | 'bottom' | 'both' = 'bottom';
  /**
   * Target element to attach the paginator dropdown overlay,
   * valid values are "body" or a local ng-template variable of another element
   * (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name)
   */
  @Input() paginatorDropdownAppendTo: any;
  /**
   * Template of the current page report element.
   * Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   */
  @Input() currentPageReportTemplate = '{currentPage} of {totalPages}';
  /**
   * Whether to display current page report
   */
  @Input() showCurrentPageReport: boolean;
  /**
   * Whether to display a dropdown to navigate to any page
   */
  @Input() showJumpToPageDropdown: boolean;
  /**
   * When enabled, icons are displayed on paginator to go first and last page
   */
  @Input() showFirstLastIcon = true;
  /**
   * Whether to show page links
   */
  @Input() showPageLinks = true;
  /**
   * Context menu selection
   */
  @Input() contextMenuSelection: any;
  /**
   * Context menu selection mode
   */
  @Input() contextMenuSelectionMode: 'separate' | 'joint' = 'separate';
  /**
   * Sort order to use when an unsorted column gets sorted by user interaction
   */
  @Input() defaultSortOrder = 1;
  /**
   * Defines whether sorting works on single column or on multiple columns
   */
  @Input() sortMode: 'single' | 'multiple' = 'single';
  /**
   * When true, resets paginator to first page after sorting
   */
  @Input() resetPageOnSort = true;
  /**
   * Whether to use the default sorting or a custom one using sortFunction
   */
  @Input() customSort: boolean;
  /**
   * Specifies the selection mode, valid values are "single" and "multiple"
   */
  @Input() selectionMode: 'single' | 'multiple';
  /**
   * A property to uniquely identify a record in data
   */
  @Input() dataKey: string;
  /**
   * Defines whether metaKey is should be considered for the selection.
   * On touch enabled devices, metaKeySelection is turned off automatically
   */
  @Input() metaKeySelection: boolean;
  /**
   * Algorithm to define if a row is selected,
   * valid values are "equals" that compares by reference and "deepEquals" that compares all fields
   */
  @Input() compareSelectionBy: 'deepEquals' | 'equals' = 'deepEquals';
  /**
   * Adds hover effect to rows without the need for selectionMode
   */
  @Input() rowHover: boolean;
  /**
   * Displays a loader to indicate data load is in progress
   */
  @Input() loading: boolean;
  /**
   * The icon to show while indicating data load is in progress
   */
  @Input() loadingIcon = 'pi pi-spinner';
  /**
   * Whether to show the loading mask when loading property is true
   */
  @Input() showLoader = true;
  /**
   * When specifies, enables horizontal and/or vertical scrolling
   */
  @Input() scrollable: boolean;
  /**
   * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size
   */
  @Input() scrollHeight: string;
  /**
   * Whether the data should be loaded on demand during scroll
   */
  @Input() virtualScroll: boolean;
  /**
   * Height of a row to use in calculations of virtual scrolling
   */
  @Input() virtualRowHeight = 32;
  /**
   * Minimum amount of content buffer (in pixels) that the viewport must render
   */
  @Input() minBufferPx: number;
  /**
   * Configures how much buffer space to render back up to when it detects that more buffer is required
   */
  @Input() maxBufferPx: number;
  /**
   * Width of the frozen columns container
   */
  @Input() frozenWidth: string;
  /**
   * An array of objects to represent dynamic columns that are frozen
   */
  @Input() frozenColumns: any[];
  /**
   * When enabled, columns can be resized using drag and drop
   */
  @Input() resizableColumns: boolean;
  /**
   * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand"
   */
  @Input() columnResizeMode: 'fit' | 'expand' = 'fit';
  /**
   * When enabled, columns can be reordered using drag and drop
   */
  @Input() reorderableColumns: boolean;
  /**
   * Local ng-template varilable of a ContextMenu
   */
  @Input() contextMenu: any;
  /**
   * An array of fields as string to use in global filtering
   */
  @Input() globalFilterFields: string[];
  /**
   * Delay in milliseconds before filtering the data
   */
  @Input() filterDelay = 300;
  /**
   * Mode for filtering valid values are "lenient" and "strict". Default is lenient.
   */
  @Input() filterMode: 'lenient' | 'strict' = 'lenient';
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   */
  @Input() filterLocale: string;
  /**
   * Number of total records, defaults to length of value when not defined
   */
  @Input() totalRecords: number;
  /**
   * Name of the field to sort data by default
   */
  @Input() sortField: string;
  /**
   * Order to sort when default sorting is enabled
   */
  @Input() sortOrder: number;
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode
   */
  @Input() multiSortMeta: SortMeta[];
  /**
   * Selected row in single mode or an array of values in multiple mode
   */
  @Input() selection: any;
  /**
   * When true turns on striped display mode
   */
  @Input() stripedMode = false;
  //endregion

  //region Outputs
  /**
   * Callback to invoke when data is filtered
   */
  @Output() onFilter = new EventEmitter<{ filters: Record<string, unknown>; filteredValue: unknown }>();
  /**
   * Callback to invoke when pagination occurs
   */
  @Output() page = new EventEmitter<{ first: number; rows: number }>();
  /**
   * Callback to invoke when a column gets sorted
   */
  @Output() onSort = new EventEmitter<{
    field: string;
    order: SortOrder;
    multisortmeta: SortMeta[];
  } | null>();

  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode
   */
  @Output() lazyLoad = new EventEmitter<LazyLoadEvent>();

  /**
   * A function to implement custom sorting
   */
  @Output() sortFunction = new EventEmitter<TableSortEvent>();
  /**
   * Callback to invoke when a node is selected with right click
   */
  @Output() contextMenuSelect = new EventEmitter<{ originalEvent: Event; node: unknown }>();
  /**
   * Callback to invoke when a column is resized
   */
  @Output() colResize = new EventEmitter<{ element: unknown; delta: unknown }>();

  /**
   * Callback to invoke when a column is reordered
   */
  @Output() colReorder = new EventEmitter<{ dragIndex: number; dropIndex: number; columns: string[] }>();
  /**
   * Callback to invoke when a cell switches to edit mode.
   */
  @Output() editInit = new EventEmitter<{ column: unknown; data: unknown; originalEvent: Event }>();
  /**
   * Callback to invoke when cell edit is completed
   */
  @Output() editComplete = new EventEmitter<{ column: unknown; data: unknown }>();
  /**
   * Callback to invoke when cell edit is cancelled with escape key
   */
  @Output() editCancel = new EventEmitter<{ column: unknown; data: unknown }>();
  /**
   * Callback to invoke when state of header checkbox changes
   */
  @Output() headerCheckboxToggle = new EventEmitter<{ originalEvent: Event; checked: boolean }>();
  /**
   * Callback to invoke when selection is changed
   */
  @Output() selectionChange = new EventEmitter<unknown>();
  //endregion

  private initialData: T[];
  private _activeElement: T;

  public getContentTemplate(): QueryList<BaseTableTemplateDirective> {
    throw new Error(`Method 'getContentTemplate' should be overridden`);
  }

  public getTable(): any {
    throw new Error(`Method 'getTable' should be overridden`);
  }

  public initTemplateByType(item: BaseTableTemplateDirective): void {
    throw new Error(`Method 'initTemplateByType' should be overridden`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      this.initialData = Array.isArray(changes.value?.currentValue) ? [...changes.value.currentValue] : [];
      this.value = this.initialData;
    }

    this.checkUpdateStyleClasses(changes);
  }

  ngAfterContentInit(): void {
    this.getContentTemplate().forEach(item => {
      switch (item.getType()) {
        case 'caption':
          this.captionTemplate = item.template;
          break;

        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'body':
          this.bodyTemplate = item.template;
          break;

        case 'footer':
          this.footerTemplate = item.template;
          break;

        case 'summary':
          this.summaryTemplate = item.template;
          break;

        case 'colgroup':
          this.colGroupTemplate = item.template;
          break;

        case 'emptymessage':
          this.emptyMessageTemplate = item.template;
          break;

        case 'paginatorleft':
          this.paginatorLeftTemplate = item.template;
          break;

        case 'paginatorright':
          this.paginatorRightTemplate = item.template;
          break;

        case 'paginatordropdownitem':
          this.paginatorDropdownItemTemplate = item.template;
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
        default:
          this.initTemplateByType(item);
      }
    });
  }

  public setValue(value: T[]): void {
    this.value = value;
  }

  public resetScrollTop(): void {
    this.getTable().resetScrollTop();
  }

  public scrollToVirtualIndex(index: number): void {
    this.getTable().scrollToVirtualIndex(index);
  }

  public scrollTo(options: any): void {
    this.getTable().scrollTo(options);
  }

  public resetSort(): void {
    const table = this.getTable();

    table._sortField = null;
    table._sortOrder = 0;
    table._multiSortMeta = null;
    table.tableService.onSort(null);

    if (this.lazy) {
      table.onLazyLoad.emit(table.createLazyLoadMetadata());
    } else {
      this.totalRecords = table._value ? table._value.length : 0;
      this.setValue([...this.initialData]);
    }

    this.onSort.emit(null);
  }

  public filter(value: any, field: string, matchMode: string): void {
    this.getTable().filter(value, field, matchMode);
  }

  public filterGlobal(value, matchMode): void {
    return this.getTable().filterGlobal(value, matchMode);
  }

  public isSelected(rowData): boolean {
    return this.getTable().isSelected(rowData);
  }

  protected updateStyleClasses(): void {
    const classes = ['p-datatable-gridlines'];

    if (this.paginator) {
      classes.push('zyfra-table_paginator');
    }

    if (this.stripedMode) {
      classes.push('zyfra-table_striped');
    }

    classes.push(this.styleClass);

    this.styleClasses = classes.join(' ');
  }

  protected checkUpdateStyleClasses(changes: SimpleChanges): void {
    if (changes.styleClass || changes.paginator || changes.stripedMode) {
      this.updateStyleClasses();
    }
  }

  set activeElement(activeElement: T) {
    if (this.activeElement === activeElement) {
      return;
    }

    this._activeElement = activeElement;
    this.activeElementChange.emit(this.activeElement);
  }

  get activeElement(): T {
    return this._activeElement;
  }
}
