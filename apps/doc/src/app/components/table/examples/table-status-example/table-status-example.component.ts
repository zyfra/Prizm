import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';

@Component({
  selector: 'prizm-table-status-example',
  templateUrl: './table-status-example.component.html',
  styleUrls: ['./table-status-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableStatusExampleComponent {
  public selectedItemsCodes: string[] = [];
  public columns: string[] = ['code', 'name', 'category', 'count'];
  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;

  public multiSelection(e: MouseEvent, clickedProductCode: string): void {
    if (this.selectedItemsCodes.includes(clickedProductCode)) {
      this.selectedItemsCodes = this.selectedItemsCodes.filter(code => code !== clickedProductCode);
    } else {
      this.selectedItemsCodes.push(clickedProductCode);
    }
  }
}
