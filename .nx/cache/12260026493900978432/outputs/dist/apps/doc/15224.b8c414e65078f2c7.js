'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [15224],
  {
    15224: e => {
      e.exports =
        "import { Component, OnInit } from '@angular/core';\nimport { UntypedFormControl } from '@angular/forms';\nimport {\n  PrizmMultiSelectIdentityMatcher,\n  PrizmMultiSelectItemStringifyFunc,\n  PrizmMultiSelectItemStringifyItem,\n  PrizmMultiSelectSearchMatcher,\n} from '@prizm-ui/components';\n\ntype PrizmItem = {\n  id: number;\n  name: string;\n};\n@Component({\n  selector: 'prizm-multi-select-with-object-example',\n  templateUrl: './multi-select-with-object-example.component.html',\n  styles: [\n    `\n      .item {\n        display: flex;\n        gap: 0.5rem;\n      }\n    `,\n  ],\n})\nexport class PrizmMultiSelectWithObjectExampleComponent {\n  readonly items: PrizmItem[] = [\n    { id: 1, name: '\u0420\u043e\u0441\u0441\u0438\u044f' },\n    { id: 2, name: '\u0421\u0428\u0410' },\n    { id: 3, name: '\u041e\u0410\u042d' },\n  ];\n  readonly selectAllItem = { id: -1, name: '\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435' };\n  readonly valueControl = new UntypedFormControl([{ id: 3 }]);\n  readonly searchMatcher: PrizmMultiSelectSearchMatcher<PrizmItem> = (search: string, item: PrizmItem) => {\n    return item.name.toLowerCase().includes(search.toLowerCase());\n  };\n  readonly identityMatcher: PrizmMultiSelectIdentityMatcher<PrizmItem> = (a: PrizmItem, b: PrizmItem) => {\n    return a.id === b.id;\n  };\n  readonly stringify: PrizmMultiSelectItemStringifyFunc<PrizmItem> = (\n    item: PrizmMultiSelectItemStringifyItem<PrizmItem>\n  ) => {\n    return item.obj.name;\n  };\n}\n";
    },
  },
]);
