'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [39176],
  {
    39176: e => {
      e.exports =
        "import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { PrizmTableCellStatus } from '@prizm-ui/components';\n\nexport interface ITableProduct {\n  id?: number | string;\n  status?: PrizmTableCellStatus;\n  code: string;\n  name: string;\n  category: string;\n  count: number;\n  children?: ITableProduct[];\n}\n\n@Component({\n  selector: 'prizm-table-empty-example',\n  templateUrl: './table-empty-example.component.html',\n  styleUrls: ['./table-empty-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableEmptyExampleComponent {\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n  public products: ITableProduct[] = [];\n}\n";
    },
  },
]);
