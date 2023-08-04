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
  selector: 'prizm-inherit-cols-basic-example',
  templateUrl: './table-inherit-cols-example.component.html',
  styleUrls: ['./table-inherit-cols-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableInheritColsExampleComponent {
  columns = ['c2', 'c1'];
}
