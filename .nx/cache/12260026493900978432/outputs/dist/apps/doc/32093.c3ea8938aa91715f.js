'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [32093],
  {
    32093: n => {
      n.exports =
        "import { ChangeDetectionStrategy, Component } from '@angular/core';\nimport { PrizmOverlayService, PrizmTableCellStatus } from '@prizm-ui/components';\n\ninterface ITableProduct {\n  id: number;\n  status?: PrizmTableCellStatus;\n  code: string;\n  name: string;\n  category: string;\n  count: number;\n  active: boolean;\n}\n\n@Component({\n  selector: 'prizm-table-track-by-example',\n  templateUrl: './table-track-by-example.component.html',\n  styleUrls: ['./table-track-by-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableTrackByExampleComponent {\n  constructor(private overlay: PrizmOverlayService) {}\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n\n  public products: ITableProduct[] = [\n    {\n      id: 1,\n      name: 'aaa',\n      code: 'aaa',\n      category: 'aaa',\n      count: 1,\n      active: false,\n    },\n    {\n      id: 2,\n      name: 'bbb',\n      code: 'bbb',\n      category: 'bbb',\n      count: 2,\n      active: false,\n    },\n    {\n      id: 3,\n      name: 'ccc',\n      code: 'ccc',\n      category: 'ccc',\n      count: 3,\n      active: false,\n    },\n    {\n      id: 4,\n      name: 'ddd',\n      code: 'ddd',\n      category: 'ddd',\n      count: 4,\n      active: false,\n    },\n    {\n      id: 5,\n      name: 'eee',\n      code: 'eee',\n      category: 'eee',\n      count: 5,\n      active: false,\n    },\n  ];\n\n  public onTrClick(event: MouseEvent, product: ITableProduct) {\n    this.products = this.products.map(item => {\n      return { ...item, active: item.id === product.id ? true : false };\n    });\n  }\n\n  public trackByFn(index: number, item: ITableProduct) {\n    return index;\n  }\n\n  public trackByFn2(index: number, item: ITableProduct) {\n    return index;\n  }\n}\n";
    },
  },
]);
