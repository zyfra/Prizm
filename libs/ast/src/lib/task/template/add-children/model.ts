import { PrizmTemplateTaskAction } from '../model';
import { PrizmTemplateNode } from '../task';

export interface IPrizmAddChildrenTemplateTask extends PrizmTemplateTaskAction<'add-children'> {
  payload: IPrizmAddChildrenTemplateTaskPayload;
}

export type IPrizmAddChildrenTemplateTaskPayload = Pick<PrizmTemplateNode, 'attrs' | 'name' | 'children'> &
  Partial<Pick<PrizmTemplateNode, 'type' | 'voidElement'>>;
