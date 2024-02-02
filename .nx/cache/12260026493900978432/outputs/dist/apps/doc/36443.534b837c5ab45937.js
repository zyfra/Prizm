'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [36443],
  {
    36443: e => {
      e.exports =
        '<prizm-scrollbar class="scrollable" visibility="hidden">\n  <table class="table" [columns]="columns" prizmTable>\n    <thead>\n      <tr prizmThGroup>\n        <th class="checkbox-header" *prizmHead="\'checkbox\'" [sorter]="null" prizmTh>\n          <prizm-checkbox\n            class="checkbox"\n            [checked]="selected.size === products.length"\n            [indeterminate]="selected.size !== products.length && selected.size > 0"\n            (changed)="selectAllChanged($event)"\n          ></prizm-checkbox>\n        </th>\n        <th *prizmHead="\'code\'" [resizable]="true" prizmTh>\u041a\u043e\u0434</th>\n        <th *prizmHead="\'name\'" [resizable]="true" prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n        <th *prizmHead="\'category\'" [resizable]="true" prizmTh>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f</th>\n        <th *prizmHead="\'count\'" [resizable]="true" prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n      </tr>\n    </thead>\n\n    <tbody [data]="products" prizmTbody>\n      <tr\n        *prizmRow="let item; index as index; trackBy: trackBy"\n        [active]="active?.product === item"\n        (click)="rowClick($event, item, index)"\n        (selectstart)="onSelectStart($event)"\n        prizmTr\n      >\n        <td *prizmCell="\'checkbox\'" prizmTd>\n          <prizm-checkbox\n            class="checkbox"\n            #checkbox\n            [checked]="productIsSelected(item)"\n            (changed)="productCheckboxChange(item, index)"\n            (click)="$event.stopPropagation()"\n          ></prizm-checkbox>\n        </td>\n        <td class="format__number" *prizmCell="\'code\'" prizmTd>{{ item.code | spaceNumber : \'0.0-0\' }}</td>\n        <td *prizmCell="\'name\'" prizmTd>{{ item.name }}</td>\n        <td *prizmCell="\'category\'" prizmTd>{{ item.category }}</td>\n        <td class="format__number" *prizmCell="\'count\'" prizmTd>{{ item.count | spaceNumber : \'0.0-0\' }}</td>\n      </tr>\n    </tbody>\n  </table>\n</prizm-scrollbar>\n';
    },
  },
]);
