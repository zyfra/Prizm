'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [29980],
  {
    29980: (N, u, n) => {
      n.r(u), n.d(u, { InvertedThemeModule: () => J });
      var a = n(96814),
        d = n(21004),
        v = n(75187),
        e = n(65879),
        g = n(8221),
        T = n(63796),
        f = n(75987),
        x = n(43015),
        z = n(4150),
        c = n(4377),
        p = n(25886);
      function Z(t, o) {
        if (
          (1 & t && (e.TgZ(0, 'div'), e._uU(1, ' Current theme value: '), e.TgZ(2, 'b'), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const i = e.oxw();
          e.xp6(3), e.Oqu(i.themeValue);
        }
      }
      let C = (() => {
        class t {
          constructor() {
            this.themeValue = 'light';
          }
          light() {
            this.themeValue = 'light';
          }
          dark() {
            this.themeValue = 'dark';
          }
          toggle() {
            this.themeValue = 'light' === this.themeValue ? 'dark' : 'light';
          }
        }
        return (
          (t.ɵfac = function (i) {
            return new (i || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-theme-base-example']],
            decls: 16,
            vars: 2,
            consts: [
              [1, 'block'],
              ['prizmButton', '', 3, 'click'],
              [3, 'prizmTheme', 'prizmThemeChange'],
              [
                'title',
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
              ],
              [4, 'ngIf'],
            ],
            template: function (i, m) {
              1 & i &&
                (e.TgZ(0, 'h1'),
                e._uU(1, 'Set theme for any element'),
                e.qZA(),
                e.TgZ(2, 'div', 0)(3, 'button', 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(4, 'Toggle'),
                e.qZA(),
                e.TgZ(5, 'button', 1),
                e.NdJ('click', function () {
                  return m.light();
                }),
                e._uU(6, 'Light'),
                e.qZA(),
                e.TgZ(7, 'button', 1),
                e.NdJ('click', function () {
                  return m.dark();
                }),
                e._uU(8, 'Dark'),
                e.qZA()(),
                e._UZ(9, 'br')(10, 'br'),
                e.TgZ(11, 'div')(12, 'div', 2),
                e.NdJ('prizmThemeChange', function (r) {
                  return (m.themeValue = r);
                }),
                e.TgZ(13, 'prizm-widget', 3),
                e._uU(
                  14,
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
                ),
                e.qZA()()(),
                e.YNc(15, Z, 4, 1, 'div', 4)),
                2 & i &&
                  (e.xp6(12), e.Q6J('prizmTheme', m.themeValue), e.xp6(3), e.Q6J('ngIf', m.themeValue));
            },
            dependencies: [a.O5, z.L, c.K, p.m],
            styles: [
              '.block[_ngcontent-%COMP%]{display:flex;gap:1rem}.zone[_ngcontent-%COMP%]{padding:1rem;border-radius:.5rem;border:1px solid #ccc}',
            ],
          })),
          t
        );
      })();
      var s = n(77410),
        E = n(28023),
        I = n(56429);
      const P = ['zone'];
      function U(t, o) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div')(1, 'p'),
            e._uU(2, ' Parent theme: '),
            e.TgZ(3, 'b'),
            e._uU(4),
            e.qZA()(),
            e.TgZ(5, 'p'),
            e._uU(6, ' Inverted theme: '),
            e.TgZ(7, 'b'),
            e._uU(8),
            e.qZA()()()),
          2 & t)
        ) {
          const i = e.oxw(),
            m = e.MAs(12);
          e.xp6(4), e.Oqu(i.theme.getByElement(m)), e.xp6(4), e.Oqu(i.invetedThemeValue);
        }
      }
      const A = function () {
        return { light: 'dark', dark: 'light' };
      };
      let y = (() => {
        class t {
          constructor(i) {
            this.theme = i;
          }
          light() {
            this.theme.update('light', this.el.nativeElement);
          }
          dark() {
            this.theme.update('dark', this.el.nativeElement);
          }
          toggle() {
            this.theme.update(
              'light' === this.theme.getByElement(this.el.nativeElement) ? 'dark' : 'light',
              this.el.nativeElement
            );
          }
        }
        return (
          (t.ɵfac = function (i) {
            return new (i || t)(e.Y36(s.il));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-theme-inverted-example']],
            viewQuery: function (i, m) {
              if ((1 & i && e.Gf(P, 7, e.SBq), 2 & i)) {
                let l;
                e.iGM((l = e.CRH())) && (m.el = l.first);
              }
            },
            decls: 17,
            vars: 4,
            consts: [
              [1, 'block'],
              ['prizmButton', '', 3, 'click'],
              ['zone', ''],
              ['prizmThemeInverted', '', 3, 'prizmThemeInvertedValues', 'themeElement', 'prizmThemeChange'],
              [
                'title',
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
              ],
              [4, 'ngIf'],
            ],
            template: function (i, m) {
              if (
                (1 & i &&
                  (e.TgZ(0, 'h1'),
                  e._uU(1, 'Set theme and inverted theme for any element via our directives'),
                  e.qZA(),
                  e.TgZ(2, 'div', 0)(3, 'button', 1),
                  e.NdJ('click', function () {
                    return m.toggle();
                  }),
                  e._uU(4, 'Toggle theme'),
                  e.qZA(),
                  e.TgZ(5, 'button', 1),
                  e.NdJ('click', function () {
                    return m.light();
                  }),
                  e._uU(6, 'Light'),
                  e.qZA(),
                  e.TgZ(7, 'button', 1),
                  e.NdJ('click', function () {
                    return m.dark();
                  }),
                  e._uU(8, 'Dark'),
                  e.qZA()(),
                  e._UZ(9, 'br')(10, 'br'),
                  e.TgZ(11, 'div', null, 2)(13, 'div', 3),
                  e.NdJ('prizmThemeChange', function (r) {
                    return (m.invetedThemeValue = r);
                  }),
                  e.TgZ(14, 'prizm-widget', 4),
                  e._uU(
                    15,
                    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
                  ),
                  e.qZA()()(),
                  e.YNc(16, U, 9, 2, 'div', 5)),
                2 & i)
              ) {
                const l = e.MAs(12);
                e.xp6(13),
                  e.Q6J('prizmThemeInvertedValues', e.DdM(3, A))('themeElement', l),
                  e.xp6(3),
                  e.Q6J('ngIf', m.el);
              }
            },
            dependencies: [a.O5, E.n, I.D, c.K, p.m],
            styles: [
              '.block[_ngcontent-%COMP%]{display:flex;gap:1rem}.zone[_ngcontent-%COMP%]{padding:1rem;border-radius:.5rem;border:1px solid #ccc}',
            ],
          })),
          t
        );
      })();
      function B(t, o) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-theme-base-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-theme-inverted-example'),
            e.qZA()),
          2 & t)
        ) {
          const i = e.oxw();
          e.Q6J('content', i.baseExample), e.xp6(2), e.Q6J('content', i.invertedExample);
        }
      }
      function b(t, o) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 6)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmThemeModule'),
            e.qZA(),
            e._uU(6, ' into a service where you want to use our directive '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 7),
            e.qZA()()),
          2 & t)
        ) {
          const i = e.oxw();
          e.xp6(7), e.Q6J('code', i.exampleModule);
        }
      }
      let M = (() => {
        class t {
          constructor() {
            (this.exampleModule = n.e(15354).then(n.t.bind(n, 15354, 17))),
              (this.invertedExample = {
                TypeScript: n.e(59082).then(n.t.bind(n, 59082, 17)),
                HTML: n.e(57864).then(n.t.bind(n, 57864, 17)),
              }),
              (this.baseExample = {
                TypeScript: n.e(58905).then(n.t.bind(n, 58905, 17)),
                HTML: n.e(19006).then(n.t.bind(n, 19006, 17)),
              });
          }
        }
        return (
          (t.ɵfac = function (i) {
            return new (i || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-overlay-example']],
            decls: 5,
            vars: 0,
            consts: [
              ['header', 'Theme'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', 'Setup'],
              ['id', 'base', 'heading', 'Base Directive', 3, 'content'],
              ['id', 'inverted', 'heading', 'Inverted Directive', 3, 'content'],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (i, m) {
              1 & i &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(2, 'Set inverted theme for any element'),
                e.qZA(),
                e.YNc(3, B, 4, 2, 'ng-template', 2),
                e.YNc(4, b, 8, 1, 'ng-template', 3),
                e.qZA());
            },
            dependencies: [g.c, T.W, f.l, x.a, C, y],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var h = n(70169);
      let J = (() => {
        class t {}
        return (
          (t.ɵfac = function (i) {
            return new (i || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [a.ez, d.Qp, s.N4, h.KBf, h.b2o, v.Bz.forChild((0, d.GB)(M))] })),
          t
        );
      })();
    },
  },
]);
