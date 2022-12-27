import { PrizmDocPage, PrizmDocPageGroup } from '../interfaces/page';

export type PrizmDocPages = ReadonlyArray<PrizmDocPage | PrizmDocPageGroup>;
export type PrizmDocumentationPropertyType = 'input' | 'output' | 'input-output' | null;

export type PrizmPageInfo = {header: string, package: string, type: string};
export type PrizmPageComponentInfoEvent = {
  selector: string,
  allOutputs: string[],
  allInputs: string[],
  notListenerInputs: string[],
  notListenerOutputs: string[],
}
export type PrizmPageComponentEvent = {
  // type: PrizmDocumentationPropertyType,
  event: string,
  data: unknown,
  hasNotListener: boolean,

  type: string,
  page: PrizmPageInfo
}
