export interface IconsToLazyExecutorSchema {
  prefix?: string;
  pathToFolder: string;
  exportName?: string;
  pathToOutputFile: string;
  createNgPackage?: boolean;
  addExportToSingleFile?: boolean;

  pathToOutputFolderWithNames?: string;
  exportNameWithNames?: string;

  iconArraySetNameExportName?: string;
  pathToOutputFolderForArray?: string;
  generateArraySet?: boolean;

  generateIconSet?: boolean;
  iconSetNameExportName?: string;
  iconSetNameFileName?: string;
}
