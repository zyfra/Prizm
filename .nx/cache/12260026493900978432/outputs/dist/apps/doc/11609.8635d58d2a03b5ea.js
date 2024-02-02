'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11609],
  {
    11609: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { PrizmTableCellStatus } from '@prizm-ui/components';\nimport { TABLE_EXAMPLE_DATA_1, TABLE_EXAMPLE_DATA_2 } from '../../table-example.const';\n\nexport interface ITableProduct {\n  id?: number | string;\n  status?: PrizmTableCellStatus;\n  code: string;\n  name: string;\n  category: string;\n  count: number;\n}\n\n@Component({\n  selector: 'prizm-table-row-group-example',\n  templateUrl: './table-row-group-example.component.html',\n  styleUrls: ['./table-row-group-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableRowGroupExampleComponent {\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n\n  public products1: ITableProduct[] = TABLE_EXAMPLE_DATA_1;\n\n  public products2: ITableProduct[] = TABLE_EXAMPLE_DATA_2;\n\n  public products3: ITableProduct[] = [];\n}\n";
    },
  },
]);
