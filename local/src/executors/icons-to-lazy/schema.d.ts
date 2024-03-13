export interface IconsToLazyExecutorSchema {
  prefix?: string;
  pathToFolder: string;
  exportName?: string;
  pathToOutputFile: string;
  createNgPackage?: boolean;

  generateIconSet?: boolean;
  iconSetNameExportName?: string;
  iconSetNameFileName?: string;
}
