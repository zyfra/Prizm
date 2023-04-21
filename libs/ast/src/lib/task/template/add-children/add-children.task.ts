import { IPrizmAddChildrenTemplateTask, IPrizmAddChildrenTemplateTaskPayload } from './model';
import { PrizmAstTemplateContext } from '../model';
import { PrizmAstTaskTemplate } from '../abstract';
import { PrizmTemplateNode } from '../task';

export class PrizmAddChildrenTemplateTask extends PrizmAstTaskTemplate<IPrizmAddChildrenTemplateTask> {
  readonly type = 'add-children';

  public run(
    node: PrizmTemplateNode,
    payload: IPrizmAddChildrenTemplateTaskPayload,
    context: PrizmAstTemplateContext
  ): PrizmTemplateNode {
    const attr = payload.name;
    if (!attr) return node;

    const childNode: PrizmTemplateNode = {
      name: payload.name,
      attrs: payload.attrs ?? {},
      children: payload.children ?? [],
      type: payload.type ?? 'tag',
      voidElement: payload.voidElement ?? false,
    };

    childNode.children.push(...(node.children ?? []));

    node.children = [childNode];

    return { ...node };
  }
}
