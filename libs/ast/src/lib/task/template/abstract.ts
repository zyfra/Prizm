import { IPrizmAstTaskTemplate, PrizmAstTemplateContext, PrizmTemplateTaskAction } from './model';
import { PrizmNode } from './task';
import { PrizmLogExecution } from '@prizm-ui/helpers';

export abstract class PrizmAstTaskTemplate<T extends PrizmTemplateTaskAction<any>>
  implements IPrizmAstTaskTemplate<T>
{
  abstract type: T['type'];
  public readonly payload: T['payload'];

  @PrizmLogExecution({
    logArguments: true,
    logResult: true,
    logExecutionTime: true,
  })
  public create(payload: T['payload']): T {
    return {
      type: this.type,
      payload: payload,
    } as T;
  }

  abstract run(node: PrizmNode, payload: T['payload'], context: PrizmAstTemplateContext): PrizmNode;
}
