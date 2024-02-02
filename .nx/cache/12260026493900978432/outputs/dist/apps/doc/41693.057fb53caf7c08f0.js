'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [41693],
  {
    41693: (z, s, n) => {
      n.r(s), n.d(s, { InputMaskExampleModule: () => G });
      var c = n(96814),
        u = n(60095),
        d = n(75187),
        m = n(21004),
        l = n(70169),
        t = n(65879),
        x = n(8221),
        y = n(30990),
        g = n(83419),
        h = n(78905),
        M = n(63796),
        f = n(75987),
        T = n(43015),
        I = n(56586),
        v = n(57679),
        D = n(92464),
        C = n(76153),
        H = n(18218),
        E = n(19947),
        P = n(43735);
      let _ = (() => {
          class e {}
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-mask-basic-example']],
              decls: 3,
              vars: 0,
              consts: [
                ['label', '\u041c\u0430\u0441\u043a\u0430'],
                ['prizmInput', '', 'mask', '000:00'],
                ['input', ''],
              ],
              template: function (a, r) {
                1 & a && (t.TgZ(0, 'prizm-input-layout', 0), t._UZ(1, 'input', 1, 2), t.qZA());
              },
              dependencies: [C.C, E.l, P.Z6],
              changeDetection: 0,
            })),
            e
          );
        })(),
        V = (() => {
          class e {}
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-phone-example']],
              decls: 3,
              vars: 0,
              consts: [
                ['label', '\u0422\u0435\u043b\u0435\u0444\u043e\u043d'],
                ['prizmInput', '', 'mask', '(000)-000-00-00', 'prefix', '+7'],
                ['input', ''],
              ],
              template: function (a, r) {
                1 & a && (t.TgZ(0, 'prizm-input-layout', 0), t._UZ(1, 'input', 1, 2), t.qZA());
              },
              dependencies: [C.C, E.l, P.Z6],
              changeDetection: 0,
            })),
            e
          );
        })();
      function Z(e, p) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 3),
            t._UZ(1, 'prizm-input-mask-basic-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 4),
            t._UZ(3, 'prizm-input-phone-example'),
            t.qZA()),
          2 & e)
        ) {
          const a = t.oxw();
          t.Q6J('content', a.zyfraInputMaskBasicExample),
            t.xp6(2),
            t.Q6J('content', a.zyfraInputPhoneExample);
        }
      }
      function A(e, p) {
        1 & e && t._uU(0, '\u0422\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430');
      }
      function N(e, p) {
        1 & e && t._uU(0, ' Hint Direction ');
      }
      function U(e, p) {
        1 & e && t._uU(0, ' Can Show ');
      }
      function J(e, p) {
        1 & e && t._uU(0, ' Value ');
      }
      function K(e, p) {
        1 & e && t._uU(0, ' Required ');
      }
      function B(e, p) {
        1 & e && t._uU(0, ' Disabled ');
      }
      function k(e, p) {
        1 & e && t._uU(0, ' Enter ');
      }
      function S(e, p) {
        1 & e && t._uU(0, ' On Clear ');
      }
      function O(e, p) {
        1 & e && t._uU(0, ' Value Changed ');
      }
      function Q(e, p) {
        if (1 & e) {
          const a = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'prizm-input-layout', 5)(2, 'input', 6, 7),
            t.NdJ('ngModelChange', function (o) {
              t.CHM(a);
              const i = t.oxw();
              return t.KtG((i.value = o));
            }),
            t.qZA(),
            t.YNc(5, A, 1, 0, 'ng-template', 8),
            t.qZA()(),
            t.TgZ(6, 'prizm-doc-documentation', 9),
            t.YNc(7, N, 1, 0, 'ng-template', 10),
            t.NdJ('documentationPropertyValueChange', function (o) {
              t.CHM(a);
              const i = t.oxw();
              return t.KtG((i.prizmHintDirection = o));
            }),
            t.YNc(8, U, 1, 0, 'ng-template', 11),
            t.NdJ('documentationPropertyValueChange', function (o) {
              t.CHM(a);
              const i = t.oxw();
              return t.KtG((i.prizmHintCanShow = o));
            }),
            t.qZA(),
            t.TgZ(9, 'prizm-doc-documentation', 12),
            t.YNc(10, J, 1, 0, 'ng-template', 13),
            t.NdJ('documentationPropertyValueChange', function (o) {
              t.CHM(a);
              const i = t.oxw();
              return t.KtG((i.value = o));
            }),
            t.YNc(11, K, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (o) {
              t.CHM(a);
              const i = t.oxw();
              return t.KtG((i.required = o));
            }),
            t.YNc(12, B, 1, 0, 'ng-template', 15),
            t.NdJ('documentationPropertyValueChange', function (o) {
              t.CHM(a);
              const i = t.oxw();
              return t.KtG((i.disabled = o));
            }),
            t.YNc(13, k, 1, 0, 'ng-template', 16),
            t.YNc(14, S, 1, 0, 'ng-template', 17),
            t.YNc(15, O, 1, 0, 'ng-template', 18),
            t.qZA();
        }
        if (2 & e) {
          const a = t.MAs(3),
            r = t.MAs(4),
            o = t.oxw();
          t.xp6(1),
            t.Q6J('label', o.label)('size', o.size)('status', o.status)('outer', o.outer),
            t.xp6(1),
            t.Q6J('ngModel', o.value)('prizmDocHostElement', a)('mask', o.mask)('dropSpecialCharacters', !1)(
              'showMaskTyped',
              r.focused
            )('disabled', o.disabled)('prizmHintDirection', o.prizmHintDirection)(
              'prizmHintCanShow',
              o.prizmHintCanShow
            )('required', o.required)('value', o.value),
            t.xp6(4),
            t.Q6J('hasTestId', !1),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.prizmHintDirection)(
              'documentationPropertyValues',
              o.prizmHintDirectionVariants
            ),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.prizmHintCanShow),
            t.xp6(1),
            t.Q6J('hasTestId', !0),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.value),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.required),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', o.disabled);
        }
      }
      function Y(e, p) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 19)(1, 'li')(2, 'p'),
            t._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmMaskModule'),
            t.qZA(),
            t._uU(
              6,
              ' \u0432 \u0442\u043e\u0442 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 '
            ),
            t.qZA(),
            t._UZ(7, 'prizm-doc-code', 20),
            t.qZA()()),
          2 & e)
        ) {
          const a = t.oxw();
          t.xp6(7), t.Q6J('code', a.setupModule);
        }
      }
      let F = (() => {
          class e {
            constructor() {
              (this.mask = '00:00'),
                (this.value = ''),
                (this.label = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
                (this.placeholder = ''),
                (this.size = 'l'),
                (this.sizesOuter = ['l', 'm', 's']),
                (this.sizesInner = ['l', 'm']),
                (this.disabled = !1),
                (this.prizmHintCanShow = !0),
                (this.prizmHintDirection = l._eX.direction),
                (this.prizmHintDirectionVariants = Object.values(l._$_)),
                (this.status = 'default'),
                (this.statuses = ['default', 'success', 'warning', 'danger']),
                (this.required = !1),
                (this.zyfraInputPhoneExample = {
                  TypeScript: n.e(48266).then(n.t.bind(n, 48266, 17)),
                  HTML: n.e(86309).then(n.t.bind(n, 86309, 17)),
                }),
                (this.zyfraInputMaskBasicExample = {
                  TypeScript: n.e(29353).then(n.t.bind(n, 29353, 17)),
                  HTML: n.e(87461).then(n.t.bind(n, 87461, 17)),
                }),
                (this.setupModule = n.e(35167).then(n.t.bind(n, 35167, 17)));
            }
          }
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-mask-example']],
              decls: 6,
              vars: 0,
              consts: [
                ['header', 'Input Mask'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['heading', 'Basic example', 3, 'content'],
                ['heading', 'Phone example', 3, 'content'],
                [3, 'label', 'size', 'status', 'outer'],
                [
                  'prizmDocHostElementKey',
                  'PrizmInputText',
                  'prizmInput',
                  '',
                  3,
                  'ngModel',
                  'prizmDocHostElement',
                  'mask',
                  'dropSpecialCharacters',
                  'showMaskTyped',
                  'disabled',
                  'prizmHintDirection',
                  'prizmHintCanShow',
                  'required',
                  'value',
                  'ngModelChange',
                ],
                ['element', '', 'input', ''],
                ['prizmInputStatusText', ''],
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
                ['heading', 'PrizmInputText', 'hostComponentKey', 'PrizmInputText', 3, 'hasTestId'],
                [
                  'documentationPropertyName',
                  'value',
                  'documentationPropertyType',
                  'any',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'required',
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
                  'disabled',
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
                  'enter',
                  'documentationPropertyType',
                  'any',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'onClear',
                  'documentationPropertyType',
                  'void',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'valueChanged',
                  'documentationPropertyType',
                  'any',
                  'documentationPropertyMode',
                  'output',
                ],
                [1, 'b-demo-steps'],
                ['filename', 'MyComponent.module.ts', 3, 'code'],
              ],
              template: function (a, r) {
                1 & a &&
                  (t.TgZ(0, 'prizm-doc-page', 0)(1, 'p'),
                  t._uU(2, 'We recommend using "ngx-mask" library. It works fine with our inputs.'),
                  t.qZA(),
                  t.YNc(3, Z, 4, 2, 'ng-template', 1),
                  t.YNc(4, Q, 16, 22, 'ng-template', 2),
                  t.YNc(5, Y, 8, 1, 'ng-template', 1),
                  t.qZA());
              },
              dependencies: [
                x.c,
                y.F,
                g.K,
                h.N,
                M.W,
                f.l,
                T.a,
                I.w,
                v.k,
                u.Fj,
                u.JJ,
                u.Q7,
                u.On,
                D.G,
                C.C,
                H.A,
                E.l,
                P.Z6,
                _,
                V,
              ],
              changeDetection: 0,
            })),
            e
          );
        })(),
        G = (() => {
          class e {}
          return (
            (e.ɵfac = function (a) {
              return new (a || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({
              imports: [c.ez, m.Qp, d.Bz.forChild((0, m.GB)(F)), u.UX, u.u5, l.Qjd, l.GgJ],
            })),
            e
          );
        })();
    },
    57679: (z, s, n) => {
      n.d(s, { k: () => d });
      var c = n(65879),
        u = n(45773);
      let d = (() => {
        class m {
          constructor(t) {
            (this.hostElementService = t), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const t = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              x = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const y in t) this.hostElementService.setHostElement(t[y], x[y]);
          }
        }
        return (
          (m.ɵfac = function (t) {
            return new (t || m)(c.Y36(u.R));
          }),
          (m.ɵdir = c.lG2({
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
    56586: (z, s, n) => {
      n.d(s, { w: () => d });
      var c = n(45773),
        u = n(65879);
      let d = (() => {
        class m {}
        return (
          (m.ɵfac = function (t) {
            return new (t || m)();
          }),
          (m.ɵdir = u.lG2({ type: m, selectors: [['', 'prizmDocHost', '']], features: [u._Bn([c.R])] })),
          m
        );
      })();
    },
  },
]);
