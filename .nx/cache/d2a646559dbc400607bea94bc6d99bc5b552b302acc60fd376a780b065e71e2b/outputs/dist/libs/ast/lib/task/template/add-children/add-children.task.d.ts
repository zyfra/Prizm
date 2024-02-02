import { IPrizmAddChildrenTemplateTask, IPrizmAddChildrenTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
export declare class PrizmAddChildrenTemplateTask extends PrizmAstTaskTemplate<IPrizmAddChildrenTemplateTask> {
    readonly type = "add-children";
    run(node: PrizmTemplateNode, payload: IPrizmAddChildrenTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
