import { Component } from '@angular/core';
import { PZM_EMPTY_ARRAY, PolymorphComponent, PZM_TREE_CONTENT, PzmHandler } from '@digital-plant/zui-components';

import { FoldersComponent } from './folder.component';

interface TreeNode {
  readonly text: string;
  readonly children?: readonly TreeNode[];
}
@Component({
  selector: 'pzm-tree-component-example',
  templateUrl: './tree-component-example.component.html',
  styles: [`
    pzm-tree {
      overflow: hidden;
    }
  `],
  providers: [
    {
      provide: PZM_TREE_CONTENT,
      useValue: new PolymorphComponent(FoldersComponent),
    },
  ]
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
            children: [
              {text: 'Next level 1'},
              {text: 'Next level 2'},
              {text: 'Next level 3'},
            ],
          },
        ],
      },
      {text: 'Top level 2'},
      {
        text: 'Top level 3',
        children: [{text: 'Test 1'}, {text: 'Test 2'}],
      },
    ],
  };

  readonly handler: PzmHandler<TreeNode, readonly TreeNode[]> = item =>
    item.children || PZM_EMPTY_ARRAY;
}

