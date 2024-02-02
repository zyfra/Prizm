'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [56375],
  {
    56375: (O, d, n) => {
      n.r(d), n.d(d, { ColumnModule: () => H });
      var u = n(96814),
        s = n(21004),
        c = n(75187),
        l = n(77410),
        t = n(65879),
        y = n(8221),
        _ = n(30990),
        h = n(83419),
        C = n(78905),
        g = n(63796),
        x = n(75987),
        P = n(43015),
        F = n(56586),
        T = n(57679),
        i = n(21187);
      let f = (() => {
          class e {
            constructor(o) {
              (this.prizmTheme = o),
                (this.data = [
                  {
                    type: '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430',
                    sales: 38,
                  },
                  {
                    type: '\u041d\u0435\u043f\u0440\u043e\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0442\u043e\u0432\u0430\u0440\u044b',
                    sales: 52,
                  },
                  {
                    type: '\u0421\u0432\u0435\u0436\u0438\u0435 \u0444\u0440\u0443\u043a\u0442\u044b',
                    sales: 61,
                  },
                  { type: '\u0411\u044c\u044e\u0442\u0438-\u0441\u0442\u0438\u0440\u043a\u0430', sales: 145 },
                  {
                    type: '\u0442\u043e\u0432\u0430\u0440\u044b \u0440\u0435\u0431\u0435\u043d\u043a\u0430',
                    sales: 48,
                  },
                  {
                    type: '\u0438\u043c\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0435\u0434\u0430',
                    sales: 38,
                  },
                  { type: '\u0415\u0434\u0430 \u0438 \u043d\u0430\u043f\u0438\u0442\u043a\u0438', sales: 38 },
                  { type: '\u0423\u0431\u043e\u0440\u043a\u0430 \u0434\u043e\u043c\u0430', sales: 38 },
                ]),
                (this.label = { position: 'middle', style: { fill: '#FFFFFF', opacity: 0.6 } }),
                (this.options = {
                  xAxis: { label: { autoHide: !0, autoRotate: !1 } },
                  meta: {
                    type: { alias: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' },
                    sales: { alias: '\u043f\u0440\u043e\u0434\u0430\u0436\u0438' },
                  },
                });
            }
          }
          return (
            (e.ɵfac = function (o) {
              return new (o || e)(t.Y36(l.il));
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-charts-column-base-example']],
              decls: 2,
              vars: 6,
              consts: [['xField', 'type', 'yField', 'sales', 3, 'data', 'label', 'options', 'theme']],
              template: function (o, p) {
                1 & o && (t._UZ(0, 'prizm-charts-column', 0), t.ALo(1, 'async')),
                  2 & o &&
                    t.Q6J('data', p.data)('label', p.label)('options', p.options)(
                      'theme',
                      t.lcZ(1, 4, p.prizmTheme.changesTheme$)
                    );
              },
              dependencies: [i.m, u.Ov],
              styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
            })),
            e
          );
        })(),
        z = (() => {
          class e {
            constructor(o) {
              (this.prizmTheme = o),
                (this.data = [
                  { year: '1991', value: 3, type: 'Lon' },
                  { year: '1992', value: 4, type: 'Lon' },
                  { year: '1993', value: 3.5, type: 'Lon' },
                  { year: '1994', value: 5, type: 'Lon' },
                  { year: '1995', value: 4.9, type: 'Lon' },
                  { year: '1996', value: 6, type: 'Lon' },
                  { year: '1997', value: 7, type: 'Lon' },
                  { year: '1998', value: 9, type: 'Lon' },
                  { year: '1999', value: 13, type: 'Lon' },
                  { year: '1991', value: 3, type: 'Bor' },
                  { year: '1992', value: 4, type: 'Bor' },
                  { year: '1993', value: 3.5, type: 'Bor' },
                  { year: '1994', value: 5, type: 'Bor' },
                  { year: '1995', value: 4.9, type: 'Bor' },
                  { year: '1996', value: 6, type: 'Bor' },
                  { year: '1997', value: 7, type: 'Bor' },
                  { year: '1998', value: 9, type: 'Bor' },
                  { year: '1999', value: 13, type: 'Bor' },
                ]),
                (this.options = { isStack: !0 }),
                (this.label = {
                  position: 'middle',
                  layout: [
                    { type: 'interval-adjust-position' },
                    { type: 'interval-hide-overlap' },
                    { type: 'adjust-color' },
                  ],
                }),
                (this.xField = 'year'),
                (this.yField = 'value'),
                (this.seriesField = 'type');
            }
          }
          return (
            (e.ɵfac = function (o) {
              return new (o || e)(t.Y36(l.il));
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-charts-column-stack-example']],
              decls: 2,
              vars: 9,
              consts: [
                [
                  'xField',
                  'product_type',
                  'yField',
                  'order_amt',
                  'seriesField',
                  'product_sub_type',
                  'groupField',
                  'sex',
                  3,
                  'data',
                  'label',
                  'xField',
                  'yField',
                  'seriesField',
                  'options',
                  'theme',
                ],
              ],
              template: function (o, p) {
                1 & o && (t._UZ(0, 'prizm-charts-column', 0), t.ALo(1, 'async')),
                  2 & o &&
                    t.Q6J('data', p.data)('label', p.label)('xField', p.xField)('yField', p.yField)(
                      'seriesField',
                      p.seriesField
                    )('options', p.options)('theme', t.lcZ(1, 7, p.prizmTheme.changesTheme$));
              },
              dependencies: [i.m, u.Ov],
              styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
            })),
            e
          );
        })(),
        v = (() => {
          class e {
            constructor(o) {
              (this.prizmTheme = o),
                (this.data = [
                  {
                    product_type:
                      '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 8,
                    product_sub_type: '\u041b\u0430\u0441\u0442\u0438\u043a',
                  },
                  {
                    product_type:
                      '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 10,
                    product_sub_type:
                      '\u041a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430',
                  },
                  {
                    product_type:
                      '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 20,
                    product_sub_type:
                      '\u0427\u0435\u0440\u043d\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c',
                  },
                  {
                    product_type:
                      '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 13,
                    product_sub_type:
                      '\u0427\u0435\u0440\u043d\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c',
                  },
                  {
                    product_type:
                      '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 21,
                    product_sub_type: '\u041b\u0430\u0441\u0442\u0438\u043a',
                  },
                  {
                    product_type:
                      '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 21,
                    product_sub_type:
                      '\u041a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430',
                  },
                  {
                    product_type:
                      '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 13,
                    product_sub_type:
                      '\u0421\u0442\u0438\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430',
                  },
                  {
                    product_type:
                      '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 2,
                    product_sub_type:
                      '\u0421\u0442\u0438\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430',
                  },
                  {
                    product_type:
                      '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 5,
                    product_sub_type:
                      '\u041c\u0438\u043a\u0440\u043e\u0432\u043e\u043b\u043d\u043e\u0432\u0430\u044f \u043f\u0435\u0447\u044c',
                  },
                  {
                    product_type:
                      '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 14,
                    product_sub_type:
                      '\u0418\u043d\u0434\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430',
                  },
                  {
                    product_type:
                      '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 23,
                    product_sub_type:
                      '\u041c\u0438\u043a\u0440\u043e\u0432\u043e\u043b\u043d\u043e\u0432\u0430\u044f \u043f\u0435\u0447\u044c',
                  },
                  {
                    product_type:
                      '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 23,
                    product_sub_type:
                      '\u0418\u043d\u0434\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430',
                  },
                  {
                    product_type:
                      '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 33,
                    product_sub_type: '\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440',
                  },
                  {
                    product_type:
                      '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 4,
                    product_sub_type: '\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440',
                  },
                  {
                    product_type:
                      '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 23,
                    product_sub_type:
                      '\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c',
                  },
                  {
                    product_type:
                      '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 20.9,
                    product_sub_type:
                      '\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c',
                  },
                  {
                    product_type:
                      '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                    sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                    order_amt: 5.9,
                    product_sub_type: '\u041c\u044b\u0448\u044c',
                  },
                  {
                    product_type:
                      '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                    sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                    order_amt: 5.9,
                    product_sub_type: '\u041c\u044b\u0448\u044c',
                  },
                ]),
                (this.options = { isGroup: !0, isStack: !0 });
            }
          }
          return (
            (e.ɵfac = function (o) {
              return new (o || e)(t.Y36(l.il));
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-charts-column-group-example']],
              decls: 2,
              vars: 5,
              consts: [
                [
                  'xField',
                  'product_type',
                  'yField',
                  'order_amt',
                  'seriesField',
                  'product_sub_type',
                  'groupField',
                  'sex',
                  3,
                  'data',
                  'options',
                  'theme',
                ],
              ],
              template: function (o, p) {
                1 & o && (t._UZ(0, 'prizm-charts-column', 0), t.ALo(1, 'async')),
                  2 & o &&
                    t.Q6J('data', p.data)('options', p.options)(
                      'theme',
                      t.lcZ(1, 3, p.prizmTheme.changesTheme$)
                    );
              },
              dependencies: [i.m, u.Ov],
              styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
            })),
            e
          );
        })();
      function b(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-charts-column-base-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-charts-column-group-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 6),
            t._UZ(5, 'prizm-charts-column-stack-example'),
            t.qZA()),
          2 & e)
        ) {
          const o = t.oxw();
          t.Q6J('content', o.exampleBase),
            t.xp6(2),
            t.Q6J('content', o.exampleColumnGroup),
            t.xp6(2),
            t.Q6J('content', o.exampleColumnStack);
        }
      }
      function N(e, a) {
        1 & e && t._uU(0, ' Theme ');
      }
      function V(e, a) {
        1 & e && t._uU(0, ' Width ');
      }
      function M(e, a) {
        1 & e && t._uU(0, ' Options ');
      }
      function Z(e, a) {
        1 & e && t._uU(0, ' Data ');
      }
      function U(e, a) {
        1 & e && t._uU(0, ' Label ');
      }
      function J(e, a) {
        1 & e && t._uU(0, ' X Field Name ');
      }
      function L(e, a) {
        1 & e && t._uU(0, ' Y Field Name ');
      }
      function Y(e, a) {
        1 & e && t._uU(0, ' Height ');
      }
      function A(e, a) {
        1 & e && t._uU(0, ' Series Field ');
      }
      function G(e, a) {
        1 & e && t._uU(0, ' Group Field ');
      }
      function B(e, a) {
        if (1 & e) {
          const o = t.EpF();
          t.TgZ(0, 'prizm-doc-demo'),
            t._UZ(1, 'prizm-charts-column', 7, 8),
            t.ALo(3, 'async'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-documentation'),
            t.YNc(5, N, 1, 0, 'ng-template', 9),
            t.YNc(6, V, 1, 0, 'ng-template', 10),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.width = r));
            }),
            t.YNc(7, M, 1, 0, 'ng-template', 11),
            t.YNc(8, Z, 1, 0, 'ng-template', 12),
            t.YNc(9, U, 1, 0, 'ng-template', 13),
            t.YNc(10, J, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.xField = r));
            }),
            t.YNc(11, L, 1, 0, 'ng-template', 15),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.yField = r));
            }),
            t.YNc(12, Y, 1, 0, 'ng-template', 16),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.height = r));
            }),
            t.YNc(13, A, 1, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.seriesField = r));
            }),
            t.YNc(14, G, 1, 0, 'ng-template', 18),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.groupField = r));
            }),
            t.qZA();
        }
        if (2 & e) {
          const o = t.MAs(2),
            p = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', o)('data', p.data)('width', p.width)(
              'theme',
              t.lcZ(3, 16, p.prizmTheme.changesTheme$)
            )('height', p.height)('options', p.options)('xField', p.xField)('groupField', p.groupField)(
              'seriesField',
              p.seriesField
            )('yField', p.yField),
            t.xp6(5),
            t.Q6J('documentationPropertyValue', p.width),
            t.xp6(4),
            t.Q6J('documentationPropertyValue', p.xField),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', p.yField),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', p.height),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', p.seriesField),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', p.groupField);
        }
      }
      function E(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 19)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmChartsLineModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 20),
            t.qZA()()),
          2 & e)
        ) {
          const o = t.oxw();
          t.xp6(7), t.Q6J('code', o.setupModule);
        }
      }
      let Q = (() => {
        class e {
          constructor(o) {
            (this.prizmTheme = o),
              (this.sizeVariants = ['s', 'm', 'xm', 'l', 'xl']),
              (this.size = this.sizeVariants[0]),
              (this.data = [
                {
                  product_type:
                    '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 8,
                  product_sub_type: '\u041b\u0430\u0441\u0442\u0438\u043a',
                },
                {
                  product_type:
                    '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 10,
                  product_sub_type:
                    '\u041a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430',
                },
                {
                  product_type:
                    '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 20,
                  product_sub_type:
                    '\u0427\u0435\u0440\u043d\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c',
                },
                {
                  product_type:
                    '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 13,
                  product_sub_type:
                    '\u0427\u0435\u0440\u043d\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u0430\u043c\u0435\u043d\u044c',
                },
                {
                  product_type:
                    '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 21,
                  product_sub_type: '\u041b\u0430\u0441\u0442\u0438\u043a',
                },
                {
                  product_type:
                    '\u041e\u0444\u0438\u0441\u043d\u044b\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0438',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 21,
                  product_sub_type:
                    '\u041a\u043d\u0438\u0436\u043d\u0430\u044f \u043f\u043e\u043b\u043a\u0430',
                },
                {
                  product_type:
                    '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 13,
                  product_sub_type:
                    '\u0421\u0442\u0438\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430',
                },
                {
                  product_type:
                    '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 2,
                  product_sub_type:
                    '\u0421\u0442\u0438\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430',
                },
                {
                  product_type:
                    '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 5,
                  product_sub_type:
                    '\u041c\u0438\u043a\u0440\u043e\u0432\u043e\u043b\u043d\u043e\u0432\u0430\u044f \u043f\u0435\u0447\u044c',
                },
                {
                  product_type:
                    '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 14,
                  product_sub_type:
                    '\u0418\u043d\u0434\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430',
                },
                {
                  product_type:
                    '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 23,
                  product_sub_type:
                    '\u041c\u0438\u043a\u0440\u043e\u0432\u043e\u043b\u043d\u043e\u0432\u0430\u044f \u043f\u0435\u0447\u044c',
                },
                {
                  product_type:
                    '\u0411\u044b\u0442\u043e\u0432\u0430\u044f \u0442\u0435\u0445\u043d\u0438\u043a\u0430 \u043c\u0435\u0431\u0435\u043b\u044c',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 23,
                  product_sub_type:
                    '\u0418\u043d\u0434\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043f\u043b\u0438\u0442\u0430',
                },
                {
                  product_type:
                    '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 33,
                  product_sub_type: '\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440',
                },
                {
                  product_type:
                    '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 4,
                  product_sub_type: '\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440',
                },
                {
                  product_type:
                    '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 23,
                  product_sub_type:
                    '\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c',
                },
                {
                  product_type:
                    '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 20.9,
                  product_sub_type:
                    '\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c',
                },
                {
                  product_type:
                    '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                  sex: '\u043c\u0443\u0436\u0447\u0438\u043d\u0430',
                  order_amt: 5.9,
                  product_sub_type: '\u041c\u044b\u0448\u044c',
                },
                {
                  product_type:
                    '\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442',
                  sex: '\u0416\u0435\u043d\u0441\u043a\u0438\u0439',
                  order_amt: 5.9,
                  product_sub_type: '\u041c\u044b\u0448\u044c',
                },
              ]),
              (this.width = 600),
              (this.xField = 'product_type'),
              (this.yField = 'order_amt'),
              (this.groupField = 'sex'),
              (this.seriesField = 'product_sub_type'),
              (this.setupModule = n.e(37538).then(n.t.bind(n, 37538, 17))),
              (this.height = 300),
              (this.options = { isGroup: !0, isStack: !0 }),
              (this.exampleBase = {
                TypeScript: n.e(92359).then(n.t.bind(n, 92359, 17)),
                HTML: n.e(99680).then(n.t.bind(n, 99680, 17)),
              }),
              (this.exampleColumnGroup = {
                TypeScript: n.e(94785).then(n.t.bind(n, 94785, 17)),
                HTML: n.e(78224).then(n.t.bind(n, 78224, 17)),
              }),
              (this.exampleColumnStack = {
                TypeScript: n.e(6e3).then(n.t.bind(n, 6e3, 17)),
                HTML: n.e(29120).then(n.t.bind(n, 29120, 17)),
              });
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)(t.Y36(l.il));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-button-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Column'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              ['id', 'group', 'heading', 'Group', 3, 'content'],
              ['id', 'stack', 'heading', 'Stack', 3, 'content'],
              [
                3,
                'prizmDocHostElement',
                'data',
                'width',
                'theme',
                'height',
                'options',
                'xField',
                'groupField',
                'seriesField',
                'yField',
              ],
              ['element', ''],
              [
                'documentationPropertyName',
                'theme',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                'PrizmChartTheme',
              ],
              [
                'documentationPropertyName',
                'width',
                'documentationPropertyType',
                'number',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'options',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                'PrizmChartsColumnOptions',
              ],
              [
                'documentationPropertyName',
                'data',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                'PrizmChartsColumnItem[]',
              ],
              [
                'documentationPropertyName',
                'label',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                ' PrizmChartsColumnOptions[label]',
              ],
              [
                'documentationPropertyName',
                'xField',
                'documentationPropertyType',
                'string',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'yField',
                'documentationPropertyType',
                'string',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'height',
                'documentationPropertyType',
                'number',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'seriesField',
                'documentationPropertyType',
                'string',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'groupField',
                'documentationPropertyType',
                'string',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (o, p) {
              1 & o &&
                (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                t._uU(
                  2,
                  ' Column charts are useful for showing data changes over a period of time or for illustrating comparisons among items. In column charts, categories are typically organized along the horizontal axis and values along the vertical axis. '
                ),
                t.qZA(),
                t.YNc(3, b, 6, 3, 'ng-template', 2),
                t.YNc(4, B, 15, 18, 'ng-template', 3),
                t.YNc(5, E, 8, 1, 'ng-template', 2),
                t.qZA());
            },
            dependencies: [y.c, _.F, h.K, C.N, g.W, x.l, P.a, F.w, T.k, i.m, f, z, v, u.Ov],
            encapsulation: 2,
            changeDetection: 0,
          })),
          e
        );
      })();
      var S = n(7452);
      let H = (() => {
        class e {}
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [u.ez, s.Qp, S.Im, c.Bz.forChild((0, s.GB)(Q))] })),
          e
        );
      })();
    },
  },
]);
