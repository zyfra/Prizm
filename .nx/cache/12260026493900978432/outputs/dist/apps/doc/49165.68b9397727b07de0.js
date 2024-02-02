'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [49165],
  {
    49165: (y, d, n) => {
      n.r(d), n.d(d, { CheckboxExampleModule: () => I });
      var p = n(96814),
        u = n(21004),
        s = n(75187),
        e = n(65879),
        h = n(8221),
        r = n(30990),
        C = n(83419),
        x = n(78905),
        f = n(63796),
        b = n(75987),
        k = n(43015),
        z = n(56586),
        _ = n(57679),
        g = n(6136);
      let P = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-checkbox-basic-example']],
            decls: 29,
            vars: 3,
            consts: [
              [1, 'example'],
              [3, 'size'],
              [3, 'disabled'],
              [3, 'indeterminate'],
              [1, 'custom-label'],
              [1, 'custom-label__primary'],
              [1, 'custom-label__secondary'],
            ],
            template: function (o, c) {
              1 & o &&
                (e.TgZ(0, 'div', 0)(1, 'h2'),
                e._uU(2, 'Basic'),
                e.qZA(),
                e.TgZ(3, 'prizm-checkbox'),
                e._uU(4, '\u041e\u041d\u041f\u0417'),
                e.qZA()(),
                e.TgZ(5, 'div', 0)(6, 'h2'),
                e._uU(7, 'Big size'),
                e.qZA(),
                e.TgZ(8, 'prizm-checkbox', 1),
                e._uU(9, '\u041e\u041d\u041f\u0417'),
                e.qZA()(),
                e.TgZ(10, 'div', 0)(11, 'h2'),
                e._uU(12, 'Disabled'),
                e.qZA(),
                e.TgZ(13, 'prizm-checkbox', 2),
                e._uU(14, '\u041e\u041d\u041f\u0417'),
                e.qZA()(),
                e.TgZ(15, 'div', 0)(16, 'h2'),
                e._uU(17, 'Indeterminate'),
                e.qZA(),
                e.TgZ(18, 'prizm-checkbox', 3),
                e._uU(19, '\u041e\u041d\u041f\u0417'),
                e.qZA()(),
                e.TgZ(20, 'div', 0)(21, 'h2'),
                e._uU(22, 'Custom label'),
                e.qZA(),
                e.TgZ(23, 'prizm-checkbox')(24, 'div', 4)(25, 'span', 5),
                e._uU(26, '\u041a\u0411 4'),
                e.qZA(),
                e.TgZ(27, 'span', 6),
                e._uU(28, '\u041a\u0411 4 \u0447\u0435\u043a\u0431\u043e\u043a\u0441'),
                e.qZA()()()()),
                2 & o &&
                  (e.xp6(8),
                  e.Q6J('size', 'l'),
                  e.xp6(5),
                  e.Q6J('disabled', !0),
                  e.xp6(5),
                  e.Q6J('indeterminate', !0));
            },
            dependencies: [g.q],
            styles: [
              '.custom-label[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px;font-size:14px;line-height:14px;background-color:#faebd7;padding:5px;border-radius:10px}.custom-label__primary[_ngcontent-%COMP%]{color:green}.custom-label__secondary[_ngcontent-%COMP%]{color:#00f;font-size:10px;line-height:10px}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      var a = n(60095);
      function v(t, m) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'prizm-checkbox', 4),
            e.NdJ('ngModelChange', function (i) {
              e.CHM(o);
              const l = e.oxw().$implicit;
              return e.KtG((l.checked = i));
            }),
            e._uU(1),
            e.qZA();
        }
        if (2 & t) {
          const o = e.oxw().$implicit;
          e.Q6J('ngModel', o.checked)('checked', o.checked), e.xp6(1), e.hij(' ', o.label, ' ');
        }
      }
      function T(t, m) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'div')(1, 'prizm-checkbox', 8),
            e.NdJ('ngModelChange', function (i) {
              const E = e.CHM(o).$implicit;
              return e.KtG((E.checked = i));
            }),
            e._uU(2),
            e.qZA()();
        }
        if (2 & t) {
          const o = m.$implicit;
          e.xp6(1), e.Q6J('ngModel', o.checked), e.xp6(1), e.Oqu(o.label);
        }
      }
      function Z(t, m) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'div', 5)(1, 'prizm-checkbox', 6),
            e.NdJ('changed', function (i) {
              e.CHM(o);
              const l = e.oxw().$implicit,
                E = e.oxw();
              return e.KtG(E.setAll(i, l.children));
            }),
            e._uU(2),
            e.qZA(),
            e.TgZ(3, 'div', 7),
            e.YNc(4, T, 3, 2, 'div', 1),
            e.qZA()();
        }
        if (2 & t) {
          const o = e.oxw().$implicit,
            c = e.oxw();
          e.xp6(1),
            e.Q6J('checked', c.allChecked(o.children))('indeterminate', c.someChecked(o)),
            e.xp6(1),
            e.hij(' ', o.label, ' '),
            e.xp6(2),
            e.Q6J('ngForOf', o.children);
        }
      }
      function D(t, m) {
        if (
          (1 & t &&
            (e.TgZ(0, 'div'), e.YNc(1, v, 2, 3, 'prizm-checkbox', 2), e.YNc(2, Z, 5, 4, 'div', 3), e.qZA()),
          2 & t)
        ) {
          const o = m.$implicit;
          e.xp6(1), e.Q6J('ngIf', !o.children), e.xp6(1), e.Q6J('ngIf', o.children);
        }
      }
      let M = (() => {
          class t {
            constructor() {
              this.data = [
                {
                  label:
                    '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 1',
                  checked: !1,
                },
                {
                  label:
                    '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 2',
                  checked: !1,
                },
                {
                  label:
                    '\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 3',
                  checked: !1,
                  children: [
                    {
                      label:
                        '\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 1',
                      checked: !1,
                    },
                    {
                      label:
                        '\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 2',
                      checked: !1,
                    },
                    {
                      label:
                        '\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 3',
                      checked: !1,
                    },
                  ],
                },
              ];
            }
            someChecked(o) {
              if (o.children) {
                const c = o.children.filter(i => i.checked);
                return c.length > 0 && c.length < o.children.length;
              }
              return !1;
            }
            setAll(o, c) {
              for (const i of c) i.checked = o;
            }
            allChecked(o) {
              return o.every(c => c.checked);
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-checkbox-group-example']],
              decls: 3,
              vars: 1,
              consts: [
                [1, 'header'],
                [4, 'ngFor', 'ngForOf'],
                ['class', 'checkbox', 3, 'ngModel', 'checked', 'ngModelChange', 4, 'ngIf'],
                ['class', 'checkbox-container', 4, 'ngIf'],
                [1, 'checkbox', 3, 'ngModel', 'checked', 'ngModelChange'],
                [1, 'checkbox-container'],
                [1, 'checkbox', 3, 'checked', 'indeterminate', 'changed'],
                [1, 'children'],
                [1, 'checkbox', 3, 'ngModel', 'ngModelChange'],
              ],
              template: function (o, c) {
                1 & o &&
                  (e.TgZ(0, 'div', 0),
                  e._uU(
                    1,
                    '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u044b'
                  ),
                  e.qZA(),
                  e.YNc(2, D, 3, 2, 'div', 1)),
                  2 & o && (e.xp6(2), e.Q6J('ngForOf', c.data));
              },
              dependencies: [p.sg, p.O5, g.q, a.JJ, a.On],
              styles: [
                '.header[_ngcontent-%COMP%]{font-size:12px;line-height:16px;color:var(--prizm-v3-text-icon-tertiary);margin-bottom:12px}.checkbox[_ngcontent-%COMP%]{margin-bottom:12px}.children[_ngcontent-%COMP%]{margin-left:28px}',
              ],
              changeDetection: 0,
            })),
            t
          );
        })(),
        A = (() => {
          class t {
            constructor() {
              this.formGroup = new a.nJ({
                control1: new a.p4(!1),
                control2: new a.p4(!1),
                control3: new a.p4(!1),
              });
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-checkbox-form-example']],
              decls: 15,
              vars: 4,
              consts: [
                [3, 'formGroup'],
                ['formControlName', 'control1'],
                ['formControlName', 'control2'],
                ['formControlName', 'control3'],
              ],
              template: function (o, c) {
                1 & o &&
                  (e.TgZ(0, 'form', 0)(1, 'div')(2, 'prizm-checkbox', 1),
                  e._uU(3, 'Control 1'),
                  e.qZA()(),
                  e.TgZ(4, 'div')(5, 'prizm-checkbox', 2),
                  e._uU(6, 'Control 2'),
                  e.qZA()(),
                  e.TgZ(7, 'div')(8, 'prizm-checkbox', 3),
                  e._uU(9, 'Control 3'),
                  e.qZA()()(),
                  e.TgZ(10, 'div'),
                  e._uU(11, ' FormValue: '),
                  e.TgZ(12, 'pre'),
                  e._uU(13),
                  e.ALo(14, 'json'),
                  e.qZA()()),
                  2 & o &&
                    (e.Q6J('formGroup', c.formGroup),
                    e.xp6(13),
                    e.hij('    ', e.lcZ(14, 2, c.formGroup.value), '\n  '));
              },
              dependencies: [g.q, a._Y, a.JJ, a.JL, a.sg, a.u, p.Ts],
              styles: ['.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}'],
              changeDetection: 0,
            })),
            t
          );
        })();
      function U(t, m) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-checkbox-basic-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-checkbox-group-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-checkbox-form-example'),
            e.qZA()),
          2 & t)
        ) {
          const o = e.oxw();
          e.Q6J('content', o.exampleBasicCheckbox),
            e.xp6(2),
            e.Q6J('content', o.checkboxGroup),
            e.xp6(2),
            e.Q6J('content', o.exampleReactiveFormCheckbox);
        }
      }
      function H(t, m) {
        1 & t && e._uU(0, ' ng-content ');
      }
      function J(t, m) {
        1 & t && e._uU(0, ' Checked ');
      }
      function F(t, m) {
        1 & t &&
          (e._uU(0, ' Host (default current element) '),
          e._UZ(1, 'br'),
          e._uU(2, ' Which element to listen for click, keyboard events '));
      }
      function N(t, m) {
        1 & t &&
          (e._uU(0, ' Indeterminate '),
          e.TgZ(1, 'p'),
          e._uU(
            2,
            '\u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 checked indeterminate \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 false'
          ),
          e.qZA());
      }
      function V(t, m) {
        1 & t && e._uU(0, ' Disabled ');
      }
      function G(t, m) {
        1 & t && e._uU(0, ' Size ');
      }
      function O(t, m) {
        1 & t && e._uU(0, ' Changed ');
      }
      function Q(t, m) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-checkbox', 7, 8),
            e._uU(3),
            e.qZA()(),
            e.TgZ(4, 'prizm-doc-documentation'),
            e.YNc(5, H, 1, 0, 'ng-template', 9),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const l = e.oxw();
              return e.KtG((l.label = i));
            }),
            e.YNc(6, J, 1, 0, 'ng-template', 10),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const l = e.oxw();
              return e.KtG((l.checked = i));
            }),
            e.YNc(7, F, 3, 0, 'ng-template', 11),
            e.YNc(8, N, 3, 0, 'ng-template', 12),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const l = e.oxw();
              return e.KtG((l.indeterminate = i));
            }),
            e.YNc(9, V, 1, 0, 'ng-template', 13),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const l = e.oxw();
              return e.KtG((l.disabled = i));
            }),
            e.YNc(10, G, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (i) {
              e.CHM(o);
              const l = e.oxw();
              return e.KtG((l.size = i));
            }),
            e.YNc(11, O, 1, 0, 'ng-template', 15),
            e.qZA();
        }
        if (2 & t) {
          const o = e.MAs(2),
            c = e.oxw();
          e.xp6(1),
            e.Q6J('prizmDocHostElement', o)('checked', c.checked)('disabled', c.disabled)('size', c.size)(
              'indeterminate',
              c.indeterminate
            ),
            e.xp6(2),
            e.hij(' ', c.label, ' '),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', c.label),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', c.checked),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', c.indeterminate),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', c.disabled),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', c.size)('documentationPropertyValues', c.sizeVariants);
        }
      }
      function B(t, m) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 16)(1, 'li')(2, 'p'),
            e._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmCheckboxModule'),
            e.qZA(),
            e._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 17),
            e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw();
          e.xp6(7), e.Q6J('code', o.setupModule);
        }
      }
      let K = (() => {
        class t {
          constructor() {
            (this.checked = !1),
              (this.label = '\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e 1'),
              (this.disabled = !1),
              (this.indeterminate = !1),
              (this.sizeVariants = ['l', 's']),
              (this.size = this.sizeVariants[1]),
              (this.exampleBasicCheckbox = {
                TypeScript: n.e(74229).then(n.t.bind(n, 74229, 17)),
                HTML: n.e(8774).then(n.t.bind(n, 8774, 17)),
              }),
              (this.checkboxGroup = {
                TypeScript: n.e(82841).then(n.t.bind(n, 82841, 17)),
                HTML: n.e(9745).then(n.t.bind(n, 9745, 17)),
              }),
              (this.exampleReactiveFormCheckbox = {
                TypeScript: n.e(72423).then(n.t.bind(n, 72423, 17)),
                HTML: n.e(98877).then(n.t.bind(n, 98877, 17)),
                LESS: n.e(13930).then(n.t.bind(n, 13930, 17)),
              }),
              (this.setupModule = n.e(92691).then(n.t.bind(n, 92691, 17)));
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['ng-component']],
            decls: 6,
            vars: 0,
            consts: [
              ['header', 'Checkbox'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', '', 'prizmDocHost', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              ['id', 'group', 'heading', 'Group', 3, 'content'],
              ['id', 'form', 'heading', 'With Reactive Forms', 3, 'content'],
              [3, 'prizmDocHostElement', 'checked', 'disabled', 'size', 'indeterminate'],
              ['element', ''],
              [
                'documentationPropertyMode',
                'ng-content',
                3,
                'documentationPropertyValue',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'checked',
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
                'host',
                'documentationPropertyType',
                'HtmlElement | null',
                'documentationPropertyMode',
                'input',
              ],
              [
                'documentationPropertyName',
                'indeterminate',
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
                'size',
                'documentationPropertyType',
                'l | s',
                'documentationPropertyMode',
                'input',
                3,
                'documentationPropertyValue',
                'documentationPropertyValues',
                'documentationPropertyValueChange',
              ],
              [
                'documentationPropertyName',
                'changed',
                'documentationPropertyType',
                'boolean',
                'documentationPropertyMode',
                'output',
              ],
              [1, 'b-demo-steps'],
              ['filename', 'MyComponent.module.ts', 3, 'code'],
            ],
            template: function (o, c) {
              1 & o &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(
                  2,
                  ' Our checkbox component is a simple way to allow users to select one or more options from a list. '
                ),
                e.qZA(),
                e.YNc(3, U, 6, 3, 'ng-template', 2),
                e.YNc(4, Q, 12, 12, 'ng-template', 3),
                e.YNc(5, B, 8, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [h.c, r.F, C.K, x.N, f.W, b.l, k.a, z.w, _.k, g.q, P, M, A],
            changeDetection: 0,
          })),
          t
        );
      })();
      var Y = n(70169);
      let I = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({ imports: [p.ez, u.Qp, Y.EmS, s.Bz.forChild((0, u.GB)(K)), a.u5, a.UX] })),
          t
        );
      })();
    },
    57679: (y, d, n) => {
      n.d(d, { k: () => s });
      var p = n(65879),
        u = n(45773);
      let s = (() => {
        class e {
          constructor(r) {
            (this.hostElementService = r), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const r = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              C = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const x in r) this.hostElementService.setHostElement(r[x], C[x]);
          }
        }
        return (
          (e.ɵfac = function (r) {
            return new (r || e)(p.Y36(u.R));
          }),
          (e.ɵdir = p.lG2({
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
    56586: (y, d, n) => {
      n.d(d, { w: () => s });
      var p = n(45773),
        u = n(65879);
      let s = (() => {
        class e {}
        return (
          (e.ɵfac = function (r) {
            return new (r || e)();
          }),
          (e.ɵdir = u.lG2({ type: e, selectors: [['', 'prizmDocHost', '']], features: [u._Bn([p.R])] })),
          e
        );
      })();
    },
  },
]);
