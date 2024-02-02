"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[15630],{15630:e=>{e.exports='<prizm-input-layout label="Validators">\n  <prizm-input-multi-select\n    [items]="items"\n    [valueTemplate]="valueTemplate"\n    [formControl]="valueControl"\n    [searchMatcher]="searchMatcher"\n    [transformer]="transformer"\n    [identityMatcher]="identityMatcher"\n    [stringify]="stringify"\n    [searchable]="true"\n  >\n  </prizm-input-multi-select>\n</prizm-input-layout>\n<br />\n<br />\n<div>\n  <button (click)="setDefaultValue()">\n    Set default value: <b>{{ items[0].name | json }}</b>\n  </button>\n</div>\n\n<br />\n<br />\n<div>Current value: {{ valueControl.value | json }}</div>\n\n<ng-template #valueTemplate let-value>\n  <div class="item" *ngIf="value.obj.id !== -1; else allTemplate">\n    <prizm-icon iconClass="account-done"></prizm-icon>\n    <span>{{ value.stringify }}</span>\n  </div>\n  <ng-template #allTemplate> \u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 </ng-template>\n</ng-template>\n'}}]);