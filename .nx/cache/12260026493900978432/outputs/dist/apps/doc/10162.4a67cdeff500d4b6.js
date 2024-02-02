'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [10162],
  {
    10162: n => {
      n.exports =
        '<div class="box">\n  <button (click)="showWithCustomDataTemplate(contentTemplate)" prizmButton appearance="primary">\n    Info Toast\n  </button>\n\n  <ng-template #contentTemplate let-close="close" let-buttonAppearance="buttonAppearance" let-data="data">\n    <div [innerHTML]="data.html"></div>\n  </ng-template>\n</div>\n\n<br />\n<hr />\n<p>Position</p>\n<div style="display: flex; gap: 1rem; flex-wrap: wrap">\n  <prizm-radio-button\n    *ngFor="let item of data"\n    [formControl]="formControl"\n    [label]="item.label"\n    [name]="\'success\'"\n    [value]="item.val"\n  ></prizm-radio-button>\n</div>\n';
    },
  },
]);
