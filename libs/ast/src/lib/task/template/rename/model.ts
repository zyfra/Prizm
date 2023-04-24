import { PrizmTemplateTaskAction } from '../model';

export interface IPrizmRenameTemplateTask extends PrizmTemplateTaskAction<'rename'> {
  payload: IPrizmRenameTemplateTaskPayload;
}

export interface IPrizmRenameTemplateTaskPayload {
  newAttrName?: string;
  setExactNewAttrName?: boolean;
  oldAttrName?: string;
  value?: unknown;
  needFixApi?: boolean;
}
