import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ITableProduct } from '../table-basic-example/table-basic-example.component';
import { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';

@Component({
  selector: 'prizm-table-editable-row-example',
  templateUrl: './table-editable-row-example.component.html',
  styleUrls: ['./table-editable-row-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableEditableRowExampleComponent {
  public selectedItemsCodes: string[] = [];
  public columns: string[] = ['code', 'name', 'category', 'count', 'actions'];
  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;
  public updatedRow: ITableProduct | null = null;
  public currentEditableRow: ITableProduct | null = null;

  public onRowEditInit(item: ITableProduct): void {
    this.currentEditableRow = item;
    this.updatedRow = { ...item };
  }

  public onRowEditSave(): void {
    this.products =
      (this.products?.map(item => (item === this.currentEditableRow ? this.updatedRow : item)) as any) ?? [];
    this.currentEditableRow = null;
    this.updatedRow = null;
  }

  public onRowEditCancel(product: ITableProduct): void {
    this.products = this.products.map(item =>
      item === this.currentEditableRow ? { ...this.currentEditableRow } : item
    );
    this.currentEditableRow = null;
    this.updatedRow = null;
  }

  public onRowDelete(product: ITableProduct): void {
    this.products = this.products.filter(item => item !== product);
  }

  public changeItemName<T extends keyof ITableProduct>(e: FocusEvent, key: T): void {
    const val = (e.target as HTMLInputElement).value;
    this.updatedRow = { ...this.updatedRow, [key]: val } as any;
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
