import { IPrizmChangeNameTemplateTask, IPrizmChangeNameTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';

/**
 * PrizmChangeNameTemplateTask class is responsible for changing the name of a PrizmNode.
 */
export class PrizmChangeNameTemplateTask extends PrizmAstTaskTemplate<IPrizmChangeNameTemplateTask> {
  readonly type = 'change-name';

  /**
   * The `run` method processes the given node, payload and context to change the name of the PrizmNode.
   *
   * @param node - The PrizmNode to be processed.
   * @param payload - The IPrizmChangeNameTemplateTaskPayload containing the new name for the node.
   * @param context - The PrizmAstTemplateContext.
   * @returns - The modified PrizmNode with the updated name.
   */
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmChangeNameTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const { name } = payload;

    // If there is no name in the payload, return the original node unchanged
    if (!name) return node;

    // Return a new PrizmNode object with the updated name
    return { ...node, name };
  }
}
