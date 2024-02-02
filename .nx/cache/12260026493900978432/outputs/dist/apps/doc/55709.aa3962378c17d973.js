'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [55709],
  {
    55709: e => {
      e.exports =
        '<prizm-file-upload\n  [multiple]="true"\n  [accept]="\'image/*\'"\n  [progress]="$any(progress$$ | async)"\n  [maxFilesCount]="3"\n  [maxFileSize]="1000000"\n  [disabled]="disabled"\n  (filesChange)="onFilesChange($event)"\n  (filesValidationErrors)="onfilesValidationErrors($any($event))"\n  (filesCountError)="onFilesCountError($event)"\n  (retry)="retry($event)"\n>\n  \u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0442\u0440\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 1\u041c\u0411\n</prizm-file-upload>\n';
    },
  },
]);
