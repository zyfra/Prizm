"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[80540],{80540:t=>{t.exports='<prizm-scrollbar class="scrollable">\n  <table class="table" prizmTable size="l">\n    <thead>\n      <tr prizmThGroup>\n        <th prizmTh>\u041a\u043e\u0434</th>\n        <th prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n        <th prizmTh>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f</th>\n        <th prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n        <th prizmTh></th>\n      </tr>\n    </thead>\n\n    <tbody [data]="products" prizmTbody>\n      <ng-container\n        *prizmRow="\n          let item of products;\n          let i = index;\n          let odd = odd;\n          let even = even;\n          let first = first;\n          let last = last;\n          trackBy: trackByFn\n        "\n      >\n        <tr (click)="onTrClick($event, item)" prizmTr>\n          <td prizmTd>\n            {{ item.code }}\n          </td>\n          <td prizmTd>\n            {{ item.name }}\n          </td>\n          <td prizmTd>{{ item.category }}</td>\n          <td prizmTd>\n            {{ item.count }}\n          </td>\n          <td prizmTd>{{ item.active }}</td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</prizm-scrollbar>\n'}}]);