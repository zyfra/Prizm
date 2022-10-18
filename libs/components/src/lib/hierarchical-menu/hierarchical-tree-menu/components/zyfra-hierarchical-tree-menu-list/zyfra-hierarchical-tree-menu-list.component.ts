import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import {
  HierarchicalMenuCollapseNodeEvent,
  HierarchicalMenuExpandNodeEvent,
  HierarchicalMenuNode,
  HierarchicalMenuNodeHierarchyType,
  HierarchicalMenuSelectNodeEvent,
  HierarchicalMenuType,
} from '../../../zyfra-hierarchical-menu.interface';
import ZyfraHierarchicalMenuUtils from '../../../common/utils/zyfra-hierarchical-menu-utils';
import {
  ZUI_HIERARCHICAL_MENU_OPTIONS_TOKEN,
  ZuiHierarchicalMenuOptions,
} from '../../../common/hierarhical-menu-options';

@Component({
  selector: 'zyfra-hierarchical-tree-menu-list',
  templateUrl: './zyfra-hierarchical-tree-menu-list.component.html',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: { class: 'zyfra-hierarchical-menu-list' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZyfraHierarchicalTreeMenuListComponent {
  @Input() tree: HierarchicalMenuNode[];
  @Input() closed: boolean = false;
  @Input() activeNodeId: string;
  @Input() menuType: HierarchicalMenuType = 'main';

  @Input() itemContentTemplate: TemplateRef<unknown>;
  @Input() suffixItemTemplate: TemplateRef<unknown>;
  @Input() optionsItemTemplate: TemplateRef<unknown>;

  @Output() selectNode = new EventEmitter<HierarchicalMenuSelectNodeEvent>();
  @Output() nodeCollapse = new EventEmitter<HierarchicalMenuCollapseNodeEvent>();
  @Output() nodeExpand = new EventEmitter<HierarchicalMenuExpandNodeEvent>();

  constructor(
    @Inject(ZUI_HIERARCHICAL_MENU_OPTIONS_TOKEN) public options: ZuiHierarchicalMenuOptions,
    private elementRef: ElementRef
  ) {}

  public selectNodeHandler(node: HierarchicalMenuNode, elementRef: ElementRef): void {
    if (node.hierarchy.type != 'header') {
      this.selectNode.emit({ target: node, elementRef });
    }
  }

  public identify(index: number, item: HierarchicalMenuNode): string {
    return item.id;
  }

  public toggleCollapse(node: HierarchicalMenuNode): void {
    const isCollapsed = ZyfraHierarchicalMenuUtils.isCollapsed(node);

    if (isCollapsed) {
      this.nodeExpand.emit({ target: node });
    } else {
      this.nodeCollapse.emit({ target: node });
    }
  }

  public checkNeedNavigationButtons(item: HierarchicalMenuNode): boolean {
    return (
      item.hierarchy?.type !== HierarchicalMenuNodeHierarchyType.header &&
      this.options.checkHasChildren(item, this.menuType)
    );
  }

  public checkCollapse(node: HierarchicalMenuNode): boolean {
    return ZyfraHierarchicalMenuUtils.isCollapsed(node);
  }
}
