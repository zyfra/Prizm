'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [48732],
  {
    48732: (z, c, t) => {
      t.r(c), t.d(c, { CalendarRangeModule: () => Q });
      var i = t(96814),
        p = t(21004),
        s = t(75187),
        a = t(70169),
        e = t(65879),
        r = t(8221),
        g = t(30990),
        u = t(83419),
        C = t(78905),
        y = t(63796),
        x = t(75987),
        T = t(43015),
        h = t(56586),
        D = t(57679),
        P = t(36340);
      let R = (() => {
          class n {
            constructor() {
              (this.value = new a.iYT(new a.CFx(2022, 1, 7), new a.CFx(2022, 2, 14))),
                (this.items = [
                  new a.BBp(new a.iYT(new a.CFx(2022, 1, 1), new a.CFx(2022, 1, 10)), '1-10'),
                  new a.BBp(new a.iYT(new a.CFx(2022, 1, 10), new a.CFx(2022, 1, 20)), '10-20'),
                ]);
            }
          }
          return (
            (n.ɵfac = function (m) {
              return new (m || n)();
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [['prizm-calendar-range-list-example']],
              decls: 6,
              vars: 5,
              consts: [[3, 'value', 'items', 'valueChange']],
              template: function (m, l) {
                1 & m &&
                  (e.TgZ(0, 'prizm-calendar-range', 0),
                  e.NdJ('valueChange', function (d) {
                    return (l.value = d);
                  }),
                  e.qZA(),
                  e.TgZ(1, 'h4'),
                  e._uU(2, ' Current value: '),
                  e.TgZ(3, 'b'),
                  e._uU(4),
                  e.ALo(5, 'json'),
                  e.qZA()()),
                  2 & m &&
                    (e.Q6J('value', l.value)('items', l.items),
                    e.xp6(4),
                    e.Oqu(e.lcZ(5, 3, null == l.value ? null : l.value.toString())));
              },
              dependencies: [P.a, i.Ts],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            n
          );
        })(),
        E = (() => {
          class n {
            constructor() {
              this.value = new a.iYT(new a.CFx(2022, 1, 7), new a.CFx(2022, 2, 14));
            }
          }
          return (
            (n.ɵfac = function (m) {
              return new (m || n)();
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [['prizm-calendar-range-base-example']],
              decls: 6,
              vars: 4,
              consts: [[3, 'value', 'valueChange']],
              template: function (m, l) {
                1 & m &&
                  (e.TgZ(0, 'prizm-calendar-range', 0),
                  e.NdJ('valueChange', function (d) {
                    return (l.value = d);
                  }),
                  e.qZA(),
                  e.TgZ(1, 'h4'),
                  e._uU(2, ' Current value: '),
                  e.TgZ(3, 'b'),
                  e._uU(4),
                  e.ALo(5, 'json'),
                  e.qZA()()),
                  2 & m &&
                    (e.Q6J('value', l.value),
                    e.xp6(4),
                    e.Oqu(e.lcZ(5, 2, null == l.value ? null : l.value.toString())));
              },
              dependencies: [P.a, i.Ts],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            n
          );
        })();
      function M(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-calendar-range-base-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-calendar-range-list-example'),
            e.qZA()),
          2 & n)
        ) {
          const m = e.oxw();
          e.Q6J('content', m.exampleBase), e.xp6(2), e.Q6J('content', m.exampleList);
        }
      }
      function _(n, o) {
        1 & n && e._uU(0, ' Default Viewed Month ');
      }
      function H(n, o) {
        1 & n && e._uU(0, ' Disabled Item Handler ');
      }
      function Z(n, o) {
        1 & n && e._uU(0, ' Marker Handler ');
      }
      function N(n, o) {
        1 & n && e._uU(0, ' Min Day ');
      }
      function U(n, o) {
        1 & n && e._uU(0, ' Max Day ');
      }
      function A(n, o) {
        1 & n && e._uU(0, ' Min Length ');
      }
      function B(n, o) {
        1 & n && e._uU(0, ' Max Length ');
      }
      function L(n, o) {
        1 & n && e._uU(0, ' Value ');
      }
      function Y(n, o) {
        1 & n && e._uU(0, ' Items ');
      }
      function F(n, o) {
        1 & n && e._uU(0, ' Value Change ');
      }
      function O(n, o) {
        1 & n && e._uU(0, ' Range Change ');
      }
      function K(n, o) {
        if (1 & n) {
          const m = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-calendar-range', 6, 7),
            e.NdJ('valueChange', function (v) {
              e.CHM(m);
              const d = e.oxw();
              return e.KtG((d.value = v));
            }),
            e.qZA()(),
            e.TgZ(3, 'prizm-doc-documentation'),
            e.YNc(4, _, 1, 0, 'ng-template', 8),
            e.YNc(5, H, 1, 0, 'ng-template', 9),
            e.YNc(6, Z, 1, 0, 'ng-template', 10),
            e.YNc(7, N, 1, 0, 'ng-template', 11),
            e.YNc(8, U, 1, 0, 'ng-template', 12),
            e.YNc(9, A, 1, 0, 'ng-template', 13),
            e.YNc(10, B, 1, 0, 'ng-template', 14),
            e.YNc(11, L, 1, 0, 'ng-template', 15),
            e.YNc(12, Y, 1, 0, 'ng-template', 16),
            e.YNc(13, F, 1, 0, 'ng-template', 17),
            e.YNc(14, O, 1, 0, 'ng-template', 18),
            e.qZA();
        }
        if (2 & n) {
          const m = e.MAs(2),
            l = e.oxw();
          e.xp6(1), e.Q6J('value', l.value)('prizmDocHostElement', m);
        }
      }
      function J(n, o) {
        if (
          (1 & n &&
            (e.TgZ(0, 'ol', 19)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmCalendarRangeModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 20),
            e.qZA()()),
          2 & n)
        ) {
          const m = e.oxw();
          e.xp6(7), e.Q6J('code', m.setupModule);
        }
      }
      let I = (() => {
        class n {
          constructor() {
            (this.value = new a.iYT(new a.CFx(2022, 1, 7), new a.CFx(2022, 3, 14))),
              (this.setupModule = t.e(35626).then(t.t.bind(t, 35626, 17))),
              (this.exampleBase = {
                TypeScript: t.e(7361).then(t.t.bind(t, 7361, 17)),
                HTML: t.e(94423).then(t.t.bind(t, 94423, 17)),
              }),
              (this.exampleList = {
                TypeScript: t.e(91937).then(t.t.bind(t, 91937, 17)),
                HTML: t.e(34106).then(t.t.bind(t, 34106, 17)),
              });
          }
        }
        return (
          (n.ɵfac = function (m) {
            return new (m || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-calendar-range-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'CalendarRange'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              ['id', 'list', 'heading', 'Presets List', 3, 'content'],
              [3, 'value', 'prizmDocHostElement', 'valueChange'],
              ['element', ''],
              [
                'documentationPropertyName',
                'defaultViewedMonth',
                'documentationPropertyType',
                'PrizmMonth',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'disabledItemHandler',
                'documentationPropertyType',
                'PrizmBooleanHandler<PrizmDay>',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'markerHandler',
                'documentationPropertyType',
                'PrizmMarkerHandler',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'min',
                'documentationPropertyType',
                'PrizmDay',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'max',
                'documentationPropertyType',
                'PrizmDay',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'minLength',
                'documentationPropertyType',
                'PrizmDayLike | null',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'maxLength',
                'documentationPropertyType',
                'PrizmDayLike | null',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'value',
                'documentationPropertyType',
                'PrizmDayRange | null',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'items',
                'documentationPropertyType',
                'PrizmDayRangePeriod[]',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'valueChange',
                'documentationPropertyType',
                'PrizmDayRange | null',
                'documentationPropertyMode',
                'output',
              ],
              [
                'documentationPropertyName',
                'rangeChange',
                'documentationPropertyType',
                'PrizmDayRange | null',
                'documentationPropertyMode',
                'output',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (m, l) {
              1 & m &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(
                  2,
                  ' Our calendar range component is a simple component that allows you to select a range of dates. '
                ),
                e.qZA(),
                e.YNc(3, M, 4, 2, 'ng-template', 2),
                e.YNc(4, K, 15, 2, 'ng-template', 3),
                e.YNc(5, J, 8, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [r.c, g.F, u.K, C.N, y.W, x.l, T.a, h.w, D.k, P.a, R, E],
            changeDetection: 0,
          })),
          n
        );
      })();
      var f = t(60095);
      let Q = (() => {
        class n {}
        return (
          (n.ɵfac = function (m) {
            return new (m || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [i.ez, p.Qp, f.u5, f.UX, a.m98, a.YB0, s.Bz.forChild((0, p.GB)(I))] })),
          n
        );
      })();
    },
    57679: (z, c, t) => {
      t.d(c, { k: () => s });
      var i = t(65879),
        p = t(45773);
      let s = (() => {
        class a {
          constructor(r) {
            (this.hostElementService = r), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const r = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              g = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const u in r) this.hostElementService.setHostElement(r[u], g[u]);
          }
        }
        return (
          (a.ɵfac = function (r) {
            return new (r || a)(i.Y36(p.R));
          }),
          (a.ɵdir = i.lG2({
            type: a,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          a
        );
      })();
    },
    56586: (z, c, t) => {
      t.d(c, { w: () => s });
      var i = t(45773),
        p = t(65879);
      let s = (() => {
        class a {}
        return (
          (a.ɵfac = function (r) {
            return new (r || a)();
          }),
          (a.ɵdir = p.lG2({ type: a, selectors: [['', 'prizmDocHost', '']], features: [p._Bn([i.R])] })),
          a
        );
      })();
    },
  },
]);
