import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef
} from '@angular/core';
import { FilterOperator, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { ZyfraTableComponent } from '../zyfra-table.component';
import { ZyfraTableTemplateDirective } from '../directives/table-template.directive';

@Component({
  selector: 'zyfra-table-column-filter',
  templateUrl: './table-column-filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: Table,
      useFactory: (zyfraTable: ZyfraTableComponent): Table => zyfraTable.table,
      deps: [ZyfraTableComponent]
    }
  ],
})
export class ZyfraTableColumnFilterComponent implements AfterContentInit {
  @ContentChildren(ZyfraTableTemplateDirective) templates: QueryList<ZyfraTableTemplateDirective>;

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

  ngAfterContentInit(): void {
    this.templates.forEach((item) => {
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
