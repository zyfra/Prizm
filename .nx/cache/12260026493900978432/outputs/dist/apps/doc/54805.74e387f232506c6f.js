'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [54805],
  {
    54805: e => {
      e.exports =
        "import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { PrizmTableCellStatus } from '@prizm-ui/components';\nimport { Observable, of, ReplaySubject } from 'rxjs';\nimport { delay } from 'rxjs/operators';\nimport { TABLE_EXAMPLE_DATA_1, TABLE_EXAMPLE_TREE_DATA_1 } from '../../table-example.const';\n\nexport interface ITableProduct {\n  id?: number | string;\n  status?: PrizmTableCellStatus;\n  code: string;\n  name: string;\n  category: string;\n  count: number;\n  children?: ITableProduct[];\n}\n\n@Component({\n  selector: 'prizm-table-loading-example',\n  templateUrl: './table-loading-example.component.html',\n  styleUrls: ['./table-loading-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableLoadingExampleComponent {\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n  products$ = of(TABLE_EXAMPLE_DATA_1).pipe(delay(5000));\n}\n";
    },
  },
]);
