import { IPrizmCallWithNewSourceTemplateTask, IPrizmCallWithNewSourceTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
export declare class PrizmCallWithNewSourceTemplateTask extends PrizmAstTaskTemplate<IPrizmCallWithNewSourceTemplateTask> {
    readonly type = "call-with-new-source";
    run(node: PrizmTemplateNode, payload: IPrizmCallWithNewSourceTemplateTaskPayload, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
