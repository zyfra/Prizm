import {
  IPrizmSaveToCallOnDemandTemplateTask,
  IPrizmSaveToCallOnDemandTemplateTaskPayload,
  IPrizmSaveToCallOnDemandTemplateTaskStorageData,
  PrizmSaveToCallOnDemandTemplateTaskType,
} from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';

export class PrizmSaveToCallOnDemandTemplateTask extends PrizmAstTaskTemplate<IPrizmSaveToCallOnDemandTemplateTask> {
  readonly type = PrizmSaveToCallOnDemandTemplateTaskType;

  public run(
    node: PrizmTemplateNode,
    payload: IPrizmSaveToCallOnDemandTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    context.storage.updateByType(this.type, {
      [payload.id]: {
        action: payload.action,
        context: context,
      } as IPrizmSaveToCallOnDemandTemplateTaskStorageData,
    });

    // Return the modified node with the attributes renamed
    return { ...node };
  }
}
