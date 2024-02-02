'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34619],
  {
    34619: e => {
      e.exports =
        "import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';\nimport { ITableProduct } from '../table-basic-example/table-basic-example.component';\nimport { TABLE_EXAMPLE_DATA_SEARCH } from '../../table-example.const';\nimport { FormControl } from '@angular/forms';\nimport { tap } from 'rxjs/operators';\n\n@Component({\n  selector: 'prizm-table-search-example',\n  templateUrl: './table-search-example.component.html',\n  styleUrls: ['./table-search-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableSearchExampleComponent implements OnInit {\n  public columns: string[] = ['code', 'name', 'category', 'count'];\n  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_SEARCH;\n  public searchString: string | null = null;\n  public searchAllowedProducts: ITableProduct[] = this.products;\n  public readonly control = new FormControl(false);\n  public search<T extends keyof ITableProduct>(value: string, key: T): void {\n    this.searchString = value.toLowerCase();\n    this.searchAllowedProducts = this.products.filter(product =>\n      (product[key] as string).toLowerCase().includes(this.searchString as any)\n    );\n  }\n\n  ngOnInit(): void {\n    this.control.valueChanges\n      .pipe(\n        tap(() => {\n          this.searchAllowedProducts = [...this.products];\n        })\n      )\n      .subscribe();\n  }\n}\n";
    },
  },
]);
