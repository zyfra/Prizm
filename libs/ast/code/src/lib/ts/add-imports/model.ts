import { PrizmCodeTaskAction } from '../model';

export interface IPrizmAddImportsIfNeededCodeTask extends PrizmCodeTaskAction<'add-imports-if-needed'> {
  payload: IPrizmAddImportsIfNeededCodeTaskPayload;
}

export interface IPrizmAddImportsIfNeededCodeTaskPayload {
  namedImports: string[];
  importToAdd: string;
  targetImport: string;
  targetNamedImports?: string[];
  commentBeforeImport?: string;
}
