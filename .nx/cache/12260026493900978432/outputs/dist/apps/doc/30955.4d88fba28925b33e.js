'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [30955],
  {
    30955: n => {
      n.exports =
        '<h3>Default empty example</h3>\n<prizm-scrollbar class="scrollable">\n  <table class="table" prizmTable size="s">\n    <thead>\n      <tr prizmThGroup>\n        <th prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n        <th prizmTh>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f</th>\n        <th prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n      </tr>\n    </thead>\n\n    <tbody [data]="products" prizmTbody>\n      <ng-container *prizmRow="let item of products; let i = index; let count = count">\n        <tr prizmTr>\n          <td prizmTd>\n            <div class="col-tree">\n              <span>{{ item.name }}</span>\n            </div>\n          </td>\n          <td prizmTd>{{ item.category }}</td>\n          <td class="format__number" prizmTd>\n            {{ item.count | spaceNumber : \'0.0-0\' }}\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</prizm-scrollbar>\n\n<h3>Custom empty example</h3>\n<prizm-scrollbar class="scrollable">\n  <table class="table" prizmTable size="s">\n    <thead>\n      <tr prizmThGroup>\n        <th prizmTh>\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435</th>\n        <th prizmTh>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f</th>\n        <th prizmTh>\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e</th>\n      </tr>\n    </thead>\n\n    <tbody [data]="products" prizmTbody>\n      <ng-container *prizmTableEmpty>\n        <tr>\n          <td colspan="3">\n            <div style="text-align: center; padding: 2px 0">Empty Table</div>\n          </td>\n        </tr>\n      </ng-container>\n\n      <ng-container *prizmRow="let item of products; let i = index; let count = count">\n        <tr prizmTr>\n          <td prizmTd>\n            <div class="col-tree">\n              <span>{{ item.name }}</span>\n            </div>\n          </td>\n          <td prizmTd>{{ item.category }}</td>\n          <td class="format__number" prizmTd>\n            {{ item.count | spaceNumber : \'0.0-0\' }}\n          </td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</prizm-scrollbar>\n';
    },
  },
]);
