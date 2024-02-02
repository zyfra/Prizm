'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [2354],
  {
    2354: (C, c, m) => {
      m.r(c), m.d(c, { InputTimeTimeModule: () => oe });
      var d = m(96814),
        l = m(21004),
        s = m(75187),
        u = m(70169),
        r = m(60095),
        e = m(65879),
        P = m(8221),
        y = m(30990),
        T = m(83419),
        g = m(78905),
        h = m(63796),
        f = m(75987),
        x = m(43015),
        V = m(56586),
        M = m(57679),
        _ = m(33691);
      let I = (() => {
          class t {
            constructor() {
              (this.time = new u.ms_(12, 30)), (this.value = new r.p4(this.time));
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-input-time-base-example']],
              decls: 1,
              vars: 1,
              consts: [[3, 'ngModel']],
              template: function (o, n) {
                1 & o && e._UZ(0, 'prizm-input-time', 0), 2 & o && e.Q6J('ngModel', n.time);
              },
              dependencies: [r.JJ, r.On, _.S],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            t
          );
        })(),
        z = (() => {
          class t {
            constructor() {
              this.value = new r.p4(new u.ms_(12, 30, 25));
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-input-time-with-seconds-example']],
              decls: 1,
              vars: 1,
              consts: [['mode', 'HH:MM:SS', 3, 'formControl']],
              template: function (o, n) {
                1 & o && e._UZ(0, 'prizm-input-time', 0), 2 & o && e.Q6J('formControl', n.value);
              },
              dependencies: [r.JJ, r.oH, _.S],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            t
          );
        })(),
        v = (() => {
          class t {
            constructor() {
              (this.value = new r.p4(new u.ms_(12, 30, 25, 500))),
                (this.items = new Array(24).fill(null).map((o, n) => new u.ms_(n, 0, 0, 0)));
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-input-time-with-preset-example']],
              decls: 1,
              vars: 2,
              consts: [['mode', 'HH:MM', 3, 'formControl', 'items']],
              template: function (o, n) {
                1 & o && e._UZ(0, 'prizm-input-time', 0),
                  2 & o && e.Q6J('formControl', n.value)('items', n.items);
              },
              dependencies: [r.JJ, r.oH, _.S],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            t
          );
        })(),
        H = (() => {
          class t {
            constructor() {
              this.value = new r.p4(new u.ms_(12, 30, 25, 500));
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-input-time-with-ms-example']],
              decls: 1,
              vars: 1,
              consts: [['mode', 'HH:MM:SS.MSS', 3, 'formControl']],
              template: function (o, n) {
                1 & o && e._UZ(0, 'prizm-input-time', 0), 2 & o && e.Q6J('formControl', n.value);
              },
              dependencies: [r.JJ, r.oH, _.S],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            t
          );
        })();
      function N(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-input-time-base-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-input-time-with-seconds-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-input-time-with-ms-example'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 7),
            e._UZ(7, 'prizm-input-time-with-preset-example'),
            e.qZA()),
          2 & t)
        ) {
          const o = e.oxw();
          e.Q6J('content', o.exampleBase),
            e.xp6(2),
            e.Q6J('content', o.exampleWithSeconds),
            e.xp6(2),
            e.Q6J('content', o.exampleWithMicroSeconds),
            e.xp6(2),
            e.Q6J('content', o.exampleWithPreset);
        }
      }
      function J(t, a) {
        1 & t && e._uU(0, ' Show clear button ');
      }
      function S(t, a) {
        1 & t && e._uU(0, ' Clear Button (icon or template) ');
      }
      function E(t, a) {
        1 & t && e._uU(0, ' Label ');
      }
      function U(t, a) {
        1 & t && e._uU(0, ' Placeholder ');
      }
      function D(t, a) {
        1 & t && e._uU(0, ' Outer ');
      }
      function K(t, a) {
        1 & t && e._uU(0, ' Size ');
      }
      function Q(t, a) {
        1 & t &&
          (e._uU(0, ' Strict '), e._UZ(1, 'br'), e._uU(2, ' (Correct time to nearest from items array) '));
      }
      function Z(t, a) {
        1 & t && e._uU(0, ' Mode ');
      }
      function Y(t, a) {
        1 & t && e._uU(0, ' Items ');
      }
      function W(t, a) {
        1 & t && e._uU(0, ' Disabled Item Handler ');
      }
      function G(t, a) {
        1 & t && e._uU(0, ' Items Size ');
      }
      function O(t, a) {
        1 & t && e._uU(0, ' Injector for nested buttons (use in multi datepicker and similar case) ');
      }
      function A(t, a) {
        1 & t && e._uU(0, ' Read Only ');
      }
      function B(t, a) {
        1 & t && e._uU(0, ' Val ');
      }
      function F(t, a) {
        1 & t && e._uU(0, ' Pseudo Invalid ');
      }
      function b(t, a) {
        1 & t && e._uU(0, ' Pseudo Hovered ');
      }
      function w(t, a) {
        1 & t && e._uU(0, ' Pseudo Pressed ');
      }
      function L(t, a) {
        1 & t && e._uU(0, ' Pseudo Focused ');
      }
      function R(t, a) {
        1 & t && e._uU(0, ' Focusable ');
      }
      function X(t, a) {
        1 & t && e._uU(0, ' Pseudo State ');
      }
      function j(t, a) {
        1 & t && e._uU(0, ' Focused Change ');
      }
      function $(t, a) {
        1 & t && e._uU(0, ' Pressed Change ');
      }
      function q(t, a) {
        1 & t && e._uU(0, ' Hovered Change ');
      }
      function k(t, a) {
        1 & t && e._uU(0, ' Focus Visible Change ');
      }
      function ee(t, a) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-input-time', 8, 9),
            e.NdJ('valChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.val = i));
            }),
            e.qZA()(),
            e.TgZ(3, 'prizm-doc-documentation', 10),
            e.YNc(4, J, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.forceClear = i));
            }),
            e.YNc(5, S, 1, 0, 'ng-template', 12),
            e.YNc(6, E, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.label = i));
            }),
            e.YNc(7, U, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.placeholder = i));
            }),
            e.YNc(8, D, 1, 0, 'ng-template', 15),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.outer = i));
            }),
            e.YNc(9, K, 1, 0, 'ng-template', 16),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.size = i));
            }),
            e.YNc(10, Q, 3, 0, 'ng-template', 17),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.strict = i));
            }),
            e.YNc(11, Z, 1, 0, 'ng-template', 18),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.timeMode = i));
            }),
            e.YNc(12, Y, 1, 0, 'ng-template', 19),
            e.YNc(13, W, 1, 0, 'ng-template', 20),
            e.YNc(14, G, 1, 0, 'ng-template', 21),
            e.YNc(15, O, 1, 0, 'ng-template', 22),
            e.YNc(16, A, 1, 0, 'ng-template', 23),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.readOnly = i));
            }),
            e.YNc(17, B, 1, 0, 'ng-template', 24),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.val = i));
            }),
            e.YNc(18, F, 1, 0, 'ng-template', 25),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.pseudoInvalid = i));
            }),
            e.YNc(19, b, 1, 0, 'ng-template', 26),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.pseudoHovered = i));
            }),
            e.YNc(20, w, 1, 0, 'ng-template', 27),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.pseudoPressed = i));
            }),
            e.YNc(21, L, 1, 0, 'ng-template', 28),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.pseudoFocused = i));
            }),
            e.YNc(22, R, 1, 0, 'ng-template', 29),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.focusable = i));
            }),
            e.YNc(23, X, 1, 0, 'ng-template', 30),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.pseudoState = i));
            }),
            e.YNc(24, j, 1, 0, 'ng-template', 31),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.focusedChange = i));
            }),
            e.YNc(25, $, 1, 0, 'ng-template', 32),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.pressedChange = i));
            }),
            e.YNc(26, q, 1, 0, 'ng-template', 33),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.hoveredChange = i));
            }),
            e.YNc(27, k, 1, 0, 'ng-template', 34),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const p = e.oxw();
              return e.KtG((p.focusVisibleChange = i));
            }),
            e.qZA();
        }
        if (2 & t) {
          const o = e.MAs(2),
            n = e.oxw();
          e.xp6(1),
            e.Q6J('val', n.val)('prizmDocHostElement', o)('formControl', n.valueControl)('label', n.label)(
              'forceClear',
              n.forceClear
            )('placeholder', n.placeholder)('outer', n.outer)('mode', n.timeMode)('strict', n.strict)(
              'size',
              n.size
            )('readOnly', n.readOnly)('focusable', n.focusable)('pseudoState', n.pseudoState),
            e.xp6(2),
            e.Q6J('hasTestId', !0)('control', n.valueControl),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.forceClear)(
              'documentationPropertyValues',
              n.forceClearVariants
            ),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', n.label),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.placeholder),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.outer),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.size)('documentationPropertyValues', n.sizeVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.strict),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.timeMode)(
              'documentationPropertyValues',
              n.timeModeVariants
            ),
            e.xp6(5),
            e.Q6J('documentationPropertyValue', n.readOnly),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.val),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.pseudoInvalid),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.pseudoHovered),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.pseudoPressed),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.pseudoFocused),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.focusable),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.pseudoState),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.focusedChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.pressedChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.hoveredChange),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.focusVisibleChange);
        }
      }
      function te(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 35)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmInputTimeModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 36),
            e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw();
          e.xp6(7), e.Q6J('code', o.setupModule);
        }
      }
      let ne = (() => {
          class t {
            constructor() {
              (this.readOnly = !1),
                (this.forceClear = null),
                (this.forceClearVariants = [null, !1, !0]),
                (this.pseudoInvalid = !1),
                (this.pseudoHovered = !1),
                (this.pseudoPressed = !1),
                (this.pseudoFocused = !1),
                (this.focusable = !0),
                (this.pseudoState = ''),
                (this.focusedChange = !1),
                (this.pressedChange = !1),
                (this.hoveredChange = !1),
                (this.focusVisibleChange = !1),
                (this.valueControl = new r.p4(new u.ms_(12, 30, 25, 500))),
                (this.label =
                  '\u0410\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f'),
                (this.placeholder =
                  '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f'),
                (this.sizeVariants = ['l', 'm', 's']),
                (this.size = 'm'),
                (this.strict = !1),
                (this.timeModeVariants = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS']),
                (this.timeMode = 'HH:MM'),
                (this.outer = !1),
                (this.setupModule = m.e(5849).then(m.t.bind(m, 5849, 17))),
                (this.exampleBase = {
                  TypeScript: m.e(11041).then(m.t.bind(m, 11041, 17)),
                  HTML: m.e(21864).then(m.t.bind(m, 21864, 17)),
                }),
                (this.exampleWithSeconds = {
                  TypeScript: m.e(52056).then(m.t.bind(m, 52056, 17)),
                  HTML: m.e(29357).then(m.t.bind(m, 74003, 17)),
                }),
                (this.exampleWithMicroSeconds = {
                  TypeScript: m.e(60874).then(m.t.bind(m, 60874, 17)),
                  HTML: m.e(19462).then(m.t.bind(m, 19462, 17)),
                }),
                (this.exampleWithPreset = {
                  TypeScript: m.e(17583).then(m.t.bind(m, 17583, 17)),
                  HTML: m.e(73470).then(m.t.bind(m, 73470, 17)),
                });
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-input-date-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'InputTime'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Base', 3, 'content'],
                ['id', 'with-seconds', 'heading', 'With Seconds', 3, 'content'],
                ['id', 'with-mc', 'heading', 'With Micro Seconds', 3, 'content'],
                ['id', 'with-preset', 'heading', 'With Preset', 3, 'content'],
                [
                  3,
                  'val',
                  'prizmDocHostElement',
                  'formControl',
                  'label',
                  'forceClear',
                  'placeholder',
                  'outer',
                  'mode',
                  'strict',
                  'size',
                  'readOnly',
                  'focusable',
                  'pseudoState',
                  'valChange',
                ],
                ['element', ''],
                [3, 'hasTestId', 'control'],
                [
                  'documentationPropertyName',
                  'forceClear',
                  'documentationPropertyType',
                  'boolean | null',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'clearButton',
                  'documentationPropertyType',
                  'PolymorphContent<PrizmInputLayoutClearButtonContext>',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'label',
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
                  'placeholder',
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
                  'outer',
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
                  'PrizmInputSize',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'strict',
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
                  'mode',
                  'documentationPropertyType',
                  'PrizmTimeMode',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'items',
                  'documentationPropertyType',
                  'PrizmTime[]',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'disabledItemHandler',
                  'documentationPropertyType',
                  'PrizmBooleanHandler<PrizmTime>',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'itemSize',
                  'documentationPropertyType',
                  'PrizmSizeS | PrizmSizeL | PrizmSizeM',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'extraButtonInjector',
                  'documentationPropertyType',
                  'Injector',
                  'documentationPropertyMode',
                  'input',
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
                  '[PrizmDay, PrizmTime]',
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
              template: function (o, n) {
                1 & o &&
                  (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  e._uU(2, ' It is a deprecated component, instead of this use PrizmInputLayoutTime. '),
                  e.qZA(),
                  e.YNc(3, N, 8, 4, 'ng-template', 2),
                  e.YNc(4, ee, 28, 37, 'ng-template', 3),
                  e.YNc(5, te, 8, 1, 'ng-template', 2),
                  e.qZA());
              },
              dependencies: [P.c, y.F, T.K, g.N, h.W, f.l, x.a, V.w, M.k, r.JJ, r.oH, _.S, I, z, v, H],
              changeDetection: 0,
            })),
            t
          );
        })(),
        oe = (() => {
          class t {}
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({
              imports: [d.ez, l.Qp, r.u5, r.UX, u.m98, u.bMD, s.Bz.forChild((0, l.GB)(ne))],
            })),
            t
          );
        })();
    },
    57679: (C, c, m) => {
      m.d(c, { k: () => s });
      var d = m(65879),
        l = m(45773);
      let s = (() => {
        class u {
          constructor(e) {
            (this.hostElementService = e), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const e = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              P = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const y in e) this.hostElementService.setHostElement(e[y], P[y]);
          }
        }
        return (
          (u.ɵfac = function (e) {
            return new (e || u)(d.Y36(l.R));
          }),
          (u.ɵdir = d.lG2({
            type: u,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          u
        );
      })();
    },
    56586: (C, c, m) => {
      m.d(c, { w: () => s });
      var d = m(45773),
        l = m(65879);
      let s = (() => {
        class u {}
        return (
          (u.ɵfac = function (e) {
            return new (e || u)();
          }),
          (u.ɵdir = l.lG2({ type: u, selectors: [['', 'prizmDocHost', '']], features: [l._Bn([d.R])] })),
          u
        );
      })();
    },
  },
]);
