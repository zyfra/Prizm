import { Component } from '@angular/core';
import { EMPTY_ARRAY, ZuiHandler } from '@digital-plant/zui-components';

export interface TreeNode {
  readonly text: string;
  readonly icon?: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'zui-tree-template-example',
  templateUrl: './tree-template-example.component.html',
  styles: [`
    .wrapper {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  `]
})
export class TreeTemplateExampleComponent {
  readonly data: TreeNode = {
    text: 'Topmost',
    children: [
      {
        text: 'Top level 1',
        icon: 'account-shield-alarm',
        children: [
          {
            text: 'Another item',
            children: [
              {text: 'Next level 1', icon: 'social-star-half'},
              {text: 'Next level 2', icon: 'social-star-half'},
              {text: 'Next level 3'},
            ],
          },
        ],
      },
      {text: 'Top level 2'},
      {
        text: 'Top level 3',
        children: [{text: 'Test 1'}, {text: 'Test 2', icon: 'add-alarm'}],
      },
    ],
  };

  readonly handler: ZuiHandler<TreeNode, readonly TreeNode[]> = item =>
    item.children || EMPTY_ARRAY;
}

