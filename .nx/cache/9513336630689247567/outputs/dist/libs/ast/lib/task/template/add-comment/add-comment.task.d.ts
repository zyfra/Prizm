import { IPrizmAddCommentTemplateTask, IPrizmAddCommentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
/**
 * PrizmAddCommentTemplateTask class is responsible for adding a comment to a PrizmNode.
 */
export declare class PrizmAddCommentTemplateTask extends PrizmAstTaskTemplate<IPrizmAddCommentTemplateTask> {
    readonly type = "add-comment";
    /**
     * The `run` method processes the given node, payload and context to add a comment to the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmAddCommentTemplateTaskPayload containing the comment to be added.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the comment added.
     */
    run(node: PrizmTemplateNode, payload: IPrizmAddCommentTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
