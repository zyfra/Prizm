import { PrizmTemplateTaskAction } from '../model';
import { PrizmTemplateNode } from '../task';

export interface IPrizmMoveContentToComponentTemplateTask
  extends PrizmTemplateTaskAction<'move-content-to-component'> {
  payload: IPrizmMoveContentToComponentTemplateTaskPayload;
}

export type IPrizmMoveContentToComponentTemplateTaskPayload = Pick<
  PrizmTemplateNode,
  'attrs' | 'name' | 'children'
> &
  Partial<Pick<PrizmTemplateNode, 'type' | 'voidElement'>>;
