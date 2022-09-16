import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren, HostBinding,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { FilterOperator, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ZuiTableComponent } from '../zui-table.component';
import { BaseTableTemplateDirective } from '../base-table/directives/base-table-template.directive';

@Component({
  selector: 'zui-table-column-filter',
  templateUrl: './table-column-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: Table,
      useFactory: (zuiTable: ZuiTableComponent): Table => zuiTable.table,
      deps: [ZuiTableComponent],
    },
  ],
})
export class ZuiTableColumnFilterComponent implements AfterContentInit {
  @ContentChildren(BaseTableTemplateDirective) templates: QueryList<BaseTableTemplateDirective>;

  headerTemplate: TemplateRef<any>;
  filterTemplate: TemplateRef<any>;
  footerTemplate: TemplateRef<any>;

  @Input() field: string;
  @Input() type = 'text';
  @Input() display = 'row';
  @Input() showMenu = true;
  @Input() matchMode: string;
  @Input() operator: string = FilterOperator.AND;
  @Input() showOperator = true;
  @Input() showClearButton = true;
  @Input() showApplyButton = true;
  @Input() showMatchModes = true;
  @Input() showAddButton = true;
  @Input() hideOnClear = false;
  @Input() placeholder: string;
  @Input() matchModeOptions: SelectItem[];
  @Input() maxConstraints = 2;
  @Input() minFractionDigits: number;
  @Input() maxFractionDigits: number;
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() locale: string;
  @Input() localeMatcher: string;
  @Input() currency: string;
  @Input() currencyDisplay: string;
  @Input() useGrouping = true;

  @HostBinding('attr.testId')
  readonly testId = 'zui_table_column_filter';

  ngAfterContentInit(): void {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
        case 'filter':
          this.filterTemplate = item.template;
          break;
      }
    });
  }
}
