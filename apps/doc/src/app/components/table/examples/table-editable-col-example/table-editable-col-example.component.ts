import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';

@Component({
  selector: 'prizm-table-editable-col-example',
  templateUrl: './table-editable-col-example.component.html',
  styleUrls: ['./table-editable-col-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEditableColExampleComponent {
  public selectedItemsCodes: string[] = [];
  public columns: string[] = ['code', 'name', 'category', 'count'];

  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;

  public currentEditableProduct: { product: ITableProduct; key: keyof ITableProduct } = null;

  public changeItemName<T extends keyof ITableProduct>(
    e: FocusEvent,
    key: T,
    currentRowValue: ITableProduct
  ): void {
    const val = (e.target as HTMLInputElement).value;
    const updatedRow = { ...currentRowValue, [key]: val };
    this.currentEditableProduct = null;

    this.products = this.products.map(item => (item === currentRowValue ? updatedRow : item));
  }

  public setEditableItem<T extends keyof ITableProduct>(e: MouseEvent, product: ITableProduct, key: T): void {
    const target = e.target as HTMLInputElement;
    e.stopPropagation();
    target.focus();
    this.currentEditableProduct = { product, key };
  }

  public selectRow(e: MouseEvent, clickedProductCode: string, disabled = false): void {
    if (disabled) return;
    if (this.selectedItemsCodes.includes(clickedProductCode)) {
      this.selectedItemsCodes = this.selectedItemsCodes.filter(code => code !== clickedProductCode);
    } else {
      this.selectedItemsCodes.push(clickedProductCode);
    }
  }
}
