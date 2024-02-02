'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [20274],
  {
    20274: e => {
      e.exports =
        "import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';\nimport { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';\nimport { PrizmFilesProgress, PrizmFileValidationErrors, PrizmToastService } from '@prizm-ui/components';\nimport { BehaviorSubject } from 'rxjs';\n\n@Component({\n  selector: 'prizm-file-auto-upload-example',\n  templateUrl: './auto-upload.component.html',\n  styleUrls: ['./auto-upload.component.less'],\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class PrizmFileAutoUploadExampleComponent implements OnDestroy {\n  progress$$ = new BehaviorSubject<PrizmFilesProgress>({});\n  files: Array<File> = [];\n  disabled = false;\n\n  public onFilesChange(files: Array<File>): void {\n    this.files = files;\n    if (this.files.length > 0) {\n      this.send();\n    }\n  }\n\n  public onfilesValidationErrors(errors: PrizmFileValidationErrors): void {\n    for (const filename of Object.keys(errors)) {\n      this.toastService.create(JSON.stringify(errors[filename]), {\n        title: `\u0424\u0430\u0439\u043b ${filename} \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044e`,\n        appearance: 'warning',\n        timer: 5000,\n      });\n    }\n  }\n\n  public onFilesCountError(fileNames: Array<string>): void {\n    this.toastService.create(`\u0424\u0430\u0439\u043b\u044b ${fileNames.join(' ,')} \u043d\u0435 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b`, {\n      title: `\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u043e`,\n      appearance: 'warning',\n      timer: 5000,\n    });\n  }\n\n  public send(): void {\n    this.disabled = true;\n    const formData = new FormData();\n    for (const file of this.files) {\n      formData.append(file.name, file);\n    }\n\n    this.http\n      .post('/fakeFileUpload', formData, {\n        reportProgress: true,\n        observe: 'events',\n      })\n      .subscribe(\n        (event: HttpEvent<any>) => {\n          switch (event.type) {\n            case HttpEventType.Sent:\n              break;\n            case HttpEventType.Response: {\n              this.disabled = false;\n\n              if (event.status >= 200 && event.status < 300) {\n                for (const file of this.files) {\n                  this.progress$$.next({\n                    ...this.progress$$.value,\n                    [file.name]: { progress: 100, error: false },\n                  });\n                }\n              } else {\n                for (const file of this.files) {\n                  this.progress$$.next({\n                    ...this.progress$$.value,\n                    [file.name]: { error: true },\n                  });\n                }\n              }\n\n              break;\n            }\n            case HttpEventType.UploadProgress: {\n              for (const file of this.files) {\n                this.progress$$.next({\n                  ...this.progress$$.value,\n                  [file.name]: {\n                    progress: Math.round((event.loaded / (event?.total ?? 0)) * 100),\n                    error: false,\n                  },\n                });\n              }\n\n              break;\n            }\n          }\n        },\n        error => {\n          console.log(error);\n        }\n      );\n  }\n\n  public retry(file: File): void {\n    this.disabled = true;\n    const formData = new FormData();\n\n    formData.append(file.name, file);\n\n    this.http\n      .post('/fakeFileUpload', formData, {\n        reportProgress: true,\n        observe: 'events',\n      })\n      .subscribe(\n        (event: HttpEvent<any>) => {\n          switch (event.type) {\n            case HttpEventType.Sent:\n              break;\n            case HttpEventType.Response: {\n              this.disabled = false;\n\n              if (event.status >= 200 && event.status < 300) {\n                this.progress$$.next({\n                  ...this.progress$$.value,\n                  [file.name]: { progress: 100, error: false },\n                });\n              } else {\n                this.progress$$.next({\n                  ...this.progress$$.value,\n                  [file.name]: { error: true },\n                });\n              }\n\n              break;\n            }\n            case HttpEventType.UploadProgress: {\n              this.progress$$.next({\n                ...this.progress$$.value,\n                [file.name]: {\n                  progress: Math.round((event.loaded / (event.total ?? 0)) * 100),\n                  error: false,\n                },\n              });\n\n              break;\n            }\n          }\n        },\n        error => {\n          console.log(error);\n        }\n      );\n  }\n\n  constructor(private readonly toastService: PrizmToastService, private http: HttpClient) {}\n\n  public ngOnDestroy(): void {\n    this.progress$$.complete();\n  }\n}\n";
    },
  },
]);
