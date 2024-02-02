'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [18258],
  {
    18258: (P, r, n) => {
      n.r(r), n.d(r, { WidgetExampleModule: () => X });
      var d = n(96814),
        p = n(21004),
        x = n(75187),
        a = n(97582),
        t = n(65879),
        c = n(95102),
        E = n(8221),
        h = n(30990),
        f = n(83419),
        z = n(78905),
        v = n(63796),
        W = n(75987),
        C = n(43015),
        D = n(56586),
        A = n(57679),
        y = n(25886),
        g = n(15232),
        B = n(15884),
        M = n(4377);
      function H(e, i) {
        if ((1 & e && t._UZ(0, 'prizm-icons-svg', 4), 2 & e)) {
          const o = t.oxw().idx,
            l = t.oxw();
          t.Q6J('size', 16)(
            'name',
            0 === o ? l.PrizmIconSvgEnum.SETTINGS_TOOLS_BAN : l.PrizmIconSvgEnum.DATE_TIME_CALENDAR_PLUS
          );
        }
      }
      function Z(e, i) {
        if ((1 & e && (t._UZ(0, 'button', 2), t.YNc(1, H, 1, 2, 'ng-template', null, 3, t.W1O)), 2 & e)) {
          const o = t.MAs(2);
          t.Q6J('icon', o);
        }
      }
      function U(e, i) {
        if ((1 & e && t._UZ(0, 'prizm-icons-svg', 4), 2 & e)) {
          const o = t.oxw(2);
          t.Q6J('size', 16)('name', o.PrizmIconSvgEnum.SETTINGS_TOOLS_BAN);
        }
      }
      function N(e, i) {
        if ((1 & e && (t._UZ(0, 'button', 5), t.YNc(1, U, 1, 2, 'ng-template', null, 3, t.W1O)), 2 & e)) {
          const o = t.MAs(2);
          t.Q6J('icon', o);
        }
      }
      const V = function (e, i) {
        return [e, i];
      };
      let I = (() => {
          class e {
            constructor(o) {
              (this.iconRegistry = o),
                (this.PrizmIconSvgEnum = g.vnC),
                this.iconRegistry.registerIcons([g.etx, g.nID, g.iIm]);
            }
          }
          return (
            (e.ɵfac = function (o) {
              return new (o || e)(t.Y36(g.efQ));
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-widget-with-templates-example']],
              decls: 6,
              vars: 4,
              consts: [
                [
                  'title',
                  '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
                  3,
                  'icons',
                ],
                ['iconBtnTemplate', ''],
                [
                  'prizmIconButton',
                  '',
                  'appearanceType',
                  'ghost',
                  'appearance',
                  'secondary',
                  'size',
                  's',
                  3,
                  'icon',
                ],
                ['iconTemplate', ''],
                [3, 'size', 'name'],
                [
                  'prizmIconButton',
                  '',
                  'appearanceType',
                  'ghost',
                  'appearance',
                  'secondary',
                  'size',
                  'm',
                  3,
                  'icon',
                ],
              ],
              template: function (o, l) {
                if (
                  (1 & o &&
                    (t.TgZ(0, 'prizm-widget', 0),
                    t._uU(
                      1,
                      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
                    ),
                    t.qZA(),
                    t.YNc(2, Z, 3, 1, 'ng-template', null, 1, t.W1O),
                    t.YNc(4, N, 3, 1, 'ng-template', null, 1, t.W1O)),
                  2 & o)
                ) {
                  const s = t.MAs(3);
                  t.Q6J('icons', t.WLB(1, V, s, s));
                }
              },
              dependencies: [y.m, B.C, M.K],
              styles: [
                'prizm-widget[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-secondary);font-style:normal;font-weight:400;font-size:14px}',
              ],
            })),
            e
          );
        })(),
        O = (() => {
          class e {}
          return (
            (e.ɵfac = function (o) {
              return new (o || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-widget-base-example']],
              decls: 2,
              vars: 0,
              consts: [
                [
                  'title',
                  '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
                ],
              ],
              template: function (o, l) {
                1 & o &&
                  (t.TgZ(0, 'prizm-widget', 0),
                  t._uU(
                    1,
                    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
                  ),
                  t.qZA());
              },
              dependencies: [y.m],
              styles: [
                'prizm-widget[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-secondary);font-style:normal;font-weight:400;font-size:14px;display:block}',
              ],
            })),
            e
          );
        })();
      const J = function () {
        return ['account-lock'];
      };
      let w = (() => {
        class e {}
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-widget-with-buttons-example']],
            decls: 2,
            vars: 2,
            consts: [
              [
                'title',
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430',
                3,
                'icons',
              ],
            ],
            template: function (o, l) {
              1 & o &&
                (t.TgZ(0, 'prizm-widget', 0),
                t._uU(
                  1,
                  ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
                ),
                t.qZA()),
                2 & o && t.Q6J('icons', t.DdM(1, J));
            },
            dependencies: [y.m],
            styles: [
              'prizm-widget[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-secondary);font-style:normal;font-weight:400;font-size:14px}',
            ],
          })),
          e
        );
      })();
      function K(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-widget-base-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-widget-with-buttons-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 6),
            t._UZ(5, 'prizm-widget-with-templates-example'),
            t.qZA()),
          2 & e)
        ) {
          const o = t.oxw();
          t.Q6J('content', o.exampleBase),
            t.xp6(2),
            t.Q6J('content', o.exampleWithButtons),
            t.xp6(2),
            t.Q6J('content', o.exampleWithTemplates);
        }
      }
      function S(e, i) {
        1 & e && t._uU(0, ' Header ( if passed header, title and icons will be not showed ) ');
      }
      function Q(e, i) {
        1 & e &&
          t._uU(
            0,
            ' \u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0448\u0430\u0431\u043b\u043e\u043d \u0434\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u0445\u0435\u0434\u0435\u0440\u0430 '
          );
      }
      function L(e, i) {
        1 & e && t._uU(0, ' Title ');
      }
      function Y(e, i) {
        1 & e &&
          t._uU(0, ' \u041a\u0430\u043a\u043e\u0439 \u0442\u043e \u0448\u0430\u0431\u043b\u043e\u043d ');
      }
      function F(e, i) {
        1 & e && t._uU(0, ' Icons ');
      }
      function R(e, i) {
        1 & e && t._uU(0, ' Click on icon ');
      }
      function G(e, i) {
        if (1 & e) {
          const o = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'prizm-widget', 7, 8),
            t._uU(3),
            t.qZA()(),
            t.TgZ(4, 'prizm-doc-documentation'),
            t.YNc(5, S, 1, 0, 'ng-template', 9),
            t.NdJ('documentationPropertyValueChange', function (s) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.header = s));
            }),
            t.YNc(6, Q, 1, 0, 'ng-template', null, 10, t.W1O),
            t.YNc(8, L, 1, 0, 'ng-template', 11),
            t.NdJ('documentationPropertyValueChange', function (s) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.title = s));
            }),
            t.YNc(9, Y, 1, 0, 'ng-template', null, 12, t.W1O),
            t.YNc(11, F, 1, 0, 'ng-template', 13),
            t.NdJ('documentationPropertyValueChange', function (s) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.icons = s));
            }),
            t.YNc(12, R, 1, 0, 'ng-template', 14),
            t.qZA();
        }
        if (2 & e) {
          const o = t.MAs(2),
            l = t.MAs(7),
            s = t.MAs(10),
            m = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', o)('header', m.header)('title', m.title)('icons', m.icons),
            t.xp6(2),
            t.hij(' ', m.content, ' '),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', m.header)(
              'documentationPropertyValues',
              m.getHeaderVariants(l)
            ),
            t.xp6(3),
            t.Q6J('documentationPropertyValue', m.title),
            t.xp6(3),
            t.Q6J('documentationPropertyValue', m.icons)('documentationPropertyValues', m.getIconVariants(s));
        }
      }
      function _(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 15)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmWidgetModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 16),
            t.qZA()()),
          2 & e)
        ) {
          const o = t.oxw();
          t.xp6(7), t.Q6J('code', o.setupModule);
        }
      }
      class u {
        constructor() {
          (this.header =
            '\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430'),
            (this.title =
              '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0432\u0438\u0434\u0436\u0435\u0442\u0430'),
            (this.icons = []),
            (this.iconVariants = [['account-circle', 'account-circle', 'account-key'], '', ['account-key']]),
            (this.content =
              '\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u0438\u0434\u0436\u0435\u0442\u0430'),
            (this.setupModule = n.e(68162).then(n.t.bind(n, 68162, 17))),
            (this.exampleBase = {
              TypeScript: n.e(41185).then(n.t.bind(n, 41185, 17)),
              HTML: n.e(68310).then(n.t.bind(n, 68310, 17)),
            }),
            (this.exampleWithButtons = {
              TypeScript: n.e(77581).then(n.t.bind(n, 77581, 17)),
              HTML: n.e(65807).then(n.t.bind(n, 65807, 17)),
            }),
            (this.exampleWithTemplates = {
              TypeScript: n.e(15475).then(n.t.bind(n, 15475, 17)),
              HTML: n.e(965).then(n.t.bind(n, 965, 17)),
            });
        }
        getIconVariants(...i) {
          return [...i, ...this.iconVariants];
        }
        getHeaderVariants(...i) {
          return [null, ...i];
        }
      }
      (u.ɵfac = function (i) {
        return new (i || u)();
      }),
        (u.ɵcmp = t.Xpm({
          type: u,
          selectors: [['prizm-widget-example']],
          decls: 6,
          vars: 0,
          consts: [
            ['header', 'Widget'],
            ['description', '', 1, 'page-description'],
            ['prizmDocPageTab', ''],
            ['prizmDocPageTab', '', 'prizmDocHost', ''],
            ['id', 'base', 'heading', 'Base', 3, 'content'],
            ['id', 'with-buttons', 'heading', 'With Buttons', 3, 'content'],
            ['id', 'with-templates', 'heading', 'With Templates', 3, 'content'],
            [3, 'prizmDocHostElement', 'header', 'title', 'icons'],
            ['element', ''],
            [
              'documentationPropertyName',
              'header',
              'documentationPropertyType',
              'PolymorphContent',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            ['headerTemplate', ''],
            [
              'documentationPropertyName',
              'title',
              'documentationPropertyType',
              'string',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValueChange',
            ],
            ['iconTemplate', ''],
            [
              'documentationPropertyName',
              'icons',
              'documentationPropertyType',
              'PrizmWidgetIcons',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'iconClick',
              'documentationPropertyType',
              'string',
              'documentationPropertyMode',
              'output',
            ],
            [1, 'b-demo-steps'],
            ['filename', 'custom.module.ts', 3, 'code'],
          ],
          template: function (i, o) {
            1 & i &&
              (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
              t._uU(
                2,
                ' Our widget component can use a variety of different types of content. It can be used to display a single image, a video, or a slideshow of images. It can also be used to display a single piece of text, or a slideshow of text. '
              ),
              t.qZA(),
              t.YNc(3, K, 6, 3, 'ng-template', 2),
              t.YNc(4, G, 13, 10, 'ng-template', 3),
              t.YNc(5, _, 8, 1, 'ng-template', 2),
              t.qZA());
          },
          dependencies: [E.c, h.F, f.K, z.N, v.W, W.l, C.a, D.w, A.k, y.m, I, O, w],
          styles: [
            'prizm-widget[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-secondary);font-style:normal;font-weight:400;font-size:14px;display:block}',
          ],
          changeDetection: 0,
        })),
        (0, a.gn)(
          [
            c.zn,
            (0, a.w6)('design:type', Function),
            (0, a.w6)('design:paramtypes', [t.Rgc]),
            (0, a.w6)('design:returntype', Array),
          ],
          u.prototype,
          'getIconVariants',
          null
        ),
        (0, a.gn)(
          [
            c.zn,
            (0, a.w6)('design:type', Function),
            (0, a.w6)('design:paramtypes', [t.Rgc]),
            (0, a.w6)('design:returntype', Array),
          ],
          u.prototype,
          'getHeaderVariants',
          null
        );
      var T = n(70169);
      let X = (() => {
        class e {}
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵmod = t.oAB({ type: e })),
          (e.ɵinj = t.cJS({ imports: [d.ez, p.Qp, T.b2o, g.I1N, T.KBf, x.Bz.forChild((0, p.GB)(u))] })),
          e
        );
      })();
    },
    57679: (P, r, n) => {
      n.d(r, { k: () => x });
      var d = n(65879),
        p = n(45773);
      let x = (() => {
        class a {
          constructor(c) {
            (this.hostElementService = c), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const c = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              E = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const h in c) this.hostElementService.setHostElement(c[h], E[h]);
          }
        }
        return (
          (a.ɵfac = function (c) {
            return new (c || a)(d.Y36(p.R));
          }),
          (a.ɵdir = d.lG2({
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
    56586: (P, r, n) => {
      n.d(r, { w: () => x });
      var d = n(45773),
        p = n(65879);
      let x = (() => {
        class a {}
        return (
          (a.ɵfac = function (c) {
            return new (c || a)();
          }),
          (a.ɵdir = p.lG2({ type: a, selectors: [['', 'prizmDocHost', '']], features: [p._Bn([d.R])] })),
          a
        );
      })();
    },
  },
]);
