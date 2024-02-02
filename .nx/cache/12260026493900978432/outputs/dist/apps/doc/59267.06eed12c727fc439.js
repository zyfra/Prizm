'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [59267],
  {
    59267: e => {
      e.exports =
        '<prizm-select [items]="items" [valueTemplate]="valueTemplate" [formControl]="control"></prizm-select>\n\n<ng-template #valueTemplate let-value let-nullContent="nullContent">\n  <div class="item" *ngIf="value; else empty">\n    <prizm-icon iconClass="account-done"></prizm-icon>\n    <span>{{ value }}</span>\n  </div>\n  <ng-template #empty>\n    {{ nullContent }}\n  </ng-template>\n</ng-template>\n';
    },
  },
]);
