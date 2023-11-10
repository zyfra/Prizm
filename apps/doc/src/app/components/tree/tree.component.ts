import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { TreeNode } from './examples/template/tree-template-example.component';
import { PrizmHandler } from '@prizm-ui/components';
import { PRIZM_EMPTY_ARRAY } from '@prizm-ui/core';

@Component({
  selector: 'prizm-tree-example',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent {
  public prizmTreeController = true;
  public readonly data: (string | (string | string[])[])[] = [
    'Top level 1',
    ['Second level item', ['Third level 1', 'Third level 2', 'Third level 3']],
    'Top level 2',
    'Top level 3',
    ['Second 1', 'Second 2'],
  ];

  public treeController = true;

  public readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  public readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/tree-base-example.component.ts?raw'),
    HTML: import('./examples/base/tree-base-example.component.html?raw'),
  };
  public readonly exampleActiveItem: TuiDocExample = {
    TypeScript: import('./examples/active-color/tree-active-color-example.component.ts?raw'),
    HTML: import('./examples/active-color/tree-active-color-example.component.html?raw'),
  };

  public readonly exampleArray: TuiDocExample = {
    TypeScript: import('./examples/array/tree-array-example.component.ts?raw'),
    HTML: import('./examples/array/tree-array-example.component.html?raw'),
  };

  public readonly exampleTemplate: TuiDocExample = {
    TypeScript: import('./examples/template/tree-template-example.component.ts?raw'),
    HTML: import('./examples/template/tree-template-example.component.html?raw'),
  };

  public readonly exampleTemplateCheckbox: TuiDocExample = {
    TypeScript: import('./examples/template-checkbox/tree-template-example.component.ts?raw'),
    HTML: import('./examples/template-checkbox/tree-template-example.component.html?raw'),
    Module: import('./examples/template-checkbox/tree-template-example.module?raw'),
  };
  public readonly exampleLazy: TuiDocExample = {
    TypeScript: import('./examples/lazy/tree-template-lazy-example.component?raw'),
    HTML: import('./examples/lazy/tree-template-lazy-example.component.html?raw'),
    Module: import('./examples/lazy/tree-template-lazy-example.module?raw'),
    Service: import('./examples/lazy/tree-template-lazy-example.service?raw'),
    Model: import('./examples/lazy/tree-template-lazy.model?raw'),
  };

  public readonly exampleComponent: TuiDocExample = {
    TypeScript: import('./examples/component/tree-component-example.component.ts?raw'),
    HTML: import('./examples/component/tree-component-example.component.html?raw'),
    'folder.ts': import('./examples/component/folder.component.ts?raw'),
    'folder.less': import('./examples/component/folder.component.less?raw'),
  };

  public readonly examplePaddingIndent: TuiDocExample = {
    TypeScript: import('./examples/padding-indent/tree-padding-indent-example.component.ts?raw'),
    HTML: import('./examples/padding-indent/tree-padding-indent-example.component.html?raw'),
    'component.less': import('./examples/padding-indent/tree-padding-indent-example.component.less?raw'),
    'folder.ts': import('./examples/component/folder.component.ts?raw'),
    'folder.less': import('./examples/component/folder.component.less?raw'),
  };

  public readonly exampleInModal: TuiDocExample = {
    TypeScript: import('./examples/in-modal/tree-in-modal-example.component.ts?raw'),
    HTML: import('./examples/in-modal/tree-in-modal-example.component.html?raw'),
  };
  readonly handler: PrizmHandler<TreeNode, readonly TreeNode[]> = item => item.children || PRIZM_EMPTY_ARRAY;
}
