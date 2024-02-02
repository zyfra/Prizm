'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [58982],
  {
    58982: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { PrizmHandler } from '@prizm-ui/components';\nimport { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';\n\nexport interface TreeNode {\n  readonly text: string;\n  readonly icon?: string;\n  readonly children?: readonly TreeNode[];\n}\n\n@Component({\n  selector: 'prizm-tree-template-example',\n  templateUrl: './tree-template-example.component.html',\n  styles: [\n    `\n      .wrapper {\n        display: flex;\n        gap: 8px;\n        align-items: center;\n      }\n    `,\n  ],\n})\nexport class TreeTemplateExampleComponent {\n  readonly data: TreeNode = {\n    text: 'Topmost',\n    children: [\n      {\n        text: 'Top level 1',\n        icon: 'account-shield-alarm',\n        children: [\n          {\n            text: 'Another item',\n            children: [\n              { text: 'Next level 1', icon: 'social-star-half' },\n              { text: 'Next level 2', icon: 'social-star-half' },\n              { text: 'Next level 3' },\n            ],\n          },\n        ],\n      },\n      { text: 'Top level 2' },\n      {\n        text: 'Top level 3',\n        children: [{ text: 'Test 1' }, { text: 'Test 2', icon: 'add-alarm' }],\n      },\n    ],\n  };\n\n  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;\n}\n";
    },
  },
]);
