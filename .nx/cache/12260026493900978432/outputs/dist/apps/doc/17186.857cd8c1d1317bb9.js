'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [17186],
  {
    17186: (K, p, o) => {
      o.r(p), o.d(p, { OverlayModule: () => D });
      var s = o(96814),
        r = o(21004),
        d = o(75187),
        e = o(65879),
        u = o(8221),
        f = o(63796),
        g = o(75987),
        v = o(43015),
        a = o(70169),
        c = o(4377);
      const y = ['elementRef'],
        x = ['someTemplate'];
      function h(n, l) {
        if (
          (1 & n &&
            (e.TgZ(0, 'div', 3)(1, 'div'),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'button', 4),
            e._uU(4, 'Submit'),
            e.qZA()()),
          2 & n)
        ) {
          const t = l.$implicit;
          e.xp6(2), e.hij('Passed data: ', t.testData, '');
        }
      }
      let C = (() => {
        class n {
          constructor(t) {
            (this.overlay = t), (this.injector = (0, e.f3M)(e.zs3));
          }
          ngOnInit() {
            const t = new a.PTS({
              placement: a._$_.BOTTOM_LEFT,
              element: this.elementRef.nativeElement,
              autoReposition: !0,
            });
            this.control = this.overlay
              .position(t)
              .config({ closeOnDocClick: !0, backdrop: !1 })
              .content(this.templateRef, { testData: 1 })
              .create({ parentInjector: this.injector });
          }
          open() {
            this.control.open();
          }
          close() {
            this.control.close();
          }
          toggle() {
            this.control.toggle();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(a.xpd));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-custom-context']],
            viewQuery: function (t, m) {
              if ((1 & t && (e.Gf(y, 7, e.SBq), e.Gf(x, 7, e.Rgc)), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (m.elementRef = i.first),
                  e.iGM((i = e.CRH())) && (m.templateRef = i.first);
              }
            },
            decls: 5,
            vars: 0,
            consts: [
              ['prizmButton', '', 3, 'click'],
              ['elementRef', ''],
              ['someTemplate', ''],
              [1, 'box'],
              ['prizmButton', ''],
            ],
            template: function (t, m) {
              1 & t &&
                (e.TgZ(0, 'button', 0, 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Click me'),
                e.qZA(),
                e.YNc(3, h, 5, 1, 'ng-template', null, 2, e.W1O));
            },
            dependencies: [c.K],
            styles: [
              '.box[_ngcontent-%COMP%]{background:darkseagreen;padding:8px;display:inline-block;color:#fff;margin-top:3px}',
            ],
          })),
          n
        );
      })();
      const O = ['elementRef'],
        T = ['someTemplate'];
      function z(n, l) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, 'div', 3)(1, 'div'),
            e._uU(2, 'SOME CONTENT'),
            e.qZA(),
            e.TgZ(3, 'i'),
            e._uU(4, 'Can close also on backdrop click'),
            e.qZA(),
            e.TgZ(5, 'button', 0),
            e.NdJ('click', function () {
              e.CHM(t);
              const i = e.oxw();
              return e.KtG(i.close());
            }),
            e._uU(6, 'Close'),
            e.qZA()();
        }
      }
      let E = (() => {
        class n {
          constructor(t) {
            this.overlay = t;
          }
          ngOnInit() {
            const t = new a.TdO({ placement: a.QbB.LEFT });
            this.control = this.overlay
              .position(t)
              .config({ closeOnDocClick: !0 })
              .content(this.templateRef)
              .create();
          }
          open() {
            this.control.open();
          }
          close() {
            this.control.close();
          }
          toggle() {
            this.control.toggle();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(a.xpd));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-slide-example']],
            viewQuery: function (t, m) {
              if ((1 & t && (e.Gf(O, 7, e.SBq), e.Gf(T, 7, e.Rgc)), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (m.elementRef = i.first),
                  e.iGM((i = e.CRH())) && (m.templateRef = i.first);
              }
            },
            decls: 5,
            vars: 0,
            consts: [
              ['prizmButton', '', 3, 'click'],
              ['elementRef', ''],
              ['someTemplate', ''],
              [1, 'box'],
            ],
            template: function (t, m) {
              1 & t &&
                (e.TgZ(0, 'button', 0, 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Click me'),
                e.qZA(),
                e.YNc(3, z, 7, 0, 'ng-template', null, 2, e.W1O));
            },
            dependencies: [c.K],
            styles: [
              '.box[_ngcontent-%COMP%]{background:darkseagreen;padding:8px;display:inline-block;color:#fff;height:100%;width:300px}',
            ],
          })),
          n
        );
      })();
      const P = ['elementRef'],
        Z = ['someTemplate'];
      function R(n, l) {
        1 & n &&
          (e.TgZ(0, 'div', 3)(1, 'div'),
          e._uU(2, 'SOME CONTENT'),
          e.qZA(),
          e.TgZ(3, 'button', 4),
          e._uU(4, 'Submit'),
          e.qZA()());
      }
      let b = (() => {
        class n {
          constructor(t) {
            this.overlay = t;
          }
          ngOnInit() {
            const t = new a.PTS({
              placement: a._$_.BOTTOM_LEFT,
              element: this.elementRef.nativeElement,
              autoReposition: !0,
            });
            this.control = this.overlay
              .position(t)
              .config({ closeOnDocClick: !0, backdrop: !1 })
              .content(this.templateRef)
              .create();
          }
          open() {
            this.control.open();
          }
          close() {
            this.control.close();
          }
          toggle() {
            this.control.toggle();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(a.xpd));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-relative']],
            viewQuery: function (t, m) {
              if ((1 & t && (e.Gf(P, 7, e.SBq), e.Gf(Z, 7, e.Rgc)), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (m.elementRef = i.first),
                  e.iGM((i = e.CRH())) && (m.templateRef = i.first);
              }
            },
            decls: 5,
            vars: 0,
            consts: [
              ['prizmButton', '', 3, 'click'],
              ['elementRef', ''],
              ['someTemplate', ''],
              [1, 'box'],
              ['prizmButton', ''],
            ],
            template: function (t, m) {
              1 & t &&
                (e.TgZ(0, 'button', 0, 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Click me'),
                e.qZA(),
                e.YNc(3, R, 5, 0, 'ng-template', null, 2, e.W1O));
            },
            dependencies: [c.K],
            styles: [
              '.box[_ngcontent-%COMP%]{background:darkseagreen;padding:8px;display:inline-block;color:#fff;margin-top:3px}',
            ],
          })),
          n
        );
      })();
      const M = ['elementRef'],
        A = ['someTemplate'];
      function G(n, l) {
        1 & n && (e.TgZ(0, 'div', 3)(1, 'div'), e._uU(2, 'GLOBAL CONTENT'), e.qZA()());
      }
      let S = (() => {
        class n {
          constructor(t) {
            this.overlay = t;
          }
          ngOnInit() {
            const t = new a.iho({ placement: a.tA.BOTTOM_LEFT, element: this.elementRef.nativeElement });
            this.control = this.overlay.position(t).content(this.templateRef).create();
          }
          open() {
            this.control.open();
          }
          close() {
            this.control.close();
          }
          toggle() {
            this.control.toggle();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(a.xpd));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-global-example']],
            viewQuery: function (t, m) {
              if ((1 & t && (e.Gf(M, 7, e.SBq), e.Gf(A, 7, e.Rgc)), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (m.elementRef = i.first),
                  e.iGM((i = e.CRH())) && (m.templateRef = i.first);
              }
            },
            decls: 5,
            vars: 0,
            consts: [
              ['prizmButton', '', 3, 'click'],
              ['elementRef', ''],
              ['someTemplate', ''],
              [1, 'box'],
            ],
            template: function (t, m) {
              1 & t &&
                (e.TgZ(0, 'button', 0, 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Click me'),
                e.qZA(),
                e.YNc(3, G, 3, 0, 'ng-template', null, 2, e.W1O));
            },
            dependencies: [c.K],
            styles: [
              '.box[_ngcontent-%COMP%]{background:darkseagreen;padding:8px;display:inline-block;color:#fff;margin-left:8px}',
            ],
          })),
          n
        );
      })();
      const U = ['elementRef'],
        B = ['someTemplate'];
      function F(n, l) {
        if (1 & n) {
          const t = e.EpF();
          e.TgZ(0, 'div', 3)(1, 'div'),
            e._uU(2, 'GLOBAL CONTENT'),
            e.qZA(),
            e.TgZ(3, 'button', 0),
            e.NdJ('click', function () {
              e.CHM(t);
              const i = e.oxw();
              return e.KtG(i.close());
            }),
            e._uU(4, 'Close'),
            e.qZA()();
        }
      }
      let N = (() => {
        class n {
          constructor(t) {
            this.overlay = t;
          }
          ngOnInit() {
            this.control = this.overlay.position(new a.alZ()).content(this.templateRef).create();
          }
          open() {
            this.control.open();
          }
          close() {
            this.control.close();
          }
          toggle() {
            this.control.toggle();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(a.xpd));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-fullscreen-example']],
            viewQuery: function (t, m) {
              if ((1 & t && (e.Gf(U, 7, e.SBq), e.Gf(B, 7, e.Rgc)), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (m.elementRef = i.first),
                  e.iGM((i = e.CRH())) && (m.templateRef = i.first);
              }
            },
            decls: 5,
            vars: 0,
            consts: [
              ['prizmButton', '', 3, 'click'],
              ['elementRef', ''],
              ['someTemplate', ''],
              [1, 'box'],
            ],
            template: function (t, m) {
              1 & t &&
                (e.TgZ(0, 'button', 0, 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Click me'),
                e.qZA(),
                e.YNc(3, F, 5, 0, 'ng-template', null, 2, e.W1O));
            },
            dependencies: [c.K],
            styles: [
              '.box[_ngcontent-%COMP%]{width:100%;height:100%;background:darkseagreen;padding:8px;display:inline-block;color:#fff}',
            ],
          })),
          n
        );
      })();
      function Q(n, l) {
        if ((1 & n && (e.TgZ(0, 'button', 3), e._uU(1), e.qZA()), 2 & n)) {
          const t = l.$implicit;
          e.xp6(1), e.Oqu(t);
        }
      }
      let H = (() => {
        class n {
          constructor() {
            this.items = ['Edit', 'Download'];
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-some-component']],
            decls: 4,
            vars: 1,
            consts: [
              [1, 'header'],
              [1, 'button-box'],
              ['prizmButton', '', 4, 'ngFor', 'ngForOf'],
              ['prizmButton', ''],
            ],
            template: function (t, m) {
              1 & t &&
                (e.TgZ(0, 'div', 0),
                e._uU(1, 'Header'),
                e.qZA(),
                e.TgZ(2, 'div', 1),
                e.YNc(3, Q, 2, 1, 'button', 2),
                e.qZA()),
                2 & t && (e.xp6(3), e.Q6J('ngForOf', m.items));
            },
            dependencies: [s.sg, c.K],
            styles: [
              '[_nghost-%COMP%]{display:block;width:100%;background:yellow;padding:15px}.header[_ngcontent-%COMP%]{font-size:30px;text-align:center;margin-bottom:10px}.button-box[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;gap:8px}button[_ngcontent-%COMP%]{width:100%}',
            ],
          })),
          n
        );
      })();
      const J = ['elementRef'];
      let Y = (() => {
        class n {
          constructor(t) {
            this.overlay = t;
          }
          ngOnInit() {
            const t = new a.iho({
              placement: a.tA.TOP,
              width: '100%',
              height: 'auto',
              element: this.elementRef.nativeElement,
            });
            this.control = this.overlay.position(t).config({ closeOnDocClick: !0 }).content(H).create();
          }
          open() {
            this.control.open();
          }
          close() {
            this.control.close();
          }
          toggle() {
            this.control.toggle();
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.Y36(a.xpd));
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-component-example']],
            viewQuery: function (t, m) {
              if ((1 & t && e.Gf(J, 7, e.SBq), 2 & t)) {
                let i;
                e.iGM((i = e.CRH())) && (m.elementRef = i.first);
              }
            },
            decls: 3,
            vars: 0,
            consts: [
              ['prizmButton', '', 3, 'click'],
              ['elementRef', ''],
            ],
            template: function (t, m) {
              1 & t &&
                (e.TgZ(0, 'button', 0, 1),
                e.NdJ('click', function () {
                  return m.toggle();
                }),
                e._uU(2, 'Click me'),
                e.qZA());
            },
            dependencies: [c.K],
            styles: [
              '.box[_ngcontent-%COMP%]{width:100%;height:100%;background:darkseagreen;padding:8px;display:inline-block;color:#fff}',
            ],
          })),
          n
        );
      })();
      function L(n, l) {
        if (
          (1 & n &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-overlay-global-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-overlay-relative'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-overlay-custom-context'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 7),
            e._UZ(7, 'prizm-overlay-fullscreen-example'),
            e.qZA(),
            e.TgZ(8, 'prizm-doc-example', 8),
            e._UZ(9, 'prizm-overlay-slide-example'),
            e.qZA(),
            e.TgZ(10, 'prizm-doc-example', 9),
            e._UZ(11, 'prizm-overlay-component-example'),
            e.qZA()),
          2 & n)
        ) {
          const t = e.oxw();
          e.Q6J('content', t.globalExample),
            e.xp6(2),
            e.Q6J('content', t.relativeExample),
            e.xp6(2),
            e.Q6J('content', t.customContextExample),
            e.xp6(2),
            e.Q6J('content', t.fullscreenExample),
            e.xp6(2),
            e.Q6J('content', t.slideExample),
            e.xp6(2),
            e.Q6J('content', t.withComponentExample);
        }
      }
      function W(n, l) {
        if (
          (1 & n &&
            (e._uU(0, '> '),
            e.TgZ(1, 'ol', 10)(2, 'li')(3, 'p'),
            e._uU(4, ' Import '),
            e.TgZ(5, 'code'),
            e._uU(6, 'PrizmOverlayModule'),
            e.qZA(),
            e._uU(7, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(8, 'prizm-doc-code', 11),
            e.qZA()()),
          2 & n)
        ) {
          const t = e.oxw();
          e.xp6(8), e.Q6J('code', t.exampleModule);
        }
      }
      let k = (() => {
          class n {
            constructor() {
              (this.label = 'Button Name'),
                (this.typeVariants = ['submit', 'reset', 'button']),
                (this.type = this.typeVariants[0]),
                (this.iconPosVariants = ['left', 'right', 'top', 'bottom']),
                (this.iconPos = this.iconPosVariants[0]),
                (this.disabled = !1),
                (this.exampleModule = o.e(96848).then(o.t.bind(o, 96848, 17))),
                (this.globalExample = {
                  TypeScript: o.e(29418).then(o.t.bind(o, 29418, 17)),
                  HTML: o.e(28032).then(o.t.bind(o, 28032, 17)),
                }),
                (this.relativeExample = {
                  TypeScript: o.e(80378).then(o.t.bind(o, 80378, 17)),
                  HTML: o.e(57359).then(o.t.bind(o, 57359, 17)),
                }),
                (this.customContextExample = {
                  TypeScript: o.e(73901).then(o.t.bind(o, 73901, 17)),
                  HTML: o.e(88090).then(o.t.bind(o, 88090, 17)),
                }),
                (this.fullscreenExample = {
                  TypeScript: o.e(8203).then(o.t.bind(o, 8203, 17)),
                  HTML: o.e(84310).then(o.t.bind(o, 84310, 17)),
                }),
                (this.slideExample = {
                  TypeScript: o.e(59146).then(o.t.bind(o, 59146, 17)),
                  HTML: o.e(66418).then(o.t.bind(o, 66418, 17)),
                }),
                (this.withComponentExample = {
                  TypeScript: o.e(4528).then(o.t.bind(o, 4528, 17)),
                  HTML: o.e(29767).then(o.t.bind(o, 29767, 17)),
                });
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵcmp = e.Xpm({
              type: n,
              selectors: [['prizm-overlay-example']],
              decls: 5,
              vars: 0,
              consts: [
                ['header', 'Overlay'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', 'Setup'],
                ['id', 'global', 'heading', 'Global Position', 3, 'content'],
                ['id', 'relative', 'heading', 'Relative Position', 3, 'content'],
                ['id', 'custom-context', 'heading', 'Custom Context', 3, 'content'],
                ['id', 'fullscreen', 'heading', 'Fullscreen Position', 3, 'content'],
                ['id', 'slide', 'heading', 'Slide Position', 3, 'content'],
                ['id', 'component', 'heading', 'Component pass', 3, 'content'],
                [1, 'b-demo-steps'],
                ['filename', 'custom.module.ts', 3, 'code'],
              ],
              template: function (t, m) {
                1 & t &&
                  (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  e._uU(
                    2,
                    ' User overlay service for controlling the display of content in the modal windows. '
                  ),
                  e.qZA(),
                  e.YNc(3, L, 12, 6, 'ng-template', 2),
                  e.YNc(4, W, 9, 1, 'ng-template', 3),
                  e.qZA());
              },
              dependencies: [u.c, f.W, g.l, v.a, C, E, b, S, N, Y],
              changeDetection: 0,
            })),
            n
          );
        })(),
        D = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = e.oAB({ type: n })),
            (n.ɵinj = e.cJS({ imports: [s.ez, r.Qp, a.KBf, a.SEY, d.Bz.forChild((0, r.GB)(k))] })),
            n
          );
        })();
    },
  },
]);
