'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [16418],
  {
    16418: t => {
      t.exports =
        '<h4>Counter subtext info</h4>\n<br />\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a" size="l">\n  <input [(ngModel)]="text" [maxlength]="maxLength" prizmInput placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442" />\n  <div style="display: flex; justify-content: space-between" prizm-input-subtext>\n    <span>\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435</span>\n    <span>{{ text?.length ?? 0 }}/{{ maxLength }}</span>\n  </div>\n</prizm-input-layout>\n<br />\n\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a" size="l">\n  <input prizmInput value="\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442" />\n  <div prizm-input-subtext>\u041f\u043e\u0434\u0442\u0435\u043a\u0441\u0442</div>\n</prizm-input-layout>\n\n<h4>Warning with subtext info</h4>\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a" size="l" status="warning">\n  <input prizmInput value="\u0412\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442" />\n  <ng-template #statusText prizmInputStatusText>Warning text</ng-template>\n  <div *ngTemplateOutlet="statusText" prizm-input-subtext></div>\n</prizm-input-layout>\n';
    },
  },
]);
