'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [31688],
  {
    31688: n => {
      n.exports =
        '<prizm-input-layout [outer]="true" label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a" size="l" status="default">\n  <input\n    #input\n    [formControl]="requiredInputControl"\n    (enter)="onEnter($event)"\n    prizmInput\n    placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"\n  />\n  <prizm-chips\n    #chipsComponent\n    [formControl]="chipsControl"\n    [deletable]="deletable"\n    prizm-input-bottom\n  ></prizm-chips>\n</prizm-input-layout>\n\n<br />\n<h1>Chips:</h1>\n<div>\n  <span *ngFor="let chips of chipsControl.value ?? []">\n    {{ chips }}\n  </span>\n</div>\n';
    },
  },
]);
