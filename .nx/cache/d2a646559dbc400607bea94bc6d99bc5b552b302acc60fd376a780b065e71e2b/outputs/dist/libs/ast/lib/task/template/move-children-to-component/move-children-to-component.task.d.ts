import { IPrizmMoveContentToComponentTemplateTask, IPrizmMoveContentToComponentTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
/**
 * PrizmMoveContentToComponentTemplateTask class is responsible for moving the content of a node
 * into a new component.
 */
export declare class PrizmMoveContentToComponentTemplateTask extends PrizmAstTaskTemplate<IPrizmMoveContentToComponentTemplateTask> {
    readonly type = "move-content-to-component";
    /**
     * The `run` method processes the given node, payload and context to move the node's content
     * into a new component.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmMoveContentToComponentTemplateTaskPayload containing the data for the new component.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with its content moved to the new component.
     */
    run(node: PrizmTemplateNode, payload: IPrizmMoveContentToComponentTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
