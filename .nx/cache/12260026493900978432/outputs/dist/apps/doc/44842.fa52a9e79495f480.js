'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [44842],
  {
    44842: e => {
      e.exports =
        '<prizm-tree\n  *ngFor="let item of data.children"\n  [prizmTreeController]="true"\n  [value]="item"\n  [content]="content"\n  [childrenHandler]="handler"\n></prizm-tree>\n\n<ng-template #content let-item>\n  {{ item.text }}\n</ng-template>\n';
    },
  },
]);
