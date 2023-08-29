import { IPrizmRenameTemplateTask, IPrizmRenameTemplateTaskPayload } from './model';
import { PrizmAstTemplateAttributeType, PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import { prizmAstConvertAttrNameByType, prizmAstFindAttributeWithType, prizmAstGetAttrName } from '../util';

/**
 * PrizmRenameTemplateTask class is responsible for renaming attributes in a PrizmNode.
 */
export class PrizmRenameTemplateTask extends PrizmAstTaskTemplate<IPrizmRenameTemplateTask> {
  readonly type = 'rename';

  /**
   * The `run` method processes the given node, payload, and context to rename attributes in the PrizmNode.
   *
   * @param node - The PrizmNode to be processed.
   * @param payload - The IPrizmRenameTemplateTaskPayload containing the old and new attribute names.
   * @param context - The PrizmAstTemplateContext.
   * @returns - The modified PrizmNode with the attributes renamed.
   */
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmRenameTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    // Return the original node unchanged if there's no payload or no new attribute name
    if (!payload || !payload.newAttrName) return node;

    // If there is an old attribute name in the payload, convert it to a proper attribute name
    if (payload.oldAttrName) payload.oldAttrName = prizmAstGetAttrName(payload.oldAttrName);

    // Determine the attribute to rename
    let attr = payload.oldAttrName ?? context?.attrName;

    // Return the original node unchanged if there's no context.runIn
    if (!context.runIn) return node;

    const attrWithType = prizmAstFindAttributeWithType(
      attr as any,
      context.sourceNode.attrs,
      context.runIn === 'outputs'
        ? [PrizmAstTemplateAttributeType.output]
        : [PrizmAstTemplateAttributeType.input, PrizmAstTemplateAttributeType.inputVar]
    );

    if (!attrWithType) return node;
    attr = attrWithType.attrName;

    const newName = prizmAstConvertAttrNameByType(payload.newAttrName, attrWithType?.type);
    const oldValue = 'value' in payload ? payload.value : attrWithType.value;
    node.attrs[newName] = oldValue;
    if (node !== context.sourceNode || attr !== newName) delete context.sourceNode.attrs[attr];

    // Add a comment to fix API differences if needFixApi is true
    if (payload.needFixApi) {
      node.children = [
        ...(node.children ?? []),
        {
          type: 'comment',
          comment: `TODO: ${attr} > ${payload.newAttrName} has different api, please manually fix it here`,
        } as any,
      ];
    }

    // Return the modified node with the attributes renamed
    return { ...node };
  }
}
