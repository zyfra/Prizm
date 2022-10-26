import {
  HierarchicalMenuBuilder,
  HierarchicalMenuNode,
  HierarchicalMenuNodeHierarchyType,
  HierarchicalMenuType,
} from '../../zyfra-hierarchical-menu.interface';
import { ZyfraHierarchicalMenuUtils } from '../../common/utils/zyfra-hierarchical-menu-utils';

const filterByTypeHierarchicalMenu = new Map([
  ['main', (node: HierarchicalMenuNode): boolean => !node.attributes?.subMenuItem],
  ['sub', (node: HierarchicalMenuNode): boolean => node.attributes?.subMenuItem],
]);

export class TreeHierarchicalMenuBuilder implements HierarchicalMenuBuilder {
  tree: HierarchicalMenuNode;

  constructor(tree: HierarchicalMenuNode) {
    this.tree = tree;
  }

  // реализация алгоритма Depth-first search для обхода дерева (иерархии элементов)
  private dfs(
    node: HierarchicalMenuNode,
    lvl: number,
    result: HierarchicalMenuNode[],
    filter: (node: HierarchicalMenuNode) => boolean
  ): void {
    if (!node || !filter(node)) return;

    result.push({ ...node, hierarchy: { ...node.hierarchy, levelNested: lvl } });

    if (!node?.children || ZyfraHierarchicalMenuUtils.isCollapsed(node)) return;

    for (const child of node.children) {
      this.dfs(child, lvl + 1, result, filter);
    }
  }

  public getMenu(rootId: string, showRoot: boolean, type: HierarchicalMenuType): HierarchicalMenuNode[] {
    if (!rootId) return null;

    const result = [];
    const filter = filterByTypeHierarchicalMenu.get(type);
    let currentNestedLvl = 0;

    const rootNode = ZyfraHierarchicalMenuUtils.findNode(this.tree, rootId);

    if (showRoot) {
      result.push({
        ...rootNode,
        hierarchy: {
          ...rootNode.hierarchy,
          type: HierarchicalMenuNodeHierarchyType.header,
          levelNested: currentNestedLvl,
        },
      });
      currentNestedLvl++;
    }

    for (const child of rootNode?.children ?? []) {
      this.dfs(child, currentNestedLvl, result, filter);
    }

    return result;
  }

  public getMainMenu(): HierarchicalMenuNode[] {
    return this.getMenu(this.tree?.id, false, 'main');
  }

  public getAdditionalMenu(rootId: string): HierarchicalMenuNode[] {
    if (!rootId) return [];

    return this.getMenu(rootId, true, 'sub');
  }
}
