import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmNotSupportedTemplateTask extends PrizmTemplateTaskAction<'not-supported'> {
  payload: IPrizmNotSupportedTemplateTaskPayload;
}

export interface IPrizmNotSupportedTemplateTaskPayload {
  attr?: string;
  extraComment?: string;
}
