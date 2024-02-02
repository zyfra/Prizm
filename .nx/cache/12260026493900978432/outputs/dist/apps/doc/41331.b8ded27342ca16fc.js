'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [41331],
  {
    41331: (z, d, o) => {
      o.r(d), o.d(d, { InputNumberExampleModule: () => st });
      var c = o(96814),
        r = o(60095),
        y = o(75187),
        l = o(21004),
        s = o(70169),
        t = o(65879),
        _ = o(8221),
        g = o(30990),
        b = o(83419),
        N = o(78905),
        T = o(63796),
        V = o(75987),
        v = o(43015),
        H = o(56586),
        D = o(57679),
        h = o(48261),
        J = o(92464),
        C = o(76153),
        P = o(42227),
        I = o(18218),
        x = o(93190),
        f = o(5364);
      function M(e, p) {}
      let A = (() => {
          class e {
            constructor() {
              this.form = new r.cw({ number: new r.NI(null) });
            }
          }
          return (
            (e.ɵfac = function (u) {
              return new (u || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-number-invalid-example']],
              decls: 8,
              vars: 8,
              consts: [
                [3, 'formGroup'],
                [
                  'label',
                  '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                  'size',
                  'l',
                  'status',
                  'default',
                ],
                [
                  'formControlName',
                  'number',
                  'type',
                  'number',
                  'prizmInput',
                  '',
                  'placeholder',
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e',
                  3,
                  'step',
                ],
                ['inputText', '', 'inputNumber', 'prizmInputNumber'],
                ['prizmInputStatusText', '', 3, 'control'],
                ['prizm-input-right', '', 3, 'inputNumber'],
              ],
              template: function (u, m) {
                if (
                  (1 & u &&
                    (t.TgZ(0, 'form', 0)(1, 'prizm-input-layout', 1),
                    t._UZ(2, 'input', 2, 3),
                    t.YNc(5, M, 0, 0, 'ng-template', 4),
                    t._UZ(6, 'prizm-input-number-auxiliary-controls', 5),
                    t.qZA()(),
                    t._uU(7)),
                  2 & u)
                ) {
                  const i = t.MAs(3),
                    a = t.MAs(4);
                  t.Q6J('formGroup', m.form),
                    t.xp6(2),
                    t.Q6J('step', 2),
                    t.xp6(3),
                    t.Q6J('control', i),
                    t.xp6(1),
                    t.Q6J('inputNumber', a),
                    t.xp6(1),
                    t.HOy(
                      ' Touched ',
                      m.form.touched,
                      ' Pristine ',
                      m.form.pristine,
                      ' Invalid ',
                      m.form.invalid,
                      ' Valid ',
                      m.form.valid,
                      '\n'
                    );
                }
              },
              dependencies: [r._Y, r.Fj, r.wV, r.JJ, r.JL, r.sg, r.u, C.C, I.A, x.$, f.i],
              changeDetection: 0,
            })),
            e
          );
        })(),
        Z = (() => {
          class e {
            constructor() {
              this.requiredInputControl = new r.p4(2.555, r.kI.required);
            }
          }
          return (
            (e.ɵfac = function (u) {
              return new (u || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-number-counter-float-example']],
              decls: 5,
              vars: 12,
              consts: [
                [
                  'label',
                  '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                  'size',
                  'l',
                  'status',
                  'default',
                  3,
                  'position',
                ],
                [
                  'prizmInputIconButton',
                  'delete-minus',
                  'prizmInputNumberAuxiliaryControl',
                  'decrement',
                  'prizm-input-left',
                  '',
                  3,
                  'inputNumber',
                  'disabled',
                  'interactive',
                ],
                [
                  'type',
                  'number',
                  'prizmInput',
                  '',
                  'placeholder',
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e',
                  3,
                  'min',
                  'max',
                  'precision',
                  'formControl',
                  'step',
                ],
                ['inputNumber', 'prizmInputNumber'],
                [
                  'prizmInputIconButton',
                  'add-plus',
                  'prizmInputNumberAuxiliaryControl',
                  'increment',
                  'prizm-input-right',
                  '',
                  3,
                  'inputNumber',
                  'disabled',
                  'interactive',
                ],
              ],
              template: function (u, m) {
                if (
                  (1 & u &&
                    (t.TgZ(0, 'prizm-input-layout', 0),
                    t._UZ(1, 'button', 1)(2, 'input', 2, 3)(4, 'button', 4),
                    t.qZA()),
                  2 & u)
                ) {
                  const i = t.MAs(3);
                  t.Q6J('position', 'center'),
                    t.xp6(1),
                    t.Q6J('inputNumber', i)('disabled', m.requiredInputControl.disabled)(
                      'interactive',
                      !m.requiredInputControl.disabled
                    ),
                    t.xp6(1),
                    t.Q6J('min', 0)('max', 10)('precision', 2)('formControl', m.requiredInputControl)(
                      'step',
                      0.1
                    ),
                    t.xp6(2),
                    t.Q6J('inputNumber', i)('disabled', m.requiredInputControl.disabled)(
                      'interactive',
                      !m.requiredInputControl.disabled
                    );
                }
              },
              dependencies: [r.Fj, r.wV, r.JJ, r.qQ, r.Fd, r.oH, h.f, C.C, P.f, x.$],
              changeDetection: 0,
            })),
            e
          );
        })();
      function Q(e, p) {}
      let U = (() => {
          class e {
            constructor() {
              this.requiredInputControl = new r.p4(2, r.kI.required);
            }
          }
          return (
            (e.ɵfac = function (u) {
              return new (u || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-number-basic-example']],
              decls: 5,
              vars: 4,
              consts: [
                [
                  'label',
                  '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                  'size',
                  'l',
                  'status',
                  'default',
                ],
                [
                  'type',
                  'number',
                  'prizmInput',
                  '',
                  'placeholder',
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e',
                  3,
                  'step',
                  'formControl',
                ],
                ['inputNumber', 'prizmInputNumber'],
                ['prizmInputStatusText', '', 3, 'control'],
                ['prizm-input-right', '', 3, 'inputNumber'],
              ],
              template: function (u, m) {
                if (
                  (1 & u &&
                    (t.TgZ(0, 'prizm-input-layout', 0),
                    t._UZ(1, 'input', 1, 2),
                    t.YNc(3, Q, 0, 0, 'ng-template', 3),
                    t._UZ(4, 'prizm-input-number-auxiliary-controls', 4),
                    t.qZA()),
                  2 & u)
                ) {
                  const i = t.MAs(2);
                  t.xp6(1),
                    t.Q6J('step', 2)('formControl', m.requiredInputControl),
                    t.xp6(2),
                    t.Q6J('control', i),
                    t.xp6(1),
                    t.Q6J('inputNumber', i);
                }
              },
              dependencies: [r.Fj, r.wV, r.JJ, r.oH, C.C, I.A, x.$, f.i],
              changeDetection: 0,
            })),
            e
          );
        })(),
        K = (() => {
          class e {
            constructor() {
              this.requiredInputControl = new r.p4(2, r.kI.required);
            }
          }
          return (
            (e.ɵfac = function (u) {
              return new (u || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-number-counter-example']],
              decls: 5,
              vars: 11,
              consts: [
                [
                  'label',
                  '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                  'size',
                  'l',
                  'status',
                  'default',
                  3,
                  'position',
                ],
                [
                  'prizmInputIconButton',
                  'delete-minus',
                  'prizmInputNumberAuxiliaryControl',
                  'decrement',
                  'prizm-input-left',
                  '',
                  3,
                  'inputNumber',
                  'disabled',
                  'interactive',
                ],
                [
                  'type',
                  'number',
                  'prizmInput',
                  '',
                  'placeholder',
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e',
                  3,
                  'min',
                  'max',
                  'formControl',
                  'step',
                ],
                ['inputNumber', 'prizmInputNumber'],
                [
                  'prizmInputIconButton',
                  'add-plus',
                  'prizmInputNumberAuxiliaryControl',
                  'increment',
                  'prizm-input-right',
                  '',
                  3,
                  'inputNumber',
                  'disabled',
                  'interactive',
                ],
              ],
              template: function (u, m) {
                if (
                  (1 & u &&
                    (t.TgZ(0, 'prizm-input-layout', 0),
                    t._UZ(1, 'button', 1)(2, 'input', 2, 3)(4, 'button', 4),
                    t.qZA()),
                  2 & u)
                ) {
                  const i = t.MAs(3);
                  t.Q6J('position', 'center'),
                    t.xp6(1),
                    t.Q6J('inputNumber', i)('disabled', m.requiredInputControl.disabled)(
                      'interactive',
                      !m.requiredInputControl.disabled
                    ),
                    t.xp6(1),
                    t.Q6J('min', -10)('max', 10)('formControl', m.requiredInputControl)('step', 2),
                    t.xp6(2),
                    t.Q6J('inputNumber', i)('disabled', m.requiredInputControl.disabled)(
                      'interactive',
                      !m.requiredInputControl.disabled
                    );
                }
              },
              dependencies: [r.Fj, r.wV, r.JJ, r.qQ, r.Fd, r.oH, h.f, C.C, P.f, x.$],
              changeDetection: 0,
            })),
            e
          );
        })();
      function B(e, p) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 3),
            t._UZ(1, 'prizm-input-number-basic-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 4),
            t._UZ(3, 'prizm-input-number-counter-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 5),
            t._UZ(5, 'prizm-input-number-counter-float-example'),
            t.qZA(),
            t.TgZ(6, 'prizm-doc-example', 6),
            t._UZ(7, 'prizm-input-number-invalid-example'),
            t.qZA()),
          2 & e)
        ) {
          const u = t.oxw();
          t.Q6J('content', u.prizmInputNumberBasic),
            t.xp6(2),
            t.Q6J('content', u.prizmInputNumberCounter),
            t.xp6(2),
            t.Q6J('content', u.prizmInputNumberCounterFloat),
            t.xp6(2),
            t.Q6J('content', u.prizmInputNumberInvalid);
        }
      }
      function S(e, p) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      function Y(e, p) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      function F(e, p) {
        1 & e && t._uU(0, ' Hint Direction ');
      }
      function G(e, p) {
        1 & e && t._uU(0, ' Can Show ');
      }
      function O(e, p) {
        1 & e && t._uU(0, ' Placeholder ');
      }
      function L(e, p) {
        1 & e && t._uU(0, ' Minimum value ');
      }
      function j(e, p) {
        1 & e && t._uU(0, ' A number of digits after comma ( Infinity for an untouched decimal part) ');
      }
      function X(e, p) {
        1 & e && t._uU(0, ' Maximum value ');
      }
      function R(e, p) {
        1 & e && t._uU(0, ' Step ');
      }
      function $(e, p) {
        1 & e && t._uU(0, ' On Clear ');
      }
      function w(e, p) {
        1 & e && t._uU(0, ' inputNumber ');
      }
      function W(e, p) {
        1 & e && t._uU(0, ' inputNumber ');
      }
      function q(e, p) {
        1 & e && t._uU(0, ' prizmInputNumberAuxiliaryControl ');
      }
      function k(e, p) {
        1 & e && t._uU(0, ' Show clear button ');
      }
      function tt(e, p) {
        1 & e && t._uU(0, ' Clear Button (icon or template) ');
      }
      function et(e, p) {
        1 & e && t._uU(0, ' Outer ');
      }
      function nt(e, p) {
        1 & e && t._uU(0, ' Size ');
      }
      function ot(e, p) {
        1 & e && t._uU(0, ' Label ');
      }
      function ut(e, p) {
        1 & e && t._uU(0, ' Clear ');
      }
      function rt(e, p) {
        1 & e && t._uU(0, ' Border ');
      }
      function pt(e, p) {
        1 & e && t._uU(0, ' Status ');
      }
      function it(e, p) {
        1 & e && t._uU(0, ' Position ');
      }
      const mt = function () {
        return { display: 'flex', gap: '2rem', 'align-items': 'flex-end' };
      };
      function at(e, p) {
        if (1 & e) {
          const u = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'div', 7)(2, 'div')(3, 'h4'),
            t._uU(4, 'Number'),
            t.qZA(),
            t.TgZ(5, 'prizm-input-layout', 8),
            t._UZ(6, 'input', 9, 10)(9, 'prizm-input-number-auxiliary-controls', 11, 12),
            t.YNc(11, S, 1, 0, 'ng-template', 13),
            t.qZA()(),
            t.TgZ(12, 'div')(13, 'h4'),
            t._uU(14, 'Counter'),
            t.qZA(),
            t.TgZ(15, 'prizm-input-layout', 14, 15),
            t._UZ(17, 'button', 16)(18, 'input', 17, 18)(20, 'button', 19),
            t.YNc(21, Y, 1, 0, 'ng-template', 13),
            t.qZA()()()(),
            t.TgZ(22, 'prizm-doc-documentation', 20),
            t.YNc(23, F, 1, 0, 'ng-template', 21),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.prizmHintDirection = i));
            }),
            t.YNc(24, G, 1, 0, 'ng-template', 22),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.prizmHintCanShow = i));
            }),
            t.qZA(),
            t.TgZ(25, 'prizm-doc-documentation', 23),
            t.YNc(26, O, 1, 0, 'ng-template', 24),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.placeholder = i));
            }),
            t.YNc(27, L, 1, 0, 'ng-template', 25),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.min = i));
            }),
            t.YNc(28, j, 1, 0, 'ng-template', 26),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.precision = i));
            }),
            t.YNc(29, X, 1, 0, 'ng-template', 27),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.max = i));
            }),
            t.YNc(30, R, 1, 0, 'ng-template', 28),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.step = i));
            }),
            t.YNc(31, $, 1, 0, 'ng-template', 29),
            t.qZA(),
            t.TgZ(32, 'prizm-doc-documentation', 30),
            t.YNc(33, w, 1, 0, 'ng-template', 31),
            t.qZA(),
            t.TgZ(34, 'prizm-doc-documentation', 32),
            t.YNc(35, W, 1, 0, 'ng-template', 31),
            t.YNc(36, q, 1, 0, 'ng-template', 33),
            t.qZA(),
            t.TgZ(37, 'prizm-doc-documentation', 34),
            t.YNc(38, k, 1, 0, 'ng-template', 35),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.forceClear = i));
            }),
            t.YNc(39, tt, 1, 0, 'ng-template', 36),
            t.YNc(40, et, 1, 0, 'ng-template', 37),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.outer = i));
            }),
            t.YNc(41, nt, 1, 0, 'ng-template', 38),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.size = i));
            }),
            t.YNc(42, ot, 1, 0, 'ng-template', 39),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.label = i));
            }),
            t.YNc(43, ut, 1, 0, 'ng-template', 40),
            t.YNc(44, rt, 1, 0, 'ng-template', 41),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.border = i));
            }),
            t.YNc(45, pt, 1, 0, 'ng-template', 42),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.status = i));
            }),
            t.YNc(46, it, 1, 0, 'ng-template', 43),
            t.NdJ('documentationPropertyValueChange', function (i) {
              t.CHM(u);
              const a = t.oxw();
              return t.KtG((a.inputPosition = i));
            }),
            t.qZA();
        }
        if (2 & e) {
          const u = t.MAs(7),
            m = t.MAs(8),
            i = t.MAs(10),
            a = t.MAs(16),
            E = t.MAs(19),
            n = t.oxw();
          t.xp6(1),
            t.Q6J('ngStyle', t.DdM(74, mt)),
            t.xp6(4),
            t.Q6J('size', n.size)('label', n.label)('outer', n.outer)('border', n.border)(
              'position',
              n.inputPosition
            )('status', n.status)('forceClear', n.forceClear),
            t.xp6(1),
            t.Q6J('prizmDocHostElement', u)('formControl', n.requiredInputControl)('min', n.min)(
              'max',
              n.max
            )('step', n.step)('prizmHintDirection', n.prizmHintDirection)(
              'prizmHintCanShow',
              n.prizmHintCanShow
            )('value', n.value)('disabled', n.disabled)('placeholder', n.placeholder)('required', n.required)(
              'precision',
              n.precision
            ),
            t.xp6(3),
            t.Q6J('prizmDocHostElement', i)('inputNumber', m),
            t.xp6(6),
            t.Q6J('prizmDocHostElement', a)('prizmDocHostElementKey', n.layoutKey)('size', n.size)(
              'label',
              n.label
            )('outer', n.outer)('border', n.border)('position', n.inputPosition)('status', n.status)(
              'forceClear',
              n.forceClear
            ),
            t.xp6(2),
            t.Q6J('inputNumber', E)('disabled', n.requiredInputControl.disabled)(
              'interactive',
              !n.requiredInputControl.disabled
            ),
            t.xp6(1),
            t.Q6J('formControl', n.requiredInputControl)('min', n.min)('max', n.max)('step', n.step)(
              'precision',
              n.precision
            )('value', n.value)('placeholder', n.placeholder)('disabled', n.disabled)(
              'prizmHintDirection',
              n.prizmHintDirection
            )('prizmHintCanShow', n.prizmHintCanShow)('required', n.required),
            t.xp6(2),
            t.Q6J('inputNumber', E)('disabled', n.requiredInputControl.disabled)(
              'interactive',
              !n.requiredInputControl.disabled
            ),
            t.xp6(2),
            t.Q6J('hasTestId', !1),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmHintDirection)(
              'documentationPropertyValues',
              n.prizmHintDirectionVariants
            ),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.prizmHintCanShow),
            t.xp6(1),
            t.Q6J('hasTestId', !0)('control', n.requiredInputControl),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.placeholder),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.min),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.precision),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.max),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.step),
            t.xp6(2),
            t.Q6J('hasTestId', !1),
            t.xp6(2),
            t.Q6J('hasTestId', !1),
            t.xp6(3),
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
      function lt(e, p) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 44)(1, 'li')(2, 'p'),
            t._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmInputNumberModule'),
            t.qZA(),
            t._uU(
              6,
              ' \u0432 \u0442\u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 '
            ),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 45),
            t.qZA()()),
          2 & e)
        ) {
          const u = t.oxw();
          t.xp6(7), t.Q6J('code', u.setupModule);
        }
      }
      let ct = (() => {
          class e {
            constructor() {
              (this.layoutKey = 'PrizmInputLayoutComponent'),
                (this.readOnly = !1),
                (this.border = !0),
                (this.inputPosition = 'left'),
                (this.inputPositionVariants = ['left', 'center']),
                (this.outer = !1),
                (this.size = this.sizeVariants[0]),
                (this.forceClearVariants = [null, !1, !0]),
                (this.forceClear = this.forceClearVariants[0]),
                (this.emptyContent =
                  '\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e'),
                (this.nullContent = '\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e'),
                (this.minDropdownHeight = 0),
                (this.maxDropdownHeight = 342),
                (this.value = 1),
                (this.requiredInputControl = new r.p4('', r.kI.required)),
                (this.min = 0),
                (this.max = 10),
                (this.step = 2),
                (this.prizmHintCanShow = !0),
                (this.prizmHintDirection = s._eX.direction),
                (this.prizmHintDirectionVariants = Object.values(s._$_)),
                (this.label = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
                (this.placeholder = ''),
                (this.inputPositions = ['left', 'center']),
                (this.sizesOuter = ['l', 'm', 's']),
                (this.sizesInner = ['l', 'm']),
                (this.disabled = !1),
                (this.status = 'default'),
                (this.statuses = ['default', 'success', 'warning', 'danger']),
                (this.required = !1),
                (this.precision = 2),
                (this.decimalVariants = ['not-zero', 'always', 'never']),
                (this.decimal = 'not-zero'),
                (this.prizmInputNumberBasic = {
                  TypeScript: o.e(37565).then(o.t.bind(o, 37565, 17)),
                  HTML: o.e(68567).then(o.t.bind(o, 68567, 17)),
                }),
                (this.prizmInputNumberCounter = {
                  TypeScript: o.e(46196).then(o.t.bind(o, 46196, 17)),
                  HTML: o.e(22850).then(o.t.bind(o, 22850, 17)),
                }),
                (this.prizmInputNumberCounterFloat = {
                  TypeScript: o.e(82804).then(o.t.bind(o, 82804, 17)),
                  HTML: o.e(74610).then(o.t.bind(o, 74610, 17)),
                }),
                (this.prizmInputNumberInvalid = {
                  TypeScript: o.e(53931).then(o.t.bind(o, 53931, 17)),
                  HTML: o.e(69707).then(o.t.bind(o, 69707, 17)),
                }),
                (this.setupModule = o.e(43243).then(o.t.bind(o, 43243, 17)));
            }
            get sizeVariants() {
              return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
            }
          }
          return (
            (e.ɵfac = function (u) {
              return new (u || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-number-example']],
              decls: 4,
              vars: 0,
              consts: [
                ['header', 'Input number'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'number', 'heading', 'Input number basic example', 3, 'content'],
                ['id', 'counter', 'heading', 'Input number counter example', 3, 'content'],
                ['id', 'counter-float', 'heading', 'Input number counter float example', 3, 'content'],
                ['id', 'counter-invalid', 'heading', 'Form group', 3, 'content'],
                [3, 'ngStyle'],
                [3, 'size', 'label', 'outer', 'border', 'position', 'status', 'forceClear'],
                [
                  'prizmDocHostElementKey',
                  'PrizmInputNumberDirective',
                  'type',
                  'number',
                  'prizmInput',
                  '',
                  3,
                  'prizmDocHostElement',
                  'formControl',
                  'min',
                  'max',
                  'step',
                  'prizmHintDirection',
                  'prizmHintCanShow',
                  'value',
                  'disabled',
                  'placeholder',
                  'required',
                  'precision',
                ],
                ['prizmInputNumber', '', 'inputNumber', 'prizmInputNumber'],
                [
                  'prizmDocHostElementKey',
                  'PrizmInputNumberDefaultControlsComponent',
                  'prizm-input-right',
                  '',
                  3,
                  'prizmDocHostElement',
                  'inputNumber',
                ],
                ['PrizmInputNumberDefaultControlsComponent', ''],
                ['prizmInputStatusText', ''],
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
                  'prizmInputIconButton',
                  'delete-minus',
                  'prizmInputNumberAuxiliaryControl',
                  'decrement',
                  'prizm-input-left',
                  '',
                  3,
                  'inputNumber',
                  'disabled',
                  'interactive',
                ],
                [
                  'prizmInputNumber',
                  '',
                  3,
                  'formControl',
                  'min',
                  'max',
                  'step',
                  'precision',
                  'value',
                  'placeholder',
                  'disabled',
                  'prizmHintDirection',
                  'prizmHintCanShow',
                  'required',
                ],
                ['inputCounter', 'prizmInputNumber'],
                [
                  'prizmInputIconButton',
                  'add-plus',
                  'prizmInputNumberAuxiliaryControl',
                  'increment',
                  'prizm-input-right',
                  '',
                  3,
                  'inputNumber',
                  'disabled',
                  'interactive',
                ],
                ['heading', 'PrizmInputHintDirective', 3, 'hasTestId'],
                [
                  'documentationPropertyName',
                  'prizmHintDirection',
                  'documentationPropertyType',
                  'PrizmOverlayOutsidePlacement',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValues',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'prizmHintCanShow',
                  'documentationPropertyType',
                  'boolean',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'heading',
                  'PrizmInputNumberDirective',
                  'hostComponentKey',
                  'PrizmInputNumberDirective',
                  3,
                  'hasTestId',
                  'control',
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
                  'min',
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
                  'precision',
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
                  'max',
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
                  'step',
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
                  'onClear',
                  'documentationPropertyType',
                  'MouseEvent',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'heading',
                  'PrizmInputNumberDefaultControlsComponent',
                  'hostComponentKey',
                  'PrizmInputNumberDefaultControlsComponent',
                  3,
                  'hasTestId',
                ],
                [
                  'documentationPropertyName',
                  'inputNumber',
                  'documentationPropertyType',
                  'PrizmInputNumberDirective',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'heading',
                  'prizmInputNumberAuxiliaryControl',
                  'hostComponentKey',
                  'prizmInputNumberAuxiliaryControl',
                  3,
                  'hasTestId',
                ],
                [
                  'documentationPropertyName',
                  'prizmInputNumberAuxiliaryControl',
                  'documentationPropertyType',
                  "'increment' | 'decrement'",
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
                ['filename', 'MyComponent.module.ts', 3, 'code'],
              ],
              template: function (u, m) {
                1 & u &&
                  (t.TgZ(0, 'prizm-doc-page', 0),
                  t.YNc(1, B, 8, 4, 'ng-template', 1),
                  t.YNc(2, at, 47, 75, 'ng-template', 2),
                  t.YNc(3, lt, 8, 1, 'ng-template', 1),
                  t.qZA());
              },
              dependencies: [
                c.PC,
                _.c,
                g.F,
                b.K,
                N.N,
                T.W,
                V.l,
                v.a,
                H.w,
                D.k,
                r.Fj,
                r.wV,
                r.JJ,
                r.Q7,
                r.qQ,
                r.Fd,
                r.oH,
                h.f,
                J.G,
                C.C,
                P.f,
                I.A,
                x.$,
                f.i,
                A,
                Z,
                U,
                K,
              ],
              changeDetection: 0,
            })),
            e
          );
        })(),
        st = (() => {
          class e {}
          return (
            (e.ɵfac = function (u) {
              return new (u || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({ imports: [c.ez, l.Qp, y.Bz.forChild((0, l.GB)(ct)), r.UX, r.u5, s.Zpf] })),
            e
          );
        })();
    },
    57679: (z, d, o) => {
      o.d(d, { k: () => y });
      var c = o(65879),
        r = o(45773);
      let y = (() => {
        class l {
          constructor(t) {
            (this.hostElementService = t), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const t = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              _ = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const g in t) this.hostElementService.setHostElement(t[g], _[g]);
          }
        }
        return (
          (l.ɵfac = function (t) {
            return new (t || l)(c.Y36(r.R));
          }),
          (l.ɵdir = c.lG2({
            type: l,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          l
        );
      })();
    },
    56586: (z, d, o) => {
      o.d(d, { w: () => y });
      var c = o(45773),
        r = o(65879);
      let y = (() => {
        class l {}
        return (
          (l.ɵfac = function (t) {
            return new (t || l)();
          }),
          (l.ɵdir = r.lG2({ type: l, selectors: [['', 'prizmDocHost', '']], features: [r._Bn([c.R])] })),
          l
        );
      })();
    },
  },
]);
