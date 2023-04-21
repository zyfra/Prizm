import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmRemoveAttributeTemplateTask extends PrizmTemplateTaskAction<'remove-attribute'> {
  payload: IPrizmRemoveAttributeTemplateTaskPayload;
}

export interface IPrizmRemoveAttributeTemplateTaskPayload {
  attr?: string;
}
