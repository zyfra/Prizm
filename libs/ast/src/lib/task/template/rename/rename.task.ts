import { IPrizmRenameTemplateTask, IPrizmRenameTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmNode } from '../task';
import {
  prizmAstConvertAttrNameToInputVar,
  prizmAstConvertAttrNameToOutputVar,
  prizmAstGetAttrName,
} from '../util';
import { PrizmLogExecution } from '@prizm-ui/helpers';

export class PrizmRenameTemplateTask extends PrizmAstTaskTemplate<IPrizmRenameTemplateTask> {
  readonly type = 'rename';

  @PrizmLogExecution()
  public run(
    node: PrizmNode,
    payload: IPrizmRenameTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmNode {
    if (!payload?.newAttrName) return node;
    if (payload?.oldAttrName) payload.oldAttrName = prizmAstGetAttrName(payload.oldAttrName);
    const attr = payload?.oldAttrName ?? context?.attrName;
    if (!context.runIn) return node;
    if (!payload) return node;
    if (context.runIn === 'outputs') {
      const previous = node.attrs[prizmAstConvertAttrNameToOutputVar(attr)];
      node.attrs[prizmAstConvertAttrNameToOutputVar(payload.newAttrName)] = previous;
      delete node.attrs[prizmAstConvertAttrNameToOutputVar(attr)];
    } else if (context.runIn === 'inputs') {
      const inputVarName = prizmAstConvertAttrNameToInputVar(attr);
      if (inputVarName in node.attrs) {
        node.attrs[prizmAstConvertAttrNameToInputVar(payload.newAttrName)] = node.attrs[inputVarName];
        delete node.attrs[inputVarName];
      } else if (attr in node.attrs) {
        node.attrs[payload.newAttrName] = node.attrs[attr];
        delete node.attrs[attr];
      }
    }
    return { ...node };
  }
}
