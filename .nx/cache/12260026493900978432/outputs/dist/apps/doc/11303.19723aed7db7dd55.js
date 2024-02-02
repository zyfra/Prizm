'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11303],
  {
    11303: n => {
      n.exports =
        '<h3>Right template</h3>\n\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n  <input prizmInput />\n\n  <ng-container prizm-input-right>\n    <button prizmInputIconButton="add-circle"></button>\n  </ng-container>\n</prizm-input-layout>\n\n<h3>Left template</h3>\n\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n  <ng-container prizm-input-left>\n    <button prizmInputIconButton="arrows-refresh"></button>\n  </ng-container>\n\n  <input prizmInput />\n</prizm-input-layout>\n\n<h3>Left and right template</h3>\n\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n  <ng-container prizm-input-left>\n    <button prizmInputIconButton="arrows-refresh"></button>\n    <button prizmInputIconButton="badges-tag"></button>\n  </ng-container>\n\n  <input prizmInput />\n\n  <ng-container prizm-input-right>\n    <button prizmInputIconButton="add-circle"></button>\n  </ng-container>\n</prizm-input-layout>\n\n<h3>With status message</h3>\n\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a" status="warning">\n  <ng-container prizm-input-left>\n    <button prizmInputIconButton="arrows-refresh"></button>\n  </ng-container>\n\n  <input prizmInput />\n\n  <ng-template prizmInputStatusText>Warning text</ng-template>\n\n  <ng-container prizm-input-right>\n    <button prizmInputIconButton="add-circle"></button>\n  </ng-container>\n</prizm-input-layout>\n\n<h3>Only icon</h3>\n\n<prizm-input-layout label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n  <ng-container prizm-input-left>\n    <prizm-icon class="input-icon" [size]="16" iconClass="arrows-refresh"></prizm-icon>\n  </ng-container>\n\n  <input prizmInput />\n</prizm-input-layout>\n';
    },
  },
]);
