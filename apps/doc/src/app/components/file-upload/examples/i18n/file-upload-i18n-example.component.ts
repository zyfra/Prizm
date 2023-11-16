import { Component } from '@angular/core';
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE, PrizmLanguageFileUpload } from '@prizm-ui/i18n';
import { of } from 'rxjs';

export const PRIZM_ENGLISH_FILE_UPLOAD: PrizmLanguageFileUpload = {
  fileUpload: {
    dropzone__description: 'Select a file or drag it to this area',
    dropzone__title: 'File upload',
    btn__select: 'Browse',
    idle: 'Waiting to upload',
    progress: 'Uploading',
    warning: 'Error',
    success: 'Uploaded',
  },
};

@Component({
  selector: 'prizm-file-upload-i18n-example',
  templateUrl: './file-upload-i18n-example.component.html',
  providers: [
    {
      provide: PRIZM_LANGUAGE,
      useValue: of({
        ...PRIZM_RUSSIAN_LANGUAGE,
        ...PRIZM_ENGLISH_FILE_UPLOAD,
      }),
    },
  ],
})
export class PrizmFileUploadI18nExampleComponent {}
