'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [3344],
  {
    3344: e => {
      e.exports =
        "import { inject, Injectable } from '@angular/core';\nimport { CustomItem, PersistentExpandedValue } from './interfaces';\nimport { LOCAL_STORAGE } from '@ng-web-apis/common';\n\n@Injectable()\nexport class ExpandedItemsService {\n  readonly localStorage = inject(LOCAL_STORAGE) as Storage;\n  public getItemsExpandedKeys(): PersistentExpandedValue | null {\n    const item = localStorage.getItem('EXPANDED_ITEMS_EXAMPLE') ?? null;\n    return item && JSON.parse(item);\n  }\n\n  public getGroupsExpandedKeys(): PersistentExpandedValue | null {\n    const item = localStorage.getItem('EXPANDED_GROUPS_EXAMPLE') ?? null;\n    return item && JSON.parse(item);\n  }\n\n  public setItemsExpandedKeys(expandedItemsMap: Map<CustomItem, boolean>): void {\n    const obj: PersistentExpandedValue = {};\n    for (const [item, isExpanded] of expandedItemsMap.entries()) {\n      if (isExpanded) {\n        obj[item.id] = true;\n      }\n    }\n    localStorage.setItem('EXPANDED_ITEMS_EXAMPLE', JSON.stringify(obj));\n  }\n  public setGroupsExpandedKeys(expandedGroupsMap: Map<string, boolean>): void {\n    // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n    // @ts-ignore\n    const obj: PersistentExpandedValue = Object.fromEntries(expandedGroupsMap);\n    localStorage.setItem('EXPANDED_GROUPS_EXAMPLE', JSON.stringify(obj));\n  }\n}\n";
    },
  },
]);
