import { prizmAstRemoveByAttrName, PrizmNode } from '@prizm-ui/ast';
import { IPrizmMoveToContentTemplateTask, IPrizmMoveToContentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { prizmAstGetOutputBytAttrForTemplate } from '../util';
import { PrizmAstTaskTemplate } from '../abstract';

export class PrizmMoveToContentTemplateTask extends PrizmAstTaskTemplate<IPrizmMoveToContentTemplateTask> {
  readonly type = 'move-to-content';

  public run(
    node: PrizmNode,
    payload: IPrizmMoveToContentTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmNode {
    const attr = payload.attr || context.originName;
    if (!attr) return node;

    const content = prizmAstGetOutputBytAttrForTemplate(node.attrs, attr);

    node.attrs = prizmAstRemoveByAttrName(node.attrs, attr);

    if (content) {
      node.children = [
        {
          type: 'text',
          content,
        } as any,
      ];
    }

    return { ...node };
  }
}
