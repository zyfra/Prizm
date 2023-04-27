import { IPrizmAstTaskTemplate, PrizmAstTemplateContext, PrizmTemplateTaskAction } from './model';
import { PrizmTemplateNode } from './task';

export abstract class PrizmAstTaskTemplate<T extends PrizmTemplateTaskAction<any>>
  implements IPrizmAstTaskTemplate<T>
{
  abstract type: T['type'];
  public readonly payload: T['payload'];

  // @PrizmLogExecution({
  //   logArguments: true,
  //   logResult: true,
  //   logExecutionTime: true,
  // })
  public create(payload: T['payload']): T {
    return {
      type: this.type,
      payload: payload,
    } as T;
  }

  abstract run(
    node: PrizmTemplateNode,
    payload: T['payload'],
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode;
}
