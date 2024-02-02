'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [45026],
  {
    45026: (C, c, o) => {
      o.r(c), o.d(c, { InputDateTimeRangeModule: () => me });
      var d = o(96814),
        l = o(21004),
        s = o(75187),
        i = o(70169),
        u = o(60095),
        e = o(65879),
        g = o(8221),
        _ = o(30990),
        y = o(83419),
        P = o(78905),
        h = o(63796),
        f = o(75987),
        x = o(43015),
        D = o(56586),
        V = o(57679),
        T = o(71379);
      let M = (() => {
        class t {
          constructor() {
            (this.value = new u.NI(new i.hPy(new i.iYT(new i.CFx(2018, 2, 10), new i.CFx(2018, 2, 10))))),
              (this.min = new i.jmb(new i.CFx(2e3, 2, 20), new i.ms_(0, 0))),
              (this.max = new i.jmb(new i.CFx(2040, 2, 20), new i.ms_(0, 0)));
          }
        }
        return (
          (t.ɵfac = function (r) {
            return new (r || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-input-date-time-range-base-example']],
            decls: 5,
            vars: 4,
            consts: [[3, 'formControl', 'min', 'max']],
            template: function (r, n) {
              1 & r &&
                (e._UZ(0, 'prizm-input-date-time-range', 0),
                e.TgZ(1, 'h3'),
                e._uU(2, ' Value: '),
                e.TgZ(3, 'b'),
                e._uU(4),
                e.qZA()()),
                2 & r &&
                  (e.Q6J('formControl', n.value)('min', n.min)('max', n.max), e.xp6(4), e.Oqu(n.value.value));
            },
            dependencies: [u.JJ, u.oH, T.V],
            styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
          })),
          t
        );
      })();
      function I(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4), e._UZ(1, 'prizm-input-date-time-range-base-example'), e.qZA()),
          2 & t)
        ) {
          const r = e.oxw();
          e.Q6J('content', r.exampleBase);
        }
      }
      function N(t, a) {
        1 & t && e._uU(0, ' Show clear button ');
      }
      function R(t, a) {
        1 & t && e._uU(0, ' Clear Button (icon or template) ');
      }
      function H(t, a) {
        1 & t && e._uU(0, ' Label ');
      }
      function z(t, a) {
        1 & t && e._uU(0, ' Val ');
      }
      function v(t, a) {
        1 & t && e._uU(0, ' Placeholder ');
      }
      function J(t, a) {
        1 & t && e._uU(0, ' Outer ');
      }
      function U(t, a) {
        1 & t && e._uU(0, ' Size ');
      }
      function E(t, a) {
        1 & t && e._uU(0, ' Time preset for dropdown ');
      }
      function Y(t, a) {
        1 & t && e._uU(0, ' Min Date ');
      }
      function K(t, a) {
        1 & t && e._uU(0, ' Max Date ');
      }
      function Q(t, a) {
        1 & t && e._uU(0, ' Disabled Item Handler ');
      }
      function S(t, a) {
        1 & t &&
          (e._uU(0, ' Time Strict '),
          e._UZ(1, 'br'),
          e._uU(2, ' (Correct time to nearest from items array) '));
      }
      function F(t, a) {
        1 & t && e._uU(0, ' Items preset for dropdown ');
      }
      function Z(t, a) {
        1 & t && e._uU(0, ' Max Length ');
      }
      function G(t, a) {
        1 & t && e._uU(0, ' Min Length ');
      }
      function w(t, a) {
        1 & t && e._uU(0, ' Marker Handler ');
      }
      function A(t, a) {
        1 & t && e._uU(0, ' Default Viewed Month ');
      }
      function B(t, a) {
        1 & t && e._uU(0, ' Time Mode ');
      }
      function O(t, a) {
        1 & t && e._uU(0, ' Read Only ');
      }
      function L(t, a) {
        1 & t && e._uU(0, ' Pseudo Invalid ');
      }
      function b(t, a) {
        1 & t && e._uU(0, ' Pseudo Hovered ');
      }
      function j(t, a) {
        1 & t && e._uU(0, ' Pseudo Pressed ');
      }
      function W(t, a) {
        1 & t && e._uU(0, ' Pseudo Focused ');
      }
      function X(t, a) {
        1 & t && e._uU(0, ' Focusable ');
      }
      function $(t, a) {
        1 & t && e._uU(0, ' Pseudo State ');
      }
      function k(t, a) {
        1 & t && e._uU(0, ' Focused Change ');
      }
      function q(t, a) {
        1 & t && e._uU(0, ' Pressed Change ');
      }
      function ee(t, a) {
        1 & t && e._uU(0, ' Hovered Change ');
      }
      function te(t, a) {
        1 & t && e._uU(0, ' Focus Visible Change ');
      }
      function ne(t, a) {
        if (1 & t) {
          const r = e.EpF();
          e.TgZ(0, 'prizm-doc-demo'),
            e._UZ(1, 'prizm-input-date-time-range', 5, 6),
            e.qZA(),
            e.TgZ(3, 'prizm-doc-documentation', 7),
            e.YNc(4, N, 1, 0, 'ng-template', 8),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.forceClear = m));
            }),
            e.YNc(5, R, 1, 0, 'ng-template', 9),
            e.YNc(6, H, 1, 0, 'ng-template', 10),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.label = m));
            }),
            e.YNc(7, z, 1, 0, 'ng-template', 11),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.val1 = m));
            }),
            e.YNc(8, v, 1, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.placeholder = m));
            }),
            e.YNc(9, J, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.outer = m));
            }),
            e.YNc(10, U, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.size = m));
            }),
            e.YNc(11, E, 1, 0, 'ng-template', 15),
            e.YNc(12, Y, 1, 0, 'ng-template', 16),
            e.YNc(13, K, 1, 0, 'ng-template', 17),
            e.YNc(14, Q, 1, 0, 'ng-template', 18),
            e.YNc(15, S, 3, 0, 'ng-template', 19),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.timeStrict = m));
            }),
            e.YNc(16, F, 1, 0, 'ng-template', 20),
            e.YNc(17, Z, 1, 0, 'ng-template', 21),
            e.YNc(18, G, 1, 0, 'ng-template', 22),
            e.YNc(19, w, 1, 0, 'ng-template', 23),
            e.YNc(20, A, 1, 0, 'ng-template', 24),
            e.YNc(21, B, 1, 0, 'ng-template', 25),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.timeMode = m));
            }),
            e.YNc(22, O, 1, 0, 'ng-template', 26),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.readOnly = m));
            }),
            e.YNc(23, L, 1, 0, 'ng-template', 27),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.pseudoInvalid = m));
            }),
            e.YNc(24, b, 1, 0, 'ng-template', 28),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.pseudoHovered = m));
            }),
            e.YNc(25, j, 1, 0, 'ng-template', 29),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.pseudoPressed = m));
            }),
            e.YNc(26, W, 1, 0, 'ng-template', 30),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.pseudoFocused = m));
            }),
            e.YNc(27, X, 1, 0, 'ng-template', 31),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.focusable = m));
            }),
            e.YNc(28, $, 1, 0, 'ng-template', 32),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.pseudoState = m));
            }),
            e.YNc(29, k, 1, 0, 'ng-template', 33),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.focusedChange = m));
            }),
            e.YNc(30, q, 1, 0, 'ng-template', 34),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.pressedChange = m));
            }),
            e.YNc(31, ee, 1, 0, 'ng-template', 35),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.hoveredChange = m));
            }),
            e.YNc(32, te, 1, 0, 'ng-template', 36),
            e.NdJ('documentationPropertyValueChange', function (m) {
              e.CHM(r);
              const p = e.oxw();
              return e.KtG((p.focusVisibleChange = m));
            }),
            e.qZA();
        }
        if (2 & t) {
          const r = e.MAs(2),
            n = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', r)('formControl', n.value)('min', n.min)('forceClear', n.forceClear)(
              'max',
              n.max
            ),
            e.xp6(2),
            e.Q6J('control', n.value)('hasTestId', !0),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.forceClear)(
              'documentationPropertyValues',
              n.forceClearVariants
            ),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', n.label),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.val1),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.placeholder),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.outer),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.size)('documentationPropertyValues', n.sizeVariants),
            e.xp6(5),
            e.Q6J('documentationPropertyValue', n.timeStrict),
            e.xp6(6),
            e.Q6J('documentationPropertyValue', n.timeMode)(
              'documentationPropertyValues',
              n.timeModeVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.readOnly),
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
      function oe(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 37)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmInputDateTimeRangeModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 38),
            e.qZA()()),
          2 & t)
        ) {
          const r = e.oxw();
          e.xp6(7), e.Q6J('code', r.setupModule);
        }
      }
      let ae = (() => {
          class t {
            constructor() {
              (this.label = '\u041f\u0435\u0440\u0438\u043e\u0434'),
                (this.value = new u.p4(new i.hPy(new i.iYT(new i.CFx(2018, 2, 10), new i.CFx(2018, 2, 10))))),
                (this.min = new i.jmb(new i.CFx(2e3, 2, 20), new i.ms_(0, 0))),
                (this.max = new i.jmb(new i.CFx(2040, 2, 20), new i.ms_(0, 0))),
                (this.placeholder =
                  '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0438\u043e\u0434'),
                (this.sizeVariants = ['l', 'm', 's']),
                (this.size = 'm'),
                (this.outer = !1),
                (this.forceClear = null),
                (this.forceClearVariants = [null, !1, !0]),
                (this.focusable = !0),
                (this.pseudoState = ''),
                (this.focusedChange = !1),
                (this.pressedChange = !1),
                (this.hoveredChange = !1),
                (this.pseudoInvalid = !1),
                (this.pseudoHovered = !1),
                (this.pseudoPressed = !1),
                (this.pseudoFocused = !1),
                (this.readOnly = !1),
                (this.timeStrict = !1),
                (this.timeModeVariants = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS']),
                (this.timeMode = 'HH:MM'),
                (this.focusVisibleChange = !1),
                (this.setupModule = o.e(20984).then(o.t.bind(o, 20984, 17))),
                (this.exampleBase = {
                  TypeScript: o.e(50871).then(o.t.bind(o, 50871, 17)),
                  HTML: o.e(12721).then(o.t.bind(o, 12721, 17)),
                }),
                (this.exampleDisabled = {
                  TypeScript: o.e(73195).then(o.t.bind(o, 73195, 17)),
                  HTML: o.e(98874).then(o.t.bind(o, 98874, 17)),
                }),
                (this.exampleNativeDate = {
                  TypeScript: o.e(78529).then(o.t.bind(o, 78529, 17)),
                  HTML: o.e(55878).then(o.t.bind(o, 55878, 17)),
                });
            }
          }
          return (
            (t.ɵfac = function (r) {
              return new (r || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-input-date-time-range-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'InputDateTimeRange'],
                ['description', '', 1, 'page-description'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Base', 3, 'content'],
                [3, 'prizmDocHostElement', 'formControl', 'min', 'forceClear', 'max'],
                ['element', ''],
                [3, 'control', 'hasTestId'],
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
                  'val',
                  'documentationPropertyType',
                  'any[]',
                  'documentationPropertyMode',
                  'input-output',
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
                  'timeItems',
                  'documentationPropertyType',
                  'PrizmTime[]',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'min',
                  'documentationPropertyType',
                  'PrizmDay | [PrizmDay, PrizmTime]',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'max',
                  'documentationPropertyType',
                  'PrizmDay | [PrizmDay, PrizmTime]',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'disabledItemHandler',
                  'documentationPropertyType',
                  'PrizmBooleanHandler<PrizmDay>',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'timeStrict',
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
                  'items',
                  'documentationPropertyType',
                  'PrizmDayRangePeriod[]',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'maxLength',
                  'documentationPropertyType',
                  'PrizmDayLike | null',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'minLength',
                  'documentationPropertyType',
                  'PrizmDayLike | null',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'markerHandler',
                  'documentationPropertyType',
                  'PrizmMarkerHandler',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'defaultViewedMonth',
                  'documentationPropertyType',
                  'PrizmMonth',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'timeMode',
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
              template: function (r, n) {
                1 & r &&
                  (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                  e._uU(
                    2,
                    ' It is a deprecated component, instead of this use PrizmInputLayoutDateTimeRange. '
                  ),
                  e.qZA(),
                  e.YNc(3, I, 2, 1, 'ng-template', 2),
                  e.YNc(4, ne, 33, 29, 'ng-template', 3),
                  e.YNc(5, oe, 8, 1, 'ng-template', 2),
                  e.qZA());
              },
              dependencies: [g.c, _.F, y.K, P.N, h.W, f.l, x.a, D.w, V.k, u.JJ, u.oH, T.V, M],
              changeDetection: 0,
            })),
            t
          );
        })(),
        me = (() => {
          class t {}
          return (
            (t.ɵfac = function (r) {
              return new (r || t)();
            }),
            (t.ɵmod = e.oAB({ type: t })),
            (t.ɵinj = e.cJS({
              imports: [d.ez, l.Qp, u.u5, u.UX, i.m98, i.aqZ, s.Bz.forChild((0, l.GB)(ae))],
            })),
            t
          );
        })();
    },
    57679: (C, c, o) => {
      o.d(c, { k: () => s });
      var d = o(65879),
        l = o(45773);
      let s = (() => {
        class i {
          constructor(e) {
            (this.hostElementService = e), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const e = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              g = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const _ in e) this.hostElementService.setHostElement(e[_], g[_]);
          }
        }
        return (
          (i.ɵfac = function (e) {
            return new (e || i)(d.Y36(l.R));
          }),
          (i.ɵdir = d.lG2({
            type: i,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          i
        );
      })();
    },
    56586: (C, c, o) => {
      o.d(c, { w: () => s });
      var d = o(45773),
        l = o(65879);
      let s = (() => {
        class i {}
        return (
          (i.ɵfac = function (e) {
            return new (e || i)();
          }),
          (i.ɵdir = l.lG2({ type: i, selectors: [['', 'prizmDocHost', '']], features: [l._Bn([d.R])] })),
          i
        );
      })();
    },
  },
]);
