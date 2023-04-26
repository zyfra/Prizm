import { PrizmAstCodeTaskAction } from '../model';

export interface IPrizmAddImportsIfNeededCodeTask extends PrizmAstCodeTaskAction<'add-imports-if-needed'> {
  payload: IPrizmAddImportsIfNeededCodeTaskPayload;
}

export interface IPrizmAddImportsIfNeededCodeTaskPayload {
  namedImports: string[];
  importToAdd: string;
  targetImport: string;
  targetNamedImports?: string[];
  commentBeforeImport?: string;
}
