import { Component } from '@angular/core';
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE, PrizmLanguageFileUpload } from '@prizm-ui/i18n';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { PrizmFileValidationErrors, PrizmFilesProgress, PrizmToastService } from '@prizm-ui/components';

export const PRIZM_ENGLISH_FILE_UPLOAD: PrizmLanguageFileUpload = {
  fileUpload: {
    dropzone__description: 'Select a file or drag it to this area',
    dropzone__title: 'File upload',
    btn__select: 'Browse',
    btn__select_hint_error: 'The maximum number of uploaded files has been reached',
    file_size__byte: 'byte/bytes',
    file_size__kb: 'KB',
    file_size__mb: 'MB',
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
export class PrizmFileUploadI18nExampleComponent {
  progress$$ = new BehaviorSubject<PrizmFilesProgress>({});
  files: Array<File> = [];
  disabled = false;
  acceptedTypes = 'image/*';
  maxFiles = 3;

  public onFilesChange(files: Array<File>): void {
    const filesToUpload = files.filter(file => !this.files.some(el => el === file));

    if (filesToUpload.length > 0) {
      this.send(filesToUpload);
    }

    this.files = files;
  }

  public onfilesValidationErrors(errors: { [key: string]: PrizmFileValidationErrors }): void {
    for (const filename of Object.keys(errors)) {
      this.toastService.create(JSON.stringify(errors[filename]), {
        title: `Файл ${filename} не прошел валидацию`,
        appearance: 'warning',
        timer: 5000,
      });
    }
  }

  public onFilesCountError(fileNames: Array<string>): void {
    this.toastService.create(`Файлы ${fileNames.join(' ,')} не были добавлены`, {
      title: `Максимальное количество файлов превышено`,
      appearance: 'warning',
      timer: 5000,
    });
  }

  public send(files: File[]): void {
    this.disabled = true;
    const formData = new FormData();
    for (const file of files) {
      formData.append(file.name, file);
    }

    this.http
      .post('/fakeFileUpload', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe(
        (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              break;
            case HttpEventType.Response: {
              this.disabled = false;

              if (event.status >= 200 && event.status < 300) {
                for (const file of files) {
                  this.progress$$.next({
                    ...this.progress$$.value,
                    [file.name]: { progress: 100, error: false },
                  });
                }
              } else {
                for (const file of files) {
                  this.progress$$.next({
                    ...this.progress$$.value,
                    [file.name]: { error: true },
                  });
                }
              }

              break;
            }
            case HttpEventType.UploadProgress: {
              for (const file of files) {
                this.progress$$.next({
                  ...this.progress$$.value,
                  [file.name]: {
                    progress: Math.round((event.loaded / (event?.total ?? 0)) * 100),
                    error: false,
                  },
                });
              }

              break;
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  public retry(file: File): void {
    this.disabled = true;
    const formData = new FormData();

    formData.append(file.name, file);

    this.http
      .post('/fakeFileUpload', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe(
        (event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              break;
            case HttpEventType.Response: {
              this.disabled = false;

              if (event.status >= 200 && event.status < 300) {
                this.progress$$.next({
                  ...this.progress$$.value,
                  [file.name]: { progress: 100, error: false },
                });
              } else {
                this.progress$$.next({
                  ...this.progress$$.value,
                  [file.name]: { error: true },
                });
              }

              break;
            }
            case HttpEventType.UploadProgress: {
              this.progress$$.next({
                ...this.progress$$.value,
                [file.name]: {
                  progress: Math.round((event.loaded / (event.total ?? 0)) * 100),
                  error: false,
                },
              });

              break;
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }

  constructor(private readonly toastService: PrizmToastService, private http: HttpClient) {}

  public ngOnDestroy(): void {
    this.progress$$.complete();
  }
}
