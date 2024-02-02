'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [47261],
  {
    47261: t => {
      t.exports =
        '<div class="box">\n  <button (click)="showToast()" prizmButton>\u0421 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c</button>\n  <button (click)="showToastWithoutTitle()" prizmButton>\u0411\u0435\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430</button>\n  <button (click)="showToastWithBigText()" prizmButton>\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442</button>\n  <button (click)="showToastWithBigTitle()" prizmButton>\u0414\u043b\u0438\u043d\u043d\u044b\u0439 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</button>\n  <button (click)="showToastWithoutTimer()" prizmButton>\u0411\u0435\u0437 \u0442\u0430\u0439\u043c\u0435\u0440\u0430</button>\n  <button (click)="showToastWithContentTemplate(contentTemplate)" prizmButton>\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c</button>\n  <button (click)="showToastWithHeaderTemplate(headerTemplate)" prizmButton>\u0428\u0430\u0431\u043b\u043e\u043d \u0432 \u0445\u0435\u0434\u0435\u0440\u0435</button>\n\n  <ng-template #contentTemplate let-close="close">\n    <div>\u0412 toast-\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u0441\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u0443\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0432 2 \u0441\u0442\u0440\u043e\u043a\u0438.</div>\n\n    <div class="date">16.05.2022 10:00</div>\n    <div class="link-content">\n      <a href="#">\u0421\u0441\u044b\u043b\u043a\u0430</a>\n    </div>\n    <div class="footer"><button (click)="close()" prizmButton>\u0417\u0430\u043a\u0440\u044b\u0442\u044c</button></div>\n  </ng-template>\n\n  <ng-template #headerTemplate let-close="close">\n    <div class="header-title">\n      <span class="title">\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a</span>\n\n      <span class="link">\n        <a href="#">\u0421\u0441\u044b\u043b\u043a\u0430</a>\n      </span>\n    </div>\n  </ng-template>\n</div>\n\n<br />\n<hr />\n<p>Position</p>\n<div style="display: flex; gap: 1rem; flex-wrap: wrap">\n  <prizm-radio-button\n    *ngFor="let item of data"\n    [formControl]="formControl"\n    [label]="item.label"\n    [name]="appearance"\n    [value]="item.val"\n  ></prizm-radio-button>\n</div>\n';
    },
  },
]);
