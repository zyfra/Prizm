import { prizmGenerateId } from '@prizm-ui/helpers';
import { TreeNode } from 'primeng/api';
import { PrizmMenuItem } from '../model/prizm-menu-item.interface';

export const flatNodes = (nodes: TreeNode[]): TreeNode[] => {
  return [].concat(...nodes.map(node => (node.children ? flatNodes(node.children) : [node])));
};

export const convertToNode = (item: PrizmMenuItem, parent?: TreeNode): TreeNode => {
  let children;
  const node: TreeNode = {
    label: item.label,
    data: item,
    key: prizmGenerateId(),
    parent,
  };
  if (item.items) {
    children = item.items.map(childItem => {
      return convertToNode(childItem, node);
    });
  }
  node.children = children;
  return node;
};

export const getPath = (node: TreeNode, acc: TreeNode[] = []): TreeNode[] => {
  acc.push(node.parent);
  return node.parent ? getPath(node.parent, acc) : acc.reverse();
};

export const sortByLabel = (a: TreeNode, b: TreeNode): number => {
  if (a.label > b.label) {
    return 1;
  }
  if (a.label < b.label) {
    return -1;
  }
  return 0;
};

export const fromRubricatorNodes = (nodes: TreeNode[]): TreeNode[] => {
  const sortedNodes = flatNodes(nodes).sort(sortByLabel);
  const letters = new Set(sortedNodes.map(({ label }) => label.charAt(0).toUpperCase()));
  const rubricatorNodes: TreeNode[] = [];
  letters.forEach(letter => {
    rubricatorNodes.push({
      key: letter,
      label: letter,
      data: { label: letter },
      children: sortedNodes.filter(({ label }) => label.charAt(0).toUpperCase() === letter),
    });
  });
  return rubricatorNodes;
};
