import { PrizmAstCodeTaskAction } from '../model';

export interface IPrizmAddImportsToNgModuleCodeTask
  extends PrizmAstCodeTaskAction<'add-imports-to-ng-module'> {
  payload: IPrizmAddImportsToNgModuleCodeTaskPayload;
}

export interface IPrizmAddImportsToNgModuleCodeTaskPayload {
  newModule: string;
  comment: string;
  moduleToFind: string;
}
