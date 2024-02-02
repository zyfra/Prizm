'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [38587],
  {
    38587: t => {
      t.exports =
        '<prizm-input-layout label="Validators">\n  <prizm-input-select [formControl]="control" [items]="items" style="width: 100%"></prizm-input-select>\n</prizm-input-layout>\n\x3c!--<prizm-select style="width: 100%" [formControl]="control" [items]="items"></prizm-select>--\x3e\n<br />\n<br />\n<div>\n  <button (click)="setDefaultValue()" prizmButton>\n    Set default value: <b>{{ items[0] }}</b>\n  </button>\n</div>\n\n<br />\n<br />\n<div>Current value: {{ control.value }}</div>\n';
    },
  },
]);
