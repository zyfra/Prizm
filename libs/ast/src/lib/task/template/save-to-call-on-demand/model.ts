import { PrizmAstTemplateContext, PrizmTemplateTaskAction } from '../model';
export const PrizmSaveToCallOnDemandTemplateTaskType = 'save-to-call-on-demand';

export interface IPrizmSaveToCallOnDemandTemplateTask
  extends PrizmTemplateTaskAction<typeof PrizmSaveToCallOnDemandTemplateTaskType> {
  payload: IPrizmSaveToCallOnDemandTemplateTaskPayload;
}
export interface IPrizmSaveToCallOnDemandTemplateTaskPayload {
  action: {
    payload?: any;
    type: string;
  };
  id: string;
}
export interface IPrizmSaveToCallOnDemandTemplateTaskStorageData {
  action: {
    payload: any;
    type: string;
  };
  context: PrizmAstTemplateContext;
}
