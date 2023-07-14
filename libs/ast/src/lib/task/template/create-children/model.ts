import { PrizmTemplateTaskAction } from '../model';
import { PrizmTemplateNode } from '../task';

export interface IPrizmCreateChildrenTemplateTask extends PrizmTemplateTaskAction<'create-children'> {
  payload: IPrizmCreateChildrenTemplateTaskPayload;
}

export type IPrizmCreateChildrenTemplateTaskPayload = Pick<PrizmTemplateNode, 'attrs' | 'name' | 'children'> &
  Partial<Pick<PrizmTemplateNode, 'type' | 'voidElement'>>;
