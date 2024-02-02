'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [27713],
  {
    27713: n => {
      n.exports =
        '\x3c!--<div class="container">--\x3e\n\x3c!--  <prizm-tabs type="line" [tabs]="tabs" (activeTabIndexChange)="tabClick()" (closeClick)="tabCancelClick()"></prizm-tabs>--\x3e\n\x3c!--</div>--\x3e\n<div class="container">\n  <prizm-tabs (activeTabIndexChange)="tabClick()" type="contained">\n    <prizm-tab\n      *ngFor="let item of tabs"\n      [count]="$any(item.count)"\n      [icon]="$any(item.icon)"\n      [closable]="!!item.closable"\n      [disabled]="!!item.disabled"\n    ></prizm-tab>\n  </prizm-tabs>\n</div>\n';
    },
  },
]);
