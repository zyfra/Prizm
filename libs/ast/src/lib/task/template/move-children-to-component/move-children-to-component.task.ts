import {
  IPrizmMoveContentToComponentTemplateTask,
  IPrizmMoveContentToComponentTemplateTaskPayload,
} from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';

/**
 * PrizmMoveContentToComponentTemplateTask class is responsible for moving the content of a node
 * into a new component.
 */
export class PrizmMoveContentToComponentTemplateTask extends PrizmAstTaskTemplate<IPrizmMoveContentToComponentTemplateTask> {
  readonly type = 'move-content-to-component';

  /**
   * The `run` method processes the given node, payload and context to move the node's content
   * into a new component.
   *
   * @param node - The PrizmNode to be processed.
   * @param payload - The IPrizmMoveContentToComponentTemplateTaskPayload containing the data for the new component.
   * @param context - The PrizmAstTemplateContext.
   * @returns - The modified PrizmNode with its content moved to the new component.
   */
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmMoveContentToComponentTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const attr = payload.name;
    if (!attr) return node;

    // Create the new child node with the provided properties from the payload
    const childNode: PrizmTemplateNode = {
      name: payload.name,
      attrs: payload.attrs ?? {},
      children: payload.children ?? [],
      type: payload.type ?? 'tag',
      voidElement: payload.voidElement ?? false,
    };

    // Add the original node's children to the new child node
    childNode.children.push(...(node.children ?? []));

    // Set the new child node as the only child of the original node
    node.children = [childNode];

    return { ...node };
  }
}
