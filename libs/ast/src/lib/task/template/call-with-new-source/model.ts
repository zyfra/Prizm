import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmCallWithNewSourceTemplateTask extends PrizmTemplateTaskAction<'call-with-new-source'> {
  payload: IPrizmCallWithNewSourceTemplateTaskPayload;
}

export interface IPrizmCallWithNewSourceTemplateTaskPayload {
  id: string | string[];
}
