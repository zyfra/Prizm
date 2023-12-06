import { InjectionToken } from '@angular/core';
import { PrizmFileUploadOptions } from './types';

export const prizmFileUploadDefaultOptions: PrizmFileUploadOptions = {
  showRetryButtons: true,
};

export const PRIZM_FILEUPLOAD_OPTIONS = new InjectionToken<Partial<PrizmFileUploadOptions>>(
  'Prizm file upload options'
);
