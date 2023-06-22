import { Component } from '@angular/core';
import { PrizmHandler } from '@prizm-ui/components';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';

interface TreeNode {
  readonly text: string;
  readonly children?: readonly TreeNode[];
}
@Component({
  selector: 'prizm-tree-template-checkbox-example',
  templateUrl: './tree-template-example.component.html',
})
export class TreeTemplateExampleComponent {
  map = new Map<TreeNode, boolean>();

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

  readonly getValue = (item: TreeNode, map: Map<TreeNode, boolean>): boolean | null => {
    const flat = flatten(item);
    const result = !!map.get(flat[0]);

    for (let i = 0; i < flat.length; i++) {
      if (result !== !!map.get(flat[i])) {
        return null;
      }
    }

    return result;
  };

  public onChecked(node: TreeNode, value: boolean): void {
    flatten(node).forEach(item => this.map.set(item, value));

    this.map = new Map(this.map.entries());
  }
}

function flatten(item: TreeNode): readonly TreeNode[] {
  return item.children ? item.children.map(flatten).reduce((arr, item) => [...arr, ...item], []) : [item];
}
