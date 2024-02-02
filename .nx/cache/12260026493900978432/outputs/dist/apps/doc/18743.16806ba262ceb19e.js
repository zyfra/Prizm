'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [18743],
  {
    18743: e => {
      e.exports =
        "import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';\nimport { ITableProduct } from '../table-basic-example/table-basic-example.component';\n\n@Component({\n  selector: 'prizm-table-border-style-example',\n  templateUrl: './table-border-style-example.component.html',\n  styleUrls: ['./table-border-style-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableBorderStyleExampleComponent {\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n\n  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;\n}\n";
    },
  },
]);
