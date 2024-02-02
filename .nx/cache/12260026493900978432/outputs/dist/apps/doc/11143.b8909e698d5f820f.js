'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11143],
  {
    11143: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { PolymorphComponent, PRIZM_TREE_CONTENT, PrizmHandler } from '@prizm-ui/components';\nimport { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';\nimport { FoldersComponent } from './folder.component';\n\ninterface TreeNode {\n  readonly text: string;\n  readonly children?: readonly TreeNode[];\n}\n@Component({\n  selector: 'prizm-tree-component-example',\n  templateUrl: './tree-component-example.component.html',\n  styles: [\n    `\n      prizm-tree {\n        overflow: hidden;\n      }\n    `,\n  ],\n  providers: [\n    {\n      provide: PRIZM_TREE_CONTENT,\n      useValue: new PolymorphComponent(FoldersComponent),\n    },\n  ],\n})\nexport class TreeComponentExampleComponent {\n  readonly data: TreeNode = {\n    text: 'Topmost',\n    children: [\n      {\n        text: 'Top level 1',\n        children: [\n          {\n            text: 'Another item',\n            children: [{ text: 'Next level 1' }, { text: 'Next level 2' }, { text: 'Next level 3' }],\n          },\n        ],\n      },\n      {\n        text: 'Top level 2',\n        children: [\n          {\n            text: 'Another item',\n            children: [\n              { text: 'Next level 1' },\n              {\n                text: 'Next level 2',\n                children: [\n                  {\n                    text: 'Another item',\n                    children: [{ text: 'Next level 1' }, { text: 'Next level 2' }, { text: 'Next level 3' }],\n                  },\n                ],\n              },\n              { text: 'Next level 3' },\n              { text: 'Next level 4' },\n            ],\n          },\n        ],\n      },\n      {\n        text: 'Top level 3',\n        children: [{ text: 'Test 1' }, { text: 'Test 2' }],\n      },\n    ],\n  };\n\n  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;\n}\n";
    },
  },
]);
