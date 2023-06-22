import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmChangeNameTemplateTask extends PrizmTemplateTaskAction<'change-name'> {
  payload: IPrizmChangeNameTemplateTaskPayload;
}

export interface IPrizmChangeNameTemplateTaskPayload {
  name?: string;
}
