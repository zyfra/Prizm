"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91786],{91786:e=>{e.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmTableCellStatus } from '@prizm-ui/components';\nimport { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';\n\nexport interface ITableProduct {\n  id?: number | string;\n  status?: PrizmTableCellStatus;\n  code: string;\n  name: string;\n  category: string;\n  count: number;\n  children?: ITableProduct[];\n}\n\n@Component({\n  selector: 'prizm-table-sticky-example',\n  templateUrl: './table-sticky-example.component.html',\n  styleUrls: ['./table-sticky-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableStickyExampleComponent {\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n\n  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;\n  get sum(): number {\n    return this.products.reduce((b, a) => b + a.count, 0);\n  }\n}\n"}}]);