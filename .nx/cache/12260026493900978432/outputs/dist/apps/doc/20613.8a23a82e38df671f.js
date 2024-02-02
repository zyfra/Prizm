'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [20613],
  {
    20613: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE, PrizmLanguageFileUpload } from '@prizm-ui/i18n';\nimport { BehaviorSubject, of } from 'rxjs';\nimport { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';\nimport { PrizmFileValidationErrors, PrizmFilesProgress, PrizmToastService } from '@prizm-ui/components';\n\nexport const PRIZM_ENGLISH_FILE_UPLOAD: PrizmLanguageFileUpload = {\n  fileUpload: {\n    dropzone__description: 'Select a file or drag it to this area',\n    dropzone__title: 'File upload',\n    btn__select: 'Browse',\n    idle: 'Waiting to upload',\n    progress: 'Uploading',\n    warning: 'Error',\n    success: 'Uploaded',\n  },\n};\n\n@Component({\n  selector: 'prizm-file-upload-i18n-example',\n  templateUrl: './file-upload-i18n-example.component.html',\n  providers: [\n    {\n      provide: PRIZM_LANGUAGE,\n      useValue: of({\n        ...PRIZM_RUSSIAN_LANGUAGE,\n        ...PRIZM_ENGLISH_FILE_UPLOAD,\n      }),\n    },\n  ],\n})\nexport class PrizmFileUploadI18nExampleComponent {\n  progress$$ = new BehaviorSubject<PrizmFilesProgress>({});\n  files: Array<File> = [];\n  disabled = false;\n\n  public onFilesChange(files: Array<File>): void {\n    this.files = files;\n    if (this.files.length > 0) {\n      this.send();\n    }\n  }\n\n  public onfilesValidationErrors(errors: PrizmFileValidationErrors): void {\n    for (const filename of Object.keys(errors)) {\n      this.toastService.create(JSON.stringify(errors[filename]), {\n        title: `\u0424\u0430\u0439\u043b ${filename} \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e`,\n        appearance: 'warning',\n        timer: 5000,\n      });\n    }\n  }\n\n  public onFilesCountError(fileNames: Array<string>): void {\n    this.toastService.create(`\u0424\u0430\u0439\u043b\u044b ${fileNames.join(' ,')} \u043d\u0435 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b`, {\n      title: `\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e`,\n      appearance: 'warning',\n      timer: 5000,\n    });\n  }\n\n  public send(): void {\n    this.disabled = true;\n    const formData = new FormData();\n    for (const file of this.files) {\n      formData.append(file.name, file);\n    }\n\n    this.http\n      .post('/fakeFileUpload', formData, {\n        reportProgress: true,\n        observe: 'events',\n      })\n      .subscribe(\n        (event: HttpEvent<any>) => {\n          switch (event.type) {\n            case HttpEventType.Sent:\n              break;\n            case HttpEventType.Response: {\n              this.disabled = false;\n\n              if (event.status >= 200 && event.status < 300) {\n                for (const file of this.files) {\n                  this.progress$$.next({\n                    ...this.progress$$.value,\n                    [file.name]: { progress: 100, error: false },\n                  });\n                }\n              } else {\n                for (const file of this.files) {\n                  this.progress$$.next({\n                    ...this.progress$$.value,\n                    [file.name]: { error: true },\n                  });\n                }\n              }\n\n              break;\n            }\n            case HttpEventType.UploadProgress: {\n              for (const file of this.files) {\n                this.progress$$.next({\n                  ...this.progress$$.value,\n                  [file.name]: {\n                    progress: Math.round((event.loaded / (event?.total ?? 0)) * 100),\n                    error: false,\n                  },\n                });\n              }\n\n              break;\n            }\n          }\n        },\n        error => {\n          console.log(error);\n        }\n      );\n  }\n\n  public retry(file: File): void {\n    this.disabled = true;\n    const formData = new FormData();\n\n    formData.append(file.name, file);\n\n    this.http\n      .post('/fakeFileUpload', formData, {\n        reportProgress: true,\n        observe: 'events',\n      })\n      .subscribe(\n        (event: HttpEvent<any>) => {\n          switch (event.type) {\n            case HttpEventType.Sent:\n              break;\n            case HttpEventType.Response: {\n              this.disabled = false;\n\n              if (event.status >= 200 && event.status < 300) {\n                this.progress$$.next({\n                  ...this.progress$$.value,\n                  [file.name]: { progress: 100, error: false },\n                });\n              } else {\n                this.progress$$.next({\n                  ...this.progress$$.value,\n                  [file.name]: { error: true },\n                });\n              }\n\n              break;\n            }\n            case HttpEventType.UploadProgress: {\n              this.progress$$.next({\n                ...this.progress$$.value,\n                [file.name]: {\n                  progress: Math.round((event.loaded / (event.total ?? 0)) * 100),\n                  error: false,\n                },\n              });\n\n              break;\n            }\n          }\n        },\n        error => {\n          console.log(error);\n        }\n      );\n  }\n\n  constructor(private readonly toastService: PrizmToastService, private http: HttpClient) {}\n\n  public ngOnDestroy(): void {\n    this.progress$$.complete();\n  }\n}\n";
    },
  },
]);
