'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [39746],
  {
    39746: e => {
      e.exports =
        '<prizm-multi-select\n  [items]="items"\n  [valueTemplate]="valueTemplate"\n  [formControl]="valueControl"\n></prizm-multi-select>\n\n<ng-template #valueTemplate let-value>\n  <div class="item">\n    <prizm-icon iconClass="account-done"></prizm-icon>\n    <span>{{ value.stringify }}</span>\n  </div>\n</ng-template>\n';
    },
  },
]);
