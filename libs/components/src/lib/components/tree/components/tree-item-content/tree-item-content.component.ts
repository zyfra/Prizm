import { ChangeDetectionStrategy, Component, forwardRef, HostBinding, inject, Inject } from '@angular/core';
import { POLYMORPH_CONTEXT } from '../../../../directives';

import { PRIZM_DEFAULT_TREE_CONTROLLER } from '../../misc/tree.constants';
import { PrizmTreeController, PrizmTreeItemContext } from '../../misc/tree.interfaces';
import { PRIZM_TREE_CONTROLLER } from '../../misc/tree.tokens';
import { PrizmAbstractTestId } from '../../../../abstract/interactive';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsChevronDown, prizmIconsChevronRight } from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-tree-item-content',
  templateUrl: './tree-item-content.component.html',
  styleUrls: ['./tree-item-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmTreeItemContentComponent extends PrizmAbstractTestId {
  override readonly testId_ = 'ui_tree_item_content';

  protected readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    @Inject(POLYMORPH_CONTEXT) readonly context: PrizmTreeItemContext,
    @Inject(forwardRef(() => PRIZM_TREE_CONTROLLER))
    private readonly controller: PrizmTreeController
  ) {
    super();

    this.iconsFullRegistry.registerIcons(prizmIconsChevronDown, prizmIconsChevronRight);
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
