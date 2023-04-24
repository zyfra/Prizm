import { IPrizmRemoveAttributeTemplateTask, IPrizmRemoveAttributeTemplateTaskPayload } from './model';
import { PrizmAstTemplateAttributeType, PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import { prizmAstFindAttributeWithType } from '../util';

export class PrizmRemoveAttributeTemplateTask extends PrizmAstTaskTemplate<IPrizmRemoveAttributeTemplateTask> {
  readonly type = 'remove-attribute';

  public run(
    node: PrizmTemplateNode,
    payload: IPrizmRemoveAttributeTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const attr = payload.attr ?? context?.originName;

    if (!attr) return node;

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

    return { ...node };
  }
}
