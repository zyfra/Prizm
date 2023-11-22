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
    idle: string;
    progress: string;
    warning: string;
    success: string;
  };
};

export type PrizmFilesMap = Map<string, { file: File; progress: number; error: boolean; url?: string }>;
