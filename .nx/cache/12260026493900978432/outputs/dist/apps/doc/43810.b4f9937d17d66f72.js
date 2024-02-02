'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [43810],
  {
    43810: (U, l, t) => {
      t.r(l), t.d(l, { ToObservableModule: () => z });
      var m = t(96814),
        p = t(21004),
        d = t(75187),
        a = t(70169),
        e = t(65879),
        b = t(8221),
        v = t(63796),
        T = t(75987),
        g = t(43015),
        h = t(37547),
        Z = t(65619),
        x = t(24592);
      const c = function () {
          return ['delay(1000)'];
        },
        u = function () {
          return ['delay', 2e3];
        },
        r = function (o) {
          return [o];
        };
      let f = (() => {
        class o {
          constructor() {
            (this.delay = (0, h.g)(3e3)), (this.counter = 0), (this.counter$ = new Z.X(this.counter));
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['prizm-to-observable-base-example']],
            decls: 44,
            vars: 49,
            consts: [
              [2, 'display', 'flex', 'gap', '1rem'],
              [3, 'click'],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'div', 0)(1, 'button', 1),
                e.NdJ('click', function () {
                  return i.counter$.next((i.counter = i.counter + 1));
                }),
                e._uU(2, '+'),
                e.qZA(),
                e.TgZ(3, 'div'),
                e._uU(4),
                e.qZA()(),
                e._UZ(5, 'br')(6, 'br'),
                e.TgZ(7, 'div')(8, 'h2'),
                e._uU(9, 'Operators as string'),
                e.qZA(),
                e.TgZ(10, 'p'),
                e._uU(11),
                e.ALo(12, 'async'),
                e.ALo(13, 'prizmToObservable'),
                e.qZA(),
                e.TgZ(14, 'p'),
                e._uU(15),
                e.ALo(16, 'async'),
                e.ALo(17, 'prizmToObservable'),
                e.qZA()(),
                e._UZ(18, 'br')(19, 'br'),
                e.TgZ(20, 'div')(21, 'h2'),
                e._uU(22, 'Operators as array'),
                e.qZA(),
                e.TgZ(23, 'p'),
                e._uU(24),
                e.ALo(25, 'async'),
                e.ALo(26, 'prizmToObservable'),
                e.qZA(),
                e.TgZ(27, 'p'),
                e._uU(28),
                e.ALo(29, 'async'),
                e.ALo(30, 'prizmToObservable'),
                e.qZA()(),
                e._UZ(31, 'br')(32, 'br'),
                e.TgZ(33, 'div')(34, 'h2'),
                e._uU(35, 'Operators as array'),
                e.qZA(),
                e.TgZ(36, 'p'),
                e._uU(37),
                e.ALo(38, 'async'),
                e.ALo(39, 'prizmToObservable'),
                e.qZA(),
                e.TgZ(40, 'p'),
                e._uU(41),
                e.ALo(42, 'async'),
                e.ALo(43, 'prizmToObservable'),
                e.qZA()()),
                2 & n &&
                  (e.xp6(4),
                  e.Oqu(i.counter),
                  e.xp6(7),
                  e.hij(
                    'Example with primitive: [',
                    e.lcZ(12, 7, e.xi3(13, 9, i.counter, e.DdM(37, c))),
                    ']'
                  ),
                  e.xp6(4),
                  e.hij(
                    'Example with subject$: [',
                    e.lcZ(16, 12, e.xi3(17, 14, i.counter$, e.DdM(38, c))),
                    ']'
                  ),
                  e.xp6(9),
                  e.hij(
                    'Example with primitive: [',
                    e.lcZ(25, 17, e.xi3(26, 19, i.counter, e.VKq(40, r, e.DdM(39, u)))),
                    ']'
                  ),
                  e.xp6(4),
                  e.hij(
                    'Example with subject$: [',
                    e.lcZ(29, 22, e.xi3(30, 24, i.counter$, e.VKq(43, r, e.DdM(42, u)))),
                    ']'
                  ),
                  e.xp6(9),
                  e.hij(
                    'Example with primitive: [',
                    e.lcZ(38, 27, e.xi3(39, 29, i.counter, e.VKq(45, r, i.delay))),
                    ']'
                  ),
                  e.xp6(4),
                  e.hij(
                    'Example with subject$: [',
                    e.lcZ(42, 32, e.xi3(43, 34, i.counter$, e.VKq(47, r, i.delay))),
                    ']'
                  ));
            },
            dependencies: [m.Ov, x.f],
            encapsulation: 2,
          })),
          o
        );
      })();
      function A(o, s) {
        if (
          (1 & o && (e.TgZ(0, 'prizm-doc-example', 4), e._UZ(1, 'prizm-to-observable-base-example'), e.qZA()),
          2 & o)
        ) {
          const n = e.oxw();
          e.Q6J('content', n.exampleBase);
        }
      }
      function O(o, s) {
        if (
          (1 & o &&
            (e.TgZ(0, 'ol', 5)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmToObservableModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our pipe '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 6),
            e.qZA()()),
          2 & o)
        ) {
          const n = e.oxw();
          e.xp6(7), e.Q6J('code', n.setupModule);
        }
      }
      let y = (() => {
        class o {
          constructor() {
            (this.content =
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'),
              (this.shadowVariants = [
                a.LDR.miniBottom,
                a.LDR.miniTop,
                a.LDR.miniRight,
                a.LDR.miniLeft,
                a.LDR.bigTop,
                a.LDR.bigBottom,
                a.LDR.bigLeft,
                a.LDR.bigRight,
                a.LDR.bigRight,
              ]),
              (this.shadow = a.LDR.miniBottom),
              (this.setupModule = t.e(4261).then(t.t.bind(t, 4261, 17))),
              (this.exampleBase = {
                TypeScript: t.e(38953).then(t.t.bind(t, 38953, 17)),
                HTML: t.e(78562).then(t.t.bind(t, 78562, 17)),
              });
          }
        }
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['prizm-card-example']],
            decls: 5,
            vars: 0,
            consts: [
              ['header', 'ToObservable'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', 'Setup'],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (n, i) {
              1 & n &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(
                  2,
                  ' Use our pipe to convert primitive to observable and also add operators in template '
                ),
                e.qZA(),
                e.YNc(3, A, 2, 1, 'ng-template', 2),
                e.YNc(4, O, 8, 1, 'ng-template', 3),
                e.qZA());
            },
            dependencies: [b.c, v.W, T.l, g.a, f],
            styles: [
              'prizm-card[_ngcontent-%COMP%]{padding:16px;color:var(--prizm-v3-text-icon-secondary);font-style:normal;font-weight:400;font-size:14px}',
            ],
            changeDetection: 0,
          })),
          o
        );
      })();
      var L = t(47784);
      let z = (() => {
        class o {}
        return (
          (o.ɵfac = function (n) {
            return new (n || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [m.ez, p.Qp, L.IO, d.Bz.forChild((0, p.GB)(y))] })),
          o
        );
      })();
    },
  },
]);
