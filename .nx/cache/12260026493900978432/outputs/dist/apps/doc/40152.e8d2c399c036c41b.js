'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [40152],
  {
    40152: n => {
      n.exports =
        '<prizm-dropdown-host\n  [(isOpen)]="open"\n  [dropdownStyles]="{ borderRadius: \'0\', boxShadow: \'unset\' }"\n  [content]="dropdown"\n  prizmDropdownHostWidth="auto"\n>\n  <button (click)="open = !open" prizmButton type="button">Button</button>\n</prizm-dropdown-host>\n\n<ng-template #dropdown>\n  <prizm-data-list>\n    <ng-container header>\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0431\u043b\u043e\u043a\u0430</ng-container>\n    <div class="box">\n      <button prizmButton appearanceType="outline">\u041a\u043d\u043e\u043f\u043a\u0430 1</button>\n      <button prizmButton appearanceType="outline">\u041a\u043d\u043e\u043f\u043a\u0430 2</button>\n    </div>\n    <ng-container footer>\n      <button (click)="open = false; cdRef.markForCheck()" prizmButton>\u0417\u0430\u043a\u0440\u044b\u0442\u044c</button>\n    </ng-container>\n  </prizm-data-list>\n</ng-template>\n';
    },
  },
]);
