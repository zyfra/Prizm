'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [1712],
  {
    1712: (D, r, n) => {
      n.r(r), n.d(r, { WaterfallModule: () => Q });
      var p = n(96814),
        c = n(21004),
        u = n(75187),
        d = n(77410),
        t = n(65879),
        y = n(8221),
        h = n(30990),
        f = n(83419),
        g = n(78905),
        P = n(63796),
        x = n(75987),
        C = n(43015),
        T = n(56586),
        z = n(57679),
        s = n(90217);
      let v = (() => {
        class e {
          constructor(o) {
            (this.prizmTheme = o),
              (this.data = [
                {
                  type: '\u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u043d\u0443\u0436\u0434\u044b',
                  money: 120,
                },
                {
                  type: '\u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u0435',
                  money: 900,
                },
                { type: '\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442', money: 200 },
                {
                  type: '\u0441\u0447\u0435\u0442 \u0437\u0430 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438',
                  money: 300,
                },
                { type: '\u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c', money: 1200 },
                {
                  type: '\u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u0446\u0435\u043d\u0442\u0440',
                  money: 1e3,
                },
                { type: '\u0434\u043e\u0445\u043e\u0434', money: -2e3 },
              ]),
              (this.xField = 'type'),
              (this.yField = 'money'),
              (this.options = {
                appendPadding: [15, 0, 0, 0],
                meta: {
                  type: { alias: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' },
                  money: {
                    alias:
                      '\u0434\u043e\u0445\u043e\u0434\u044b \u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b',
                    formatter: a => `${a} \u0420`,
                  },
                },
                label: {
                  style: { fontSize: 10, fill: 'rgba(0,0,0,0.65)' },
                  layout: [{ type: 'interval-adjust-position' }],
                },
                total: {
                  label:
                    '\u0441\u0443\u043c\u043c\u0430\u0440\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b',
                  style: { fill: '#96a6a6' },
                },
              });
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)(t.Y36(d.il));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-charts-waterfall-example']],
            decls: 2,
            vars: 7,
            consts: [[3, 'data', 'options', 'xField', 'yField', 'theme']],
            template: function (o, a) {
              1 & o && (t._UZ(0, 'prizm-charts-waterfall', 0), t.ALo(1, 'async')),
                2 & o &&
                  t.Q6J('data', a.data)('options', a.options)('xField', a.xField)('yField', a.yField)(
                    'theme',
                    t.lcZ(1, 5, a.prizmTheme.changesTheme$)
                  );
            },
            dependencies: [s.y, p.Ov],
            styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
          })),
          e
        );
      })();
      function W(e, l) {
        if (
          (1 & e && (t.TgZ(0, 'prizm-doc-example', 4), t._UZ(1, 'prizm-charts-waterfall-example'), t.qZA()),
          2 & e)
        ) {
          const o = t.oxw();
          t.Q6J('content', o.exampleOutline);
        }
      }
      function F(e, l) {
        1 & e && t._uU(0, ' X Field Name ');
      }
      function N(e, l) {
        1 & e && t._uU(0, ' Options ');
      }
      function M(e, l) {
        1 & e && t._uU(0, ' Y Field Name ');
      }
      function V(e, l) {
        1 & e && t._uU(0, ' Data ');
      }
      function Z(e, l) {
        1 & e && t._uU(0, ' Theme ');
      }
      function U(e, l) {
        1 & e && t._uU(0, ' Width ');
      }
      function _(e, l) {
        1 & e && t._uU(0, ' Height ');
      }
      function A(e, l) {
        if (1 & e) {
          const o = t.EpF();
          t.TgZ(0, 'prizm-doc-demo'),
            t._UZ(1, 'prizm-charts-waterfall', 5, 6),
            t.ALo(3, 'async'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-documentation'),
            t.YNc(5, F, 1, 0, 'ng-template', 7),
            t.NdJ('documentationPropertyValueChange', function (m) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.xField = m));
            }),
            t.YNc(6, N, 1, 0, 'ng-template', 8),
            t.YNc(7, M, 1, 0, 'ng-template', 9),
            t.NdJ('documentationPropertyValueChange', function (m) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.xField = m));
            }),
            t.YNc(8, V, 1, 0, 'ng-template', 10),
            t.YNc(9, Z, 1, 0, 'ng-template', 11),
            t.YNc(10, U, 1, 0, 'ng-template', 12),
            t.NdJ('documentationPropertyValueChange', function (m) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.width = m));
            }),
            t.YNc(11, _, 1, 0, 'ng-template', 13),
            t.NdJ('documentationPropertyValueChange', function (m) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.height = m));
            }),
            t.qZA();
        }
        if (2 & e) {
          const o = t.MAs(2),
            a = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', o)('data', a.data)('options', a.options)('xField', a.xField)(
              'yField',
              a.yField
            )('theme', t.lcZ(3, 10, a.prizmTheme.changesTheme$)),
            t.xp6(4),
            t.Q6J('documentationPropertyValue', a.xField),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', a.xField),
            t.xp6(3),
            t.Q6J('documentationPropertyValue', a.width),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', a.height);
        }
      }
      function J(e, l) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 14)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmChartsWaterfallModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 15),
            t.qZA()()),
          2 & e)
        ) {
          const o = t.oxw();
          t.xp6(7), t.Q6J('code', o.setupModule);
        }
      }
      let Y = (() => {
        class e {
          constructor(o) {
            (this.prizmTheme = o),
              (this.data = [
                {
                  type: '\u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u043d\u0443\u0436\u0434\u044b',
                  money: 120,
                },
                {
                  type: '\u0440\u0430\u0441\u0445\u043e\u0434\u044b \u043d\u0430 \u043f\u0438\u0442\u0430\u043d\u0438\u0435',
                  money: 900,
                },
                { type: '\u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442', money: 200 },
                {
                  type: '\u0441\u0447\u0435\u0442 \u0437\u0430 \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438',
                  money: 300,
                },
                { type: '\u0430\u0440\u0435\u043d\u0434\u043e\u0432\u0430\u0442\u044c', money: 1200 },
                {
                  type: '\u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u0446\u0435\u043d\u0442\u0440',
                  money: 1e3,
                },
                { type: '\u0434\u043e\u0445\u043e\u0434', money: -2e3 },
              ]),
              (this.xField = 'type'),
              (this.yField = 'money'),
              (this.options = {
                appendPadding: [15, 0, 0, 0],
                meta: {
                  type: { alias: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f' },
                  money: {
                    alias:
                      '\u0434\u043e\u0445\u043e\u0434\u044b \u0438 \u0440\u0430\u0441\u0445\u043e\u0434\u044b',
                    formatter: a => `${a} \u0420`,
                  },
                },
                label: {
                  style: { fontSize: 10, fill: 'rgba(0,0,0,0.65)' },
                  layout: [{ type: 'interval-adjust-position' }],
                },
                total: {
                  label:
                    '\u0441\u0443\u043c\u043c\u0430\u0440\u043d\u044b\u0435 \u0440\u0430\u0441\u0445\u043e\u0434\u044b',
                  style: { fill: '#96a6a6' },
                },
              }),
              (this.width = 400),
              (this.height = 300),
              (this.setupModule = n.e(95850).then(n.t.bind(n, 95850, 17))),
              (this.exampleOutline = {
                TypeScript: n.e(34500).then(n.t.bind(n, 34500, 17)),
                HTML: n.e(96897).then(n.t.bind(n, 96897, 17)),
              });
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)(t.Y36(d.il));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-button-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Waterfall'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              [3, 'prizmDocHostElement', 'data', 'options', 'xField', 'yField', 'theme'],
              ['element', ''],
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
                'options',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                'PrizmChartsWaterfallOptions',
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
                'data',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                'PrizmChartsWaterfallItem[]',
              ],
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
                'height',
                'documentationPropertyType',
                'number',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (o, a) {
              1 & o &&
                (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                t._uU(
                  2,
                  ' A waterfall chart is a form of data visualization that helps in understanding the cumulative effect of sequentially introduced positive or negative values. '
                ),
                t.qZA(),
                t.YNc(3, W, 2, 1, 'ng-template', 2),
                t.YNc(4, A, 12, 12, 'ng-template', 3),
                t.YNc(5, J, 8, 1, 'ng-template', 2),
                t.qZA());
            },
            dependencies: [y.c, h.F, f.K, g.N, P.W, x.l, C.a, T.w, z.k, s.y, v, p.Ov],
            encapsulation: 2,
            changeDetection: 0,
          })),
          e
        );
      })();
      var H = n(7452);
      let Q = (() => {
        class e {}
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [p.ez, c.Qp, H.wp, u.Bz.forChild((0, c.GB)(Y))] })),
          e
        );
      })();
    },
  },
]);
