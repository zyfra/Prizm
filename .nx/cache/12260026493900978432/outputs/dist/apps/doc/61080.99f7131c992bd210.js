'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [61080],
  {
    61080: t => {
      t.exports =
        '<prizm-input-layout label="Required validator">\n  <prizm-input-select [formControl]="control" [items]="items"></prizm-input-select>\n</prizm-input-layout>\n<br />\n<prizm-input-layout label="Required attr">\n  <prizm-input-select [(ngModel)]="value" [required]="true" [items]="items"></prizm-input-select>\n</prizm-input-layout>\n<br />\n<br />\n<div style="display: flex; flex-flow: column; gap: 1rem; width: 20rem">\n  <button (click)="setDefaultValue()" prizmButton>Clear value</button>\n  <button (click)="clearValidator()" prizmButton>Clear Validator</button>\n  <button (click)="setRequiredValidator()" prizmButton>Set Required Validator</button>\n</div>\n\n<br />\n<br />\n<div>Current value: {{ control.value }}</div>\n';
    },
  },
]);
