"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99270],{99270:n=>{n.exports='<div>\n  <h2>Custom Button</h2>\n\n  <prizm-input-layout [clearButton]="clearButtonTemplate" label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n    <input prizmInput />\n  </prizm-input-layout>\n\n  <ng-template\n    #clearButtonTemplate\n    let-showStatusButton="showStatusButton"\n    let-disabled="disabled"\n    let-clear="clear"\n  >\n    <button\n      class="{{ showStatusButton ? \'\' : \'alone\' }}"\n      [interactive]="true"\n      [disabled]="disabled"\n      [prizmHint]="\'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438\'"\n      [prizmInputIconButton]="\'cancel-delete-content\'"\n      (click)="clear($event)"\n    ></button>\n  </ng-template>\n</div>\n\n<br />\n<br />\n<div>\n  <h2>Custom Button Outer (With hint)</h2>\n\n  <prizm-input-layout [outer]="true" [clearButton]="clearButtonTemplate" label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n    <input prizmInput />\n  </prizm-input-layout>\n\n  <ng-template\n    #clearButtonTemplate\n    let-showStatusButton="showStatusButton"\n    let-disabled="disabled"\n    let-clear="clear"\n  >\n    <button\n      class="{{ showStatusButton ? \'\' : \'alone\' }}"\n      [interactive]="true"\n      [disabled]="disabled"\n      [prizmHint]="\'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438\'"\n      [prizmInputIconButton]="\'cancel-delete-content\'"\n      (click)="clear($event)"\n    ></button>\n  </ng-template>\n</div>\n\n<br />\n<br />\n<div>\n  <h2>Custom Icon</h2>\n\n  <prizm-input-layout [clearButton]="\'cancel-close\'" label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a">\n    <input prizmInput />\n  </prizm-input-layout>\n</div>\n'}}]);