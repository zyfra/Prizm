'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [22850],
  {
    22850: n => {
      n.exports =
        '<prizm-input-layout [position]="\'center\'" label="\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a" size="l" status="default">\n  <button\n    [inputNumber]="inputNumber"\n    [disabled]="requiredInputControl.disabled"\n    [interactive]="!requiredInputControl.disabled"\n    prizmInputIconButton="delete-minus"\n    prizmInputNumberAuxiliaryControl="decrement"\n    prizm-input-left\n  ></button>\n\n  <input\n    #inputNumber="prizmInputNumber"\n    [min]="-10"\n    [max]="10"\n    [formControl]="requiredInputControl"\n    [step]="2"\n    type="number"\n    prizmInput\n    placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"\n  />\n\n  <button\n    [inputNumber]="inputNumber"\n    [disabled]="requiredInputControl.disabled"\n    [interactive]="!requiredInputControl.disabled"\n    prizmInputIconButton="add-plus"\n    prizmInputNumberAuxiliaryControl="increment"\n    prizm-input-right\n  ></button>\n</prizm-input-layout>\n';
    },
  },
]);
