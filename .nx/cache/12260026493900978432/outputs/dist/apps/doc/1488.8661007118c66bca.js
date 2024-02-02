'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [1488],
  {
    1488: (E, r, a) => {
      a.r(r), a.d(r, { PieModule: () => D });
      var l = a(96814),
        c = a(21004),
        s = a(75187),
        u = a(77410),
        e = a(65879),
        h = a(8221),
        g = a(30990),
        P = a(83419),
        y = a(78905),
        _ = a(63796),
        C = a(75987),
        f = a(43015),
        x = a(56586),
        T = a(57679),
        d = a(92513);
      let v = (() => {
        class t {
          constructor(o) {
            (this.prizmTheme = o),
              (this.data = [
                {
                  type: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043e\u0434\u0438\u043d',
                  value: 27,
                },
                {
                  type: '\u0432\u0442\u043e\u0440\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                  value: 25,
                },
                {
                  type: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0442\u0440\u0438',
                  value: 18,
                },
                {
                  type: '\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                  value: 15,
                },
                {
                  type: '\u043f\u044f\u0442\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                  value: 10,
                },
                { type: '\u0434\u0440\u0443\u0433\u043e\u0435', value: 5 },
              ]),
              (this.colorField = 'type'),
              (this.angleField = 'value'),
              (this.interactions = [{ type: 'element-active' }]),
              (this.label = {
                type: 'inner',
                offset: '-30%',
                content: ({ percent: n }) => `${(100 * n).toFixed(0)}%`,
                style: { fontSize: 14, textAlign: 'center' },
              }),
              (this.options = { appendPadding: 10, radius: 0.9 });
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)(e.Y36(u.il));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-charts-pie-example']],
            decls: 2,
            vars: 9,
            consts: [[3, 'data', 'options', 'colorField', 'angleField', 'interactions', 'label', 'theme']],
            template: function (o, n) {
              1 & o && (e._UZ(0, 'prizm-charts-pie', 0), e.ALo(1, 'async')),
                2 & o &&
                  e.Q6J('data', n.data)('options', n.options)('colorField', n.colorField)(
                    'angleField',
                    n.angleField
                  )('interactions', n.interactions)('label', n.label)(
                    'theme',
                    e.lcZ(1, 7, n.prizmTheme.changesTheme$)
                  );
            },
            dependencies: [d.v, l.Ov],
            styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
          })),
          t
        );
      })();
      function V(t, i) {
        if (
          (1 & t && (e.TgZ(0, 'prizm-doc-example', 4), e._UZ(1, 'prizm-charts-pie-example'), e.qZA()), 2 & t)
        ) {
          const o = e.oxw();
          e.Q6J('content', o.exampleOutline);
        }
      }
      function z(t, i) {
        1 & t && e._uU(0, ' Width ');
      }
      function N(t, i) {
        1 & t && e._uU(0, ' Height ');
      }
      function F(t, i) {
        1 & t && e._uU(0, ' Angle Field Name ');
      }
      function M(t, i) {
        1 & t && e._uU(0, ' Theme ');
      }
      function J(t, i) {
        1 & t && e._uU(0, ' Width ');
      }
      function Z(t, i) {
        1 & t && e._uU(0, ' Height ');
      }
      function U(t, i) {
        1 & t && e._uU(0, ' Color Field Name ');
      }
      function A(t, i) {
        1 & t && e._uU(0, ' Interactions ');
      }
      function Y(t, i) {
        1 & t && e._uU(0, ' Options ');
      }
      function H(t, i) {
        1 & t && e._uU(0, ' Data ');
      }
      function Q(t, i) {
        1 & t && e._uU(0, ' Label ');
      }
      function G(t, i) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'prizm-doc-demo'),
            e._UZ(1, 'prizm-charts-pie', 5, 6),
            e.ALo(3, 'async'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-documentation'),
            e.YNc(5, z, 1, 0, 'ng-template', 7),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.width = p));
            }),
            e.YNc(6, N, 1, 0, 'ng-template', 8),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.height = p));
            }),
            e.YNc(7, F, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.angleField = p));
            }),
            e.YNc(8, M, 1, 0, 'ng-template', 10),
            e.YNc(9, J, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.width = p));
            }),
            e.YNc(10, Z, 1, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.height = p));
            }),
            e.YNc(11, U, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.colorField = p));
            }),
            e.YNc(12, A, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.interactions = p));
            }),
            e.YNc(13, Y, 1, 0, 'ng-template', 15),
            e.YNc(14, H, 1, 0, 'ng-template', 16),
            e.YNc(15, Q, 1, 0, 'ng-template', 17),
            e.NdJ('documentationPropertyValueChange', function (p) {
              e.CHM(o);
              const m = e.oxw();
              return e.KtG((m.label = p));
            }),
            e.qZA();
        }
        if (2 & t) {
          const o = e.MAs(2),
            n = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', o)('data', n.data)('height', n.height)('width', n.width)(
              'options',
              n.options
            )('colorField', n.colorField)('angleField', n.angleField)('interactions', n.interactions)(
              'label',
              n.label
            )('theme', e.lcZ(3, 18, n.prizmTheme.changesTheme$)),
            e.xp6(4),
            e.Q6J('documentationPropertyValue', n.width),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.height),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.angleField),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', n.width),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.height),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.colorField),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.interactions),
            e.xp6(3),
            e.Q6J('documentationPropertyValue', n.label);
        }
      }
      function K(t, i) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 18)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmChartsPieModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 19),
            e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw();
          e.xp6(7), e.Q6J('code', o.setupModule);
        }
      }
      let O = (() => {
        class t {
          constructor(o) {
            (this.prizmTheme = o),
              (this.data = [
                {
                  type: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u043e\u0434\u0438\u043d',
                  value: 27,
                },
                {
                  type: '\u0432\u0442\u043e\u0440\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                  value: 25,
                },
                {
                  type: '\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f \u0442\u0440\u0438',
                  value: 18,
                },
                {
                  type: '\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                  value: 15,
                },
                {
                  type: '\u043f\u044f\u0442\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f',
                  value: 10,
                },
                { type: '\u0434\u0440\u0443\u0433\u043e\u0435', value: 5 },
              ]),
              (this.colorField = 'type'),
              (this.angleField = 'value'),
              (this.interactions = [{ type: 'element-active' }]),
              (this.label = {
                type: 'inner',
                offset: '-30%',
                content: ({ percent: n }) => `${(100 * n).toFixed(0)}%`,
                style: { fontSize: 14, textAlign: 'center' },
              }),
              (this.options = { appendPadding: 10, radius: 0.9 }),
              (this.width = 400),
              (this.height = 300),
              (this.sizeVariants = ['s', 'm', 'xm', 'l', 'xl']),
              (this.size = this.sizeVariants[0]),
              (this.setupModule = a.e(34757).then(a.t.bind(a, 34757, 17))),
              (this.exampleOutline = {
                TypeScript: a.e(56264).then(a.t.bind(a, 56264, 17)),
                HTML: a.e(74202).then(a.t.bind(a, 74202, 17)),
              });
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)(e.Y36(u.il));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-button-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Pie'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              [
                3,
                'prizmDocHostElement',
                'data',
                'height',
                'width',
                'options',
                'colorField',
                'angleField',
                'interactions',
                'label',
                'theme',
              ],
              ['element', ''],
              [
                'documentationPropertyName',
                'width',
                'documentationPropertyType',
                'number',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'height',
                'documentationPropertyType',
                'number',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'angleField',
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
              [
                'documentationPropertyName',
                'colorField',
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
                'interactions',
                'documentationPropertyType',
                "PrizmChartsPieOptions['interactions']",
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
                'PrizmChartsPieOptions',
              ],
              [
                'documentationPropertyName',
                'data',
                'documentationPropertyMode',
                'input',
                'documentationPropertyType',
                'PrizmChartsPieItem[]',
              ],
              [
                'documentationPropertyName',
                'label',
                'documentationPropertyType',
                "PrizmChartsPieOptions['label']",
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (o, n) {
              1 & o &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(
                  2,
                  ' A pie chart helps organize and show data as a percentage of a whole. True to the name, this kind of visualization uses a circle to represent the whole, and slices of that circle, or \u201cpie\u201d, to represent the specific categories that compose the whole. '
                ),
                e.qZA(),
                e.YNc(3, V, 2, 1, 'ng-template', 2),
                e.YNc(4, G, 16, 20, 'ng-template', 3),
                e.YNc(5, K, 8, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [h.c, g.F, P.K, y.N, _.W, C.l, f.a, x.w, T.k, d.v, v, l.Ov],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var w = a(7452);
      let D = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [l.ez, c.Qp, w._J, s.Bz.forChild((0, c.GB)(O))] })),
          t
        );
      })();
    },
  },
]);
