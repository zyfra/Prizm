import { prizmAstRemoveByAttrName, PrizmNode } from '@prizm-ui/ast';
import { IPrizmNotSupportedTemplateTask, IPrizmNotSupportedTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmLogExecution } from '@prizm-ui/helpers';

export class PrizmNotSupportedTemplateTask extends PrizmAstTaskTemplate<IPrizmNotSupportedTemplateTask> {
  readonly type = 'not-supported';

  // @PrizmLogExecution()
  public run(
    node: PrizmNode,
    payload: IPrizmNotSupportedTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmNode {
    const attr = payload.attr ?? context?.originName;
    if (!attr) return node;

    const children = node.children ?? [];
    node.attrs = prizmAstRemoveByAttrName(node.attrs, attr);
    children.push({
      type: 'comment',
      comment: `TODO not supported attr <${attr}>`,
    } as any);

    node.children = children;

    return { ...node };
  }
}
