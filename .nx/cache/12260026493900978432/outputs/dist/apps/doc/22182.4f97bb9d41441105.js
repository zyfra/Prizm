'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [22182],
  {
    22182: (P, c, e) => {
      e.r(c), e.d(c, { TooltipExampleModule: () => G });
      var r = e(96814),
        u = e(21004),
        d = e(75187),
        m = e(70169),
        s = e(60095),
        t = e(65879),
        y = e(8221),
        h = e(30990),
        z = e(83419),
        x = e(78905),
        C = e(63796),
        f = e(75987),
        _ = e(43015),
        E = e(56586),
        D = e(57679),
        g = e(60221),
        T = e(4377);
      function V(o, p) {
        1 & o &&
          (t.TgZ(0, 'div', 2),
          t._UZ(1, 'img', 3),
          t.TgZ(2, 'p', 4),
          t._uU(3, '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
          t.qZA(),
          t.TgZ(4, 'div'),
          t._uU(
            5,
            ' \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u0430\u044f \u0448\u0438\u0440\u0438\u043d\u0430 \u0442\u0443\u043b\u0442\u0438\u043f\u0430 - 288\u0440\u0445. \u0412\u044b\u0441\u043e\u0442\u0430 \u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u0440\u044c\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430. '
          ),
          t.qZA(),
          t.TgZ(6, 'div', 5),
          t._uU(7, '16.05.2022 10:00'),
          t.qZA(),
          t.TgZ(8, 'div', 6)(9, 'a', 7),
          t._uU(10, '\u0421\u0441\u044b\u043b\u043a\u0430'),
          t.qZA()(),
          t.TgZ(11, 'div', 8)(12, 'button', 9),
          t._uU(13, 'Text Button'),
          t.qZA(),
          t.TgZ(14, 'button', 10),
          t._uU(15, 'Text Button'),
          t.qZA()()());
      }
      let M = (() => {
        class o {
          constructor() {
            this.direction = m._$_.RIGHT;
          }
        }
        return (
          (o.ɵfac = function (i) {
            return new (i || o)();
          }),
          (o.ɵcmp = t.Xpm({
            type: o,
            selectors: [['prizm-tooltip-with-template-example']],
            decls: 4,
            vars: 2,
            consts: [
              ['type', 'button', 'prizmButton', '', 3, 'prizmTooltipDirection', 'prizmTooltip'],
              ['dropdown', ''],
              [1, 'box'],
              ['src', 'assets/example/image-city.jpeg'],
              [1, 'title'],
              [1, 'date'],
              [1, 'link'],
              ['href', '#'],
              [1, 'footer'],
              ['prizmButton', ''],
              ['prizmButton', '', 'appearanceType', 'ghost'],
            ],
            template: function (i, n) {
              if (
                (1 & i &&
                  (t.TgZ(0, 'button', 0),
                  t._uU(1, ' Button\n'),
                  t.qZA(),
                  t.YNc(2, V, 16, 0, 'ng-template', null, 1, t.W1O)),
                2 & i)
              ) {
                const a = t.MAs(3);
                t.Q6J('prizmTooltipDirection', n.direction)('prizmTooltip', a);
              }
            },
            dependencies: [g.g, T.K],
            styles: [
              '.box[_ngcontent-%COMP%]{padding:8px}.box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#337eff;text-decoration:underline}.box[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{outline:none}.box[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#a1a5b7;margin:8px 0}.box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}.box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{display:flex;margin-top:32px;gap:8px;flex-wrap:nowrap}.box[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex-grow:1;min-width:100px}',
            ],
          })),
          o
        );
      })();
      function H(o, p) {
        if ((1 & o && (t.TgZ(0, 'button', 2), t._uU(1), t.qZA()), 2 & o)) {
          const i = p.$implicit;
          t.xp6(1), t.Oqu(i);
        }
      }
      let v = (() => {
          class o {
            constructor() {
              this.items = ['Edit', 'Download', 'Rename', 'Edit', 'Download', 'Rename', 'Delete'];
            }
          }
          return (
            (o.ɵfac = function (i) {
              return new (i || o)();
            }),
            (o.ɵcmp = t.Xpm({
              type: o,
              selectors: [['prizm-tooltip-some-component']],
              decls: 6,
              vars: 1,
              consts: [
                [1, 'button-box'],
                ['prizmButton', '', 4, 'ngFor', 'ngForOf'],
                ['prizmButton', ''],
              ],
              template: function (i, n) {
                1 & i &&
                  (t.TgZ(0, 'div'),
                  t._uU(1, 'Header'),
                  t.qZA(),
                  t.TgZ(2, 'div', 0),
                  t.YNc(3, H, 2, 1, 'button', 1),
                  t.qZA(),
                  t.TgZ(4, 'div'),
                  t._uU(5, 'Footer'),
                  t.qZA()),
                  2 & i && (t.xp6(3), t.Q6J('ngForOf', n.items));
              },
              dependencies: [r.sg, T.K],
              styles: [
                '.button-box[_ngcontent-%COMP%]{display:grid;grid-template-rows:1fr;gap:8px;padding:8px}button[_ngcontent-%COMP%]{width:100%}',
              ],
            })),
            o
          );
        })(),
        A = (() => {
          class o {
            constructor() {
              (this.component = new m.O$$(v)), (this.direction = m._$_.TOP_RIGHT);
            }
          }
          return (
            (o.ɵfac = function (i) {
              return new (i || o)();
            }),
            (o.ɵcmp = t.Xpm({
              type: o,
              selectors: [['prizm-tooltip-with-component-example']],
              decls: 2,
              vars: 3,
              consts: [
                [
                  'type',
                  'button',
                  'prizmButton',
                  '',
                  3,
                  'prizmTooltipDirection',
                  'prizmAutoReposition',
                  'prizmTooltip',
                ],
              ],
              template: function (i, n) {
                1 & i && (t.TgZ(0, 'button', 0), t._uU(1, ' Button\n'), t.qZA()),
                  2 & i &&
                    t.Q6J('prizmTooltipDirection', n.direction)('prizmAutoReposition', !1)(
                      'prizmTooltip',
                      n.component
                    );
              },
              dependencies: [g.g, T.K],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })(),
        Z = (() => {
          class o {}
          return (
            (o.ɵfac = function (i) {
              return new (i || o)();
            }),
            (o.ɵcmp = t.Xpm({
              type: o,
              selectors: [['prizm-tooltip-base-example']],
              decls: 2,
              vars: 0,
              consts: [
                [
                  'type',
                  'button',
                  'prizmButton',
                  '',
                  'prizmTooltip',
                  '\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0442\u0435\u043a\u0441\u0442',
                ],
              ],
              template: function (i, n) {
                1 & i && (t.TgZ(0, 'button', 0), t._uU(1, 'Button'), t.qZA());
              },
              dependencies: [g.g, T.K],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            o
          );
        })();
      function O(o, p) {
        if (
          (1 & o &&
            (t.TgZ(0, 'prizm-doc-example', 4),
            t._UZ(1, 'prizm-tooltip-base-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 5),
            t._UZ(3, 'prizm-tooltip-with-template-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 6),
            t._UZ(5, 'prizm-tooltip-with-component-example'),
            t.qZA()),
          2 & o)
        ) {
          const i = t.oxw();
          t.Q6J('content', i.exampleBase),
            t.xp6(2),
            t.Q6J('content', i.exampleWithTemplate),
            t.xp6(2),
            t.Q6J('content', i.exampleWithComponent);
        }
      }
      function U(o, p) {
        1 & o && t._uU(0, ' Content ');
      }
      function B(o, p) {
        1 & o && t._uU(0, ' Element relative to which the tooltip will appear (default: current) ');
      }
      function N(o, p) {
        1 & o && t._uU(0, ' Tooltip might appear ');
      }
      function S(o, p) {
        1 & o && t._uU(0, ' Trigger on tooltip showed/hidden ');
      }
      function w(o, p) {
        1 & o && t._uU(0, ' Delay to hide tooltip ');
      }
      function J(o, p) {
        1 & o && t._uU(0, ' Delay to show tooltip ');
      }
      function K(o, p) {
        1 & o && t._uU(0, ' Context passed to tooltip ');
      }
      function F(o, p) {
        1 & o && t._uU(0, ' Tooltip ID ');
      }
      function R(o, p) {
        1 & o && t._uU(0, ' Tooltip direction ');
      }
      function b(o, p) {
        1 & o && t._uU(0, ' Tooltip Theme (set theme for modal container) ');
      }
      function W(o, p) {
        1 & o && t._uU(0, ' Auto recalculate positioning ');
      }
      function I(o, p) {
        if (1 & o) {
          const i = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'button', 7, 8),
            t._uU(3, ' Button '),
            t.qZA()(),
            t.TgZ(4, 'prizm-doc-documentation', 9),
            t.YNc(5, U, 1, 0, 'ng-template', 10),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.content = a));
            }),
            t.YNc(6, B, 1, 0, 'ng-template', 11),
            t.YNc(7, N, 1, 0, 'ng-template', 12),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.prizmTooltipCanShow = a));
            }),
            t.YNc(8, S, 1, 0, 'ng-template', 13),
            t.YNc(9, w, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.prizmTooltipHideDelay = a));
            }),
            t.YNc(10, J, 1, 0, 'ng-template', 15),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.prizmTooltipShowDelay = a));
            }),
            t.YNc(11, K, 1, 0, 'ng-template', 16),
            t.YNc(12, F, 1, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.prizmTooltipId = a));
            }),
            t.YNc(13, R, 1, 0, 'ng-template', 18),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.prizmTooltipDirection = a));
            }),
            t.YNc(14, b, 1, 0, 'ng-template', 19),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.prizmTooltipTheme = a));
            }),
            t.YNc(15, W, 1, 0, 'ng-template', 20),
            t.NdJ('documentationPropertyValueChange', function (a) {
              t.CHM(i);
              const l = t.oxw();
              return t.KtG((l.prizmAutoReposition = a));
            }),
            t.qZA();
        }
        if (2 & o) {
          const i = t.MAs(2),
            n = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', i)('prizmTooltip', n.content)(
              'prizmAutoReposition',
              n.prizmAutoReposition
            )('prizmHintTheme', n.prizmTooltipTheme)('prizmTooltipDirection', n.prizmTooltipDirection)(
              'prizmTooltipId',
              n.prizmTooltipId
            )('prizmTooltipShowDelay', n.prizmTooltipShowDelay)('prizmTooltipCanShow', n.prizmTooltipCanShow)(
              'prizmTooltipHideDelay',
              n.prizmTooltipHideDelay
            )('prizmTooltipHost', n.prizmTooltipHost)('size', n.size)('icon', n.icon)(
              'iconRight',
              n.iconRight
            )('appearanceType', n.appearanceType)('appearance', n.appearance)('disabled', n.disabled)(
              'showLoader',
              n.showLoader
            )('focusable', n.focusable)('pseudoState', n.pseudoState),
            t.xp6(3),
            t.Q6J('hasTestId', !1),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.content),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.prizmTooltipCanShow),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.prizmTooltipHideDelay),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmTooltipShowDelay),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.prizmTooltipId),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmTooltipDirection)(
              'documentationPropertyValues',
              n.prizmTooltipDirectionVariants
            ),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmTooltipTheme)(
              'documentationPropertyValues',
              n.prizmTooltipThemeVariants
            ),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmAutoReposition);
        }
      }
      function Q(o, p) {
        if (
          (1 & o &&
            (t.TgZ(0, 'ol', 21)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmTooltipModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 22),
            t.qZA()()),
          2 & o)
        ) {
          const i = t.oxw();
          t.xp6(7), t.Q6J('code', i.setupModule);
        }
      }
      let Y = (() => {
          class o {
            constructor() {
              (this.pseudoHovered = !1),
                (this.pseudoPressed = !1),
                (this.pseudoFocused = !1),
                (this.pseudoState = ''),
                (this.focusable = !1),
                (this.sizeVariants = ['m', 'l']),
                (this.size = this.sizeVariants[0]),
                (this.focusedChange = !1),
                (this.pressedChange = !1),
                (this.hoveredChange = !1),
                (this.focusVisibleChange = !1),
                (this.iconVariants = ['', ...m.$xS.reduce((i, n) => i.concat(n.data), [])]),
                (this.icon = this.iconVariants[0]),
                (this.iconRight = this.iconVariants[0]),
                (this.appearanceVariants = ['primary', 'secondary', 'success', 'warning', 'danger']),
                (this.appearance = this.appearanceVariants[0]),
                (this.appearanceTypeVariants = ['fill', 'outline', 'ghost']),
                (this.appearanceType = this.appearanceTypeVariants[0]),
                (this.disabled = !1),
                (this.showLoader = !1),
                (this.content =
                  '\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435'),
                (this.prizmAutoReposition = !1),
                (this.prizmTooltipShow = !0),
                (this.prizmTooltipCanShow = !0),
                (this.prizmTooltipDirectionVariants = Object.values(m._$_)),
                (this.prizmTooltipDirection = m.HVF.direction),
                (this.prizmTooltipThemeVariants = [null, 'dark', 'light']),
                (this.prizmTooltipTheme = m.HVF.theme),
                (this.prizmTooltipId = 'tooltip-id'),
                (this.prizmTooltipShowDelay = m.HVF.showDelay),
                (this.prizmTooltipHideDelay = m.HVF.hideDelay),
                (this.prizmTooltipHost = null),
                (this.prizmTooltipVariants = ['Tooltip']),
                (this.prizmTooltip = this.prizmTooltipVariants[0]),
                (this.setupModule = e.e(30110).then(e.t.bind(e, 30110, 17))),
                (this.exampleBase = {
                  TypeScript: e.e(38041).then(e.t.bind(e, 38041, 17)),
                  HTML: e.e(33939).then(e.t.bind(e, 33939, 17)),
                }),
                (this.exampleWithTemplate = {
                  TypeScript: e.e(79169).then(e.t.bind(e, 79169, 17)),
                  HTML: e.e(96157).then(e.t.bind(e, 96157, 17)),
                }),
                (this.exampleWithComponent = {
                  TypeScript: e.e(53857).then(e.t.bind(e, 53857, 17)),
                  HTML: e.e(31076).then(e.t.bind(e, 31076, 17)),
                });
            }
          }
          return (
            (o.ɵfac = function (i) {
              return new (i || o)();
            }),
            (o.ɵcmp = t.Xpm({
              type: o,
              selectors: [['prizm-tooltip-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'Tooltip'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Base', 3, 'content'],
                ['id', 'with-template', 'heading', 'With Template', 3, 'content'],
                ['id', 'with-component', 'heading', 'With Component', 3, 'content'],
                [
                  'prizmButton',
                  '',
                  3,
                  'prizmDocHostElement',
                  'prizmTooltip',
                  'prizmAutoReposition',
                  'prizmHintTheme',
                  'prizmTooltipDirection',
                  'prizmTooltipId',
                  'prizmTooltipShowDelay',
                  'prizmTooltipCanShow',
                  'prizmTooltipHideDelay',
                  'prizmTooltipHost',
                  'size',
                  'icon',
                  'iconRight',
                  'appearanceType',
                  'appearance',
                  'disabled',
                  'showLoader',
                  'focusable',
                  'pseudoState',
                ],
                ['element', 'prizmTooltip'],
                [3, 'hasTestId'],
                [
                  'documentationPropertyName',
                  'prizmTooltip',
                  'documentationPropertyType',
                  'PolymorphContent',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'prizmTooltipHost',
                  'documentationPropertyType',
                  'HTMLElement | null',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'prizmTooltipCanShow',
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
                  'prizmTooltipShowed',
                  'documentationPropertyType',
                  'boolean',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'prizmTooltipHideDelay',
                  'documentationPropertyType',
                  'number',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'prizmTooltipShowDelay',
                  'documentationPropertyType',
                  'number',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'prizmTooltipContext',
                  'documentationPropertyType',
                  'Record<stiring, unknown>',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'prizmTooltipId',
                  'documentationPropertyType',
                  'string',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'prizmTooltipDirection',
                  'documentationPropertyType',
                  "PrizmTooltipOptions['direction']",
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'prizmHintTheme',
                  'documentationPropertyType',
                  'PrizmTheme | null',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'prizmAutoReposition',
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
              template: function (i, n) {
                1 & i &&
                  (t.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  t._uU(
                    2,
                    ' Our tooltip component is a simple tooltip that can be used to display information for help; '
                  ),
                  t.qZA(),
                  t.YNc(3, O, 6, 3, 'ng-template', 2),
                  t.YNc(4, I, 16, 30, 'ng-template', 3),
                  t.YNc(5, Q, 8, 1, 'ng-template', 2),
                  t.qZA());
              },
              dependencies: [y.c, h.F, z.K, x.N, C.W, f.l, _.a, E.w, D.k, g.g, T.K, M, A, Z],
              changeDetection: 0,
            })),
            o
          );
        })(),
        G = (() => {
          class o {}
          return (
            (o.ɵfac = function (i) {
              return new (i || o)();
            }),
            (o.ɵmod = t.oAB({ type: o })),
            (o.ɵinj = t.cJS({
              imports: [r.ez, u.Qp, s.u5, s.UX, m.m98, m.lY7, m.KBf, d.Bz.forChild((0, u.GB)(Y))],
            })),
            o
          );
        })();
    },
    57679: (P, c, e) => {
      e.d(c, { k: () => d });
      var r = e(65879),
        u = e(45773);
      let d = (() => {
        class m {
          constructor(t) {
            (this.hostElementService = t), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const t = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              y = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const h in t) this.hostElementService.setHostElement(t[h], y[h]);
          }
        }
        return (
          (m.ɵfac = function (t) {
            return new (t || m)(r.Y36(u.R));
          }),
          (m.ɵdir = r.lG2({
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
    56586: (P, c, e) => {
      e.d(c, { w: () => d });
      var r = e(45773),
        u = e(65879);
      let d = (() => {
        class m {}
        return (
          (m.ɵfac = function (t) {
            return new (t || m)();
          }),
          (m.ɵdir = u.lG2({ type: m, selectors: [['', 'prizmDocHost', '']], features: [u._Bn([r.R])] })),
          m
        );
      })();
    },
  },
]);
