'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [54784],
  {
    54784: n => {
      n.exports =
        '<button (click)="changeLanguage(\'en\')" prizmButton appearance="primary" size="xl">English</button>\n<button (click)="changeLanguage(\'ru\')" prizmButton appearance="primary" size="xl">\u0420\u0443\u0441\u0441\u043a\u0438\u0439</button>\n\n<br />\n<br />\n\n<prizm-file-upload\n  [multiple]="true"\n  [accept]="\'image/*\'"\n  [progress]="$any(progress$$ | async)"\n  [maxFilesCount]="3"\n  [maxFileSize]="1000000"\n  (filesChange)="onFilesChange($event)"\n  (filesValidationErrors)="onfilesValidationErrors($any($event))"\n  (filesCountError)="onFilesCountError($event)"\n  (retry)="retry($event)"\n>\n</prizm-file-upload>\n';
    },
  },
]);
