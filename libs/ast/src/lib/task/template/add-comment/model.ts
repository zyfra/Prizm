import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmAddCommentTemplateTask extends PrizmTemplateTaskAction<'add-comment'> {
  payload: IPrizmAddCommentTemplateTaskPayload;
}

export interface IPrizmAddCommentTemplateTaskPayload {
  attr?: string;
  comment: string;
}
