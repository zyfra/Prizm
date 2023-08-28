import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { PrizmFilesProgress, PrizmFileValidationErrors, PrizmToastService } from '@prizm-ui/components';

import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { BehaviorSubject } from 'rxjs';

@Component({
  templateUrl: './file-upload-example.component.html',
  styleUrls: ['./file-upload-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmFileUploadExampleComponent implements OnDestroy {
  readonly basic: TuiDocExample = {
    TypeScript: import('./examples/basic/basic.component?raw'),
    HTML: import('./examples/basic/basic.component.html?raw'),
  };

  readonly autoUpload: TuiDocExample = {
    TypeScript: import('./examples/auto-upload/auto-upload.component?raw'),
    HTML: import('./examples/auto-upload/auto-upload.component.html?raw'),
  };

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  userContent = 'текст пользователя';

  accept = 'image/*';
  acceptVariants: Array<string> = ['image/*', '.pdf', '.doc, .docx'];

  maxFileSize = 1e6;
  maxFilesCount = 3;
  public multiple = true;

  progress$$ = new BehaviorSubject<PrizmFilesProgress>({});
  files: Array<File> = [];
  disabled = false;

  public onFilesChange(files: Array<File>): void {
    this.files = files;
  }

  public onfilesValidationErrors(errors: PrizmFileValidationErrors): void {
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
      title: `Максимальное колчество файлов превышено`,
      appearance: 'warning',
      timer: 5000,
    });
  }

  public send(): void {
    this.disabled = true;
    const formData = new FormData();
    for (const file of this.files) {
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
                for (const file of this.files) {
                  this.progress$$.next({
                    ...this.progress$$.value,
                    [file.name]: { progress: 100, error: false },
                  });
                }
              } else {
                for (const file of this.files) {
                  this.progress$$.next({
                    ...this.progress$$.value,
                    [file.name]: { error: true },
                  });
                }
              }

              break;
            }
            case HttpEventType.UploadProgress: {
              for (const file of this.files) {
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
