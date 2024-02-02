'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [22651],
  {
    22651: (A, a, n) => {
      n.r(a), n.d(a, { ThemeModule: () => U });
      var c = n(96814),
        p = n(21004),
        d = n(75187),
        e = n(65879),
        h = n(8221),
        g = n(63796),
        T = n(75987),
        f = n(43015),
        s = n(77410),
        r = n(4377);
      let x = (() => {
        class t {
          constructor(o) {
            this.theme = o;
          }
          light() {
            this.theme.update('light');
          }
          dark() {
            this.theme.update('dark');
          }
          toggle() {
            this.theme.update('light' === this.theme.getByElement(this.theme.rootElement) ? 'dark' : 'light');
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)(e.Y36(s.il));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-theme-base-example']],
            decls: 13,
            vars: 1,
            consts: [
              [1, 'block'],
              ['prizmButton', '', 3, 'click'],
            ],
            template: function (o, m) {
              1 & o &&
                (e.TgZ(0, 'div', 0)(1, 'button', 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Toggle theme'),
                e.qZA(),
                e.TgZ(3, 'button', 1),
                e.NdJ('click', function () {
                  return m.light();
                }),
                e._uU(4, 'Light'),
                e.qZA(),
                e.TgZ(5, 'button', 1),
                e.NdJ('click', function () {
                  return m.dark();
                }),
                e._uU(6, 'Dark'),
                e.qZA()(),
                e._UZ(7, 'br')(8, 'br'),
                e.TgZ(9, 'div'),
                e._uU(10, ' Current theme: '),
                e.TgZ(11, 'b'),
                e._uU(12),
                e.qZA()()),
                2 & o && (e.xp6(12), e.Oqu(m.theme.getByElement(m.theme.rootElement)));
            },
            dependencies: [r.K],
            styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
          })),
          t
        );
      })();
      var v = n(25886);
      const z = ['zone'];
      function Z(t, l) {
        if (
          (1 & t && (e.TgZ(0, 'div'), e._uU(1, ' Current theme: '), e.TgZ(2, 'b'), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw(),
            m = e.MAs(10);
          e.xp6(3), e.Oqu(o.theme.getByElement(m));
        }
      }
      let E = (() => {
        class t {
          constructor(o) {
            this.theme = o;
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
          (t.ɵfac = function (o) {
            return new (o || t)(e.Y36(s.il));
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-theme-local-example']],
            viewQuery: function (o, m) {
              if ((1 & o && e.Gf(z, 7, e.SBq), 2 & o)) {
                let i;
                e.iGM((i = e.CRH())) && (m.el = i.first);
              }
            },
            decls: 14,
            vars: 1,
            consts: [
              [1, 'block'],
              ['prizmButton', '', 3, 'click'],
              [1, 'zone'],
              ['zone', ''],
              [
                'title',
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
              ],
              [4, 'ngIf'],
            ],
            template: function (o, m) {
              1 & o &&
                (e.TgZ(0, 'div', 0)(1, 'button', 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Toggle theme'),
                e.qZA(),
                e.TgZ(3, 'button', 1),
                e.NdJ('click', function () {
                  return m.light();
                }),
                e._uU(4, 'Light'),
                e.qZA(),
                e.TgZ(5, 'button', 1),
                e.NdJ('click', function () {
                  return m.dark();
                }),
                e._uU(6, 'Dark'),
                e.qZA()(),
                e._UZ(7, 'br')(8, 'br'),
                e.TgZ(9, 'div', 2, 3)(11, 'prizm-widget', 4),
                e._uU(
                  12,
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
                ),
                e.qZA()(),
                e.YNc(13, Z, 4, 1, 'div', 5)),
                2 & o && (e.xp6(13), e.Q6J('ngIf', m.el));
            },
            dependencies: [c.O5, r.K, v.m],
            styles: [
              '.block[_ngcontent-%COMP%]{display:flex;gap:1rem}.zone[_ngcontent-%COMP%]{padding:1rem;border-radius:.5rem;border:1px solid #ccc}',
            ],
          })),
          t
        );
      })();
      function C(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-theme-base-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-theme-local-example'),
            e.qZA()),
          2 & t)
        ) {
          const o = e.oxw();
          e.Q6J('content', o.baseExample), e.xp6(2), e.Q6J('content', o.localExample);
        }
      }
      function y(t, l) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 6)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmThemeService'),
            e.qZA(),
            e._uU(6, ' into a service where you want to use our service '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 7),
            e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw();
          e.xp6(7), e.Q6J('code', o.exampleModule);
        }
      }
      let P = (() => {
        class t {
          constructor() {
            (this.exampleModule = n.e(99636).then(n.t.bind(n, 99636, 17))),
              (this.baseExample = {
                TypeScript: n.e(63461).then(n.t.bind(n, 63461, 17)),
                HTML: n.e(15593).then(n.t.bind(n, 15593, 17)),
              }),
              (this.localExample = {
                TypeScript: n.e(12292).then(n.t.bind(n, 12292, 17)),
                HTML: n.e(83091).then(n.t.bind(n, 83091, 17)),
              });
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
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
              ['id', 'global', 'heading', 'Global Change', 3, 'content'],
              ['id', 'local', 'heading', 'Local Change', 3, 'content'],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (o, m) {
              1 & o &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(2, 'User theme service for controlling the theme.'),
                e.qZA(),
                e.YNc(3, C, 4, 2, 'ng-template', 2),
                e.YNc(4, y, 8, 1, 'ng-template', 3),
                e.qZA());
            },
            dependencies: [h.c, g.W, T.l, f.a, x, E],
            encapsulation: 2,
            changeDetection: 0,
          })),
          t
        );
      })();
      var u = n(70169);
      let U = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [c.ez, p.Qp, u.KBf, u.b2o, d.Bz.forChild((0, p.GB)(P))] })),
          t
        );
      })();
    },
  },
]);
