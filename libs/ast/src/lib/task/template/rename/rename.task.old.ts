// import { IPrizmRenameTemplateTask, IPrizmRenameTemplateTaskPayload } from './model';
// import { PrizmAstTemplateContext } from '../model';
// import { PrizmAstTaskTemplate } from '../abstract';
// import { PrizmNode } from '../task';
// import {
//   prizmAstConvertAttrNameToInputVar,
//   prizmAstConvertAttrNameToOutputVar,
//   prizmAstGetAttrName,
// } from '../util';
// import { PrizmLogExecution } from '@prizm-ui/helpers';
//
// /**
//  * PrizmRenameTemplateTask class is responsible for renaming attributes in a PrizmNode.
//  */
// export class PrizmRenameTemplateTask extends PrizmAstTaskTemplate<IPrizmRenameTemplateTask> {
//   readonly type = 'rename';
//
//   /**
//    * The `run` method processes the given node, payload and context to rename attributes in the PrizmNode.
//    *
//    * @param node - The PrizmNode to be processed.
//    * @param payload - The IPrizmRenameTemplateTaskPayload containing the old and new attribute names.
//    * @param context - The PrizmAstTemplateContext.
//    * @returns - The modified PrizmNode with the attributes renamed.
//    */
//   @PrizmLogExecution()
//   public run(
//     node: PrizmNode,
//     payload: IPrizmRenameTemplateTaskPayload,
//     context: PrizmAstTemplateContext
//   ): PrizmNode {
//     // If there is no new attribute name in the payload, return the original node unchanged
//     if (!payload?.newAttrName) return node;
//
//     // If there is an old attribute name in the payload, convert it to a proper attribute name
//     if (payload?.oldAttrName) payload.oldAttrName = prizmAstGetAttrName(payload.oldAttrName);
//
//     // Determine the attribute to rename
//     const attr = payload?.oldAttrName ?? context?.attrName;
//
//     // If there is no context.runIn or payload, return the original node unchanged
//     if (!context.runIn) return node;
//     if (!payload) return node;
//
//     // Rename the attribute based on the context
//     if (context.runIn === 'outputs') {
//       const previousName = prizmAstConvertAttrNameToOutputVar(attr);
//       const previous = node.attrs[previousName];
//       const newName = prizmAstConvertAttrNameToOutputVar(payload.newAttrName);
//       node.attrs[
//         newName
//       ] = 'value' in payload
//       ? payload.value
//       : previous;
//       delete node.attrs[prizmAstConvertAttrNameToOutputVar(attr)];
//     } else if (context.runIn === 'inputs') {
//       const previousName = prizmAstConvertAttrNameToInputVar(attr);
//       const newName = prizmAstConvertAttrNameToOutputVar(payload.newAttrName);
//       if (previousName in node.attrs) {
//         node.attrs[
//           prizmAstConvertAttrNameToInputVar(newName)
//         ] =
//           'value' in payload
//             ? payload.value
//             : node.attrs[previousName];
//         delete node.attrs[previousName];
//       } else if (attr in node.attrs) {
//         const newName = attr;
//         node.attrs[newName] = 'value' in payload
//           ? payload.value
//           : node.attrs[attr];
//         delete node.attrs[attr];
//       }
//     }
//
//     if (payload.needFixApi) {
//       node.children = [
//         ...(node.children ?? []),
//         {
//           type: 'comment',
//           comment: `TODO: ${attr} > ${payload.newAttrName} has different api, please manually fix it here`,
//         } as any
//       ]
//     }
//
//     // Return the modified node with the attributes renamed
//     return { ...node };
//   }
// }
