import { PrizmTemplateTaskAction } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateTask } from '../task';

export interface IPrizmRunTasksOnNodeTemplateTask extends PrizmTemplateTaskAction<'run-tasks-on-node'> {
  payload: IPrizmRunTasksOnNodeTemplateTaskPayload<any>;
}

export interface IPrizmRunTasksOnNodeTemplateTaskPayload<T extends PrizmAstTaskTemplate<any>> {
  tasks: PrizmTemplateTask[];
  runOnChildren?: boolean;
  dontRunOnOnMain?: boolean;
}
