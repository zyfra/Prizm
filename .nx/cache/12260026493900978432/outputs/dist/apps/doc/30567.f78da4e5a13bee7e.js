'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [30567],
  {
    30567: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { PrizmHandler } from '@prizm-ui/components';\nimport { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';\n\ninterface TreeNode {\n  readonly text: string;\n  readonly children?: readonly TreeNode[];\n}\n@Component({\n  selector: 'prizm-tree-template-checkbox-example',\n  templateUrl: './tree-template-example.component.html',\n})\nexport class TreeTemplateExampleComponent {\n  map = new Map<TreeNode, boolean>();\n\n  readonly data: TreeNode = {\n    text: 'Topmost',\n    children: [\n      {\n        text: 'Top level 1',\n        children: [\n          {\n            text: 'Another item',\n            children: [{ text: 'Next level 1' }, { text: 'Next level 2' }, { text: 'Next level 3' }],\n          },\n        ],\n      },\n      { text: 'Top level 2' },\n      {\n        text: 'Top level 3',\n        children: [{ text: 'Test 1' }, { text: 'Test 2' }],\n      },\n    ],\n  };\n\n  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;\n\n  readonly getValue = (item: TreeNode, map: Map<TreeNode, boolean>): boolean | null => {\n    const flat = flatten(item);\n    const result = !!map.get(flat[0]);\n\n    for (let i = 0; i < flat.length; i++) {\n      if (result !== !!map.get(flat[i])) {\n        return null;\n      }\n    }\n\n    return result;\n  };\n\n  public onChecked(node: TreeNode, value: boolean): void {\n    flatten(node).forEach(item => this.map.set(item, value));\n\n    this.map = new Map(this.map.entries());\n  }\n}\n\nfunction flatten(item: TreeNode): readonly TreeNode[] {\n  return item.children ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], []) : [item];\n}\n";
    },
  },
]);
