import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, Inject } from '@angular/core';
import { POLYMORPH_CONTEXT } from '../../../../directives';

import { PRIZM_DEFAULT_TREE_CONTROLLER } from '../../misc/tree.constants';
import { PrizmTreeController, PrizmTreeItemContext } from '../../misc/tree.interfaces';
import { PRIZM_TREE_CONTROLLER } from '../../misc/tree.tokens';
import { AbstractPrizmTestId } from '../../../../abstract/interactive';

@Component({
  selector: 'prizm-tree-item-content',
  templateUrl: './tree-item-content.component.html',
  styleUrls: ['./tree-item-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTreeItemContentComponent extends AbstractPrizmTestId {
  override readonly testId_ = 'ui_tree_item_content';

  constructor(
    @Inject(POLYMORPH_CONTEXT) readonly context: PrizmTreeItemContext,
    @Inject(forwardRef(() => PRIZM_TREE_CONTROLLER))
    private readonly controller: PrizmTreeController
  ) {
    super();
  }

  public get isExpanded(): boolean {
    return this.context.$implicit.isExpanded;
  }

  @HostBinding('class._expandable')
  public get isExpandable(): boolean {
    return this.context.$implicit.isExpandable && this.controller !== PRIZM_DEFAULT_TREE_CONTROLLER;
  }

  public onClick(): void {
    this.controller.toggle(this.context.$implicit);
  }
}
