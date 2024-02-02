'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [31612],
  {
    31612: (D, c, e) => {
      e.r(c), e.d(c, { ExamplePolymorphModule: () => H });
      var s = e(96814),
        i = e(21004),
        h = e(75187),
        o = e(65879),
        u = e(8221),
        y = e(63796),
        P = e(75987),
        d = e(43015),
        r = e(60317);
      function x(t, m) {
        if ((1 & t && (o.ynx(0), o._uU(1), o.BQk()), 2 & t)) {
          const n = o.oxw();
          o.xp6(1), o.hij(' ', n.value, '\n');
        }
      }
      let z = (() => {
        class t {
          constructor() {
            this.value = 100;
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-polymorph-number-example']],
            decls: 1,
            vars: 1,
            consts: [[4, 'polymorphOutlet']],
            template: function (n, p) {
              1 & n && o.YNc(0, x, 2, 1, 'ng-container', 0), 2 & n && o.Q6J('polymorphOutlet', p.value);
            },
            dependencies: [r.M],
            encapsulation: 2,
          })),
          t
        );
      })();
      function C(t, m) {
        if ((1 & t && (o.ynx(0), o._uU(1), o.BQk()), 2 & t)) {
          const n = m.polymorphOutlet;
          o.xp6(1), o.hij(' ', n, '\n');
        }
      }
      let f = (() => {
        class t {
          constructor() {
            (this.context = { a: 1 }), (this.value = n => `FROM FUNCTION ${n?.a}`);
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-polymorph-function-example']],
            decls: 1,
            vars: 2,
            consts: [[4, 'polymorphOutlet', 'polymorphOutletContext']],
            template: function (n, p) {
              1 & n && o.YNc(0, C, 2, 1, 'ng-container', 0),
                2 & n && o.Q6J('polymorphOutlet', p.value)('polymorphOutletContext', p.context);
            },
            dependencies: [r.M],
            encapsulation: 2,
          })),
          t
        );
      })();
      function E(t, m) {
        if ((1 & t && (o.ynx(0), o._uU(1), o.BQk()), 2 & t)) {
          const n = o.oxw();
          o.xp6(1), o.hij(' ', n.value, '\n');
        }
      }
      let T = (() => {
        class t {
          constructor() {
            this.value = '\u0421\u0422\u0420\u041e\u041a\u0410';
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-polymorph-base-example']],
            decls: 1,
            vars: 1,
            consts: [[4, 'polymorphOutlet']],
            template: function (n, p) {
              1 & n && o.YNc(0, E, 2, 1, 'ng-container', 0), 2 & n && o.Q6J('polymorphOutlet', p.value);
            },
            dependencies: [r.M],
            encapsulation: 2,
          })),
          t
        );
      })();
      var l = e(70169);
      let M = (() => {
        class t {
          constructor(n) {
            this.context = n;
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(o.Y36(l.z9F));
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 1,
            template: function (n, p) {
              1 & n && o._uU(0), 2 & n && o.hij('FROM COMPONENT ', p.context.a, '');
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      function g(t, m) {
        1 & t &&
          (o.ynx(0),
          o._uU(1, ' SHOW ONLY WHEN WE GET ANY TYPE OF VALUES EXCEPT TEMPLATE AND COMPONENT\n'),
          o.BQk());
      }
      let O = (() => {
        class t {
          constructor() {
            (this.component = new l.O$$(M)), (this.context = { a: 1 });
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-polymorph-component-example']],
            decls: 1,
            vars: 2,
            consts: [[4, 'polymorphOutlet', 'polymorphOutletContext']],
            template: function (n, p) {
              1 & n && o.YNc(0, g, 2, 0, 'ng-container', 0),
                2 & n && o.Q6J('polymorphOutlet', p.component)('polymorphOutletContext', p.context);
            },
            dependencies: [r.M],
            encapsulation: 2,
          })),
          t
        );
      })();
      function v(t, m) {
        1 & t && o.GkF(0);
      }
      function N(t, m) {
        1 & t && o._uU(0), 2 & t && o.hij(' FROM TEMPLATE ', m.a, ' ');
      }
      let j = (() => {
        class t {
          constructor() {
            this.context = { a: 1 };
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-polymorph-template-example']],
            decls: 3,
            vars: 2,
            consts: [
              [4, 'polymorphOutlet', 'polymorphOutletContext'],
              ['template', ''],
            ],
            template: function (n, p) {
              if (
                (1 & n &&
                  (o.YNc(0, v, 1, 0, 'ng-container', 0), o.YNc(1, N, 1, 1, 'ng-template', null, 1, o.W1O)),
                2 & n)
              ) {
                const W = o.MAs(2);
                o.Q6J('polymorphOutlet', W)('polymorphOutletContext', p.context);
              }
            },
            dependencies: [r.M],
            encapsulation: 2,
          })),
          t
        );
      })();
      const a = new o.OlP('my token');
      let F = (() => {
        class t {
          constructor(n) {
            this.value = n;
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(o.Y36(a));
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['ng-component']],
            decls: 1,
            vars: 1,
            template: function (n, p) {
              1 & n && o._uU(0), 2 & n && o.hij('FROM INJECTOR ', p.value, '');
            },
            encapsulation: 2,
          })),
          t
        );
      })();
      function U(t, m) {
        1 & t &&
          (o.ynx(0),
          o._uU(1, ' SHOW ONLY WHEN WE GET ANY TYPE OF VALUES EXCEPT TEMPLATE AND COMPONENT\n'),
          o.BQk());
      }
      let Z = (() => {
        class t {
          constructor(n) {
            (this.injector = n),
              (this.component = new l.O$$(F)),
              (this.context = { a: 1 }),
              (this.newInjector = o.zs3.create({
                providers: [{ provide: a, useValue: 1e3 }],
                parent: this.injector,
              }));
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)(o.Y36(o.zs3));
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-polymorph-injector-example']],
            decls: 1,
            vars: 3,
            consts: [[4, 'polymorphOutlet', 'polymorphOutletContext', 'polymorphOutletInjector']],
            template: function (n, p) {
              1 & n && o.YNc(0, U, 2, 0, 'ng-container', 0),
                2 & n &&
                  o.Q6J('polymorphOutlet', p.component)('polymorphOutletContext', p.context)(
                    'polymorphOutletInjector',
                    p.newInjector
                  );
            },
            dependencies: [r.M],
            encapsulation: 2,
          })),
          t
        );
      })();
      function A(t, m) {
        if (
          (1 & t &&
            (o.TgZ(0, 'div'),
            o._uU(1, ' Polymorph directive can accept:'),
            o._UZ(2, 'br'),
            o._uU(3, ' 1) primitive values such as string or number'),
            o._UZ(4, 'br'),
            o._uU(5, ' 2) functions that take context as argument and return a primitive'),
            o._UZ(6, 'br'),
            o._uU(7, ' 3) templates that get instantiated with given context'),
            o._UZ(8, 'br'),
            o._uU(9, ' 4) components that would get context injected through DI '),
            o.qZA(),
            o.TgZ(10, 'prizm-doc-example', 4),
            o._UZ(11, 'prizm-polymorph-base-example'),
            o.qZA(),
            o.TgZ(12, 'prizm-doc-example', 5),
            o._UZ(13, 'prizm-polymorph-number-example'),
            o.qZA(),
            o.TgZ(14, 'prizm-doc-example', 6),
            o._UZ(15, 'prizm-polymorph-function-example'),
            o.qZA(),
            o.TgZ(16, 'prizm-doc-example', 7),
            o._UZ(17, 'prizm-polymorph-template-example'),
            o.qZA(),
            o.TgZ(18, 'prizm-doc-example', 8),
            o._UZ(19, 'prizm-polymorph-component-example'),
            o.qZA(),
            o.TgZ(20, 'prizm-doc-example', 9),
            o._UZ(21, 'prizm-polymorph-injector-example'),
            o.qZA()),
          2 & t)
        ) {
          const n = o.oxw();
          o.xp6(10),
            o.Q6J('content', n.baseExample),
            o.xp6(2),
            o.Q6J('content', n.numberExample),
            o.xp6(2),
            o.Q6J('content', n.functionExample),
            o.xp6(2),
            o.Q6J('content', n.templateExample),
            o.xp6(2),
            o.Q6J('content', n.componentExample),
            o.xp6(2),
            o.Q6J('content', n.injectorExample);
        }
      }
      function S(t, m) {
        if (
          (1 & t &&
            (o._uU(0, '> '),
            o.TgZ(1, 'ol', 10)(2, 'li')(3, 'p'),
            o._uU(4, ' Import '),
            o.TgZ(5, 'code'),
            o._uU(6, 'PrizmOverlayModule'),
            o.qZA(),
            o._uU(7, ' into a module where you want to use our component '),
            o.qZA(),
            o._UZ(8, 'prizm-doc-code', 11),
            o.qZA()()),
          2 & t)
        ) {
          const n = o.oxw();
          o.xp6(8), o.Q6J('code', n.exampleModule);
        }
      }
      let B = (() => {
          class t {
            constructor() {
              (this.exampleModule = e.e(58543).then(e.t.bind(e, 58543, 17))),
                (this.baseExample = {
                  TypeScript: e.e(1741).then(e.t.bind(e, 1741, 17)),
                  Module: e.e(20516).then(e.t.bind(e, 20516, 17)),
                  HTML: e.e(93743).then(e.t.bind(e, 93743, 17)),
                }),
                (this.numberExample = {
                  TypeScript: e.e(47826).then(e.t.bind(e, 47826, 17)),
                  Module: e.e(77244).then(e.t.bind(e, 77244, 17)),
                  HTML: e.e(73556).then(e.t.bind(e, 73556, 17)),
                }),
                (this.functionExample = {
                  TypeScript: e.e(60512).then(e.t.bind(e, 60512, 17)),
                  Module: e.e(72391).then(e.t.bind(e, 72391, 17)),
                  HTML: e.e(3319).then(e.t.bind(e, 3319, 17)),
                }),
                (this.templateExample = {
                  TypeScript: e.e(54913).then(e.t.bind(e, 54913, 17)),
                  Module: e.e(70163).then(e.t.bind(e, 70163, 17)),
                  HTML: e.e(56711).then(e.t.bind(e, 56711, 17)),
                }),
                (this.componentExample = {
                  TypeScript: e.e(67583).then(e.t.bind(e, 8981, 17)),
                  SubComponent: e.e(57495).then(e.t.bind(e, 57495, 17)),
                  Module: e.e(22131).then(e.t.bind(e, 22131, 17)),
                  HTML: e.e(20273).then(e.t.bind(e, 20273, 17)),
                }),
                (this.injectorExample = {
                  TypeScript: e.e(61378).then(e.t.bind(e, 89912, 17)),
                  SubComponent: e.e(37200).then(e.t.bind(e, 37200, 17)),
                  Module: e.e(63796).then(e.t.bind(e, 2982, 17)),
                  HTML: e.e(60106).then(e.t.bind(e, 60106, 17)),
                });
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵcmp = o.Xpm({
              type: t,
              selectors: [['prizm-overlay-example']],
              decls: 5,
              vars: 0,
              consts: [
                ['header', 'Polymorph'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', 'Setup'],
                ['id', 'base', 'heading', 'Base', 3, 'content'],
                ['id', 'number', 'heading', 'Number', 3, 'content'],
                ['id', 'function', 'heading', 'Function', 3, 'content'],
                ['id', 'template', 'heading', 'Template', 3, 'content'],
                ['id', 'component', 'heading', 'Component', 3, 'content'],
                ['id', 'injector', 'heading', 'Injector', 3, 'content'],
                [1, 'b-demo-steps'],
                ['filename', 'custom.module.ts', 3, 'code'],
              ],
              template: function (n, p) {
                1 & n &&
                  (o.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  o._uU(2, ' PolymorphModule makes it possible to work with dynamic type of values '),
                  o.qZA(),
                  o.YNc(3, A, 22, 6, 'ng-template', 2),
                  o.YNc(4, S, 9, 1, 'ng-template', 3),
                  o.qZA());
              },
              dependencies: [u.c, y.W, P.l, d.a, z, f, T, O, j, Z],
              changeDetection: 0,
            })),
            t
          );
        })(),
        J = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = o.oAB({ type: t })),
            (t.ɵinj = o.cJS({ imports: [l.m98] })),
            t
          );
        })(),
        Q = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = o.oAB({ type: t })),
            (t.ɵinj = o.cJS({ imports: [l.m98] })),
            t
          );
        })(),
        Y = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = o.oAB({ type: t })),
            (t.ɵinj = o.cJS({ imports: [l.m98] })),
            t
          );
        })(),
        I = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = o.oAB({ type: t })),
            (t.ɵinj = o.cJS({ imports: [l.m98] })),
            t
          );
        })(),
        L = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = o.oAB({ type: t })),
            (t.ɵinj = o.cJS({ imports: [l.m98] })),
            t
          );
        })(),
        X = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = o.oAB({ type: t })),
            (t.ɵinj = o.cJS({ imports: [l.m98] })),
            t
          );
        })(),
        H = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = o.oAB({ type: t })),
            (t.ɵinj = o.cJS({
              imports: [s.ez, i.Qp, l.KBf, l.m98, J, Q, Y, L, I, X, h.Bz.forChild((0, i.GB)(B))],
            })),
            t
          );
        })();
    },
  },
]);
