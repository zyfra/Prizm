'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42158],
  {
    42158: t => {
      t.exports =
        '<prizm-input-layout label="Validators">\n  <prizm-input-select [formControl]="control" [stringify]="stringify" [items]="items"></prizm-input-select>\n</prizm-input-layout>\n<br />\n<br />\n<div>\n  <button (click)="setDefaultValue()" prizmButton>\n    Set default value: <b>{{ items[0] }}</b>\n  </button>\n</div>\n\n<br />\n<br />\n<div>Current value: [{{ getType(control.value) }}] {{ control.value }}</div>\n';
    },
  },
]);
