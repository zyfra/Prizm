import {
  HierarchicalMenuBuilder,
  HierarchicalMenuCollapsedViewConfig,
  HierarchicalMenuNode,
  HierarchicalMenuType,
} from '../../zyfra-hierarchical-menu.interface';
import ZyfraHierarchicalMenuUtils from '../utils/zyfra-hierarchical-menu-utils';

export class CollapsedHierarchicalMenuBuilder implements HierarchicalMenuBuilder {
  tree: HierarchicalMenuNode;
  config: HierarchicalMenuCollapsedViewConfig;
  expandedBuilder: HierarchicalMenuBuilder;

  constructor(
    tree: HierarchicalMenuNode,
    config: HierarchicalMenuCollapsedViewConfig,
    expandedBuilder: HierarchicalMenuBuilder
  ) {
    this.tree = tree;
    this.config = config;
    this.expandedBuilder = expandedBuilder;
  }

  public getMenu(rootId: string, showRoot: boolean, type: HierarchicalMenuType): HierarchicalMenuNode[] {
    return this.expandedBuilder.getMenu(rootId, showRoot, type);
  }

  public getMainMenu(activeNodeId?: string): HierarchicalMenuNode[] {
    if (this.config.showMainMenu === 'empty') {
      return [];
    }

    if (this.config.showMainMenu === 'roots') {
      const root = this.tree;
      const res = [];

      for (const child of root?.children ?? []) {
        if (!child.attributes?.subMenuItem) {
          res.push({ ...child, hierarchy: { ...child.hierarchy, levelNested: 0 } });
        }
      }
      return res;
    }

    if (this.config.showMainMenu === 'active' && activeNodeId) {
      const activeNode = ZyfraHierarchicalMenuUtils.findNode(this.tree, activeNodeId);
      return [{ ...activeNode, hierarchy: { ...activeNode.hierarchy, levelNested: 0 } }];
    }

    return [];
  }

  public getAdditionalMenu(rootId: string): HierarchicalMenuNode[] {
    if (!rootId) return [];

    if (this.config.showSubMenu === 'empty') {
      return [];
    }

    if (this.config.showSubMenu === 'active') {
      const collapsedList = [];

      const root = ZyfraHierarchicalMenuUtils.findNode(this.tree, rootId);

      for (const child of root?.children ?? []) {
        if (child.attributes?.subMenuItem) {
          collapsedList.push({ ...child, hierarchy: { ...child.hierarchy, levelNested: 0 } });
        }
      }

      return collapsedList;
    }

    return [];
  }
}
