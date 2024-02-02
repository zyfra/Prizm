'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [35082],
  {
    35082: e => {
      e.exports =
        '<prizm-input-layout label="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430">\n  <prizm-input-select\n    [items]="items"\n    [valueTemplate]="valueTemplate"\n    [listItemTemplate]="listItemTemplate"\n    [formControl]="control"\n  ></prizm-input-select>\n</prizm-input-layout>\n\n<ng-template #valueTemplate let-value let-nullContent="nullContent">\n  <div class="item" *ngIf="value; else empty">\n    <b [style.color]="getColor(value)">{{ value }}</b>\n  </div>\n  <ng-template #empty>\n    {{ nullContent }}\n  </ng-template>\n</ng-template>\n\n<ng-template #listItemTemplate let-value let-nullContent="nullContent">\n  <div class="item" *ngIf="value; else empty">\n    <div class="circle" [style.background-color]="getColor(value)" iconClass="account-done"></div>\n    <span>{{ value }}</span>\n  </div>\n  <ng-template #empty>\n    {{ nullContent }}\n  </ng-template>\n</ng-template>\n';
    },
  },
]);
