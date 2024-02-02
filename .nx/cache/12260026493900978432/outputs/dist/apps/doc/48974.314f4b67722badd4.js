'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [48974],
  {
    80403: n => {
      n.exports =
        '<prizm-dropdown-host\n  [(isOpen)]="open"\n  [content]="dropdown"\n  [prizmDropdownCustomContext]="customData"\n  prizmDropdownHostWidth="auto"\n>\n  <button (click)="open = !open" prizmButton type="button">Button</button>\n</prizm-dropdown-host>\n\n<ng-template #dropdown let-custom="custom">\n  <prizm-data-list>\n    <ng-container header>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0431\u043b\u043e\u043a\u0430 {{ custom.customValue }}</ng-container>\n\n    <div class="box">\n      {{ custom.content }}\n    </div>\n    <ng-container footer>\n      <button (click)="open = false; cdRef.markForCheck()" prizmButton>\u0417\u0430\u043a\u0440\u044b\u0442\u044c</button>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n';
    },
  },
]);
