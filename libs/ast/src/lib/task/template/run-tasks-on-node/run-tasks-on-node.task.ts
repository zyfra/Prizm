import { IPrizmRunTasksOnNodeTemplateTask, IPrizmRunTasksOnNodeTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import { PrizmLogExecution } from '@prizm-ui/helpers';

export class PrizmRunTasksOnNodeTemplateTask extends PrizmAstTaskTemplate<IPrizmRunTasksOnNodeTemplateTask> {
  readonly type = 'run-tasks-on-node';

  @PrizmLogExecution()
  public run(
    node: PrizmTemplateNode,
    payload: IPrizmRunTasksOnNodeTemplateTaskPayload<any>,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const tasks = payload.tasks ?? [];

    if (!payload.dontRunOnOnMain)
      for (const task of tasks) {
        node = context.processor.processAction(node, task, context);
      }

    if (payload.runOnChildren) {
      const children = node.children ?? [];
      for (const childIdx in children) {
        children[childIdx] = this.run(
          children[childIdx],
          {
            ...payload,
            dontRunOnOnMain: false,
          },
          context
        );
      }
      node.children = children;
    }

    return { ...node };
  }
}
