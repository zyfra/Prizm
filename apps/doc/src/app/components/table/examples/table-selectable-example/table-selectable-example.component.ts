import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';
import { TABLE_EXAMPLE_DATA_1, TABLE_EXAMPLE_DATA_2 } from '../../table-example.const';

@Component({
  selector: 'prizm-table-selectable-example',
  templateUrl: './table-selectable-example.component.html',
  styleUrls: ['./table-selectable-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSelectableExampleComponent {
  public singleSelectedItemCode: string | null = null;
  public selectedItemsCodes: string[] = [];
  public selectedMetaItemsCodes: string[] = [];

  public columns: string[] = ['code', 'name', 'category', 'count'];
  public multipleSelectionColumns: string[] = ['checkbox', 'code', 'name', 'category', 'count'];

  public products1: ITableProduct[] = TABLE_EXAMPLE_DATA_1;

  public products2: ITableProduct[] = TABLE_EXAMPLE_DATA_2;

  public multiSelection(e: MouseEvent, clickedProductCode: string): void {
    if (this.selectedItemsCodes.includes(clickedProductCode)) {
      this.selectedItemsCodes = this.selectedItemsCodes.filter(code => code !== clickedProductCode);
    } else {
      this.selectedItemsCodes.push(clickedProductCode);
    }
  }

  public multiSelectMetaItem(clickedItemCode: string): void {
    if (this.selectedMetaItemsCodes.includes(clickedItemCode)) {
      this.selectedMetaItemsCodes = this.selectedMetaItemsCodes.filter(code => code !== clickedItemCode);
    } else {
      this.selectedMetaItemsCodes.push(clickedItemCode);
    }
  }

  public singleSelection(clickedProductCode: string): void {
    if (this.singleSelectedItemCode === clickedProductCode) {
      this.singleSelectedItemCode = null;
    } else {
      this.singleSelectedItemCode = clickedProductCode;
    }
  }

  public onMultiSelectionMetaCheckbox(val: boolean): void {
    this.selectedMetaItemsCodes = this.products2.filter(() => val).map(item => item.code);
  }

  public onMultiSelectionCheckbox(val: boolean): void {
    this.selectedItemsCodes = this.products2.filter(() => val).map(item => item.code);
  }
}
