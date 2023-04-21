import { IPrizmAddAttributeTemplateTask, IPrizmAddAttributeTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import { prizmAstFindAttributeWithType } from '../util';

/**
 * PrizmAddAttributeTemplateTask class is responsible for adding an attribute to a PrizmNode.
 */
export class PrizmAddAttributeTemplateTask extends PrizmAstTaskTemplate<IPrizmAddAttributeTemplateTask> {
  readonly type = 'add-attribute';

  /**
   * The `run` method processes the given node, payload and context to add an attribute to the PrizmNode.
   *
   * @param node - The PrizmNode to be processed.
   * @param payload - The IPrizmAddAttributeTemplateTaskPayload containing the attribute to be added.
   * @param context - The PrizmAstTemplateContext.
   * @returns - The modified PrizmNode with the attribute added.
   */
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmAddAttributeTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const attr = payload.attr;

    // If there is no attribute in the payload, return the original node unchanged
    if (!attr) return node;

    const newValue =
      payload.passValue && context.originName
        ? prizmAstFindAttributeWithType(context.attrName, node.attrs)?.value
        : null;

    // Return a new PrizmNode object with the added attribute
    return {
      ...node,
      attrs: {
        ...node.attrs,
        [attr]: newValue,
      },
    };
  }
}
