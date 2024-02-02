'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [39165],
  {
    39165: (C, p, o) => {
      o.r(p), o.d(p, { LoaderModule: () => Z });
      var s = o(96814),
        i = o(21004),
        d = o(75187),
        e = o(65879),
        u = o(8221),
        m = o(30990),
        g = o(83419),
        y = o(78905),
        h = o(63796),
        P = o(75987),
        v = o(43015),
        f = o(56586),
        z = o(57679),
        x = o(92090);
      let L = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-loader-base-example']],
            decls: 3,
            vars: 2,
            consts: [
              [2, 'position', 'relative', 'width', '150px', 'color', 'var(--prizm-v3-text-icon-primary)'],
              [3, 'showLoader', 'overlay'],
            ],
            template: function (n, a) {
              1 & n &&
                (e.TgZ(0, 'div', 0)(1, 'prizm-loader', 1),
                e._uU(
                  2,
                  " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. "
                ),
                e.qZA()()),
                2 & n && (e.xp6(1), e.Q6J('showLoader', !0)('overlay', !0));
            },
            dependencies: [x.L],
            styles: [
              '.box[_ngcontent-%COMP%]{margin-bottom:2rem}.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:.5rem}.box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;gap:1rem;font-size:20px;flex-wrap:wrap}.box[_ngcontent-%COMP%]   prizm-icon[_ngcontent-%COMP%]{cursor:pointer}',
            ],
          })),
          t
        );
      })();
      function _(t, r) {
        if (
          (1 & t && (e.TgZ(0, 'prizm-doc-example', 4), e._UZ(1, 'prizm-loader-base-example'), e.qZA()), 2 & t)
        ) {
          const n = e.oxw();
          e.Q6J('content', n.exampleBase);
        }
      }
      function M(t, r) {
        1 & t && e._uU(0, ' Show Loader ');
      }
      function D(t, r) {
        1 & t && e._uU(0, ' Overlay ');
      }
      function E(t, r) {
        1 & t && e._uU(0, ' Text Content ');
      }
      function T(t, r) {
        1 & t && e._uU(0, ' Size ');
      }
      function H(t, r) {
        1 & t && e._uU(0, ' Inherit Color ');
      }
      function O(t, r) {
        if (1 & t) {
          const n = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'div', 5)(2, 'prizm-loader', 6, 7),
            e._uU(
              4,
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. "
            ),
            e.qZA()()(),
            e.TgZ(5, 'prizm-doc-documentation'),
            e.YNc(6, M, 1, 0, 'ng-template', 8),
            e.NdJ('documentationPropertyValueChange', function (c) {
              e.CHM(n);
              const l = e.oxw();
              return e.KtG((l.showLoader = c));
            }),
            e.YNc(7, D, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (c) {
              e.CHM(n);
              const l = e.oxw();
              return e.KtG((l.overlay = c));
            }),
            e.YNc(8, E, 1, 0, 'ng-template', 10),
            e.YNc(9, T, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (c) {
              e.CHM(n);
              const l = e.oxw();
              return e.KtG((l.size = c));
            }),
            e.YNc(10, H, 1, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (c) {
              e.CHM(n);
              const l = e.oxw();
              return e.KtG((l.inheritColor = c));
            }),
            e.qZA();
        }
        if (2 & t) {
          const n = e.MAs(3),
            a = e.oxw();
          e.xp6(2),
            e.Q6J('prizmDocHostElement', n)('showLoader', a.showLoader)('inheritColor', a.inheritColor)(
              'overlay',
              a.overlay
            )('inheritColor', a.inheritColor),
            e.xp6(4),
            e.Q6J('documentationPropertyValue', a.showLoader),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', a.overlay),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', a.size),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', a.inheritColor);
        }
      }
      function V(t, r) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 13)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmLoaderModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 14),
            e.qZA()()),
          2 & t)
        ) {
          const n = e.oxw();
          e.xp6(7), e.Q6J('code', n.setupModule);
        }
      }
      let A = (() => {
        class t {
          constructor() {
            (this.showLoader = !0),
              (this.inheritColor = !1),
              (this.overlay = !0),
              (this.size = 's'),
              (this.setupModule = o.e(4182).then(o.t.bind(o, 4182, 17))),
              (this.exampleBase = {
                TypeScript: o.e(92750).then(o.t.bind(o, 92750, 17)),
                HTML: o.e(52785).then(o.t.bind(o, 52785, 17)),
              });
          }
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-loader-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Loader'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Set', 3, 'content'],
              [2, 'position', 'relative', 'color', 'black'],
              [3, 'prizmDocHostElement', 'showLoader', 'inheritColor', 'overlay'],
              ['element', ''],
              [
                'documentationPropertyName',
                'showLoader',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'overlay',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'textContent',
                'documentationPropertyType',
                'TemplateRef<unknown> | null',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'size',
                'documentationPropertyType',
                'PrizmSize',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'inheritColor',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (n, a) {
              1 & n &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(
                  2,
                  ' Our loader component can use a variety of different loaders to display a loading state. '
                ),
                e.qZA(),
                e.YNc(3, _, 2, 1, 'ng-template', 2),
                e.YNc(4, O, 11, 9, 'ng-template', 3),
                e.YNc(5, V, 8, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [u.c, m.F, g.K, y.N, h.W, P.l, v.a, f.w, z.k, x.L, L],
            styles: [
              '.box[_ngcontent-%COMP%]{margin-bottom:2rem}.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:.5rem}.box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;gap:1rem;font-size:20px;flex-wrap:wrap}.box[_ngcontent-%COMP%]   prizm-icon[_ngcontent-%COMP%]{cursor:pointer}prizm-loader[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-secondary)}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var N = o(70169);
      let Z = (() => {
        class t {}
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [s.ez, i.Qp, N.JbI, d.Bz.forChild((0, i.GB)(A))] })),
          t
        );
      })();
    },
    57679: (C, p, o) => {
      o.d(p, { k: () => d });
      var s = o(65879),
        i = o(45773);
      let d = (() => {
        class e {
          constructor(m) {
            (this.hostElementService = m), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const m = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              g = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const y in m) this.hostElementService.setHostElement(m[y], g[y]);
          }
        }
        return (
          (e.ɵfac = function (m) {
            return new (m || e)(s.Y36(i.R));
          }),
          (e.ɵdir = s.lG2({
            type: e,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          e
        );
      })();
    },
    56586: (C, p, o) => {
      o.d(p, { w: () => d });
      var s = o(45773),
        i = o(65879);
      let d = (() => {
        class e {}
        return (
          (e.ɵfac = function (m) {
            return new (m || e)();
          }),
          (e.ɵdir = i.lG2({ type: e, selectors: [['', 'prizmDocHost', '']], features: [i._Bn([s.R])] })),
          e
        );
      })();
    },
  },
]);
