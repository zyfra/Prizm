'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [53764],
  {
    53764: (x, c, r) => {
      r.r(c), r.d(c, { ToggleExampleModule: () => X });
      var g = r(96814),
        u = r(21004),
        d = r(75187),
        e = r(65879),
        s = r(8221),
        p = r(30990),
        h = r(83419),
        _ = r(78905),
        P = r(63796),
        C = r(75987),
        T = r(43015),
        V = r(56586),
        v = r(57679),
        i = r(60095),
        f = r(93428);
      const y = function () {
        return { standalone: !0 };
      };
      let M = (() => {
        class o {
          constructor() {
            (this.value = !0),
              (this.value2 = new i.p4(!1)),
              (this.valueDisabled = !1),
              (this.value2Disabled = new i.p4(!1));
          }
          ngOnInit() {
            this.value2Disabled.disable();
          }
        }
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['prizm-toggle-base-example']],
            decls: 42,
            vars: 20,
            consts: [
              [1, 'box', 'prizm-font-main-body-14'],
              ['size', 'm', 3, 'ngModel', 'ngModelOptions', 'ngModelChange'],
              ['size', 'm', 3, 'ngModel', 'disabled', 'ngModelOptions', 'ngModelChange'],
              ['size', 'm', 3, 'ngModel', 'showLoader', 'ngModelOptions', 'ngModelChange'],
              [
                'size',
                'm',
                'iconOn',
                'selection-checkbox-marked-circle',
                'iconOff',
                'selection-checkbox-marked-circle-chanel',
                3,
                'ngModel',
                'ngModelOptions',
                'ngModelChange',
              ],
              ['size', 'l', 3, 'formControl'],
              ['size', 'l', 3, 'showLoader', 'formControl'],
              [
                'size',
                'l',
                'iconOn',
                'arrows-chevron-left',
                'iconOff',
                'arrows-chevron-right',
                3,
                'formControl',
              ],
            ],
            template: function (l, t) {
              1 & l &&
                (e.TgZ(0, 'div')(1, 'h2'),
                e._uU(2, 'Size M'),
                e.qZA(),
                e.TgZ(3, 'div', 0)(4, 'div'),
                e._uU(5, ' simple '),
                e.TgZ(6, 'prizm-toggle', 1),
                e.NdJ('ngModelChange', function (n) {
                  return (t.value = n);
                }),
                e._uU(7, 'Ng Model'),
                e.qZA()(),
                e.TgZ(8, 'div'),
                e._uU(9, ' disabled '),
                e.TgZ(10, 'prizm-toggle', 2),
                e.NdJ('ngModelChange', function (n) {
                  return (t.valueDisabled = n);
                }),
                e._uU(11, 'Ng Model'),
                e.qZA()(),
                e.TgZ(12, 'div'),
                e._uU(13, ' with loader '),
                e.TgZ(14, 'prizm-toggle', 3),
                e.NdJ('ngModelChange', function (n) {
                  return (t.value = n);
                }),
                e._uU(15, 'Ng Model'),
                e.qZA()(),
                e.TgZ(16, 'div'),
                e._uU(17, ' with icon '),
                e.TgZ(18, 'prizm-toggle', 4),
                e.NdJ('ngModelChange', function (n) {
                  return (t.value = n);
                }),
                e._uU(19, 'Ng Model'),
                e.qZA()()()(),
                e.TgZ(20, 'div')(21, 'h2'),
                e._uU(22, 'Size L'),
                e.qZA(),
                e.TgZ(23, 'div', 0)(24, 'div'),
                e._uU(25, ' simple '),
                e._UZ(26, 'prizm-toggle', 5),
                e.qZA(),
                e.TgZ(27, 'div'),
                e._uU(28, ' disabled '),
                e._UZ(29, 'prizm-toggle', 5),
                e.qZA(),
                e.TgZ(30, 'div'),
                e._uU(31, ' with loader '),
                e._UZ(32, 'prizm-toggle', 6),
                e.qZA(),
                e.TgZ(33, 'div'),
                e._uU(34, ' with icon '),
                e._UZ(35, 'prizm-toggle', 7),
                e.qZA()()(),
                e._UZ(36, 'br')(37, 'br'),
                e.TgZ(38, 'div'),
                e._uU(39, ' Value: '),
                e.TgZ(40, 'b'),
                e._uU(41),
                e.qZA()()),
                2 & l &&
                  (e.xp6(6),
                  e.Q6J('ngModel', t.value)('ngModelOptions', e.DdM(16, y)),
                  e.xp6(4),
                  e.Q6J('ngModel', t.valueDisabled)('disabled', !0)('ngModelOptions', e.DdM(17, y)),
                  e.xp6(4),
                  e.Q6J('ngModel', t.value)('showLoader', !0)('ngModelOptions', e.DdM(18, y)),
                  e.xp6(4),
                  e.Q6J('ngModel', t.value)('ngModelOptions', e.DdM(19, y)),
                  e.xp6(8),
                  e.Q6J('formControl', t.value2),
                  e.xp6(3),
                  e.Q6J('formControl', t.value2Disabled),
                  e.xp6(3),
                  e.Q6J('showLoader', !0)('formControl', t.value2),
                  e.xp6(3),
                  e.Q6J('formControl', t.value2),
                  e.xp6(6),
                  e.Oqu(t.value ? 'TRUE' : 'FALSE'));
            },
            dependencies: [i.JJ, i.On, i.oH, f.w],
            styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
          })),
          o
        );
      })();
      function z(o, m) {
        if (
          (1 & o && (e.TgZ(0, 'prizm-doc-example', 4), e._UZ(1, 'prizm-toggle-base-example'), e.qZA()), 2 & o)
        ) {
          const l = e.oxw();
          e.Q6J('content', l.exampleBase);
        }
      }
      function E(o, m) {
        1 & o && e._uU(0, ' Show Loader ');
      }
      function N(o, m) {
        1 & o && e._uU(0, ' Single Color ');
      }
      function J(o, m) {
        1 & o && e._uU(0, ' Size ');
      }
      function O(o, m) {
        1 & o && e._uU(0, ' Icon On ');
      }
      function H(o, m) {
        1 & o && e._uU(0, ' Icon Off ');
      }
      function D(o, m) {
        1 & o && e._uU(0, ' Read Only ');
      }
      function U(o, m) {
        1 & o && e._uU(0, ' Val ');
      }
      function Z(o, m) {
        1 & o && e._uU(0, ' Pseudo Invalid ');
      }
      function b(o, m) {
        1 & o && e._uU(0, ' Pseudo Hovered ');
      }
      function w(o, m) {
        1 & o && e._uU(0, ' Pseudo Pressed ');
      }
      function K(o, m) {
        1 & o && e._uU(0, ' Pseudo Focused ');
      }
      function A(o, m) {
        1 & o && e._uU(0, ' Focusable ');
      }
      function Q(o, m) {
        1 & o && e._uU(0, ' Pseudo State ');
      }
      function S(o, m) {
        1 & o && e._uU(0, ' Focused Change ');
      }
      function G(o, m) {
        1 & o && e._uU(0, ' Pressed Change ');
      }
      function L(o, m) {
        1 & o && e._uU(0, ' Hovered Change ');
      }
      function Y(o, m) {
        1 & o && e._uU(0, ' Focus Visible Change ');
      }
      const B = function () {
        return { standalone: !0 };
      };
      function I(o, m) {
        if (1 & o) {
          const l = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-toggle', 5, 6),
            e.NdJ('ngModelChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.value = a));
            })('valChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.val = a));
            }),
            e.qZA()(),
            e.TgZ(3, 'prizm-doc-documentation', 7),
            e.YNc(4, E, 1, 0, 'ng-template', 8),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.showLoader = a));
            }),
            e.YNc(5, N, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.singleColor = a));
            }),
            e.YNc(6, J, 1, 0, 'ng-template', 10),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.size = a));
            }),
            e.YNc(7, O, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.iconOn = a));
            }),
            e.YNc(8, H, 1, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.iconOff = a));
            }),
            e.YNc(9, D, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.readOnly = a));
            }),
            e.YNc(10, U, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.val = a));
            }),
            e.YNc(11, Z, 1, 0, 'ng-template', 15),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.pseudoInvalid = a));
            }),
            e.YNc(12, b, 1, 0, 'ng-template', 16),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.pseudoHovered = a));
            }),
            e.YNc(13, w, 1, 0, 'ng-template', 17),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.pseudoPressed = a));
            }),
            e.YNc(14, K, 1, 0, 'ng-template', 18),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.pseudoFocused = a));
            }),
            e.YNc(15, A, 1, 0, 'ng-template', 19),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.focusable = a));
            }),
            e.YNc(16, Q, 1, 0, 'ng-template', 20),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.pseudoState = a));
            }),
            e.YNc(17, S, 1, 0, 'ng-template', 21),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.focusedChange = a));
            }),
            e.YNc(18, G, 1, 0, 'ng-template', 22),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.pressedChange = a));
            }),
            e.YNc(19, L, 1, 0, 'ng-template', 23),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.hoveredChange = a));
            }),
            e.YNc(20, Y, 1, 0, 'ng-template', 24),
            e.NdJ('documentationPropertyValueChange', function (a) {
              e.CHM(l);
              const n = e.oxw();
              return e.KtG((n.focusVisibleChange = a));
            }),
            e.qZA();
        }
        if (2 & o) {
          const l = e.MAs(2),
            t = e.oxw();
          e.xp6(1),
            e.Q6J('ngModel', t.value)('val', t.val)('prizmDocHostElement', l)('showLoader', t.showLoader)(
              'singleColor',
              t.singleColor
            )('iconOn', t.iconOn)('size', t.size)('iconOff', t.iconOff)('disabled', t.disabled)(
              'ngModelOptions',
              e.DdM(34, B)
            )('readOnly', t.readOnly)('focusable', t.focusable)('pseudoState', t.pseudoState),
            e.xp6(2),
            e.Q6J('hasTestId', !0),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.showLoader),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.singleColor),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.size)('documentationPropertyValues', t.sizeVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.iconOn)('documentationPropertyValues', t.iconVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.iconOff)('documentationPropertyValues', t.iconVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.readOnly),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.val),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.pseudoInvalid),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.pseudoHovered),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.pseudoPressed),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.pseudoFocused),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.focusable),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.pseudoState),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.focusedChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.pressedChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.hoveredChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', t.focusVisibleChange);
        }
      }
      function F(o, m) {
        if (
          (1 & o &&
            (e.TgZ(0, 'ol', 25)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmToggleModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 26),
            e.qZA()()),
          2 & o)
        ) {
          const l = e.oxw();
          e.xp6(7), e.Q6J('code', l.setupModule);
        }
      }
      let R = (() => {
        class o {
          constructor() {
            (this.readOnly = !1),
              (this.pseudoInvalid = !1),
              (this.pseudoHovered = !1),
              (this.pseudoPressed = !1),
              (this.pseudoFocused = !1),
              (this.pseudoState = ''),
              (this.focusable = !1),
              (this.focusedChange = !1),
              (this.pressedChange = !1),
              (this.hoveredChange = !1),
              (this.focusVisibleChange = !1),
              (this.value = !0),
              (this.val = this.value),
              (this.disabled = !1),
              (this.showLoader = !1),
              (this.singleColor = !1),
              (this.sizeVariants = ['m', 'l']),
              (this.size = this.sizeVariants[0]),
              (this.iconVariants = [
                '',
                'selection-checkbox-marked-circle',
                'selection-checkbox-marked-circle-chanel',
                'arrows-chevron-left',
                'arrows-chevron-right',
              ]),
              (this.iconOn = this.iconVariants[0]),
              (this.iconOff = this.iconVariants[0]),
              (this.setupModule = r.e(88562).then(r.t.bind(r, 88562, 17))),
              (this.exampleBase = {
                TypeScript: r.e(43390).then(r.t.bind(r, 43390, 17)),
                HTML: r.e(84743).then(r.t.bind(r, 84743, 17)),
              });
          }
        }
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵcmp = e.Xpm({
            type: o,
            selectors: [['prizm-toggle-example']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Toggle'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              [
                3,
                'ngModel',
                'val',
                'prizmDocHostElement',
                'showLoader',
                'singleColor',
                'iconOn',
                'size',
                'iconOff',
                'disabled',
                'ngModelOptions',
                'readOnly',
                'focusable',
                'pseudoState',
                'ngModelChange',
                'valChange',
              ],
              ['element', ''],
              [3, 'hasTestId'],
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
                'singleColor',
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
                'size',
                'documentationPropertyType',
                'PrizmSizeL | PrizmSizeM',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'iconOn',
                'documentationPropertyType',
                'PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'iconOff',
                'documentationPropertyType',
                'PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'readOnly',
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
                'val',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'input-output',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'pseudoInvalid',
                'documentationPropertyType',
                'boolean | null',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'pseudoHovered',
                'documentationPropertyType',
                ' boolean | null',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'pseudoPressed',
                'documentationPropertyType',
                'boolean | null',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'pseudoFocused',
                'documentationPropertyType',
                'boolean | null',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'focusable',
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
                'pseudoState',
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
                'focusedChange',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'output',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'pressedChange',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'output',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'hoveredChange',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'output',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'focusVisibleChange',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'output',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'custom.module.ts', 3, 'code'],
            ],
            template: function (l, t) {
              1 & l &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(
                  2,
                  ' Our toggle component is a simple on/off switch that can be used to turn a feature on or off. '
                ),
                e.qZA(),
                e.YNc(3, z, 2, 1, 'ng-template', 2),
                e.YNc(4, I, 21, 35, 'ng-template', 3),
                e.YNc(5, F, 8, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [s.c, p.F, h.K, _.N, P.W, C.l, T.a, V.w, v.k, i.JJ, i.On, f.w, M],
            changeDetection: 0,
          })),
          o
        );
      })();
      var W = r(70169);
      let X = (() => {
        class o {}
        return (
          (o.ɵfac = function (l) {
            return new (l || o)();
          }),
          (o.ɵmod = e.oAB({ type: o })),
          (o.ɵinj = e.cJS({ imports: [g.ez, u.Qp, i.u5, i.UX, W.whW, d.Bz.forChild((0, u.GB)(R))] })),
          o
        );
      })();
    },
    57679: (x, c, r) => {
      r.d(c, { k: () => d });
      var g = r(65879),
        u = r(45773);
      let d = (() => {
        class e {
          constructor(p) {
            (this.hostElementService = p), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const p = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              h = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const _ in p) this.hostElementService.setHostElement(p[_], h[_]);
          }
        }
        return (
          (e.ɵfac = function (p) {
            return new (p || e)(g.Y36(u.R));
          }),
          (e.ɵdir = g.lG2({
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
    56586: (x, c, r) => {
      r.d(c, { w: () => d });
      var g = r(45773),
        u = r(65879);
      let d = (() => {
        class e {}
        return (
          (e.ɵfac = function (p) {
            return new (p || e)();
          }),
          (e.ɵdir = u.lG2({ type: e, selectors: [['', 'prizmDocHost', '']], features: [u._Bn([g.R])] })),
          e
        );
      })();
    },
  },
]);
