"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[60694],{60694:r=>{r.exports='<p>\u0414\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0437\u0430\u0436\u043c\u0438\u0442\u0435 shift \u0438 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438</p>\n<p>\u0414\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043d\u0430 \u043a\u043e\u043b\u043e\u043d\u043a\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043d\u0435\u0435 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044f ctrl</p>\n\n<prizm-scrollbar class="scrollable" visibility="hidden">\n  <prizm-loader [showLoader]="$any(showLoader$ | async)" [overlay]="true">\n    <table class="table" [columns]="columns" (sortChange)="updateSort($event)" prizmTable>\n      <thead>\n        <tr prizmThGroup>\n          <th *prizmHead="\'code\'" [sortable]="true" [resizable]="true" rowspan="2" prizmTh>\u041a\u043e\u0434</th>\n          <th *prizmHead="\'name\'" [resizable]="true" prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n          <th *prizmHead="\'category\'" [sortable]="true" rowspan="2" prizmTh>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f</th>\n          <th *prizmHead="\'count\'" [sortable]="true" rowspan="2" prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n        </tr>\n        <tr prizmThGroup>\n          <th class="extra-border search-cell" [resizable]="true" prizmTh>\n            <input #input (enter)="search($event, \'name\')" prizmInput placeholder="\u041f\u043e\u0438\u0441\u043a" />\n            <button\n              [interactive]="true"\n              (click)="search(input.value, \'name\')"\n              prizmInputIconButton="sort-zoom-in"\n            ></button>\n          </th>\n        </tr>\n      </thead>\n\n      <tbody [data]="data$" prizmTbody>\n        <tr class="row" *prizmRow="let item; let i = index" prizmTr>\n          <td class="format__number" *prizmCell="\'code\'" prizmTd>{{ item.code | spaceNumber : \'0.0-0\' }}</td>\n          <td *prizmCell="\'name\'" prizmTd>{{ item.name }}</td>\n          <td *prizmCell="\'category\'" prizmTd>{{ item.category }}</td>\n          <td class="format__number" *prizmCell="\'count\'" prizmTd>\n            {{ item.count | spaceNumber : \'0.0-0\' }}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </prizm-loader>\n</prizm-scrollbar>\n'}}]);