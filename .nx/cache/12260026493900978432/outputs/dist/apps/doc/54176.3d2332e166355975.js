'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [54176],
  {
    54176: (h, c, o) => {
      o.r(c), o.d(c, { InputLayoutDateTimeRangeModule: () => et });
      var s = o(96814),
        l = o(21004),
        d = o(75187),
        m = o(70169),
        p = o(60095),
        t = o(65879),
        T = o(8221),
        y = o(30990),
        _ = o(83419),
        C = o(78905),
        f = o(63796),
        x = o(75987),
        D = o(43015),
        z = o(56586),
        M = o(57679),
        g = o(94592),
        P = o(76153);
      let I = (() => {
          class e {
            constructor() {
              this.formGroup = new p.cw({ period: new p.NI(this.toPrizmPeriod({ from: null, to: null })) });
            }
            toPrizmPeriod(a) {
              const r = new Date(),
                n = a.from ?? new Date(r.getFullYear() - 5, r.getMonth(), r.getDate()),
                u =
                  a.to ??
                  (a.from
                    ? new Date(a.from.getFullYear() + 5, a.from.getMonth(), a.from.getDate())
                    : new Date(r.getFullYear() + 5, r.getMonth(), r.getDate())),
                nt = new m.CFx(n.getFullYear(), n.getMonth(), n.getDate()),
                ot = new m.CFx(u.getFullYear(), u.getMonth(), u.getDate()),
                at = new m.iYT(nt, ot),
                mt = new m.ms_(n.getHours(), n.getMinutes()),
                it = new m.ms_(u.getHours(), u.getMinutes()),
                rt = new m.YHj(mt, it);
              return new m.hPy(at, rt);
            }
          }
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-date-time-range-form-group-example']],
              decls: 7,
              vars: 2,
              consts: [
                [3, 'formGroup'],
                [
                  'label',
                  '\u041f\u0435\u0440\u0438\u043e\u0434 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0440\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u044f',
                ],
                ['size', 'l', 'formControlName', 'period'],
              ],
              template: function (a, r) {
                if (
                  (1 & a &&
                    (t.TgZ(0, 'div', 0)(1, 'prizm-input-layout', 1),
                    t._UZ(2, 'prizm-input-layout-date-time-range', 2),
                    t.qZA()(),
                    t.TgZ(3, 'h3'),
                    t._uU(4, ' Value: '),
                    t.TgZ(5, 'b'),
                    t._uU(6),
                    t.qZA()()),
                  2 & a)
                ) {
                  let n;
                  t.Q6J('formGroup', r.formGroup),
                    t.xp6(6),
                    t.Oqu(null == (n = r.formGroup.get('period')) ? null : n.value);
                }
              },
              dependencies: [p.JJ, p.JL, p.sg, p.u, g.E, P.C],
              styles: [
                '[_nghost-%COMP%]{--prizm-input-layout-width: 23rem}.box[_ngcontent-%COMP%]{display:flex;gap:1rem}',
              ],
            })),
            e
          );
        })(),
        L = (() => {
          class e {
            constructor() {
              this.value = new p.NI(new m.hPy(new m.iYT(new m.CFx(2018, 2, 10), new m.CFx(2018, 2, 10))));
            }
          }
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-date-time-range-base-example']],
              decls: 6,
              vars: 2,
              consts: [
                [
                  'label',
                  '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0438\u043e\u0434',
                ],
                [3, 'formControl'],
              ],
              template: function (a, r) {
                1 & a &&
                  (t.TgZ(0, 'prizm-input-layout', 0),
                  t._UZ(1, 'prizm-input-layout-date-time-range', 1),
                  t.qZA(),
                  t.TgZ(2, 'h3'),
                  t._uU(3, ' Value: '),
                  t.TgZ(4, 'b'),
                  t._uU(5),
                  t.qZA()()),
                  2 & a && (t.xp6(1), t.Q6J('formControl', r.value), t.xp6(4), t.Oqu(r.value.value));
              },
              dependencies: [p.JJ, p.oH, g.E, P.C],
              styles: [
                '[_nghost-%COMP%]{--prizm-input-layout-width: 23rem}.box[_ngcontent-%COMP%]{display:flex;gap:1rem}',
              ],
            })),
            e
          );
        })(),
        V = (() => {
          class e {
            constructor() {
              (this.value = new p.p4(
                new m.hPy(
                  new m.iYT(new m.CFx(2018, 2, 10), new m.CFx(2018, 3, 20)),
                  new m.YHj(new m.ms_(9, 0), new m.ms_(18, 0))
                )
              )),
                (this.min = new m.CFx(2e3, 2, 20)),
                (this.max = new m.CFx(2e3, 2, 20));
            }
            ngOnInit() {
              this.value.disable();
            }
          }
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-date-time-range-disabled-example']],
              decls: 2,
              vars: 3,
              consts: [
                [
                  'label',
                  '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0438\u043e\u0434',
                ],
                [3, 'formControl', 'min', 'max'],
              ],
              template: function (a, r) {
                1 & a &&
                  (t.TgZ(0, 'prizm-input-layout', 0),
                  t._UZ(1, 'prizm-input-layout-date-time-range', 1),
                  t.qZA()),
                  2 & a && (t.xp6(1), t.Q6J('formControl', r.value)('min', r.min)('max', r.max));
              },
              dependencies: [p.JJ, p.oH, g.E, P.C],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            e
          );
        })();
      function R(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 3),
            t._UZ(1, 'prizm-input-layout-date-time-range-base-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 4),
            t._UZ(3, 'prizm-input-layout-date-time-range-form-group-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 5),
            t._UZ(5, 'prizm-input-layout-date-time-range-disabled-example'),
            t.qZA()),
          2 & e)
        ) {
          const a = t.oxw();
          t.Q6J('content', a.exampleBase),
            t.xp6(2),
            t.Q6J('content', a.exampleFormGroup),
            t.xp6(2),
            t.Q6J('content', a.exampleDisabled);
        }
      }
      function H(e, i) {
        1 & e && t._uU(0, ' Placeholder ');
      }
      function E(e, i) {
        1 & e && t._uU(0, ' Time preset for dropdown ');
      }
      function N(e, i) {
        1 & e && t._uU(0, ' Min Date ');
      }
      function v(e, i) {
        1 & e && t._uU(0, ' Injector for nested buttons (use in multi datepicker and similar case) ');
      }
      function U(e, i) {
        1 & e && t._uU(0, ' Max Date ');
      }
      function J(e, i) {
        1 & e && t._uU(0, ' Disabled Item Handler ');
      }
      function Z(e, i) {
        1 & e &&
          (t._uU(0, ' Time Strict '),
          t._UZ(1, 'br'),
          t._uU(2, ' (Correct time to nearest from items array) '));
      }
      function F(e, i) {
        1 & e && t._uU(0, ' Items preset for dropdown ');
      }
      function K(e, i) {
        1 & e && t._uU(0, ' Max Length ');
      }
      function Y(e, i) {
        1 & e && t._uU(0, ' Min Length ');
      }
      function w(e, i) {
        1 & e && t._uU(0, ' Marker Handler ');
      }
      function A(e, i) {
        1 & e && t._uU(0, ' Default Viewed Month ');
      }
      function G(e, i) {
        1 & e && t._uU(0, ' Time Mode ');
      }
      function B(e, i) {
        1 & e && t._uU(0, ' Show clear button ');
      }
      function S(e, i) {
        1 & e && t._uU(0, ' Clear Button (icon or template) ');
      }
      function Q(e, i) {
        1 & e && t._uU(0, ' Outer ');
      }
      function O(e, i) {
        1 & e && t._uU(0, ' Size ');
      }
      function b(e, i) {
        1 & e && t._uU(0, ' Label ');
      }
      function j(e, i) {
        1 & e && t._uU(0, ' Clear ');
      }
      function X(e, i) {
        1 & e && t._uU(0, ' Border ');
      }
      function W(e, i) {
        1 & e && t._uU(0, ' Status ');
      }
      function $(e, i) {
        1 & e && t._uU(0, ' Position ');
      }
      function q(e, i) {
        if (1 & e) {
          const a = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'prizm-input-layout', 6, 7),
            t._UZ(3, 'prizm-input-layout-date-time-range', 8, 9),
            t.qZA()(),
            t.TgZ(5, 'prizm-doc-documentation', 10),
            t.YNc(6, H, 1, 0, 'ng-template', 11),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.placeholder = n));
            }),
            t.YNc(7, E, 1, 0, 'ng-template', 12),
            t.YNc(8, N, 1, 0, 'ng-template', 13),
            t.YNc(9, v, 1, 0, 'ng-template', 14),
            t.YNc(10, U, 1, 0, 'ng-template', 15),
            t.YNc(11, J, 1, 0, 'ng-template', 16),
            t.YNc(12, Z, 3, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.timeStrict = n));
            }),
            t.YNc(13, F, 1, 0, 'ng-template', 18),
            t.YNc(14, K, 1, 0, 'ng-template', 19),
            t.YNc(15, Y, 1, 0, 'ng-template', 20),
            t.YNc(16, w, 1, 0, 'ng-template', 21),
            t.YNc(17, A, 1, 0, 'ng-template', 22),
            t.YNc(18, G, 1, 0, 'ng-template', 23),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.timeMode = n));
            }),
            t.qZA(),
            t.TgZ(19, 'prizm-doc-documentation', 24),
            t.YNc(20, B, 1, 0, 'ng-template', 25),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.forceClear = n));
            }),
            t.YNc(21, S, 1, 0, 'ng-template', 26),
            t.YNc(22, Q, 1, 0, 'ng-template', 27),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.outer = n));
            }),
            t.YNc(23, O, 1, 0, 'ng-template', 28),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.size = n));
            }),
            t.YNc(24, b, 1, 0, 'ng-template', 29),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.label = n));
            }),
            t.YNc(25, j, 1, 0, 'ng-template', 30),
            t.YNc(26, X, 1, 0, 'ng-template', 31),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.border = n));
            }),
            t.YNc(27, W, 1, 0, 'ng-template', 32),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.status = n));
            }),
            t.YNc(28, $, 1, 0, 'ng-template', 33),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(a);
              const u = t.oxw();
              return t.KtG((u.inputPosition = n));
            }),
            t.qZA();
        }
        if (2 & e) {
          const a = t.MAs(2),
            r = t.MAs(4),
            n = t.oxw();
          t.xp6(1),
            t.Q6J('prizmDocHostElement', a)('prizmDocHostElementKey', n.layoutKey)('size', n.size)(
              'label',
              n.label
            )('outer', n.outer)('border', n.border)('position', n.inputPosition)('status', n.status)(
              'forceClear',
              n.forceClear
            ),
            t.xp6(2),
            t.Q6J('prizmDocHostElement', r)('prizmDocHostElementKey', n.controlKey)('formControl', n.value)(
              'min',
              n.min
            )('timeMode', n.timeMode)('placeholder', n.placeholder)('max', n.max),
            t.xp6(2),
            t.Q6J('hasTestId', !0)('hostComponentKey', n.controlKey)('heading', n.controlKey)(
              'control',
              n.value
            ),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.placeholder),
            t.xp6(6),
            t.Q6J('documentationPropertyValue', n.timeStrict),
            t.xp6(6),
            t.Q6J('documentationPropertyValue', n.timeMode)(
              'documentationPropertyValues',
              n.timeModeVariants
            ),
            t.xp6(1),
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
      function k(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 34)(1, 'li')(2, 'p'),
            t._uU(3, ' Import '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmInputLayoutDateTimeRangeModule'),
            t.qZA(),
            t._uU(6, ' into a module where you want to use our component '),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 35),
            t.qZA()()),
          2 & e)
        ) {
          const a = t.oxw();
          t.xp6(7), t.Q6J('code', a.setupModule);
        }
      }
      let tt = (() => {
          class e {
            constructor() {
              (this.border = !1),
                (this.inputPosition = 'left'),
                (this.inputPositionVariants = ['left', 'center']),
                (this.status = 'default'),
                (this.statuses = ['default', 'success', 'warning', 'danger']),
                (this.layoutKey = 'PrizmInputLayoutComponent'),
                (this.controlKey = 'PrizmInputLayoutDateTimeRangeComponent'),
                (this.pseudoHovered = !1),
                (this.label = '\u041f\u0435\u0440\u0438\u043e\u0434'),
                (this.value = new p.p4(new m.hPy(new m.iYT(new m.CFx(2018, 2, 10), new m.CFx(2018, 2, 10))))),
                (this.min = new m.jmb(new m.CFx(2e3, 2, 20), new m.ms_(0, 0))),
                (this.max = new m.jmb(new m.CFx(2040, 2, 20), new m.ms_(0, 0))),
                (this.placeholder =
                  '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0438\u043e\u0434'),
                (this.sizeVariants = ['l', 'm', 's']),
                (this.size = 'm'),
                (this.outer = !1),
                (this.forceClear = null),
                (this.forceClearVariants = [null, !1, !0]),
                (this.timeStrict = !1),
                (this.timeModeVariants = ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS']),
                (this.timeMode = 'HH:MM'),
                (this.focusVisibleChange = !1),
                (this.setupModule = o.e(72962).then(o.t.bind(o, 72962, 17))),
                (this.exampleBase = {
                  TypeScript: o.e(34471).then(o.t.bind(o, 34471, 17)),
                  HTML: o.e(70205).then(o.t.bind(o, 70205, 17)),
                }),
                (this.exampleFormGroup = {
                  TypeScript: o.e(63125).then(o.t.bind(o, 63125, 17)),
                  HTML: o.e(60194).then(o.t.bind(o, 60194, 17)),
                }),
                (this.exampleDisabled = {
                  TypeScript: o.e(61563).then(o.t.bind(o, 61563, 17)),
                  HTML: o.e(51135).then(o.t.bind(o, 51135, 17)),
                }),
                (this.exampleNativeDate = {
                  TypeScript: o.e(35061).then(o.t.bind(o, 35061, 17)),
                  HTML: o.e(56607).then(o.t.bind(o, 56607, 17)),
                });
            }
          }
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-layout-date-time-range-example']],
              decls: 4,
              vars: 0,
              consts: [
                ['header', 'InputLayoutDateTimeRange'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'base', 'heading', 'Base', 3, 'content'],
                ['id', 'form-group', 'heading', 'Form Group', 3, 'content'],
                ['id', 'disabled', 'heading', 'Disabled', 3, 'content'],
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
                  'min',
                  'timeMode',
                  'placeholder',
                  'max',
                ],
                ['element', ''],
                [3, 'hasTestId', 'hostComponentKey', 'heading', 'control'],
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
                  'PrizmDateTimeMinMax',
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
                  'max',
                  'documentationPropertyType',
                  'PrizmDateTimeMinMax',
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
              template: function (a, r) {
                1 & a &&
                  (t.TgZ(0, 'prizm-doc-page', 0),
                  t.YNc(1, R, 6, 3, 'ng-template', 1),
                  t.YNc(2, q, 29, 37, 'ng-template', 2),
                  t.YNc(3, k, 8, 1, 'ng-template', 1),
                  t.qZA());
              },
              dependencies: [T.c, y.F, _.K, C.N, f.W, x.l, D.a, z.w, M.k, p.JJ, p.oH, g.E, P.C, I, L, V],
              styles: ['[_nghost-%COMP%]{--prizm-input-layout-width: 23rem}'],
              changeDetection: 0,
            })),
            e
          );
        })(),
        et = (() => {
          class e {}
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({
              imports: [s.ez, l.Qp, p.u5, p.UX, m.m98, m.XbE, d.Bz.forChild((0, l.GB)(tt))],
            })),
            e
          );
        })();
    },
    57679: (h, c, o) => {
      o.d(c, { k: () => d });
      var s = o(65879),
        l = o(45773);
      let d = (() => {
        class m {
          constructor(t) {
            (this.hostElementService = t), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const t = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              T = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const y in t) this.hostElementService.setHostElement(t[y], T[y]);
          }
        }
        return (
          (m.ɵfac = function (t) {
            return new (t || m)(s.Y36(l.R));
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
    56586: (h, c, o) => {
      o.d(c, { w: () => d });
      var s = o(45773),
        l = o(65879);
      let d = (() => {
        class m {}
        return (
          (m.ɵfac = function (t) {
            return new (t || m)();
          }),
          (m.ɵdir = l.lG2({ type: m, selectors: [['', 'prizmDocHost', '']], features: [l._Bn([s.R])] })),
          m
        );
      })();
    },
  },
]);
