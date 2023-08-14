import { Component } from '@angular/core';
import { PolymorphComponent, PRIZM_TREE_CONTENT, PrizmHandler } from '@prizm-ui/components';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';
import { FoldersComponent } from '../component/folder.component';

interface TreeNode {
  readonly text: string;
  readonly children?: readonly TreeNode[];
}

@Component({
  selector: 'prizm-tree-padding-indent-example',
  templateUrl: './tree-padding-indent-example.component.html',
  styleUrls: ['./tree-padding-indent-example.component.less'],
  providers: [
    {
      provide: PRIZM_TREE_CONTENT,
      useValue: new PolymorphComponent(FoldersComponent),
    },
  ],
})
export class TreePaddingInputExampleComponent {
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
      {
        text: 'Top level 2',
        children: [
          {
            text: 'Another item',
            children: [
              { text: 'Next level 1' },
              {
                text: 'Next level 2',
                children: [
                  {
                    text: 'Another item',
                    children: [{ text: 'Next level 1' }, { text: 'Next level 2' }, { text: 'Next level 3' }],
                  },
                ],
              },
              { text: 'Next level 3' },
              { text: 'Next level 4' },
            ],
          },
        ],
      },
      {
        text: 'Top level 3',
        children: [{ text: 'Test 1' }, { text: 'Test 2' }],
      },
    ],
  };

  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;
}
