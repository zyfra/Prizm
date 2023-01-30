import { Component } from '@angular/core';
import {
  PRIZM_EMPTY_ARRAY,
  PolymorphComponent,
  PRIZM_TREE_CONTENT,
  PrizmHandler,
} from '@prizm-ui/components';

import { FoldersComponent } from './folder.component';

interface TreeNode {
  readonly text: string;
  readonly children?: readonly TreeNode[];
}
@Component({
  selector: 'prizm-tree-component-example',
  templateUrl: './tree-component-example.component.html',
  styles: [
    `
      prizm-tree {
        overflow: hidden;
      }
    `,
  ],
  providers: [
    {
      provide: PRIZM_TREE_CONTENT,
      useValue: new PolymorphComponent(FoldersComponent),
    },
  ],
})
export class TreeComponentExampleComponent {
  readonly data: TreeNode = {
    text: 'Topmost',
    children: [
      {
        text: 'Top level 1',
        children: [
          {
            text: 'Another item',
            children: [{ text: 'Next level 1' }, { text: 'Next level 2' }, { text: 'Next level 3' }],
          },
        ],
      },
      { text: 'Top level 2' },
      {
        text: 'Top level 3',
        children: [{ text: 'Test 1' }, { text: 'Test 2' }],
      },
    ],
  };

  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;
}
