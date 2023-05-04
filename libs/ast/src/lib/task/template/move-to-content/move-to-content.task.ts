import { IPrizmMoveToContentTemplateTask, IPrizmMoveToContentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { prizmAstGetOutputBytAttrForTemplate, prizmAstRemoveByAttrName } from '../util';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';

/**
 * PrizmMoveToContentTemplateTask class is responsible for moving the attribute value to the content of a PrizmNode.
 */
export class PrizmMoveToContentTemplateTask extends PrizmAstTaskTemplate<IPrizmMoveToContentTemplateTask> {
  readonly type = 'move-to-content';

  /**
   * The `run` method processes the given node, payload, and context to move the attribute value to the content of the PrizmNode.
   *
   * @param node - The PrizmNode to be processed.
   * @param payload - The IPrizmMoveToContentTemplateTaskPayload containing the attribute information.
   * @param context - The PrizmAstTemplateContext.
   * @returns - The modified PrizmNode with the attribute value moved to the content.
   */
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmMoveToContentTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    // Determine the attribute to process
    const attr = payload.attr || context.originName;

    // If there is no attribute, return the original node unchanged
    if (!attr) return node;

    // Get the output value for the attribute
    const content = prizmAstGetOutputBytAttrForTemplate(node.attrs, attr);

    // Remove the attribute from the node's attrs object
    node.attrs = prizmAstRemoveByAttrName(node.attrs, attr);

    if (!payload.notClearChildren) node.children = [];

    // If there is content, move it to the node's children as a text node
    if (content) {
      node.children.push({
        type: 'text',
        content,
      } as any);
    }

    // Return the modified node with the attribute value moved to the content
    return { ...node };
  }
}
