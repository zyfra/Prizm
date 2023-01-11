import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { TreeNode } from './examples/template/tree-template-example.component';
import { PRIZM_EMPTY_ARRAY, PrizmHandler } from '@prizm-ui/components';

@Component({
  selector: 'prizm-tree-example',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  public readonly data: (string | (string | string[])[])[] = [
    'Top level 1',
    ['Second level item', ['Third level 1', 'Third level 2', 'Third level 3']],
    'Top level 2',
    'Top level 3',
    ['Second 1', 'Second 2'],
  ];

  public treeController = true;

  public readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/tree-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/tree-base-example.component.html'),
  };

  public readonly exampleArray: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/array/tree-array-example.component.ts'),
    HTML: import('!!raw-loader!./examples/array/tree-array-example.component.html'),
  };

  public readonly exampleTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/template/tree-template-example.component.ts'),
    HTML: import('!!raw-loader!./examples/template/tree-template-example.component.html'),
  };

  public readonly exampleComponent: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/component/tree-component-example.component.ts'),
    HTML: import('!!raw-loader!./examples/component/tree-component-example.component.html'),
    folder: import('!!raw-loader!./examples/component/folder.component.ts'),
    folderLess: import('./examples/component/folder.component.less?raw'),
  };
  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;
}
