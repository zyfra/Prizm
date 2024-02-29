export interface IconsToLazyExecutorSchema {
  prefix?: string;
  pathToFolder: string;
  exportName?: string;
  pathToOutputFile: string;

  generateIconSet?: boolean;
  iconSetNameExportName?: string;
  iconSetNameFileName?: string;
}
