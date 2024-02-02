'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [40010],
  {
    40010: n => {
      n.exports =
        '<h3>Inner</h3>\n<prizm-input-layout label="\u041f\u043e\u0438\u0441\u043a">\n  <input #input (enter)="search($event)" prizmInput />\n  <button\n    [interactive]="true"\n    (click)="search(input.value)"\n    prizmInputIconButton="sort-zoom-in"\n    prizm-input-right\n  ></button>\n</prizm-input-layout>\n\n<h3>Outer</h3>\n<prizm-input-layout [outer]="true" label="\u041f\u043e\u0438\u0441\u043a">\n  <input #input [placeholder]="\'\u041f\u043e\u0438\u0441\u043a\'" (enter)="search($event)" prizmInput />\n  <button\n    [interactive]="true"\n    (click)="search(input.value)"\n    prizmInputIconButton="sort-zoom-in"\n    prizm-input-right\n  ></button>\n</prizm-input-layout>\n';
    },
  },
]);
