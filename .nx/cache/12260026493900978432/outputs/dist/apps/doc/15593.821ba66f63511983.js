'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [15593],
  {
    15593: t => {
      t.exports =
        '<div class="block">\n  <button (click)="toggle()" prizmButton>Toggle theme</button>\n  <button (click)="light()" prizmButton>Light</button>\n  <button (click)="dark()" prizmButton>Dark</button>\n</div>\n<br /><br />\n<div>\n  Current theme: <b>{{ theme.getByElement(theme.rootElement) }}</b>\n</div>\n';
    },
  },
]);
