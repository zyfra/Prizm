import { IPrizmRunTasksOnNodeTemplateTask, IPrizmRunTasksOnNodeTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
export declare class PrizmRunTasksOnNodeTemplateTask extends PrizmAstTaskTemplate<IPrizmRunTasksOnNodeTemplateTask> {
    readonly type = "run-tasks-on-node";
    run(node: PrizmTemplateNode, payload: IPrizmRunTasksOnNodeTemplateTaskPayload<any>, context: PrizmAstTemplateContext): PrizmTemplateNode;
}
