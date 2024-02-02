import { IPrizmSaveToCallOnDemandTemplateTask, IPrizmSaveToCallOnDemandTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
export declare class PrizmSaveToCallOnDemandTemplateTask extends PrizmAstTaskTemplate<IPrizmSaveToCallOnDemandTemplateTask> {
    readonly type = "save-to-call-on-demand";
    run(node: PrizmTemplateNode, payload: IPrizmSaveToCallOnDemandTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
