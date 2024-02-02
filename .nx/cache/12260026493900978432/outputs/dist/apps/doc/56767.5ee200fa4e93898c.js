'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [56767],
  {
    56767: e => {
      e.exports =
        '<prizm-input-date-range [formControl]="value"></prizm-input-date-range>\n\n<div *ngIf="value.value as value">\n  <div><b>start</b>: {{ value?.[0] && (value[0] | date : \'shortDate\') }}</div>\n  <div><b>end</b>: {{ value?.[1] && (value[1] | date : \'shortDate\') }}</div>\n</div>\n';
    },
  },
]);
