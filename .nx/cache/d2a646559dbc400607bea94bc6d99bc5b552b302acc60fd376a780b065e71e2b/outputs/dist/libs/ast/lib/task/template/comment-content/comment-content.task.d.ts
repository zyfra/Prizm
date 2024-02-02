import { IPrizmCommentContentTemplateTask, IPrizmCommentContentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
export declare class PrizmCommentContentTemplateTask extends PrizmAstTaskTemplate<IPrizmCommentContentTemplateTask> {
    readonly type = "comment-content";
    run(node: PrizmTemplateNode, payload: IPrizmCommentContentTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
