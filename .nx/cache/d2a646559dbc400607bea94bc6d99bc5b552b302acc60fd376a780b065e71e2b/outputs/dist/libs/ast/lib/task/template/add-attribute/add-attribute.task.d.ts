import { IPrizmAddAttributeTemplateTask, IPrizmAddAttributeTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
/**
 * PrizmAddAttributeTemplateTask class is responsible for adding an attribute to a PrizmNode.
 */
export declare class PrizmAddAttributeTemplateTask extends PrizmAstTaskTemplate<IPrizmAddAttributeTemplateTask> {
    readonly type = "add-attribute";
    /**
     * The `run` method processes the given node, payload and context to add an attribute to the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmAddAttributeTemplateTaskPayload containing the attribute to be added.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the attribute added.
     */
    run(node: PrizmTemplateNode, payload: IPrizmAddAttributeTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
