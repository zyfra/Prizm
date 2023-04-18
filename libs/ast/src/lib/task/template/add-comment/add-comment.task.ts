import { PrizmNode } from '@prizm-ui/ast';
import { IPrizmAddCommentTemplateTask, IPrizmAddCommentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';

export class PrizmAddCommentTemplateTask extends PrizmAstTaskTemplate<IPrizmAddCommentTemplateTask> {
  readonly type = 'add-comment';

  public run(
    node: PrizmNode,
    payload: IPrizmAddCommentTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmNode {
    const { comment } = payload;
    const attr = payload.attr ?? context?.originName;
    if (!attr) return node;

    const children = node.children ?? [];

    children.push({
      type: 'comment',
      comment,
    } as any);
    node.children = children;
    return { ...node };
  }
}
