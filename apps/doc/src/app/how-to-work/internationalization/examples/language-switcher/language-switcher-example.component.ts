import { Component, Self } from '@angular/core';
import {
  PRIZM_RUSSIAN_LANGUAGE,
  PrizmLanguageName,
  prizmLanguageSwitcher,
  PrizmLanguageSwitcher,
} from '@prizm-ui/i18n';
import { BehaviorSubject, of } from 'rxjs';
import { PRIZM_ENGLISH_FILE_UPLOAD } from '../../../../components/file-upload/examples/i18n/file-upload-i18n-example.component';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { PrizmFileValidationErrors, PrizmFilesProgress } from '@prizm-ui/components';

@Component({
  selector: 'prizm-language-switcher-example',
  templateUrl: './language-switcher-example.component.html',
  styles: [
    `
      button:first-child {
        margin-right: 16px;
      }
    `,
  ],
  providers: [
    ...prizmLanguageSwitcher(async lang => {
      if (lang === ('ru' as PrizmLanguageName)) return PRIZM_RUSSIAN_LANGUAGE;
      if (lang === ('en' as PrizmLanguageName))
        return { ...PRIZM_RUSSIAN_LANGUAGE, ...PRIZM_ENGLISH_FILE_UPLOAD };

      return PRIZM_RUSSIAN_LANGUAGE;
    }),
    PrizmLanguageSwitcher,
  ],
})
export class PrizmLanguageSwitcherExampleComponent {
  toastService: any;
  constructor(
    @Self()
    private readonly prizmLanguageSwitcher: PrizmLanguageSwitcher,
    private http: HttpClient
  ) {}

  public changeLanguage(lang: string) {
    this.prizmLanguageSwitcher.setLanguage(lang as PrizmLanguageName);
  }

  progress$$ = new BehaviorSubject<PrizmFilesProgress>({});
  files: Array<File> = [];

  public onFilesChange(files: Array<File>): void {
    this.files = files;
    if (this.files.length > 0) {
      this.send();
    }
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
      title: `Максимальное количество файлов превышено`,
      appearance: 'warning',
      timer: 5000,
    });
  }

  public send(): void {
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

  public ngOnDestroy(): void {
    this.progress$$.complete();
  }
}
