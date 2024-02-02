'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57864],
  {
    57864: e => {
      e.exports =
        '<h1>Set theme and inverted theme for any element via our directives</h1>\n<div class="block">\n  <button (click)="toggle()" prizmButton>Toggle theme</button>\n  <button (click)="light()" prizmButton>Light</button>\n  <button (click)="dark()" prizmButton>Dark</button>\n</div>\n<br /><br />\n<div #zone>\n  <div\n    [prizmThemeInvertedValues]="{ light: \'dark\', dark: \'light\' }"\n    [themeElement]="zone"\n    (prizmThemeChange)="invetedThemeValue = $event"\n    prizmThemeInverted\n  >\n    <prizm-widget title="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu\n      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia\n      deserunt mollit anim id est laborum.\n    </prizm-widget>\n  </div>\n</div>\n\n<div *ngIf="el">\n  <p>\n    Parent theme: <b>{{ theme.getByElement(zone) }}</b>\n  </p>\n  <p>\n    Inverted theme: <b>{{ invetedThemeValue }}</b>\n  </p>\n</div>\n';
    },
  },
]);
