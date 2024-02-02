import { IPrizmChangeNameTemplateTask, IPrizmChangeNameTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
/**
 * PrizmChangeNameTemplateTask class is responsible for changing the name of a PrizmNode.
 */
export declare class PrizmChangeNameTemplateTask extends PrizmAstTaskTemplate<IPrizmChangeNameTemplateTask> {
    readonly type = "change-name";
    /**
     * The `run` method processes the given node, payload and context to change the name of the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmChangeNameTemplateTaskPayload containing the new name for the node.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the updated name.
     */
    run(node: PrizmTemplateNode, payload: IPrizmChangeNameTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
