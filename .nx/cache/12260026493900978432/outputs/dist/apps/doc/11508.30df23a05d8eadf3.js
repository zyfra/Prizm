'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11508],
  {
    11508: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { ITableProduct } from '../table-basic-example/table-basic-example.component';\nimport { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';\n\n@Component({\n  selector: 'prizm-table-editable-col-example',\n  templateUrl: './table-editable-col-example.component.html',\n  styleUrls: ['./table-editable-col-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableEditableColExampleComponent {\n  public selectedItemsCodes: string[] = [];\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n\n  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;\n\n  public currentEditableProduct: { product: ITableProduct; key: keyof ITableProduct } | null = null;\n\n  public changeItemName<T extends keyof ITableProduct>(\n    e: FocusEvent,\n    key: T,\n    currentRowValue: ITableProduct\n  ): void {\n    const val = (e.target as HTMLInputElement).value;\n    const updatedRow = { ...currentRowValue, [key]: val };\n    this.currentEditableProduct = null;\n\n    this.products = this.products.map(item => (item === currentRowValue ? updatedRow : item));\n  }\n\n  public setEditableItem<T extends keyof ITableProduct>(e: MouseEvent, product: ITableProduct, key: T): void {\n    const target = e.target as HTMLInputElement;\n    e.stopPropagation();\n    target.focus();\n    this.currentEditableProduct = { product, key };\n  }\n\n  public selectRow(e: MouseEvent, clickedProductCode: string, disabled = false): void {\n    if (disabled) return;\n    if (this.selectedItemsCodes.includes(clickedProductCode)) {\n      this.selectedItemsCodes = this.selectedItemsCodes.filter(code => code !== clickedProductCode);\n    } else {\n      this.selectedItemsCodes.push(clickedProductCode);\n    }\n  }\n}\n";
    },
  },
]);
