import { IPrizmMoveToContentTemplateTask, IPrizmMoveToContentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
/**
 * PrizmMoveToContentTemplateTask class is responsible for moving the attribute value to the content of a PrizmNode.
 */
export declare class PrizmMoveToContentTemplateTask extends PrizmAstTaskTemplate<IPrizmMoveToContentTemplateTask> {
    readonly type = "move-to-content";
    /**
     * The `run` method processes the given node, payload, and context to move the attribute value to the content of the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmMoveToContentTemplateTaskPayload containing the attribute information.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the attribute value moved to the content.
     */
    run(node: PrizmTemplateNode, payload: IPrizmMoveToContentTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
