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
    idle: 'Ожидание загрузки',
    progress: 'Загрузка',
    warning: 'Ошибка',
    success: 'Загружено',
  },
};

export const PRIZM_FILEUPLOAD_OPTIONS = new InjectionToken<Partial<PrizmFileUploadOptions>>(
  'Prizm file upload options'
);
