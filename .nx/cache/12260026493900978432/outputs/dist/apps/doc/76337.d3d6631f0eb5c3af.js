"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[76337],{76337:r=>{r.exports='<prizm-scrollbar class="scrollable" visibility="hidden">\n  <table class="table" [columns]="columns" prizmTable>\n    <thead>\n      <tr prizmThGroup>\n        <th [resizable]="true" prizmTh>\u041a\u043e\u0434</th>\n        <th *prizmHead="\'name\'" prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n        <th *prizmHead="\'category\'" prizmTh>\n          \u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\n          <prizm-dropdown-host\n            class="filter"\n            [(isOpen)]="filterOpen"\n            [content]="dropdown"\n            prizmDropdownHostWidth="auto"\n          >\n            <prizm-icon\n              class="filter__category"\n              [class.filter__category_active]="filterOpen || filterOn"\n              (click)="filterOpen = !filterOpen"\n              iconClass="sort-filter"\n            ></prizm-icon>\n          </prizm-dropdown-host>\n        </th>\n        <th *prizmHead="\'count\'" prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n      </tr>\n    </thead>\n\n    <tbody [data]="$any(filteredProducts$ | async)" prizmTbody>\n      <tr class="row" *prizmRow="let item of $any(filteredProducts$ | async); let i = index" prizmTr>\n        <td class="format__number" *prizmCell="\'code\'" prizmTd>{{ item.code | spaceNumber : \'0.0-0\' }}</td>\n        <td *prizmCell="\'name\'" prizmTd>{{ item.name }}</td>\n        <td *prizmCell="\'category\'" prizmTd>{{ item.category }}</td>\n        <td class="format__number" *prizmCell="\'count\'" prizmTd>{{ item.count | spaceNumber : \'0.0-0\' }}</td>\n      </tr>\n    </tbody>\n  </table>\n</prizm-scrollbar>\n\n<ng-template #dropdown>\n  <div class="filter-container">\n    <form [formGroup]="formGroup">\n      <prizm-checkbox formControlName="control1">Premium</prizm-checkbox>\n      <prizm-checkbox formControlName="control2">Active</prizm-checkbox>\n      <prizm-checkbox formControlName="control3">Sport</prizm-checkbox>\n      <prizm-checkbox formControlName="control4">Sport+</prizm-checkbox>\n    </form>\n  </div>\n</ng-template>\n'}}]);