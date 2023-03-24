import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { ITableProduct } from './examples/table-basic-example/table-basic-example.component';
import { PrizmSizeL, PrizmSizeM, PrizmSizeS, PrizmSizeXS } from '@prizm-ui/components';
import { Filters } from '@prizm-ui/deprecated';
import { SortMeta } from 'primeng/api';

@Component({
  selector: 'prizm-table-example',
  templateUrl: './table-example-old.component.html',
  styleUrls: ['./table-example-old.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableExampleOldComponent {
  public frozenValue: any[];
  public breakpoint = '960px';
  public rowGroupMode: 'subheader' | 'rowspan';
  public showInitialSortBadge = true;
  public rowTrackBy: (...args: any[]) => any;
  public csvSeparator = ',';
  public exportFilename = 'download';
  public filters: Filters = {};
  public expandedRowKeys: { [s: string]: boolean } = {};
  public rowExpandMode: 'single' | 'multiple' = 'multiple';
  public scrollDirection: 'vertical' | 'horizontal' | 'both' = 'vertical';
  public virtualScrollDelay = 250;
  public responsive = false;
  public exportFunction: (event: { data: any; field: any }) => string;
  public stateKey: string;
  public stateStorage: 'session' | 'local' = 'session';
  public editMode: 'cell' | 'row' = 'cell';
  public editingRowKeys: { [s: string]: boolean } = {};
  public groupRowsBy: string | string[];
  public groupRowsByOrder = 1;
  public className = 'prizm-table-class';
  public title = '';
  public columns: any[];
  public style: any;
  public styleClass: string;
  public autoLayout: boolean;
  public lazy = false;
  public lazyLoadOnInit = true;
  public first = 0;
  public currentPageReportTemplate = '{currentPage} of {totalPages}';
  public showCurrentPageReport: boolean;
  public showFirstLastIcon = true;
  public showPageLinks = true;
  public contextMenuSelection: any;
  public contextMenuSelectionMode: 'separate' | 'joint' = 'separate';
  public defaultSortOrder = 1;
  public sortMode: 'single' | 'multiple' = 'single';
  public customSort: boolean;
  public selectionMode: 'single' | 'multiple';
  public dataKey: string;
  public metaKeySelection: boolean;
  public compareSelectionBy: 'deepEquals' | 'equals' = 'deepEquals';
  public rowHover: boolean;
  public loading: boolean;
  public loadingIcon = 'pi pi-spinner';
  public showLoader = true;
  public virtualScroll: boolean;
  public virtualRowHeight = 32;
  public frozenWidth: string;
  public frozenColumns: any[];
  public reorderableColumns: boolean;
  public contextMenu: any;
  public globalFilterFields: string[];
  public filterDelay = 300;
  public filterMode: 'lenient' | 'strict' = 'lenient';
  public filterLocale: string;
  public totalRecords: number;
  public sortField: string;
  public sortOrder: number;
  public multiSortMeta: SortMeta[];
  public selection: any;
  public stripedMode = false;
  public value: ITableProduct[] = [
    {
      code: '123',
      name: 'Name 1',
      category: 'Premium',
      count: 3000,
    },
    {
      code: '456',
      name: 'Name 2',
      category: 'Active',
      count: 123,
    },
    {
      code: '789',
      name: 'Name 3',
      category: 'Sport',
      count: 56000,
    },
    {
      code: '012',
      name: 'Name 4',
      category: 'Sport+',
      count: 539,
    },
    {
      code: '1234',
      name: 'Name 5',
      category: 'Premium',
      count: 23,
    },
    {
      code: '12345',
      name: 'Name 6',
      category: 'Premium',
      count: 99,
    },
  ];

  public size: PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS = 'l';
  public sizeVariants: (PrizmSizeL | PrizmSizeM | PrizmSizeXS | PrizmSizeS)[] = ['xs', 'l', 'm', 's'];
  public scrollable = false;
  public scrollHeight = null;
  public scrollHeightVariants: string[] = [null, '160px', '200px', '300px', '500px'];
  public responsiveLayout: 'stack' | 'scroll' = 'scroll';
  public layoutVariants: ('stack' | 'scroll')[] = ['scroll', 'stack'];

  public readonly exampleBasicTable: TuiDocExample = {
    TypeScript: import('./examples/table-basic-example/table-basic-example.component?raw'),
    HTML: import('./examples/table-basic-example/table-basic-example.component.html?raw'),
    LESS: import('./examples/table-basic-example/table-basic-example.component.less?raw'),
  };
  public readonly exampleEditableColTable: TuiDocExample = {
    TypeScript: import('./examples/table-editable-col-example/table-editable-col-example.component?raw'),
    HTML: import('./examples/table-editable-col-example/table-editable-col-example.component.html?raw'),
    LESS: import('./examples/table-editable-col-example/table-editable-col-example.component.less?raw'),
  };
  public readonly exampleEditableRowTable: TuiDocExample = {
    TypeScript: import('./examples/table-editable-row-example/table-editable-row-example.component?raw'),
    HTML: import('./examples/table-editable-row-example/table-editable-row-example.component.html?raw'),
    LESS: import('./examples/table-editable-row-example/table-editable-row-example.component.less?raw'),
  };
  public readonly exampleGroupTable: TuiDocExample = {
    TypeScript: import('./examples/table-group-example/table-group-example.component?raw'),
    HTML: import('./examples/table-group-example/table-group-example.component.html?raw'),
    LESS: import('./examples/table-group-example/table-group-example.component.less?raw'),
  };
  public readonly exampleSelectableTable: TuiDocExample = {
    TypeScript: import('./examples/table-selectable-example/table-selectable-example.component?raw'),
    HTML: import('./examples/table-selectable-example/table-selectable-example.component.html?raw'),
    LESS: import('./examples/table-selectable-example/table-selectable-example.component.less?raw'),
  };

  public readonly exampleStatusTable: TuiDocExample = {
    TypeScript: import('./examples/table-status-example/table-status-example.component?raw'),
    HTML: import('./examples/table-status-example/table-status-example.component.html?raw'),
    LESS: import('./examples/table-status-example/table-status-example.component.less?raw'),
  };

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');
}
