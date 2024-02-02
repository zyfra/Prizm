'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [44983],
  {
    44983: n => {
      n.exports =
        '<button (click)="changeOrder()" prizmButton size="s" appearanceType="ghost">\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a</button>\n<br />\n<br />\n<table class="table" [columns]="columns" prizmTable>\n  <thead>\n    <tr prizmThGroup>\n      <th *prizmHead="\'c1\'" prizmTh>Head 1</th>\n      <th *prizmHead="\'c2\'" prizmTh>Head 2</th>\n    </tr>\n  </thead>\n\n  <tbody [data]="[{}]" prizmTbody>\n    <ng-container *prizmRow>\n      <tr prizmTr>\n        <td *prizmCell="\'c1\'" prizmTd>{{ \'value 1\' }}</td>\n        <td *prizmCell="\'c2\'" prizmTd>{{ \'value 2\' }}</td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n';
    },
  },
]);
