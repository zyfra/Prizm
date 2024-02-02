'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42328],
  {
    42328: (z, m, n) => {
      n.r(m), n.d(m, { IndicatorsExampleModule: () => B });
      var r = n(96814),
        t = n(65879),
        p = n(8221),
        s = n(30990),
        d = n(83419),
        c = n(78905),
        u = n(63796),
        l = n(75987),
        y = n(43015),
        E = n(56586),
        C = n(57679),
        x = n(37408);
      let D = (() => {
          class o {}
          return (
            (o.ɵfac = function (e) {
              return new (e || o)();
            }),
            (o.ɵcmp = t.Xpm({
              type: o,
              selectors: [['prizm-indicators-base']],
              decls: 6,
              vars: 0,
              consts: [
                [1, 'container'],
                ['status', 'info'],
                ['status', 'secondary'],
                ['status', 'success'],
                ['status', 'warning'],
                ['status', 'danger'],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.TgZ(0, 'div', 0),
                  t._UZ(1, 'prizm-indicator', 1)(2, 'prizm-indicator', 2)(3, 'prizm-indicator', 3)(
                    4,
                    'prizm-indicator',
                    4
                  )(5, 'prizm-indicator', 5),
                  t.qZA());
              },
              dependencies: [x.s],
              styles: ['.container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}'],
              changeDetection: 0,
            })),
            o
          );
        })(),
        I = (() => {
          class o {}
          return (
            (o.ɵfac = function (e) {
              return new (e || o)();
            }),
            (o.ɵcmp = t.Xpm({
              type: o,
              selectors: [['prizm-indicators-icons']],
              decls: 6,
              vars: 0,
              consts: [
                [1, 'container'],
                ['type', 'icon', 'status', 'info'],
                ['type', 'icon', 'status', 'secondary'],
                ['type', 'icon', 'status', 'success'],
                ['type', 'icon', 'status', 'warning'],
                ['type', 'icon', 'status', 'danger'],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.TgZ(0, 'div', 0),
                  t._UZ(1, 'prizm-indicator', 1)(2, 'prizm-indicator', 2)(3, 'prizm-indicator', 3)(
                    4,
                    'prizm-indicator',
                    4
                  )(5, 'prizm-indicator', 5),
                  t.qZA());
              },
              dependencies: [x.s],
              styles: ['.container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}'],
              changeDetection: 0,
            })),
            o
          );
        })();
      function v(o, i) {
        if (
          (1 & o &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-indicators-base'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-indicators-icons'),
            t.qZA()),
          2 & o)
        ) {
          const e = t.oxw();
          t.Q6J('content', e.indicatorBasicExample), t.xp6(2), t.Q6J('content', e.indicatorIconExample);
        }
      }
      function P(o, i) {
        1 & o && t._uU(0, ' Indicator type ');
      }
      function T(o, i) {
        1 & o && t._uU(0, ' Indicator status ');
      }
      function H(o, i) {
        if (1 & o) {
          const e = t.EpF();
          t.TgZ(0, 'prizm-doc-demo'),
            t._UZ(1, 'prizm-indicator', 6, 7),
            t.qZA(),
            t.TgZ(3, 'prizm-doc-documentation'),
            t.YNc(4, P, 1, 0, 'ng-template', 8),
            t.NdJ('documentationPropertyValueChange', function (g) {
              t.CHM(e);
              const h = t.oxw();
              return t.KtG((h.type = g));
            }),
            t.YNc(5, T, 1, 0, 'ng-template', 9),
            t.NdJ('documentationPropertyValueChange', function (g) {
              t.CHM(e);
              const h = t.oxw();
              return t.KtG((h.status = g));
            }),
            t.qZA();
        }
        if (2 & o) {
          const e = t.MAs(2),
            a = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', e)('status', a.status)('type', a.type),
            t.xp6(3),
            t.Q6J('documentationPropertyValue', a.type)('documentationPropertyValues', a.typeVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', a.status)('documentationPropertyValues', a.statusVariants);
        }
      }
      function Z(o, i) {
        if (
          (1 & o &&
            (t.TgZ(0, 'ol', 10)(1, 'li')(2, 'p'),
            t._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmIndicatorModule'),
            t.qZA(),
            t._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 11),
            t.qZA()()),
          2 & o)
        ) {
          const e = t.oxw();
          t.xp6(7), t.Q6J('code', e.setupModule);
        }
      }
      let M = (() => {
        class o {
          constructor() {
            (this.type = 'simple'),
              (this.status = 'info'),
              (this.typeVariants = ['simple', 'icon']),
              (this.statusVariants = ['info', 'secondary', 'success', 'warning', 'danger']),
              (this.indicatorBasicExample = {
                TypeScript: n.e(45891).then(n.t.bind(n, 45891, 17)),
                HTML: n.e(59535).then(n.t.bind(n, 59535, 17)),
                LESS: n.e(52798).then(n.t.bind(n, 52798, 17)),
              }),
              (this.indicatorIconExample = {
                TypeScript: n.e(1004).then(n.t.bind(n, 1004, 17)),
                HTML: n.e(26798).then(n.t.bind(n, 26798, 17)),
                LESS: n.e(13006).then(n.t.bind(n, 13006, 17)),
              }),
              (this.setupModule = n.e(5260).then(n.t.bind(n, 5260, 17)));
          }
        }
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵcmp = t.Xpm({
            type: o,
            selectors: [['prizm-example-indicators']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Indicators'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              ['id', 'withIcon', 'heading', 'With Icon', 3, 'content'],
              [3, 'prizmDocHostElement', 'status', 'type'],
              ['element', ''],
              [
                'documentationPropertyName',
                'type',
                'documentationPropertyType',
                'IndicatorType',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'status',
                'documentationPropertyType',
                'IndicatorStatus',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'MyComponent.module.ts', 3, 'code'],
            ],
            template: function (e, a) {
              1 & e &&
                (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                t._uU(
                  2,
                  ' Our indicators component is a set of visual indicators that can be used to show the status of an object or process. '
                ),
                t.qZA(),
                t.YNc(3, v, 4, 2, 'ng-template', 2),
                t.YNc(4, H, 6, 7, 'ng-template', 3),
                t.YNc(5, Z, 8, 1, 'ng-template', 2),
                t.qZA());
            },
            dependencies: [p.c, s.F, d.K, c.N, u.W, l.l, y.a, E.w, C.k, x.s, D, I],
            changeDetection: 0,
          })),
          o
        );
      })();
      var f = n(21004),
        A = n(75187),
        V = n(70169);
      let B = (() => {
        class o {}
        return (
          (o.ɵfac = function (e) {
            return new (e || o)();
          }),
          (o.ɵmod = t.oAB({ type: o })),
          (o.ɵinj = t.cJS({ imports: [r.ez, f.Qp, V.TRk, A.Bz.forChild((0, f.GB)(M))] })),
          o
        );
      })();
    },
    57679: (z, m, n) => {
      n.d(m, { k: () => p });
      var r = n(65879),
        t = n(45773);
      let p = (() => {
        class s {
          constructor(c) {
            (this.hostElementService = c), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const c = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              u = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const l in c) this.hostElementService.setHostElement(c[l], u[l]);
          }
        }
        return (
          (s.ɵfac = function (c) {
            return new (c || s)(r.Y36(t.R));
          }),
          (s.ɵdir = r.lG2({
            type: s,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          s
        );
      })();
    },
    56586: (z, m, n) => {
      n.d(m, { w: () => p });
      var r = n(45773),
        t = n(65879);
      let p = (() => {
        class s {}
        return (
          (s.ɵfac = function (c) {
            return new (c || s)();
          }),
          (s.ɵdir = t.lG2({ type: s, selectors: [['', 'prizmDocHost', '']], features: [t._Bn([r.R])] })),
          s
        );
      })();
    },
  },
]);
