import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PrizmTableCellStatus } from '@prizm-ui/components';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';

export interface ITableProduct {
  id?: number | string;
  status?: PrizmTableCellStatus;
  code: string;
  name: string;
  category: string;
  count: number;
  children?: ITableProduct[];
}

@Component({
  selector: 'prizm-table-column-settings-example',
  templateUrl: './table-column-settings-example.component.html',
  styleUrls: ['./table-column-settings-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableColumnSettingsExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  public showColumnSettings = false;

  public toggleColumnSettings(): void {
    this.showColumnSettings = !this.showColumnSettings;
  }
}
