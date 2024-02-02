'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42552],
  {
    42552: (f, c, o) => {
      o.r(c), o.d(c, { InputLayoutTimeTimeModule: () => w });
      var s = o(96814),
        l = o(21004),
        d = o(75187),
        u = o(70169),
        p = o(60095),
        t = o(65879),
        h = o(8221),
        T = o(30990),
        g = o(83419),
        C = o(78905),
        x = o(63796),
        z = o(75987),
        _ = o(43015),
        M = o(56586),
        I = o(57679),
        y = o(54311),
        P = o(76153);
      let V = (() => {
          class e {
            constructor() {
              (this.time = new u.ms_(12, 30)), (this.value = new p.p4(this.time));
            }
          }
          return (
            (e.ɵfac = function (m) {
              return new (m || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-time-base-example']],
              decls: 2,
              vars: 1,
              consts: [
                ['label', '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f'],
                [3, 'ngModel'],
              ],
              template: function (m, i) {
                1 & m && (t.TgZ(0, 'prizm-input-layout', 0), t._UZ(1, 'prizm-input-layout-time', 1), t.qZA()),
                  2 & m && (t.xp6(1), t.Q6J('ngModel', i.time));
              },
              dependencies: [p.JJ, p.On, y.p, P.C],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            e
          );
        })(),
        L = (() => {
          class e {
            constructor() {
              this.value = new p.p4(new u.ms_(12, 30, 25));
            }
          }
          return (
            (e.ɵfac = function (m) {
              return new (m || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-time-with-seconds-example']],
              decls: 2,
              vars: 1,
              consts: [
                ['label', '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f'],
                ['mode', 'HH:MM:SS', 3, 'formControl'],
              ],
              template: function (m, i) {
                1 & m && (t.TgZ(0, 'prizm-input-layout', 0), t._UZ(1, 'prizm-input-layout-time', 1), t.qZA()),
                  2 & m && (t.xp6(1), t.Q6J('formControl', i.value));
              },
              dependencies: [p.JJ, p.oH, y.p, P.C],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            e
          );
        })(),
        H = (() => {
          class e {
            constructor() {
              (this.value = new p.p4(new u.ms_(12, 30, 25, 500))),
                (this.items = new Array(48)
                  .fill(null)
                  .map((m, i) => new u.ms_(Math.floor(i / 2), i % 2 == 0 ? 0 : 30, 0, 0)));
            }
          }
          return (
            (e.ɵfac = function (m) {
              return new (m || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-time-with-preset-example']],
              decls: 2,
              vars: 2,
              consts: [
                ['label', '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f'],
                ['mode', 'HH:MM', 3, 'formControl', 'items'],
              ],
              template: function (m, i) {
                1 & m && (t.TgZ(0, 'prizm-input-layout', 0), t._UZ(1, 'prizm-input-layout-time', 1), t.qZA()),
                  2 & m && (t.xp6(1), t.Q6J('formControl', i.value)('items', i.items));
              },
              dependencies: [p.JJ, p.oH, y.p, P.C],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            e
          );
        })(),
        E = (() => {
          class e {
            constructor() {
              this.value = new p.p4(new u.ms_(12, 30, 25, 500));
            }
          }
          return (
            (e.ɵfac = function (m) {
              return new (m || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-time-with-ms-example']],
              decls: 2,
              vars: 1,
              consts: [
                ['label', '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0440\u0435\u043c\u044f'],
                ['mode', 'HH:MM:SS.MSS', 3, 'formControl'],
              ],
              template: function (m, i) {
                1 & m && (t.TgZ(0, 'prizm-input-layout', 0), t._UZ(1, 'prizm-input-layout-time', 1), t.qZA()),
                  2 & m && (t.xp6(1), t.Q6J('formControl', i.value));
              },
              dependencies: [p.JJ, p.oH, y.p, P.C],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            e
          );
        })();
      function v(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 3),
            t._UZ(1, 'prizm-input-layout-time-base-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 4),
            t._UZ(3, 'prizm-input-layout-time-with-seconds-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 5),
            t._UZ(5, 'prizm-input-layout-time-with-ms-example'),
            t.qZA(),
            t.TgZ(6, 'prizm-doc-example', 6),
            t._UZ(7, 'prizm-input-layout-time-with-preset-example'),
            t.qZA()),
          2 & e)
        ) {
          const m = t.oxw();
          t.Q6J('content', m.exampleBase),
            t.xp6(2),
            t.Q6J('content', m.exampleWithSeconds),
            t.xp6(2),
            t.Q6J('content', m.exampleWithMicroSeconds),
            t.xp6(2),
            t.Q6J('content', m.exampleWithPreset);
        }
      }
      function D(e, a) {
        1 & e && t._uU(0, ' Placeholder ');
      }
      function N(e, a) {
        1 & e &&
          (t._uU(0, ' Strict '), t._UZ(1, 'br'), t._uU(2, ' (Correct time to nearest from items array) '));
      }
      function J(e, a) {
        1 & e && t._uU(0, ' Mode ');
      }
      function S(e, a) {
        1 & e && t._uU(0, ' Items ');
      }
      function Z(e, a) {
        1 & e && t._uU(0, ' Disabled Item Handler ');
      }
      function K(e, a) {
        1 & e && t._uU(0, ' Items Size ');
      }
      function U(e, a) {
        1 & e && t._uU(0, ' Injector for nested buttons (use in multi datepicker and similar case) ');
      }
      function A(e, a) {
        1 & e && t._uU(0, ' Show clear button ');
      }
      function W(e, a) {
        1 & e && t._uU(0, ' Clear Button (icon or template) ');
      }
      function Q(e, a) {
        1 & e && t._uU(0, ' Outer ');
      }
      function B(e, a) {
        1 & e && t._uU(0, ' Size ');
      }
      function Y(e, a) {
        1 & e && t._uU(0, ' Label ');
      }
      function O(e, a) {
        1 & e && t._uU(0, ' Clear ');
      }
      function F(e, a) {
        1 & e && t._uU(0, ' Border ');
      }
      function G(e, a) {
        1 & e && t._uU(0, ' Status ');
      }
      function b(e, a) {
        1 & e && t._uU(0, ' Position ');
      }
      function R(e, a) {
        if (1 & e) {
          const m = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'prizm-input-layout', 7, 8),
            t._UZ(3, 'prizm-input-layout-time', 9, 10),
            t.qZA()(),
            t.TgZ(5, 'prizm-doc-documentation', 11),
            t.YNc(6, D, 1, 0, 'ng-template', 12),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.placeholder = n));
            }),
            t.YNc(7, N, 3, 0, 'ng-template', 13),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.strict = n));
            }),
            t.YNc(8, J, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.timeMode = n));
            }),
            t.YNc(9, S, 1, 0, 'ng-template', 15),
            t.YNc(10, Z, 1, 0, 'ng-template', 16),
            t.YNc(11, K, 1, 0, 'ng-template', 17),
            t.YNc(12, U, 1, 0, 'ng-template', 18),
            t.qZA(),
            t.TgZ(13, 'prizm-doc-documentation', 19),
            t.YNc(14, A, 1, 0, 'ng-template', 20),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.forceClear = n));
            }),
            t.YNc(15, W, 1, 0, 'ng-template', 21),
            t.YNc(16, Q, 1, 0, 'ng-template', 22),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.outer = n));
            }),
            t.YNc(17, B, 1, 0, 'ng-template', 23),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.size = n));
            }),
            t.YNc(18, Y, 1, 0, 'ng-template', 24),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.label = n));
            }),
            t.YNc(19, O, 1, 0, 'ng-template', 25),
            t.YNc(20, F, 1, 0, 'ng-template', 26),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.border = n));
            }),
            t.YNc(21, G, 1, 0, 'ng-template', 27),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.status = n));
            }),
            t.YNc(22, b, 1, 0, 'ng-template', 28),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(m);
              const r = t.oxw();
              return t.KtG((r.inputPosition = n));
            }),
            t.qZA();
        }
        if (2 & e) {
          const m = t.MAs(2),
            i = t.MAs(4),
            n = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', m)('prizmDocHostElementKey', n.layoutKey)('size', n.size)(
              'label',
              n.label
            )('outer', n.outer)('border', n.border)('position', n.inputPosition)('status', n.status)(
              'forceClear',
              n.forceClear
            ),
            t.xp6(2),
            t.Q6J('prizmDocHostElement', i)('prizmDocHostElementKey', n.componentKey)(
              'formControl',
              n.valueControl
            )('placeholder', n.placeholder)('mode', n.timeMode)('strict', n.strict),
            t.xp6(2),
            t.Q6J('heading', n.componentKey)('hasTestId', !0)('hostComponentKey', n.componentKey)(
              'control',
              n.valueControl
            ),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.placeholder),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.strict),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.timeMode)(
              'documentationPropertyValues',
              n.timeModeVariants
            ),
            t.xp6(5),
            t.Q6J('heading', n.layoutKey)('hostComponentKey', n.layoutKey),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.forceClear)(
              'documentationPropertyValues',
              n.forceClearVariants
            ),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.outer),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.size)('documentationPropertyValues', n.sizeVariants),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.label),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.border),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.status)('documentationPropertyValues', n.statuses),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.inputPosition)(
              'documentationPropertyValues',
              n.inputPositionVariants
            );
        }
      }
      function X(e, a) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 29)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmInputLayoutTimeModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 30),
            t.qZA()()),
          2 & e)
        ) {
          const m = t.oxw();
          t.xp6(7), t.Q6J('code', m.setupModule);
        }
      }
      let j = (() => {
          class e {
            constructor() {
              (this.layoutKey = 'PrizmInputLayoutComponent'),
                (this.componentKey = 'PrizmInputLayoutTimeComponent'),
                (this.border = !1),
                (this.inputPosition = 'left'),
                (this.inputPositionVariants = ['left', 'center']),
                (this.status = 'default'),
                (this.statuses = ['default', 'success', 'warning', 'danger']),
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
                (this.valueControl = new p.p4(new u.ms_(12, 30))),
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
                (this.setupModule = o.e(57157).then(o.t.bind(o, 57157, 17))),
                (this.exampleBase = {
                  TypeScript: o.e(58335).then(o.t.bind(o, 58335, 17)),
                  HTML: o.e(89722).then(o.t.bind(o, 89722, 17)),
                }),
                (this.exampleWithSeconds = {
                  TypeScript: o.e(1393).then(o.t.bind(o, 1393, 17)),
                  HTML: o.e(13642).then(o.t.bind(o, 13642, 17)),
                }),
                (this.exampleWithMicroSeconds = {
                  TypeScript: o.e(26173).then(o.t.bind(o, 26173, 17)),
                  HTML: o.e(98154).then(o.t.bind(o, 98154, 17)),
                }),
                (this.exampleWithPreset = {
                  TypeScript: o.e(85156).then(o.t.bind(o, 85156, 17)),
                  HTML: o.e(78078).then(o.t.bind(o, 78078, 17)),
                });
            }
          }
          return (
            (e.ɵfac = function (m) {
              return new (m || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-date-example']],
              decls: 4,
              vars: 0,
              consts: [
                ['header', 'InputLayoutTime'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Base', 3, 'content'],
                ['id', 'base', 'heading', 'With Seconds', 3, 'content'],
                ['id', 'base', 'heading', 'With Micro Seconds', 3, 'content'],
                ['id', 'base', 'heading', 'With Preset', 3, 'content'],
                [
                  3,
                  'prizmDocHostElement',
                  'prizmDocHostElementKey',
                  'size',
                  'label',
                  'outer',
                  'border',
                  'position',
                  'status',
                  'forceClear',
                ],
                ['inputElement', ''],
                [
                  3,
                  'prizmDocHostElement',
                  'prizmDocHostElementKey',
                  'formControl',
                  'placeholder',
                  'mode',
                  'strict',
                ],
                ['element', ''],
                [3, 'heading', 'hasTestId', 'hostComponentKey', 'control'],
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
                [3, 'heading', 'hostComponentKey'],
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
                  'clear',
                  'documentationPropertyType',
                  'MouseEvent',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'border',
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
                  'status',
                  'documentationPropertyType',
                  'PrizmInputStatus',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'position',
                  'documentationPropertyType',
                  'PrizmInputPosition',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [1, 'b-demo-steps'],
                ['filename', 'custom.module.ts', 3, 'code'],
              ],
              template: function (m, i) {
                1 & m &&
                  (t.TgZ(0, 'prizm-doc-page', 0),
                  t.YNc(1, v, 8, 4, 'ng-template', 1),
                  t.YNc(2, R, 23, 36, 'ng-template', 2),
                  t.YNc(3, X, 8, 1, 'ng-template', 1),
                  t.qZA());
              },
              dependencies: [h.c, T.F, g.K, C.N, x.W, z.l, _.a, M.w, I.k, p.JJ, p.oH, y.p, P.C, V, L, H, E],
              changeDetection: 0,
            })),
            e
          );
        })(),
        w = (() => {
          class e {}
          return (
            (e.ɵfac = function (m) {
              return new (m || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({
              imports: [s.ez, l.Qp, p.u5, p.UX, u.m98, u.ba2, d.Bz.forChild((0, l.GB)(j))],
            })),
            e
          );
        })();
    },
    57679: (f, c, o) => {
      o.d(c, { k: () => d });
      var s = o(65879),
        l = o(45773);
      let d = (() => {
        class u {
          constructor(t) {
            (this.hostElementService = t), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const t = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              h = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const T in t) this.hostElementService.setHostElement(t[T], h[T]);
          }
        }
        return (
          (u.ɵfac = function (t) {
            return new (t || u)(s.Y36(l.R));
          }),
          (u.ɵdir = s.lG2({
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
    56586: (f, c, o) => {
      o.d(c, { w: () => d });
      var s = o(45773),
        l = o(65879);
      let d = (() => {
        class u {}
        return (
          (u.ɵfac = function (t) {
            return new (t || u)();
          }),
          (u.ɵdir = l.lG2({ type: u, selectors: [['', 'prizmDocHost', '']], features: [l._Bn([s.R])] })),
          u
        );
      })();
    },
  },
]);
