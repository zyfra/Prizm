'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [31167],
  {
    31167: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmTableCellStatus } from '@prizm-ui/components';\nimport { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';\n\nexport interface ITableProduct {\n  id?: number | string;\n  status?: PrizmTableCellStatus;\n  code: string;\n  name: string;\n  category: string;\n  count: number;\n  children?: ITableProduct[];\n}\n\n@Component({\n  selector: 'prizm-table-index-example',\n  templateUrl: './table-index-example.component.html',\n  styleUrls: ['./table-index-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableIndexExampleComponent {\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n\n  public products: ITableProduct[] = [...TABLE_EXAMPLE_DATA_1];\n  public remove(item: ITableProduct): void {\n    this.products = this.products.filter(i => i !== item);\n  }\n  public add(): void {\n    const num = this.products.length;\n    this.products = [\n      ...this.products,\n      {\n        code: num.toString(),\n        name: `Name ${num}`,\n        category: num % 2 === 0 ? 'Active' : 'Sport',\n        count: Math.random(),\n        status: 'success',\n      },\n    ];\n  }\n}\n";
    },
  },
]);
