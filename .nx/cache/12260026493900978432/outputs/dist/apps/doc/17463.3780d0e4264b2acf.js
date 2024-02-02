'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [17463],
  {
    17463: (B, i, n) => {
      n.r(i), n.d(i, { BreadcrumbsExampleModule: () => j });
      var s = n(96814),
        e = n(65879),
        u = n(8221),
        m = n(30990),
        d = n(83419),
        a = n(78905),
        h = n(63796),
        p = n(75987),
        E = n(43015),
        x = n(56586),
        f = n(57679),
        b = n(15403);
      let v = (() => {
          class t {
            constructor() {
              (this.breadcrumbs = [{ name: 'Home' }, { name: 'Sweet' }, { name: 'Home' }]),
                (this.currentBreadcrumb = null);
            }
            breadcrumbChange(o) {
              this.currentBreadcrumb = o;
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-breadcrumbs-basic']],
              decls: 1,
              vars: 1,
              consts: [[3, 'breadcrumbs', 'breadcrumbChange']],
              template: function (o, c) {
                1 & o &&
                  (e.TgZ(0, 'prizm-breadcrumbs', 0),
                  e.NdJ('breadcrumbChange', function (l) {
                    return c.breadcrumbChange(l);
                  }),
                  e.qZA()),
                  2 & o && e.Q6J('breadcrumbs', c.breadcrumbs);
              },
              dependencies: [b.t],
              changeDetection: 0,
            })),
            t
          );
        })(),
        D = (() => {
          class t {
            constructor() {
              (this.breadcrumbs = [
                { name: '', icon: 'social-home-breadcrumbs' },
                { name: 'Lady', icon: 'account' },
                { name: "I'm your knight in", icon: 'account-contact-sync' },
                { name: 'Shining', icon: 'alerts-alarm-light' },
                { name: 'Armor', icon: 'account-shield-1' },
              ]),
                (this.currentBreadcrumb = null);
            }
            breadcrumbChange(o) {
              this.currentBreadcrumb = o;
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-breadcrumbs-example-with-icon']],
              decls: 1,
              vars: 1,
              consts: [[3, 'breadcrumbs', 'breadcrumbChange']],
              template: function (o, c) {
                1 & o &&
                  (e.TgZ(0, 'prizm-breadcrumbs', 0),
                  e.NdJ('breadcrumbChange', function (l) {
                    return c.breadcrumbChange(l);
                  }),
                  e.qZA()),
                  2 & o && e.Q6J('breadcrumbs', c.breadcrumbs);
              },
              dependencies: [b.t],
              changeDetection: 0,
            })),
            t
          );
        })();
      var C = n(75187),
        T = n(9274);
      function P(t, r) {
        if ((1 & t && (e.TgZ(0, 'a', 2), e._uU(1), e.qZA()), 2 & t)) {
          const o = e.oxw().$implicit;
          e.Q6J('routerLink', o.link), e.xp6(1), e.hij(' ', o.name, ' ');
        }
      }
      function H(t, r) {
        1 & t && (e.ynx(0), e.YNc(1, P, 2, 2, 'a', 1), e.BQk());
      }
      let Z = (() => {
        class t {
          constructor() {
            (this.breadcrumbs = [
              { link: '/components/button', name: 'Button' },
              { link: '/components/split-button', name: 'Split' },
              { link: '/components/icon-button', name: 'Icon' },
            ]),
              (this.currentBreadcrumb = null);
          }
          breadcrumbChange(o) {
            this.currentBreadcrumb = o;
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-breadcrumbs-example-projection']],
            decls: 2,
            vars: 1,
            consts: [
              [4, 'ngFor', 'ngForOf'],
              [3, 'routerLink', 4, 'prizmBreadcrumb'],
              [3, 'routerLink'],
            ],
            template: function (o, c) {
              1 & o && (e.TgZ(0, 'prizm-breadcrumbs'), e.YNc(1, H, 2, 0, 'ng-container', 0), e.qZA()),
                2 & o && (e.xp6(1), e.Q6J('ngForOf', c.breadcrumbs));
            },
            dependencies: [s.sg, C.rH, b.t, T.z],
            styles: [
              'a[_ngcontent-%COMP%]{font-weight:400;font-size:12px;line-height:16px;color:var(--prizm-v3-text-icon-tertiary);text-decoration:none}a[_ngcontent-%COMP%]:hover{color:var(--prizm-v3-text-icon-link-hover)}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      function A(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-breadcrumbs-basic'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-breadcrumbs-example-with-icon'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-breadcrumbs-example-projection'),
            e.qZA()),
          2 & t)
        ) {
          const o = e.oxw();
          e.Q6J('content', o.breadcrumbsBasicExample),
            e.xp6(2),
            e.Q6J('content', o.breadcrumbsWithIconExample),
            e.xp6(2),
            e.Q6J('content', o.breadcrumbsProjectionExample);
        }
      }
      function M(t, r) {
        1 & t && e._uU(0, ' Breadcrumbs array ');
      }
      function I(t, r) {
        1 & t && e._uU(0, ' Breadcrumb was changed ');
      }
      function F(t, r) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'prizm-doc-demo'),
            e._UZ(1, 'prizm-breadcrumbs', 7, 8),
            e.qZA(),
            e.TgZ(3, 'prizm-doc-documentation'),
            e.YNc(4, M, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (g) {
              e.CHM(o);
              const l = e.oxw();
              return e.KtG((l.breadcrumbs = g));
            }),
            e.YNc(5, I, 1, 0, 'ng-template', 10),
            e.qZA();
        }
        if (2 & t) {
          const o = e.MAs(2),
            c = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', o)('breadcrumbs', c.breadcrumbs),
            e.xp6(3),
            e.Q6J('documentationPropertyValue', c.breadcrumbs);
        }
      }
      function U(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 11)(1, 'li')(2, 'p'),
            e._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmBreadcrumbsModule'),
            e.qZA(),
            e._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 12),
            e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw();
          e.xp6(7), e.Q6J('code', o.setupModule);
        }
      }
      let O = (() => {
        class t {
          constructor() {
            (this.isFirstHome = !1),
              (this.breadcrumbs = [
                { name: 'Somebody' },
                { name: 'Once' },
                { name: 'Told me' },
                { name: 'The world' },
                { name: 'Is gonna roll me' },
              ]),
              (this.breadcrumbsBasicExample = {
                TypeScript: n.e(64441).then(n.t.bind(n, 64441, 17)),
                HTML: n.e(21384).then(n.t.bind(n, 21384, 17)),
              }),
              (this.breadcrumbsWithIconExample = {
                TypeScript: n.e(16834).then(n.t.bind(n, 16834, 17)),
                HTML: n.e(65592).then(n.t.bind(n, 35854, 17)),
              }),
              (this.breadcrumbsProjectionExample = {
                TypeScript: n.e(45950).then(n.t.bind(n, 45950, 17)),
                HTML: n.e(75354).then(n.t.bind(n, 75354, 17)),
              }),
              (this.setupModule = n.e(13670).then(n.t.bind(n, 13670, 17)));
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-example-breadcrumbs']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Breadcrumbs'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'basic', 'heading', 'Base', 3, 'content'],
              ['id', 'icon', 'heading', 'With Icon', 3, 'content'],
              ['id', 'with-projection', 'heading', 'With Projection', 3, 'content'],
              [3, 'prizmDocHostElement', 'breadcrumbs'],
              ['element', ''],
              [
                'documentationPropertyName',
                'breadcrumbs',
                'documentationPropertyType',
                'IBreadcrumb[]',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              ['documentationPropertyName', 'breadcrumbChange', 'documentationPropertyMode', 'output'],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (o, c) {
              1 & o &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(
                  2,
                  ' Our breadcrumb component is a simple way to show the user their current location in the site hierarchy. '
                ),
                e.qZA(),
                e.YNc(3, A, 6, 3, 'ng-template', 2),
                e.YNc(4, F, 6, 3, 'ng-template', 3),
                e.YNc(5, U, 8, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [u.c, m.F, d.K, a.N, h.W, p.l, E.a, x.w, f.k, b.t, v, D, Z],
            changeDetection: 0,
          })),
          t
        );
      })();
      var z = n(21004),
        y = n(70169);
      let j = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [s.ez, z.Qp, y.ddl, C.Bz.forChild((0, z.GB)(O)), y.Li7] })),
          t
        );
      })();
    },
    57679: (B, i, n) => {
      n.d(i, { k: () => u });
      var s = n(65879),
        e = n(45773);
      let u = (() => {
        class m {
          constructor(a) {
            (this.hostElementService = a), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const a = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              h = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const p in a) this.hostElementService.setHostElement(a[p], h[p]);
          }
        }
        return (
          (m.ɵfac = function (a) {
            return new (a || m)(s.Y36(e.R));
          }),
          (m.ɵdir = s.lG2({
            type: m,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          m
        );
      })();
    },
    56586: (B, i, n) => {
      n.d(i, { w: () => u });
      var s = n(45773),
        e = n(65879);
      let u = (() => {
        class m {}
        return (
          (m.ɵfac = function (a) {
            return new (a || m)();
          }),
          (m.ɵdir = e.lG2({ type: m, selectors: [['', 'prizmDocHost', '']], features: [e._Bn([s.R])] })),
          m
        );
      })();
    },
  },
]);
