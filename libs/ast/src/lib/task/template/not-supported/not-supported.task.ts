import { IPrizmNotSupportedTemplateTask, IPrizmNotSupportedTemplateTaskPayload } from './model';
import { PrizmAstTemplateAttributeType, PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import { prizmAstFindAttributeWithType, prizmAstHasAttribute, prizmAstRemoveByAttrName } from '../util';

/**
 * PrizmNotSupportedTemplateTask class is responsible for handling not supported attributes in a PrizmNode.
 */
export class PrizmNotSupportedTemplateTask extends PrizmAstTaskTemplate<IPrizmNotSupportedTemplateTask> {
  readonly type = 'not-supported';

  /**
   * The `run` method processes the given node, payload and context to handle not supported attributes in the PrizmNode.
   *
   * @param node - The PrizmNode to be processed.
   * @param payload - The IPrizmNotSupportedTemplateTaskPayload containing the not supported attribute.
   * @param context - The PrizmAstTemplateContext.
   * @returns - The modified PrizmNode with a comment added for the not supported attribute.
   */
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmNotSupportedTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const attr = payload.attr ?? context?.originName;

    // If there is no attribute, return the original node unchanged
    if (!attr) return node;

    const children = node.children ?? [];

    if (context.runIn === 'inputs') {
      prizmAstHasAttribute(attr, node.attrs);
    }

    const attrTypes: PrizmAstTemplateAttributeType[] = [];
    if (context.runIn === 'tasks') {
      attrTypes.push(
        PrizmAstTemplateAttributeType.input,
        PrizmAstTemplateAttributeType.inputOutput,
        PrizmAstTemplateAttributeType.inputVar,
        PrizmAstTemplateAttributeType.output
      );
    } else if (context.runIn === 'inputs') {
      attrTypes.push(
        PrizmAstTemplateAttributeType.input,
        PrizmAstTemplateAttributeType.inputOutput,
        PrizmAstTemplateAttributeType.inputVar
      );
    } else if (context.runIn === 'outputs') {
      attrTypes.push(PrizmAstTemplateAttributeType.output, PrizmAstTemplateAttributeType.inputOutput);
    }

    const data = prizmAstFindAttributeWithType(attr, node.attrs, attrTypes);

    if (data) {
      // Remove the not supported attribute from the node's attrs object
      delete node.attrs[data.attrName];
    }

    // Add a comment to the node's children indicating the not supported attribute
    children.push({
      type: 'comment',
      comment: `TODO not supported attr <${data?.attrName ?? attr}> in <${node.name}> with value <${
        data?.value
      }>`,
    } as any);

    // Add a comment to the node's children indicating the not supported attribute
    if (payload.extraComment)
      children.push({
        type: 'comment',
        comment: payload.extraComment,
      } as any);

    node.children = [...children];

    // Return the modified node with the comment added for the not supported attribute
    return { ...node };
  }
}
