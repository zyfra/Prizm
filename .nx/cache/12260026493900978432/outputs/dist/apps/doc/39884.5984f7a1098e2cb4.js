'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [39884],
  {
    39884: a => {
      a.exports =
        '<prizm-input-layout label="\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0438\u043e\u0434">\n  <prizm-input-layout-date-range [formControl]="value"></prizm-input-layout-date-range>\n</prizm-input-layout>\n\n<div *ngIf="value.value as value">\n  <div><b>start</b>: {{ value?.[0] && (value[0] | date : \'shortDate\') }}</div>\n  <div><b>end</b>: {{ value?.[1] && (value[1] | date : \'shortDate\') }}</div>\n</div>\n';
    },
  },
]);
