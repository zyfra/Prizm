import { IPrizmCallWithNewSourceTemplateTask, IPrizmCallWithNewSourceTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';
import {
  IPrizmSaveToCallOnDemandTemplateTaskStorageData,
  PrizmSaveToCallOnDemandTemplateTaskType,
} from '../save-to-call-on-demand';

export class PrizmCallWithNewSourceTemplateTask extends PrizmAstTaskTemplate<IPrizmCallWithNewSourceTemplateTask> {
  readonly type = 'call-with-new-source';

  public run(
    node: PrizmTemplateNode,
    payload: IPrizmCallWithNewSourceTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const fullStorageByType = context.storage.getByType(PrizmSaveToCallOnDemandTemplateTaskType);
    const ids = Array.isArray(payload.id) ? payload.id : [payload.id];
    for (const id of ids) {
      const storage = fullStorageByType?.[id] as IPrizmSaveToCallOnDemandTemplateTaskStorageData;

      if (!storage) continue;

      node = context.processor.runAction(node, storage.action, ({ task }) => ({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        task: task as any,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        sourceNode: storage.context.sourceNode,
        ...storage.context,
      }));
    }

    return { ...node };
  }
}
