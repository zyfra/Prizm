'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [11896],
  {
    11896: (E, d, o) => {
      o.r(d), o.d(d, { ExampleCalendarMonthModule: () => I });
      var p = o(96814),
        c = o(75187),
        a = o(70169),
        i = o(21004),
        s = o(62114),
        e = o(65879),
        u = o(36570),
        A = o(8221),
        M = o(30990),
        P = o(83419),
        D = o(78905),
        T = o(63796),
        S = o(75987),
        g = o(43015),
        N = o(56586),
        O = o(57679);
      let R = (() => {
          class t {
            constructor() {
              this.value = null;
            }
            onMonthClick(n) {
              this.value = n;
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-calendar-month-example-1']],
              decls: 5,
              vars: 2,
              consts: [[3, 'value', 'monthClick']],
              template: function (n, _) {
                1 & n &&
                  (e.TgZ(0, 'prizm-calendar-month', 0),
                  e.NdJ('monthClick', function (m) {
                    return _.onMonthClick(m);
                  }),
                  e.qZA(),
                  e.TgZ(1, 'p')(2, 'b'),
                  e._uU(3, 'Selected:'),
                  e.qZA(),
                  e._uU(4),
                  e.qZA()),
                  2 & n && (e.Q6J('value', _.value), e.xp6(4), e.hij(' ', _.value, ''));
              },
              dependencies: [u.y],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        y = (() => {
          class t {
            constructor() {
              (this.value = null), (this.max = new a.tAd(2021, 7)), (this.min = new a.tAd(2019, 7));
            }
            onMonthClick(n) {
              this.value =
                null !== this.value && this.value.isSingleMonth
                  ? a.jOr.sort(this.value.from, n)
                  : new a.jOr(n, n);
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-calendar-month-example-2']],
              decls: 3,
              vars: 4,
              consts: [[3, 'value', 'min', 'max', 'monthClick']],
              template: function (n, _) {
                1 & n &&
                  (e.TgZ(0, 'prizm-calendar-month', 0),
                  e.NdJ('monthClick', function (m) {
                    return _.onMonthClick(m);
                  }),
                  e.qZA(),
                  e.TgZ(1, 'p'),
                  e._uU(2),
                  e.qZA()),
                  2 & n &&
                    (e.Q6J('value', _.value)('min', _.min)('max', _.max),
                    e.xp6(2),
                    e.hij('Selected range: ', _.value, ''));
              },
              dependencies: [u.y],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })();
      function x(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 3),
            e._UZ(1, 'prizm-calendar-month-example-1'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 4),
            e._UZ(3, 'prizm-calendar-month-example-2'),
            e.qZA()),
          2 & t)
        ) {
          const n = e.oxw();
          e.Q6J('content', n.example1), e.xp6(2), e.Q6J('content', n.example2);
        }
      }
      function f(t, l) {
        1 & t && (e.tHW(0, 13), e._UZ(1, 'div')(2, 'strong'), e.N_p());
      }
      function F(t, l) {
        1 & t && e.SDv(0, 14);
      }
      function v(t, l) {
        1 & t && e._uU(0, ' Minimal month ');
      }
      function z(t, l) {
        1 & t && e.SDv(0, 15);
      }
      function L(t, l) {
        1 & t && e._uU(0, ' Current year ');
      }
      function H(t, l) {
        1 & t && e._uU(0, ' Selected month ');
      }
      function U(t, l) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-calendar-month', 5, 6),
            e.NdJ('monthClick', function (r) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG(m.onMonthClick(r));
            }),
            e.qZA()(),
            e.TgZ(3, 'prizm-doc-documentation'),
            e.YNc(4, f, 3, 0, 'ng-template', 7),
            e.NdJ('documentationPropertyValueChange', function (r) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.disabledItemHandler = r));
            }),
            e.YNc(5, F, 1, 0, 'ng-template', 8),
            e.NdJ('documentationPropertyValueChange', function (r) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.max = r));
            }),
            e.YNc(6, v, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (r) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.min = r));
            }),
            e.YNc(7, z, 1, 0, 'ng-template', 10),
            e.NdJ('documentationPropertyValueChange', function (r) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.value = r));
            }),
            e.YNc(8, L, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (r) {
              e.CHM(n);
              const m = e.oxw();
              return e.KtG((m.year = r));
            }),
            e.YNc(9, H, 1, 0, 'ng-template', 12),
            e.qZA();
        }
        if (2 & t) {
          const n = e.MAs(2),
            _ = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', n)('disabledItemHandler', _.disabledItemHandler)('min', _.min)(
              'max',
              _.max
            )('year', _.year)('value', _.value),
            e.xp6(3),
            e.Q6J('documentationPropertyValue', _.disabledItemHandler)(
              'documentationPropertyValues',
              _.disabledItemHandlerVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', _.max)('documentationPropertyValues', _.maxVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', _.min)('documentationPropertyValues', _.minVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', _.value)('documentationPropertyValues', _.valueVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', _.year)('documentationPropertyValues', _.yearVariants);
        }
      }
      function V(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 16)(1, 'li')(2, 'p'),
            e.tHW(3, 17),
            e._UZ(4, 'code'),
            e.N_p(),
            e.qZA(),
            e._UZ(5, 'prizm-doc-code', 18),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(5), e.Q6J('code', n.exampleModule);
        }
      }
      let Z = (() => {
          class t {
            constructor() {
              (this.exampleModule = o.e(43509).then(o.t.bind(o, 43509, 17))),
                (this.example1 = {
                  TypeScript: o.e(7100).then(o.t.bind(o, 7100, 17)),
                  HTML: o.e(89393).then(o.t.bind(o, 89393, 17)),
                }),
                (this.example2 = {
                  TypeScript: o.e(18412).then(o.t.bind(o, 18412, 17)),
                  HTML: o.e(52961).then(o.t.bind(o, 52961, 17)),
                }),
                (this.minVariants = [a.XNO, new a.tAd(2019, 2), new a.tAd(2007, 0)]),
                (this.maxVariants = [a.tDQ, new a.tAd(2020, 2), new a.tAd(2023, 0), new a.tAd(2019, 4)]),
                (this.min = this.minVariants[0]),
                (this.max = this.maxVariants[0]),
                (this.disabledItemHandlerVariants = [a.Kez, ({ month: n }) => n % 3 == 0]),
                (this.disabledItemHandler = this.disabledItemHandlerVariants[0]),
                (this.valueVariants = [
                  a.CFx.currentLocal(),
                  new a.jOr(a.CFx.currentLocal(), a.CFx.currentLocal().append({ month: 3 })),
                  new a.tAd(2007, 2),
                ]),
                (this.value = null),
                (this.yearVariants = [a.CFx.currentLocal(), new a.Mfn(2007)]),
                (this.year = this.yearVariants[0]);
            }
            onMonthClick(n) {
              console.log('onMonthClick', { month: n });
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-example-prizm-calendar-month']],
              decls: 4,
              vars: 0,
              consts: function () {
                let l, n, _, r, m, h;
                return (
                  (l = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`),
                  (n = $localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`),
                  (_ = $localize`:␟4d6af0ffb00fd8e2c7573175b767f838836ed7cb␟8030877323439809584:${'\ufffd#1\ufffd'}:START_TAG_DIV:A handler that gets a month and returns true if it is disabled.${'\ufffd/#1\ufffd'}:CLOSE_TAG_DIV:${'\ufffd#2\ufffd'}:START_TAG_STRONG:Must be a pure function${'\ufffd/#2\ufffd'}:CLOSE_TAG_STRONG:`),
                  (r = $localize`:␟a48c56a979eabe3608e7967afea64e1dcfbf3e13␟1851947047307567849: Maximal month `),
                  (m = $localize`:␟de2bbee9f9a213b49fa13d87bf4a230679bf2970␟7361658576071778147: A single month or a range of months `),
                  (h = $localize`:␟924bd3c43c48fcf1ec20bdaff93c3ddf336ce0ab␟354857338846522316: Import ${'\ufffd#4\ufffd'}:START_TAG_CODE:PrizmCalendarMonthModule${'\ufffd/#4\ufffd'}:CLOSE_TAG_CODE: into a module where you want to use our component `),
                  [
                    ['header', 'CalendarMonth'],
                    ['prizmDocPageTab', ''],
                    ['prizmDocPageTab', '', 'prizmDocHost', ''],
                    ['id', 'base', 'heading', l, 3, 'content'],
                    ['id', 'range', 'heading', n, 3, 'content'],
                    [
                      3,
                      'prizmDocHostElement',
                      'disabledItemHandler',
                      'min',
                      'max',
                      'year',
                      'value',
                      'monthClick',
                    ],
                    ['element', ''],
                    [
                      'documentationPropertyName',
                      'disabledItemHandler',
                      'documentationPropertyMode',
                      'input',
                      'documentationPropertyType',
                      'PrizmBooleanHandlerWithContext<PrizmMonth, PrizmMonthContext>',
                      3,
                      'documentationPropertyValue',
                      'documentationPropertyValues',
                      'documentationPropertyValueChange',
                    ],
                    [
                      'documentationPropertyName',
                      'max',
                      'documentationPropertyMode',
                      'input',
                      'documentationPropertyType',
                      'PrizmMonth',
                      3,
                      'documentationPropertyValue',
                      'documentationPropertyValues',
                      'documentationPropertyValueChange',
                    ],
                    [
                      'documentationPropertyName',
                      'min',
                      'documentationPropertyMode',
                      'input',
                      'documentationPropertyType',
                      'PrizmMonth',
                      3,
                      'documentationPropertyValue',
                      'documentationPropertyValues',
                      'documentationPropertyValueChange',
                    ],
                    [
                      'documentationPropertyName',
                      'value',
                      'documentationPropertyMode',
                      'input',
                      'documentationPropertyType',
                      'PrizmMonth | PrizmMonthRange | null',
                      3,
                      'documentationPropertyValue',
                      'documentationPropertyValues',
                      'documentationPropertyValueChange',
                    ],
                    [
                      'documentationPropertyName',
                      'year',
                      'documentationPropertyMode',
                      'input-output',
                      'documentationPropertyType',
                      'PrizmYear',
                      3,
                      'documentationPropertyValue',
                      'documentationPropertyValues',
                      'documentationPropertyValueChange',
                    ],
                    [
                      'documentationPropertyName',
                      'monthClick',
                      'documentationPropertyMode',
                      'output',
                      'documentationPropertyType',
                      'PrizmMonth',
                    ],
                    _,
                    r,
                    m,
                    [1, 'b-demo-steps'],
                    h,
                    ['filename', 'custom.module.ts', 3, 'code'],
                  ]
                );
              },
              template: function (n, _) {
                1 & n &&
                  (e.TgZ(0, 'prizm-doc-page', 0),
                  e.YNc(1, x, 4, 2, 'ng-template', 1),
                  e.YNc(2, U, 10, 16, 'ng-template', 2),
                  e.YNc(3, V, 6, 1, 'ng-template', 1),
                  e.qZA());
              },
              dependencies: [u.y, A.c, M.F, P.K, D.N, T.W, S.l, g.a, N.w, O.k, R, y],
              encapsulation: 2,
              changeDetection: 0,
            })),
            t
          );
        })(),
        I = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({ imports: [p.ez, c.Bz, s.j, a.GBQ, i.Qp, c.Bz.forChild((0, i.GB)(Z))] })),
            t
          );
        })();
    },
    57679: (E, d, o) => {
      o.d(d, { k: () => a });
      var p = o(65879),
        c = o(45773);
      let a = (() => {
        class i {
          constructor(e) {
            (this.hostElementService = e), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const e = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              u = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const A in e) this.hostElementService.setHostElement(e[A], u[A]);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(p.Y36(c.R));
          }),
          (i.ɵdir = p.lG2({
            type: i,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          i
        );
      })();
    },
    56586: (E, d, o) => {
      o.d(d, { w: () => a });
      var p = o(45773),
        c = o(65879);
      let a = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵdir = c.lG2({ type: i, selectors: [['', 'prizmDocHost', '']], features: [c._Bn([p.R])] })),
          i
        );
      })();
    },
  },
]);
