import { IPrizmCommentContentTemplateTask, IPrizmCommentContentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import { prizmAstHtmlStringify } from '../../../html/html-stringify';
import { PrizmAstHtmlItem } from '../../../html/types';

export class PrizmCommentContentTemplateTask extends PrizmAstTaskTemplate<IPrizmCommentContentTemplateTask> {
  readonly type = 'comment-content';

  public run(
    node: PrizmTemplateNode,
    payload: IPrizmCommentContentTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const htmlContent = prizmAstHtmlStringify((node.children ?? []) as PrizmAstHtmlItem[]);

    if (htmlContent) {
      node.children = [
        {
          type: 'comment',
          comment: htmlContent,
        } as any,
      ];
    }

    return { ...node };
  }
}
