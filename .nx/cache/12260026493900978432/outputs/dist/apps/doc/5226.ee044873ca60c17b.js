'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [5226],
  {
    5226: (X, c, n) => {
      n.r(c), n.d(c, { BarModule: () => K });
      var m = n(96814),
        d = n(21004),
        u = n(75187),
        i = n(77410),
        e = n(65879),
        y = n(8221),
        h = n(30990),
        g = n(83419),
        C = n(78905),
        P = n(63796),
        x = n(75987),
        f = n(43015),
        T = n(56586),
        v = n(57679),
        s = n(59883),
        B = n(7452);
      const z = ['bar'];
      let F = (() => {
        class t {
          constructor(a) {
            (this.prizmTheme = a),
              (this.data = [
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 1', sales: 38 },
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 2', sales: 52 },
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 3', sales: 61 },
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 4', sales: 145 },
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 5', sales: 48 },
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 6', sales: 38 },
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 7', sales: 38 },
                { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 8', sales: 38 },
              ]),
              (this.color = o => (o.sales > 40 ? 'red' : 'green'));
          }
          ngAfterViewInit() {
            this.bar.updateOptions({ legend: !1 });
          }
        }
        return (
          (t.ɵfac = function (a) {
            return new (a || t)(e.Y36(i.il));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-charts-bar-example']],
            viewQuery: function (a, o) {
              if ((1 & a && e.Gf(z, 5), 2 & a)) {
                let p;
                e.iGM((p = e.CRH())) && (o.bar = p.first);
              }
            },
            decls: 6,
            vars: 8,
            consts: [
              ['xField', 'sales', 'seriesField', 'sales', 'yField', 'type', 3, 'data', 'theme', 'color'],
              ['bar', ''],
            ],
            template: function (a, o) {
              1 & a &&
                (e._UZ(0, 'prizm-charts-bar', 0, 1),
                e.ALo(2, 'async'),
                e.TgZ(3, 'pre'),
                e._uU(4),
                e.ALo(5, 'json'),
                e.qZA()),
                2 & a &&
                  (e.Q6J('data', o.data)('theme', e.lcZ(2, 4, o.prizmTheme.changesTheme$))('color', o.color),
                  e.xp6(4),
                  e.Oqu(e.lcZ(5, 6, o.data)));
            },
            dependencies: [s.A, m.Ov, m.Ts],
            styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
          })),
          t
        );
      })();
      const M = function () {
        return { isStack: !0 };
      };
      let N = (() => {
          class t {
            constructor(a) {
              (this.prizmTheme = a),
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
                ]);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(i.il));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-charts-stacked-bar-example']],
              decls: 2,
              vars: 6,
              consts: [
                ['xField', 'value', 'yField', 'year', 'seriesField', 'type', 3, 'data', 'options', 'theme'],
              ],
              template: function (a, o) {
                1 & a && (e._UZ(0, 'prizm-charts-bar', 0), e.ALo(1, 'async')),
                  2 & a &&
                    e.Q6J('data', o.data)('options', e.DdM(5, M))(
                      'theme',
                      e.lcZ(1, 3, o.prizmTheme.changesTheme$)
                    );
              },
              dependencies: [s.A, m.Ov],
              styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
            })),
            t
          );
        })(),
        Z = (() => {
          class t {
            constructor(a) {
              (this.prizmTheme = a),
                (this.data = [
                  { label: 'Mon.', type: 'series1', value: 2800 },
                  { label: 'Mon.', type: 'series2', value: 2260 },
                  { label: 'Tues.', type: 'series1', value: 1800 },
                  { label: 'Tues.', type: 'series2', value: 1300 },
                  { label: 'Wed.', type: 'series1', value: 950 },
                  { label: 'Wed.', type: 'series2', value: 900 },
                  { label: 'Thur.', type: 'series1', value: 500 },
                  { label: 'Thur.', type: 'series2', value: 390 },
                  { label: 'Fri.', type: 'series1', value: 170 },
                  { label: 'Fri.', type: 'series2', value: 100 },
                ]),
                (this.label = {
                  position: 'middle',
                  layout: [
                    { type: 'interval-adjust-position' },
                    { type: 'interval-hide-overlap' },
                    { type: 'adjust-color' },
                  ],
                });
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(i.il));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-charts-bar-group-example']],
              decls: 2,
              vars: 5,
              consts: [
                ['xField', 'value', 'yField', 'label', 'seriesField', 'type', 3, 'data', 'label', 'theme'],
              ],
              template: function (a, o) {
                1 & a && (e._UZ(0, 'prizm-charts-bar', 0), e.ALo(1, 'async')),
                  2 & a &&
                    e.Q6J('data', o.data)('label', o.label)('theme', e.lcZ(1, 3, o.prizmTheme.changesTheme$));
              },
              dependencies: [s.A, m.Ov],
              styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
            })),
            t
          );
        })();
      function V(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-charts-bar-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-charts-stacked-bar-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-charts-bar-group-example'),
            e.qZA()),
          2 & t)
        ) {
          const a = e.oxw();
          e.Q6J('content', a.exampleOutline),
            e.xp6(2),
            e.Q6J('content', a.exampleOutline),
            e.xp6(2),
            e.Q6J('content', a.exampleGroup);
        }
      }
      function A(t, r) {
        1 & t && e._uU(0, ' Width ');
      }
      function U(t, r) {
        1 & t && e._uU(0, ' X Field Name ');
      }
      function b(t, r) {
        1 & t && e._uU(0, ' Manually set callback ');
      }
      function J(t, r) {
        1 & t && e._uU(0, ' Label ');
      }
      function Y(t, r) {
        1 & t && e._uU(0, ' Y Field Name ');
      }
      function L(t, r) {
        1 & t && e._uU(0, ' Series Field Name ');
      }
      function E(t, r) {
        1 & t && e._uU(0, ' Data ');
      }
      function O(t, r) {
        1 & t && e._uU(0, ' Auto Fit ');
      }
      function Q(t, r) {
        1 & t && e._uU(0, ' Theme ');
      }
      function _(t, r) {
        1 & t && e._uU(0, ' Options ');
      }
      function G(t, r) {
        1 & t && e._uU(0, ' Height ');
      }
      function H(t, r) {
        if (1 & t) {
          const a = e.EpF();
          e.TgZ(0, 'prizm-doc-demo'),
            e._UZ(1, 'prizm-charts-bar', 7, 8),
            e.ALo(3, 'async'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-documentation'),
            e.YNc(5, A, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(a);
              const l = e.oxw();
              return e.KtG((l.width = p));
            }),
            e.YNc(6, U, 1, 0, 'ng-template', 10),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(a);
              const l = e.oxw();
              return e.KtG((l.xField = p));
            }),
            e.YNc(7, b, 1, 0, 'ng-template', 11),
            e.YNc(8, J, 1, 0, 'ng-template', 12),
            e.YNc(9, Y, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(a);
              const l = e.oxw();
              return e.KtG((l.yField = p));
            }),
            e.YNc(10, L, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(a);
              const l = e.oxw();
              return e.KtG((l.seriesField = p));
            }),
            e.YNc(11, E, 1, 0, 'ng-template', 15),
            e.YNc(12, O, 1, 0, 'ng-template', 16),
            e.YNc(13, Q, 1, 0, 'ng-template', 17),
            e.YNc(14, _, 1, 0, 'ng-template', 18),
            e.YNc(15, G, 1, 0, 'ng-template', 19),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(a);
              const l = e.oxw();
              return e.KtG((l.height = p));
            }),
            e.qZA();
        }
        if (2 & t) {
          const a = e.MAs(2),
            o = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', a)('data', o.data)('height', o.height)('width', o.width)(
              'xField',
              o.xField
            )('yField', o.yField)('seriesField', o.seriesField)(
              'theme',
              e.lcZ(3, 13, o.prizmTheme.changesTheme$)
            ),
            e.xp6(4),
            e.Q6J('documentationPropertyValue', o.width),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.xField),
            e.xp6(3),
            e.Q6J('documentationPropertyValue', o.yField),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', o.seriesField),
            e.xp6(5),
            e.Q6J('documentationPropertyValue', o.height);
        }
      }
      function S(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 20)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmChartsBarModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 21),
            e.qZA()()),
          2 & t)
        ) {
          const a = e.oxw();
          e.xp6(7), e.Q6J('code', a.setupModule);
        }
      }
      let D = (() => {
          class t {
            constructor(a) {
              (this.prizmTheme = a),
                (this.data = [
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 1', sales: 38 },
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 2', sales: 52 },
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 3', sales: 61 },
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 4', sales: 145 },
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 5', sales: 48 },
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 6', sales: 38 },
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 7', sales: 38 },
                  { type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 8', sales: 38 },
                ]),
                (this.yField = 'type'),
                (this.xField = 'sales'),
                (this.setupModule = n.e(9349).then(n.t.bind(n, 9349, 17))),
                (this.exampleOutline = {
                  TypeScript: n.e(50101).then(n.t.bind(n, 50101, 17)),
                  HTML: n.e(82659).then(n.t.bind(n, 82659, 17)),
                }),
                (this.exampleStacked = {
                  TypeScript: n.e(31745).then(n.t.bind(n, 31745, 17)),
                  HTML: n.e(72686).then(n.t.bind(n, 72686, 17)),
                }),
                (this.exampleGroup = {
                  TypeScript: n.e(38288).then(n.t.bind(n, 38288, 17)),
                  HTML: n.e(33698).then(n.t.bind(n, 33698, 17)),
                }),
                (this.height = 300),
                (this.width = null),
                (this.seriesField = null);
            }
          }
          return (
            (t.ɵfac = function (a) {
              return new (a || t)(e.Y36(i.il));
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-button-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'Bar'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Base', 3, 'content'],
                ['id', 'stacked', 'heading', 'Stacked', 3, 'content'],
                ['id', 'group', 'heading', 'Group', 3, 'content'],
                [
                  3,
                  'prizmDocHostElement',
                  'data',
                  'height',
                  'width',
                  'xField',
                  'yField',
                  'seriesField',
                  'theme',
                ],
                ['element', ''],
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
                  'color',
                  'documentationPropertyType',
                  "PrizmChartsBarOptions['color']",
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'label',
                  'documentationPropertyMode',
                  'input',
                  'documentationPropertyType',
                  ' PrizmChartsBarOptions[label]',
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
                  'data',
                  'documentationPropertyMode',
                  'input',
                  'documentationPropertyType',
                  'PrizmChartsAreaItem[]',
                ],
                [
                  'documentationPropertyName',
                  'autoFit',
                  'documentationPropertyMode',
                  'input',
                  'documentationPropertyType',
                  'boolean',
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
                  'options',
                  'documentationPropertyMode',
                  'input',
                  'documentationPropertyType',
                  'PrizmChartsBarOptions',
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
              template: function (a, o) {
                1 & a &&
                  (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  e._uU(
                    2,
                    ' Bar graphs are good for plotting data that spans many years (or days, weeks . . .), has really big changes from year to year (or day to day . . .), or they can be used for comparing different items in a related category (for example: comparing something between different states). '
                  ),
                  e.qZA(),
                  e.YNc(3, V, 6, 3, 'ng-template', 2),
                  e.YNc(4, H, 16, 15, 'ng-template', 3),
                  e.YNc(5, S, 8, 1, 'ng-template', 2),
                  e.qZA());
              },
              dependencies: [y.c, h.F, g.K, C.N, P.W, x.l, f.a, T.w, v.k, s.A, F, N, Z, m.Ov],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        K = (() => {
          class t {}
          return (
            (t.ɵfac = function (a) {
              return new (a || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({ imports: [m.ez, d.Qp, B.EC, u.Bz.forChild((0, d.GB)(D))] })),
            t
          );
        })();
    },
  },
]);
