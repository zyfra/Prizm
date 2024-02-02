'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [19009],
  {
    19009: e => {
      e.exports =
        "import { Injectable } from '@angular/core';\nimport { Observable, of } from 'rxjs';\nimport { CustomGroupConfig } from './interfaces';\nimport { GROUP_1_ITEMS, GROUP_2_ITEMS, GROUP_3_ITEMS, GROUP_4_ITEMS } from './item-groups.constants';\n\ninterface ExampleData {\n  [key: string]: CustomGroupConfig;\n}\n\nconst exampleData: ExampleData = {\n  fruits: {\n    title: 'Fruits',\n    items: GROUP_1_ITEMS,\n    toolbarConfig: {\n      search: true,\n      rubricatorMode: true,\n      folderMode: true, // temporary unavailable\n      closeAll: true,\n    },\n  },\n  noGroupAppearance: {\n    title: '<No group appearance example>',\n    items: GROUP_2_ITEMS,\n    toolbarConfig: {\n      search: true,\n      rubricatorMode: true,\n      folderMode: true, // temporary unavailable\n      closeAll: true,\n    },\n  },\n  musicalInstruments: {\n    title: 'Musical instruments',\n    items: GROUP_3_ITEMS,\n    toolbarConfig: {\n      search: true,\n      rubricatorMode: true,\n      closeAll: true,\n    },\n  },\n  longNames: {\n    title: 'Long names (bottom)',\n    items: GROUP_4_ITEMS,\n    toolbarConfig: {\n      search: true,\n      folderMode: true, // temporary unavailable\n      closeAll: true,\n    },\n  },\n};\n\n@Injectable()\nexport class ItemGroupsService {\n  noGroupAppearance$: Observable<CustomGroupConfig> = of(exampleData.noGroupAppearance);\n  fruits$: Observable<CustomGroupConfig> = of(exampleData.fruits);\n  musicalInstruments$: Observable<CustomGroupConfig> = of(exampleData.musicalInstruments);\n  longNames$: Observable<CustomGroupConfig> = of(exampleData.longNames);\n}\n";
    },
  },
]);
