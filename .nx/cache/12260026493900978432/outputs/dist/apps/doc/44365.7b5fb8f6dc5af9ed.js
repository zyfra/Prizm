'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [44365],
  {
    44365: t => {
      t.exports =
        '<button (click)="show()" type="button" prizmButton>\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0434\u0438\u0430\u043b\u043e\u0433</button>\n<br />\n<br />\n<div *ngIf="result">\n  {{ \'\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442: \' + result }}\n</div>\n\n<ng-template #content>\n  <div class="content">\n    <prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n      <input #input [formControl]="control" prizmInput placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442" />\n    </prizm-input-layout>\n  </div>\n</ng-template>\n\n<ng-template #footerTemp let-completeWith="completeWith">\n  <div class="box">\n    <button (click)="completeWith(null)" prizmButton appearance="primary" size="xl">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</button>\n    <button (click)="completeWith(control.value)" prizmButton appearance="primary" size="xl">\n      \u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c\n    </button>\n  </div>\n</ng-template>\n';
    },
  },
]);
