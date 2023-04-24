import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmMoveToContentTemplateTask extends PrizmTemplateTaskAction<'move-to-content'> {
  payload: IPrizmMoveToContentTemplateTaskPayload;
}

export interface IPrizmMoveToContentTemplateTaskPayload {
  attr?: string;
  notClearChildren?: boolean;
}
