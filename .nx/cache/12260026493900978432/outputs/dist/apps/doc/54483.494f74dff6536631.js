'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [54483],
  {
    54483: e => {
      e.exports =
        '<prizm-input-layout label="\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c">\n  <prizm-input-multi-select\n    [items]="items"\n    [selectAllItem]="selectAllItem"\n    [valueTemplate]="valueTemplate"\n    [formControl]="valueControl"\n    [searchMatcher]="searchMatcher"\n    [identityMatcher]="identityMatcher"\n    [stringify]="stringify"\n    [searchable]="true"\n  >\n  </prizm-input-multi-select>\n</prizm-input-layout>\n\n<ng-template #valueTemplate let-value>\n  <div class="item" *ngIf="value.obj.id !== -1; else allTemplate">\n    <prizm-icon iconClass="account-done"></prizm-icon>\n    <span>{{ value.stringify }}</span>\n  </div>\n  <ng-template #allTemplate> \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 </ng-template>\n</ng-template>\n';
    },
  },
]);
