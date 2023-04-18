import { PrizmNode } from '@prizm-ui/ast';
import { IPrizmAddAttributeTemplateTask, IPrizmAddAttributeTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';

export class PrizmAddAttributeTemplateTask extends PrizmAstTaskTemplate<IPrizmAddAttributeTemplateTask> {
  readonly type = 'add-attribute';

  public run(
    node: PrizmNode,
    payload: IPrizmAddAttributeTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmNode {
    const attr = payload.attr;
    if (!attr) return node;

    return {
      ...node,
      attrs: {
        ...node.attrs,
        [attr]: null,
      },
    };
  }
}
