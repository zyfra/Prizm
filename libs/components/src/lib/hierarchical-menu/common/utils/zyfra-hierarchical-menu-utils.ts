import { HierarchicalMenuNode } from '../../zyfra-hierarchical-menu.interface';

class ZyfraHierarchicalMenuUtils {
  /**
   * Finds a node in a given subtree by id
   * @param root - the root element of the subtree in which the search is performed
   * @param queryId - id of the vertex to be found
   */
  public static findNode(root: HierarchicalMenuNode, queryId: string): HierarchicalMenuNode {
    if (root.id === queryId) return root;

    if (!root.children) return null;

    for (const child of root.children) {
      const childResult = this.findNode(child, queryId);
      if (childResult) return childResult;
    }
    return null;
  }

  /**
   * Finds the first element in the tree by depth search that satisfies the filter
   * @param root - the root element of the subtree in which the search is performed
   * @param filter - filter function (item) => boolean
   */
  public static findNodeByFilter(
    root: HierarchicalMenuNode,
    filter: (node: HierarchicalMenuNode) => boolean
  ): HierarchicalMenuNode {
    if (filter(root)) {
      return root;
    }

    if (!root.children) return null;

    for (const child of root.children) {
      const childResult = this.findNodeByFilter(child, filter);
      if (childResult) return childResult;
    }
    return null;
  }

  /**
   * Adds new children to the specified tree node and returns a new tree root
   * @param root - root element of the tree
   * @param parentId - id of the vertex you want to add children to
   * @param children - array of children
   */
  public static addChildren(
    root: HierarchicalMenuNode,
    parentId: string,
    children: HierarchicalMenuNode[]
  ): HierarchicalMenuNode {
    const node = this.findNode(root, parentId);

    if (node) {
      if (!node.children) {
        node.children = [];
      }

      for (const child of children) {
        const idx = node.children.findIndex(e => e.id === child.id);
        if (idx === -1) {
          node.children.push(child);
        } else {
          node.children[idx] = child;
        }
      }
    }

    return JSON.parse(JSON.stringify(root));
  }

  /**
   * Sets the collapsed/expand status (whether to display children) of node
   * @param root- root element of the tree
   * @param nodeId - the id of the vertex to be collapsed/expand
   * @param collapsed - if true the node will be collapsed, otherwise expanded
   */
  public static setCollapseStatus(
    root: HierarchicalMenuNode,
    nodeId: string,
    collapsed: boolean
  ): HierarchicalMenuNode {
    const node = this.findNode(root, nodeId);

    if (node) {
      if (!node.hierarchy) {
        node.hierarchy = {};
      }
      node.hierarchy.collapsed = collapsed;
    }

    return JSON.parse(JSON.stringify(root));
  }

  /**
   * Returns the parent node of a given node
   * @param root- root element of the tree
   * @param targetId - the id of the vertex you want to get an ancestor for
   */
  public static getParentNode(root: HierarchicalMenuNode, targetId: string): HierarchicalMenuNode {
    const path = this.getPathFromRoot(root, targetId);
    if (path.length > 1) {
      const parent = path[path.length - 2];
      if (parent.id !== 'root') {
        return parent;
      }
    }
    return null;
  }

  /**
   * Returns an array of vertices on the path from the root to the vertex with the specified id
   * @param root- root element of the tree
   * @param targetId - the id of the node
   */
  public static getPathFromRoot(root: HierarchicalMenuNode, targetId: string): HierarchicalMenuNode[] {
    const path = [];

    const dfs = (node: HierarchicalMenuNode): boolean => {
      if (node.id === targetId) {
        path.push(node);
        return true;
      }

      if (node.children) {
        for (const child of node.children) {
          if (dfs(child)) {
            path.push(node);
            return true;
          }
        }
      }
      return false;
    };

    dfs(root);

    return path.reverse();
  }

  /**
   * Returns true if the node is collapsed (child node are not displayed) and false otherwise
   * @param item - node
   */
  public static isCollapsed(item: HierarchicalMenuNode): boolean {
    if (item?.hierarchy?.collapsed != null) {
      return item.hierarchy.collapsed;
    } else {
      return true;
    }
  }
}

export default ZyfraHierarchicalMenuUtils;
