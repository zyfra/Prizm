import { IPrizmAddCommentTemplateTask, IPrizmAddCommentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';

/**
 * PrizmAddCommentTemplateTask class is responsible for adding a comment to a PrizmNode.
 */
export class PrizmAddCommentTemplateTask extends PrizmAstTaskTemplate<IPrizmAddCommentTemplateTask> {
  readonly type = 'add-comment';

  /**
   * The `run` method processes the given node, payload and context to add a comment to the PrizmNode.
   *
   * @param node - The PrizmNode to be processed.
   * @param payload - The IPrizmAddCommentTemplateTaskPayload containing the comment to be added.
   * @param context - The PrizmAstTemplateContext.
   * @returns - The modified PrizmNode with the comment added.
   */
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmAddCommentTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const { comment } = payload;
    const attr = payload.attr ?? context?.originName;

    // If there is no attr, return the original node unchanged
    if (!attr) return node;

    const children = node.children ?? [];

    // Add the comment to the node's children
    children.push({
      type: 'comment',
      comment,
    } as any);
    node.children = children;

    // Return the modified node with the comment added
    return { ...node };
  }
}
