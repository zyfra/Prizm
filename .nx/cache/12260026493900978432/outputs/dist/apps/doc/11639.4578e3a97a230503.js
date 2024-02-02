'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11639],
  {
    11639: n => {
      n.exports =
        "import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';\nimport { PrizmTableCellStatus, PrizmTableSettings } from '@prizm-ui/components';\nimport { TABLE_EXAMPLE_DATA_1 } from '../../table-example.const';\n\nexport interface ITableProduct {\n  id?: number | string;\n  status?: PrizmTableCellStatus;\n  code: string;\n  name: string;\n  category: string;\n  count: number;\n  children?: ITableProduct[];\n}\n\n@Component({\n  selector: 'prizm-table-column-settings-example',\n  templateUrl: './table-column-settings-example.component.html',\n  styleUrls: ['./table-column-settings-example.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TableColumnSettingsExampleComponent {\n  public stickyStyle = { 'z-index': 22 };\n  public stickyHeaderStyle = { 'z-index': 23 };\n  public columns: string[] = ['code', 'name', 'category', 'count', 'nameTwin', 'categoryTwin', 'countTwin'];\n\n  public settings: PrizmTableSettings = {\n    columns: [\n      {\n        id: 'code',\n        name: '\u041a\u043e\u0434',\n        status: 'default',\n      },\n      {\n        id: 'name',\n        name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435',\n        status: 'default',\n      },\n      {\n        id: 'category',\n        name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',\n        status: 'default',\n      },\n      {\n        id: 'count',\n        name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e',\n        status: 'default',\n      },\n      {\n        id: 'nameTwin',\n        name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2',\n        status: 'default',\n      },\n      {\n        id: 'categoryTwin',\n        name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2',\n        status: 'default',\n      },\n      {\n        id: 'countTwin',\n        name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 2',\n        status: 'default',\n      },\n    ],\n    stickyLeft: [],\n    stickyRight: [],\n    fixHeader: false,\n  };\n\n  public defaultSettings: PrizmTableSettings = {\n    columns: [\n      {\n        id: 'code',\n        name: '\u041a\u043e\u0434',\n        status: 'default',\n      },\n      {\n        id: 'name',\n        name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435',\n        status: 'default',\n      },\n      {\n        id: 'category',\n        name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',\n        status: 'default',\n      },\n      {\n        id: 'count',\n        name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e',\n        status: 'default',\n      },\n      {\n        id: 'nameTwin',\n        name: '\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 2',\n        status: 'hidden',\n      },\n      {\n        id: 'categoryTwin',\n        name: '\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f 2',\n        status: 'hidden',\n      },\n      {\n        id: 'countTwin',\n        name: '\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e 2',\n        status: 'hidden',\n      },\n    ],\n    stickyLeft: [],\n    stickyRight: [],\n    fixHeader: true,\n  };\n\n  public stickyLeftIds: string[] = [];\n  public stickyRightIds: string[] = [];\n  public products: ITableProduct[] = TABLE_EXAMPLE_DATA_1;\n  public showColumnSettings = false;\n\n  constructor(public readonly cdr: ChangeDetectorRef) {}\n\n  public toggleColumnSettings(): void {\n    this.showColumnSettings = !this.showColumnSettings;\n  }\n\n  public updateTableSettings(settings: PrizmTableSettings | null) {\n    this.showColumnSettings = false;\n    if (settings) {\n      this.stickyLeftIds = settings.stickyLeft.map(el => el.id);\n      this.stickyRightIds = settings.stickyRight.map(el => el.id);\n      this.columns = [\n        ...this.stickyLeftIds,\n        ...settings.columns.filter(el => el.status === 'default').map(el => el.id),\n        ...this.stickyRightIds,\n      ];\n      this.settings = settings;\n    }\n\n    this.cdr.markForCheck();\n  }\n}\n";
    },
  },
]);
