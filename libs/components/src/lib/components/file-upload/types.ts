import { PrizmIconsEnum } from '@prizm-ui/icons/full/source/prizm-icons.model';

export type PrizmFileValidationErrors = {
  accept?: { expect: string; current: string };
  size?: { max: number; current: number };
};

export type PrizmFilesProgress = {
  [filename: string]: IPrizmFileOptions;
};

export interface IPrizmFileOptions {
  progress?: number;
  error?: boolean;
  actions?: PrizmFileItemAction[];
}

export interface IPrizmFileMap extends Required<IPrizmFileOptions> {
  file: File;
  url?: string;
}

export type PrizmFileUploadOptions = {
  showRetryButtons: boolean;
};

export type PrizmFilesMap = Map<string, IPrizmFileMap>;

export type PrizmFileItemAction = {
  event: string;
  icon: PrizmIconsEnum;
  disabled?: boolean;
};

export type PrizmActionEvent = { event: string; data: string };
