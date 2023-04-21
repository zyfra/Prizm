import { IPrizmRenameTemplateTask, IPrizmRenameTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import {
  prizmAstConvertAttrNameToInputVar,
  prizmAstConvertAttrNameToOutputVar,
  prizmAstGetAttrName,
} from '../util';
import { PrizmLogExecution } from '@prizm-ui/helpers';
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
  @PrizmLogExecution()
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
    const attr = payload.oldAttrName ?? context?.attrName;

    // Return the original node unchanged if there's no context.runIn
    if (!context.runIn) return node;

    const previousName =
      context.runIn === 'outputs'
        ? prizmAstConvertAttrNameToOutputVar(attr)
        : prizmAstConvertAttrNameToInputVar(attr);

    // Rename the attribute if it exists in node.attrs
    if (previousName in node.attrs) {
      const newName =
        context.runIn === 'outputs'
          ? prizmAstConvertAttrNameToOutputVar(payload.newAttrName)
          : prizmAstConvertAttrNameToInputVar(payload.newAttrName);
      const updateName = payload.setExactNewAttrName ? payload.newAttrName : newName;
      node.attrs[updateName] = 'value' in payload ? payload.value : node.attrs[previousName];
      if (updateName !== previousName) delete node.attrs[previousName];
    } else if (attr in node.attrs) {
      const newName = payload.newAttrName;
      node.attrs[newName] = 'value' in payload ? payload.value : node.attrs[attr];
      if (attr !== newName) delete node.attrs[attr];
    }

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
