import { InjectionToken } from '@angular/core';

export type PrizmFileUploadOptions = {
  showRetryButtons: boolean;
  statusNames: {
    idle: string;
    progress: string;
    warning: string;
    success: string;
  };
};

export const prizmFileUploadDefaultOptions: PrizmFileUploadOptions = {
  showRetryButtons: true,
  statusNames: {
    idle: 'status__idle',
    progress: 'status__progress',
    warning: 'status__warning',
    success: 'status__success',
  },
};

export const PRIZM_FILEUPLOAD_OPTIONS = new InjectionToken<Partial<PrizmFileUploadOptions>>(
  'Prizm file upload options'
);
