import { IPrizmRemoveAttributeTemplateTask, IPrizmRemoveAttributeTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
export declare class PrizmRemoveAttributeTemplateTask extends PrizmAstTaskTemplate<IPrizmRemoveAttributeTemplateTask> {
    readonly type = "remove-attribute";
    run(node: PrizmTemplateNode, payload: IPrizmRemoveAttributeTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
