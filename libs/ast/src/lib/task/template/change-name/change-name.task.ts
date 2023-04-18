import { PrizmNode } from '@prizm-ui/ast';
import { IPrizmChangeNameTemplateTask, IPrizmChangeNameTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';

export class PrizmChangeNameTemplateTask extends PrizmAstTaskTemplate<IPrizmChangeNameTemplateTask> {
  readonly type = 'change-name';

  public run(
    node: PrizmNode,
    payload: IPrizmChangeNameTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmNode {
    const { name } = payload;
    if (!name) return node;

    return { ...node, name };
  }
}
