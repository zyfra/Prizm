'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [34921],
  {
    34921: n => {
      n.exports =
        '<prizm-dropdown-host [content]="dropdown" prizmDropdownHostWidth="auto" [(isOpen)]="open">\n  <button prizmButton type="button" (click)="open = !open">Button</button>\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <button\n    prizmIconButton\n    appearanceType="fill"\n    [icon]="\'account-card-details\'"\n    appearance="primary"\n    size="m"\n  ></button>\n  \x3c!--  <prizm-data-list>--\x3e\n  \x3c!--    <ng-container header>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0431\u043b\u043e\u043a\u0430</ng-container>--\x3e\n  \x3c!--    <div class="box">--\x3e\n  \x3c!--      <button prizmButton appearanceType="outline">\u041a\u043d\u043e\u043f\u043a\u0430 1</button>--\x3e\n  \x3c!--      <button prizmButton appearanceType="outline">\u041a\u043d\u043e\u043f\u043a\u0430 2</button>--\x3e\n  \x3c!--    </div>--\x3e\n  \x3c!--    <ng-container footer>--\x3e\n  \x3c!--      <button prizmButton (click)="open = false; cdRef.markForCheck()">\u0417\u0430\u043a\u0440\u044b\u0442\u044c</button>--\x3e\n  \x3c!--    </ng-container>--\x3e\n  \x3c!--  </prizm-data-list>--\x3e\n</ng-template>\n';
    },
  },
]);
