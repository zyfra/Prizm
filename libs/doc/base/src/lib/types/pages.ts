import { PrizmDocPage, PrizmDocPageGroup } from '../interfaces/page';

export type PrizmDocPages = ReadonlyArray<PrizmDocPage | PrizmDocPageGroup>;
export type PrizmDocumentationPropertyType =
  | 'input'
  | 'output'
  | 'input-output'
  | 'css-var'
  | 'ng-content'
  | 'form-control'
  | null;

export type PrizmPageInfo = { header: string; package: string; type: string };
export type PrizmPageComponentInfoEvent = {
  selector: string;
  key: string;
  allOutputs: string[];
  allInputs: string[];
  notListenerInputs: string[];
  unnecessaryInputs: string[];
  unnecessaryOutputs: string[];
  notListenerOutputs: string[];
};
export type PrizmPageComponentEvent = {
  event: string;
  key: string;
  data: unknown;
  hasNotListener: boolean;

  type: string;
  page: PrizmPageInfo;
};
