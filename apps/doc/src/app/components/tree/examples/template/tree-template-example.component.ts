import { Component } from '@angular/core';
import { PrizmHandler } from '@prizm-ui/components';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';

export interface TreeNode {
  readonly text: string;
  readonly icon?: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'prizm-tree-template-example',
  templateUrl: './tree-template-example.component.html',
  styles: [
    `
      .wrapper {
        display: flex;
        gap: 8px;
        align-items: center;
      }
    `,
  ],
})
export class TreeTemplateExampleComponent {
  readonly data: TreeNode = {
    text: 'Topmost',
    children: [
      {
        text: 'Top level 1',
        icon: 'shield-exclamation',
        children: [
          {
            text: 'Another item',
            children: [
              { text: 'Next level 1', icon: 'star-half-fill' },
              { text: 'Next level 2', icon: 'star-half-fill' },
              { text: 'Next level 3' },
            ],
          },
        ],
      },
      { text: 'Top level 2' },
      {
        text: 'Top level 3',
        children: [{ text: 'Test 1' }, { text: 'Test 2', icon: 'alarm-plus' }],
      },
    ],
  };

  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;
}
