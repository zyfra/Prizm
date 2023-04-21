import { PrizmCodeTaskAction } from '../model';

export interface IPrizmAddImportsToNgModuleCodeTask extends PrizmCodeTaskAction<'add-imports-to-ng-module'> {
  payload: IPrizmAddImportsToNgModuleCodeTaskPayload;
}

export interface IPrizmAddImportsToNgModuleCodeTaskPayload {
  newModule: string;
  comment: string;
}
