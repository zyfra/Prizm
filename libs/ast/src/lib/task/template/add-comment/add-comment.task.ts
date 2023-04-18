import { PrizmNode } from '@prizm-ui/ast';

export class PrizmAddCommentTask {
  public run(
    node: PrizmNode,
    payload: {
      value: string;
      key?: string;
    },
    context: {}
  ): PrizmNode {
    if (key && !node.attrs[key] && !node.attrs[`[${key}]`]) return node;
    if (key) {
      delete node.attrs[key];
      delete node.attrs[`[${key}]`];
    }

    const children = node.children ?? [];
    children.push({
      type: 'comment',
      comment: value,
    } as any);
    node.children = children;
    return { ...node };
  }
}
