'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34067],
  {
    34067: t => {
      t.exports =
        '<button\n  [prizmHintShowDelay]="500"\n  [prizmHintHideDelay]="5000"\n  [prizmHint]="hintText"\n  [prizmHintTheme]="prizmHintTheme"\n  type="button"\n  prizmButton\n>\n  Button\n</button>\n\n<div>\n  <p>Change Theme</p>\n  <div class="box">\n    <button (click)="setTheme(null)" type="button" prizmButton appearance="primary">Default</button>\n    <button (click)="setTheme(\'dark\')" type="button" prizmButton appearance="primary">Dark</button>\n    <button (click)="setTheme(\'light\')" type="button" prizmButton appearance="primary">Light</button>\n  </div>\n</div>\n';
    },
  },
]);
