'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [23283],
  {
    23283: n => {
      n.exports =
        '<prizm-input-layout label="Validators">\n  <prizm-input-select\n    [items]="(items$ | async) ?? []"\n    [valueTemplate]="valueTemplate"\n    [formControl]="valueControl"\n    [searchMatcher]="searchMatcher"\n    [identityMatcher]="identityMatcher"\n    [stringify]="stringify"\n    [searchable]="true"\n  >\n  </prizm-input-select>\n</prizm-input-layout>\n<br />\n<br />\n<div>\n  <button (click)="setDefaultValue()">\n    Set default value: <b>{{ items[0].name | json }}</b>\n  </button>\n</div>\n\n<br />\n<br />\n<div>Current value: {{ valueControl.value | json }}</div>\n\n<ng-template #valueTemplate let-value let-stringify="stringify">\n  <div class="item">\n    <prizm-icon iconClass="account-done"></prizm-icon>\n    <span>{{ stringify }}</span>\n  </div>\n</ng-template>\n';
    },
  },
]);
