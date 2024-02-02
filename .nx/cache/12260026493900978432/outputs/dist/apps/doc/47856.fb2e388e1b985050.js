'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [47856],
  {
    47856: e => {
      e.exports =
        '<prizm-input-layout label="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430">\n  <prizm-input-multi-select [items]="items" [valueTemplate]="valueTemplate" [formControl]="valueControl">\n  </prizm-input-multi-select>\n</prizm-input-layout>\n\n<ng-template #valueTemplate let-value>\n  <div class="item">\n    <prizm-icon iconClass="account-done"></prizm-icon>\n    <span>{{ value.stringify }}</span>\n  </div>\n</ng-template>\n';
    },
  },
]);
