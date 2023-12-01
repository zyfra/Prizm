import { UploadingStatusEnum } from './file-upload.enums';

export type PrizmFileValidationErrors = {
  accept?: { expect: string; current: string };
  size?: { max: number; current: number };
};

export type PrizmFilesProgress = {
  [filename: string]: {
    progress?: number;
    error?: boolean;
  };
};

export type PrizmFileUploadOptions = {
  showRetryButtons: boolean;
  statusNames?: {
    [key in UploadingStatusEnum]: string;
  };
};

export type PrizmFilesMap = Map<string, { file: File; progress: number; error: boolean; url?: string }>;
