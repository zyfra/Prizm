import { IPrizmRenameTemplateTask, IPrizmRenameTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
/**
 * PrizmRenameTemplateTask class is responsible for renaming attributes in a PrizmNode.
 */
export declare class PrizmRenameTemplateTask extends PrizmAstTaskTemplate<IPrizmRenameTemplateTask> {
    readonly type = "rename";
    /**
     * The `run` method processes the given node, payload, and context to rename attributes in the PrizmNode.
     *
     * @param node - The PrizmNode to be processed.
     * @param payload - The IPrizmRenameTemplateTaskPayload containing the old and new attribute names.
     * @param context - The PrizmAstTemplateContext.
     * @returns - The modified PrizmNode with the attributes renamed.
     */
    run(node: PrizmTemplateNode, payload: IPrizmRenameTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
