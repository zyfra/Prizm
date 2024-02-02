'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [29765],
  {
    29765: n => {
      n.exports =
        '<div class="container">\n  <prizm-tabs>\n    <prizm-tab\n      *ngFor="let item of tabs"\n      [disabled]="!!item.disabled"\n      [content]="$any(item.title)"\n      [type]="\'line\'"\n    >\n    </prizm-tab>\n  </prizm-tabs>\n</div>\n';
    },
  },
]);
