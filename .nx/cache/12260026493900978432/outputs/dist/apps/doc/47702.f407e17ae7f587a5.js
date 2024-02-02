'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [47702],
  {
    47702: (E, y, n) => {
      n.r(y), n.d(y, { AreaModule: () => D });
      var p = n(96814),
        c = n(21004),
        d = n(75187),
        x = n(77410),
        t = n(65879),
        u = n(8221),
        Q = n(30990),
        s = n(83419),
        h = n(78905),
        g = n(63796),
        P = n(75987),
        C = n(43015),
        A = n(56586),
        T = n(57679),
        l = n(21713);
      let f = (() => {
        class e {
          constructor(o) {
            (this.prizmTheme = o),
              (this.data = [
                { x: '2006 Q3', y: 1 },
                { x: '2006 Q4', y: 1.08 },
                { x: '2007 Q1', y: 1.17 },
                { x: '2007 Q2', y: 1.26 },
                { x: '2007 Q3', y: 1.34 },
                { x: '2007 Q4', y: 1.41 },
                { x: '2008 Q1', y: 1.52 },
                { x: '2008 Q2', y: 1.67 },
                { x: '2008 Q3', y: 1.84 },
                { x: '2008 Q4', y: 2.07 },
                { x: '2009 Q1', y: 2.39 },
                { x: '2009 Q2', y: 2.71 },
                { x: '2009 Q3', y: 3.03 },
                { x: '2009 Q4', y: 3.33 },
                { x: '2010 Q1', y: 3.5 },
                { x: '2010 Q2', y: 3.37 },
                { x: '2010 Q3', y: 3.15 },
                { x: '2010 Q4', y: 3.01 },
                { x: '2011 Q1', y: 2.8 },
                { x: '2011 Q2', y: 2.8 },
                { x: '2011 Q3', y: 2.84 },
                { x: '2011 Q4', y: 2.75 },
                { x: '2012 Q1', y: 2.64 },
                { x: '2012 Q2', y: 2.55 },
                { x: '2012 Q3', y: 2.46 },
                { x: '2012 Q4', y: 2.45 },
                { x: '2013 Q1', y: 2.57 },
                { x: '2013 Q2', y: 2.68 },
                { x: '2013 Q3', y: 2.8 },
                { x: '2013 Q4', y: 2.89 },
                { x: '2014 Q1', y: 2.85 },
                { x: '2014 Q2', y: 2.73 },
                { x: '2014 Q3', y: 2.54 },
                { x: '2014 Q4', y: 2.32 },
                { x: '2015 Q1', y: 2.25 },
                { x: '2015 Q2', y: 2.33 },
                { x: '2015 Q3', y: 2.53 },
                { x: '2015 Q4', y: 2.74 },
                { x: '2016 Q1', y: 2.76 },
                { x: '2016 Q2', y: 2.61 },
                { x: '2016 Q3', y: 2.35 },
                { x: '2016 Q4', y: 2.11 },
                { x: '2017 Q1', y: 2.08 },
                { x: '2017 Q2', y: 2.2 },
                { x: '2017 Q3', y: 2.38 },
                { x: '2017 Q4', y: 2.59 },
                { x: '2018 Q1', y: 2.63 },
                { x: '2018 Q2', y: 2.67 },
                { x: '2018 Q3', y: 2.64 },
                { x: '2018 Q4', y: 2.5 },
                { x: '2019 Q1', y: 2.31 },
                { x: '2019 Q2', y: 2.04 },
                { x: '2019 Q3', y: 1.83 },
                { x: '2019 Q4', y: 1.71 },
                { x: '2020 Q1', y: 1.65 },
                { x: '2020 Q2', y: 1.59 },
                { x: '2020 Q3', y: 1.58 },
              ]);
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)(t.Y36(x.il));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-charts-area-example']],
            decls: 2,
            vars: 5,
            consts: [[3, 'autoFit', 'data', 'theme']],
            template: function (o, m) {
              1 & o && (t._UZ(0, 'prizm-charts-area', 0), t.ALo(1, 'async')),
                2 & o &&
                  t.Q6J('autoFit', !0)('data', m.data)('theme', t.lcZ(1, 3, m.prizmTheme.changesTheme$));
            },
            dependencies: [l.V, p.Ov],
            styles: ['.block[_ngcontent-%COMP%]{width:100%;height:300px}'],
          })),
          e
        );
      })();
      function z(e, a) {
        if (
          (1 & e && (t.TgZ(0, 'prizm-doc-example', 4), t._UZ(1, 'prizm-charts-area-example'), t.qZA()), 2 & e)
        ) {
          const o = t.oxw();
          t.Q6J('content', o.exampleOutline);
        }
      }
      function v(e, a) {
        1 & e && t._uU(0, ' Width ');
      }
      function N(e, a) {
        1 & e && t._uU(0, ' X Field Name ');
      }
      function F(e, a) {
        1 & e && t._uU(0, ' Y Field Name ');
      }
      function M(e, a) {
        1 & e && t._uU(0, ' Data ');
      }
      function V(e, a) {
        1 & e && t._uU(0, ' Auto Fit ');
      }
      function _(e, a) {
        1 & e && t._uU(0, ' Theme ');
      }
      function Z(e, a) {
        1 & e && t._uU(0, ' Options ');
      }
      function U(e, a) {
        1 & e && t._uU(0, ' Height ');
      }
      function Y(e, a) {
        if (1 & e) {
          const o = t.EpF();
          t.TgZ(0, 'prizm-doc-demo'),
            t._UZ(1, 'prizm-charts-area', 5, 6),
            t.ALo(3, 'async'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-documentation'),
            t.YNc(5, v, 1, 0, 'ng-template', 7),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.width = r));
            }),
            t.YNc(6, N, 1, 0, 'ng-template', 8),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.xField = r));
            }),
            t.YNc(7, F, 1, 0, 'ng-template', 9),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.yField = r));
            }),
            t.YNc(8, M, 1, 0, 'ng-template', 10),
            t.YNc(9, V, 1, 0, 'ng-template', 11),
            t.YNc(10, _, 1, 0, 'ng-template', 12),
            t.YNc(11, Z, 1, 0, 'ng-template', 13),
            t.YNc(12, U, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (r) {
              t.CHM(o);
              const i = t.oxw();
              return t.KtG((i.height = r));
            }),
            t.qZA();
        }
        if (2 & e) {
          const o = t.MAs(2),
            m = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', o)('data', m.data)('xField', m.xField)('yField', m.yField)(
              'theme',
              t.lcZ(3, 11, m.prizmTheme.changesTheme$)
            )('height', m.height)('width', m.width),
            t.xp6(4),
            t.Q6J('documentationPropertyValue', m.width),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', m.xField),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', m.yField),
            t.xp6(5),
            t.Q6J('documentationPropertyValue', m.height);
        }
      }
      function J(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 15)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmAreaModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 16),
            t.qZA()()),
          2 & e)
        ) {
          const o = t.oxw();
          t.xp6(7), t.Q6J('code', o.setupModule);
        }
      }
      let H = (() => {
        class e {
          constructor(o) {
            (this.prizmTheme = o),
              (this.height = 300),
              (this.width = null),
              (this.xField = 'x'),
              (this.yField = 'y'),
              (this.data = [
                { x: '2006 Q3', y: 1 },
                { x: '2006 Q4', y: 1.08 },
                { x: '2007 Q1', y: 1.17 },
                { x: '2007 Q2', y: 1.26 },
                { x: '2007 Q3', y: 1.34 },
                { x: '2007 Q4', y: 1.41 },
                { x: '2008 Q1', y: 1.52 },
                { x: '2008 Q2', y: 1.67 },
                { x: '2008 Q3', y: 1.84 },
                { x: '2008 Q4', y: 2.07 },
                { x: '2009 Q1', y: 2.39 },
                { x: '2009 Q2', y: 2.71 },
                { x: '2009 Q3', y: 3.03 },
                { x: '2009 Q4', y: 3.33 },
                { x: '2010 Q1', y: 3.5 },
                { x: '2010 Q2', y: 3.37 },
                { x: '2010 Q3', y: 3.15 },
                { x: '2010 Q4', y: 3.01 },
                { x: '2011 Q1', y: 2.8 },
                { x: '2011 Q2', y: 2.8 },
                { x: '2011 Q3', y: 2.84 },
                { x: '2011 Q4', y: 2.75 },
                { x: '2012 Q1', y: 2.64 },
                { x: '2012 Q2', y: 2.55 },
                { x: '2012 Q3', y: 2.46 },
                { x: '2012 Q4', y: 2.45 },
                { x: '2013 Q1', y: 2.57 },
                { x: '2013 Q2', y: 2.68 },
                { x: '2013 Q3', y: 2.8 },
                { x: '2013 Q4', y: 2.89 },
                { x: '2014 Q1', y: 2.85 },
                { x: '2014 Q2', y: 2.73 },
                { x: '2014 Q3', y: 2.54 },
                { x: '2014 Q4', y: 2.32 },
                { x: '2015 Q1', y: 2.25 },
                { x: '2015 Q2', y: 2.33 },
                { x: '2015 Q3', y: 2.53 },
                { x: '2015 Q4', y: 2.74 },
                { x: '2016 Q1', y: 2.76 },
                { x: '2016 Q2', y: 2.61 },
                { x: '2016 Q3', y: 2.35 },
                { x: '2016 Q4', y: 2.11 },
                { x: '2017 Q1', y: 2.08 },
                { x: '2017 Q2', y: 2.2 },
                { x: '2017 Q3', y: 2.38 },
                { x: '2017 Q4', y: 2.59 },
                { x: '2018 Q1', y: 2.63 },
                { x: '2018 Q2', y: 2.67 },
                { x: '2018 Q3', y: 2.64 },
                { x: '2018 Q4', y: 2.5 },
                { x: '2019 Q1', y: 2.31 },
                { x: '2019 Q2', y: 2.04 },
                { x: '2019 Q3', y: 1.83 },
                { x: '2019 Q4', y: 1.71 },
                { x: '2020 Q1', y: 1.65 },
                { x: '2020 Q2', y: 1.59 },
                { x: '2020 Q3', y: 1.58 },
              ]),
              (this.setupModule = n.e(10955).then(n.t.bind(n, 10955, 17))),
              (this.exampleOutline = {
                TypeScript: n.e(34461).then(n.t.bind(n, 34461, 17)),
                HTML: n.e(91331).then(n.t.bind(n, 91331, 17)),
              });
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)(t.Y36(x.il));
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-button-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Area'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              [3, 'prizmDocHostElement', 'data', 'xField', 'yField', 'theme', 'height', 'width'],
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
                'PrizmChartsAriaOptions',
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
            template: function (o, m) {
              1 & o &&
                (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                t._uU(
                  2,
                  ' Area charts are primarily used when the magnitude of the trend is to be communicated (rather than individual data values). To showcase this magnitude, the area between the line segments and the axes is highlighted by filling it with color. '
                ),
                t.qZA(),
                t.YNc(3, z, 2, 1, 'ng-template', 2),
                t.YNc(4, Y, 13, 13, 'ng-template', 3),
                t.YNc(5, J, 8, 1, 'ng-template', 2),
                t.qZA());
            },
            dependencies: [u.c, Q.F, s.K, h.N, g.W, P.l, C.a, A.w, T.k, l.V, f, p.Ov],
            encapsulation: 2,
            changeDetection: 0,
          })),
          e
        );
      })();
      var O = n(7452);
      let D = (() => {
        class e {}
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [p.ez, c.Qp, O.nO, d.Bz.forChild((0, c.GB)(H))] })),
          e
        );
      })();
    },
  },
]);
