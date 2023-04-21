import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmCommentContentTemplateTask extends PrizmTemplateTaskAction<'comment-content'> {
  payload: IPrizmCommentContentTemplateTaskPayload;
}

export type IPrizmCommentContentTemplateTaskPayload = {};
