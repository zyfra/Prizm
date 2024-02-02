'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [32676],
  {
    32676: e => {
      e.exports =
        '<prizm-tree\n  [prizmTreeController]="true"\n  [value]="data"\n  [content]="content"\n  [childrenHandler]="handler"\n></prizm-tree>\n\n<ng-template #content let-value let-node="node">\n  <div class="wrapper">\n    <prizm-icon *ngIf="value.icon" [iconClass]="value.icon" size="16"></prizm-icon>\n    {{ value.text }}\n  </div>\n</ng-template>\n';
    },
  },
]);
