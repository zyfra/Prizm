import { IPrizmNotSupportedTemplateTask, IPrizmNotSupportedTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
/**
 * PrizmNotSupportedTemplateTask class is responsible for handling not supported attributes in a PrizmNode.
 */
export declare class PrizmNotSupportedTemplateTask extends PrizmAstTaskTemplate<IPrizmNotSupportedTemplateTask> {
    readonly type = "not-supported";
    /**
     * The `run` method processes the given node, payload and context to handle not supported attributes in the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmNotSupportedTemplateTaskPayload containing the not supported attribute.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with a comment added for the not supported attribute.
     */
    run(node: PrizmTemplateNode, payload: IPrizmNotSupportedTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
