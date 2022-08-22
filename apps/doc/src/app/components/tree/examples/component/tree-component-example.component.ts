import { Component } from '@angular/core';
import { ZUI_EMPTY_ARRAY, PolymorphComponent, ZUI_TREE_CONTENT, ZuiHandler } from '@digital-plant/zui-components';

import { FoldersComponent } from './folder.component';

interface TreeNode {
  readonly text: string;
  readonly children?: readonly TreeNode[];
}
@Component({
  selector: 'zui-tree-component-example',
  templateUrl: './tree-component-example.component.html',
  styles: [`
    zui-tree {
      overflow: hidden;
    }
  `],
  providers: [
    {
      provide: ZUI_TREE_CONTENT,
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

  readonly handler: ZuiHandler<TreeNode, readonly TreeNode[]> = item =>
    item.children || ZUI_EMPTY_ARRAY;
}

