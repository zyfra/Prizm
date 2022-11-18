import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';

@Component({
  selector: 'prizm-table-border-style-example',
  templateUrl: './table-border-style-example.component.html',
  styleUrls: ['./table-border-style-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBorderStyleExampleComponent {
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
}
