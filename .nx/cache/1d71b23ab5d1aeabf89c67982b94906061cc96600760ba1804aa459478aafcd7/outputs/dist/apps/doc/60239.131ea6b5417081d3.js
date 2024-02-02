"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60239],{60239:t=>{t.exports='<table class="table" [columns]="columns" prizmTable>\n  <thead>\n    <tr prizmThGroup>\n      <th prizmTh>\u041a\u043e\u0434</th>\n      <th *prizmHead="\'name\'" prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n      <th *prizmHead="\'category\'" prizmTh>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f</th>\n      <th *prizmHead="\'count\'" prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n    </tr>\n  </thead>\n\n  <tbody [data]="products" prizmTbody>\n    <tr\n      class="row"\n      *prizmRow="let item of products; let i = index"\n      [status]="$any(item.status)"\n      [active]="selectedItemsCodes.includes(item.code)"\n      (click)="multiSelection($event, item.code)"\n      prizmTr\n    >\n      <td class="format__number" *prizmCell="\'code\'" prizmTd>{{ item.code | spaceNumber : \'0.0-0\' }}</td>\n      <td *prizmCell="\'name\'" prizmTd>{{ item.name }}</td>\n      <td *prizmCell="\'category\'" [status]="i === 8 ? \'danger\' : \'default\'" prizmTd>{{ item.category }}</td>\n      <td class="format__number" *prizmCell="\'count\'" prizmTd>{{ item.count | spaceNumber : \'0.0-0\' }}</td>\n    </tr>\n    <ng-container footer>\n      <tr class="summary format__number">\n        <td prizmTd colspan="3">\u0412\u0441\u0435\u0433\u043e</td>\n        <td prizmTd>{{ 60000 | spaceNumber : \'0.0-0\' }}</td>\n      </tr>\n    </ng-container>\n  </tbody>\n</table>\n'}}]);