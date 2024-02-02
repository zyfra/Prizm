'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [56840],
  {
    56840: (V, h, l) => {
      l.r(h), l.d(h, { SelectModule: () => Je });
      var c = l(96814),
        d = l(21004),
        g = l(75187),
        p = l(97582),
        m = l(60095),
        u = l(95102),
        e = l(65879),
        y = l(8221),
        C = l(30990),
        f = l(83419),
        S = l(78905),
        v = l(63796),
        z = l(75987),
        M = l(43015),
        N = l(56586),
        J = l(57679),
        s = l(74335),
        x = l(83482),
        T = l(4377);
      let H = (() => {
          class t {
            constructor() {
              (this.items = [
                'One',
                'Two',
                'Three',
                'Very long text with a lot of characters and spaces and other stuff and things',
              ]),
                (this.control = new m.p4(this.items[1]));
            }
            setDefaultValue() {
              this.control.setValue(this.items[0], { emitEvent: !1 });
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-select-full-width-example']],
              decls: 12,
              vars: 4,
              consts: [
                [2, 'width', '100%', 3, 'formControl', 'items'],
                ['prizmButton', '', 3, 'click'],
              ],
              template: function (o, r) {
                1 & o &&
                  (e._UZ(0, 'prizm-select', 0)(1, 'br')(2, 'br'),
                  e.TgZ(3, 'div')(4, 'button', 1),
                  e.NdJ('click', function () {
                    return r.setDefaultValue();
                  }),
                  e._uU(5, ' Set default value: '),
                  e.TgZ(6, 'b'),
                  e._uU(7),
                  e.qZA()()(),
                  e._UZ(8, 'br')(9, 'br'),
                  e.TgZ(10, 'div'),
                  e._uU(11),
                  e.qZA()),
                  2 & o &&
                    (e.Q6J('formControl', r.control)('items', r.items),
                    e.xp6(7),
                    e.Oqu(r.items[0]),
                    e.xp6(4),
                    e.hij('Current value: ', r.control.value, ''));
              },
              dependencies: [m.JJ, m.oH, T.K, s.W],
              styles: [
                '[_nghost-%COMP%]{--prizm-input-layout-width: 100%}.box[_ngcontent-%COMP%]{display:flex;gap:1rem}',
              ],
            })),
            t
          );
        })(),
        Z = (() => {
          class t {
            constructor() {
              (this.items = [
                'One',
                'Two',
                'Three',
                'Very long text with a lot of characters and spaces and other stuff and things',
              ]),
                (this.control = new m.p4(this.items[1], [m.kI.required]));
            }
            setDefaultValue() {
              this.control.setValue(null);
            }
            setRequiredValidator() {
              this.control.setValidators([m.kI.required]);
            }
            clearValidator() {
              this.control.setValidators([]);
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-select-validators-example']],
              decls: 14,
              vars: 3,
              consts: [
                [3, 'formControl', 'items'],
                [2, 'display', 'flex', 'flex-flow', 'column', 'gap', '1rem', 'width', '20rem'],
                ['prizmButton', '', 3, 'click'],
              ],
              template: function (o, r) {
                1 & o &&
                  (e._UZ(0, 'prizm-select', 0)(1, 'br')(2, 'br'),
                  e.TgZ(3, 'div', 1)(4, 'button', 2),
                  e.NdJ('click', function () {
                    return r.setDefaultValue();
                  }),
                  e._uU(5, 'Clear value'),
                  e.qZA(),
                  e.TgZ(6, 'button', 2),
                  e.NdJ('click', function () {
                    return r.clearValidator();
                  }),
                  e._uU(7, 'Clear Validator'),
                  e.qZA(),
                  e.TgZ(8, 'button', 2),
                  e.NdJ('click', function () {
                    return r.setRequiredValidator();
                  }),
                  e._uU(9, 'Set Required Validator'),
                  e.qZA()(),
                  e._UZ(10, 'br')(11, 'br'),
                  e.TgZ(12, 'div'),
                  e._uU(13),
                  e.qZA()),
                  2 & o &&
                    (e.Q6J('formControl', r.control)('items', r.items),
                    e.xp6(13),
                    e.hij('Current value: ', r.control.value, ''));
              },
              dependencies: [m.JJ, m.oH, T.K, s.W],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            t
          );
        })(),
        U = (() => {
          class t {
            constructor() {
              (this.items = [
                'One',
                'Two',
                'Three',
                'Very long text with a lot of characters and spaces and other stuff and things',
              ]),
                (this.control = new m.p4(this.items[1], [m.kI.required]));
            }
            setDefaultValue() {
              this.control.setValue(this.items[0], { emitEvent: !1 });
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-select-base-example']],
              decls: 12,
              vars: 4,
              consts: [
                [3, 'formControl', 'items'],
                ['prizmButton', '', 3, 'click'],
              ],
              template: function (o, r) {
                1 & o &&
                  (e._UZ(0, 'prizm-select', 0)(1, 'br')(2, 'br'),
                  e.TgZ(3, 'div')(4, 'button', 1),
                  e.NdJ('click', function () {
                    return r.setDefaultValue();
                  }),
                  e._uU(5, ' Set default value: '),
                  e.TgZ(6, 'b'),
                  e._uU(7),
                  e.qZA()()(),
                  e._UZ(8, 'br')(9, 'br'),
                  e.TgZ(10, 'div'),
                  e._uU(11),
                  e.qZA()),
                  2 & o &&
                    (e.Q6J('formControl', r.control)('items', r.items),
                    e.xp6(7),
                    e.Oqu(r.items[0]),
                    e.xp6(4),
                    e.hij('Current value: ', r.control.value, ''));
              },
              dependencies: [m.JJ, m.oH, T.K, s.W],
              styles: ['.box[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
            })),
            t
          );
        })(),
        E = (() => {
          class t {
            constructor() {
              (this.value = !0),
                (this.control = new m.p4()),
                (this.items = [
                  '\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432',
                  '\u0421\u0435\u0440\u0433\u0435\u0439 \u041c\u0430\u0440\u043a\u043e\u0432',
                  '\u0410\u043d\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',
                  '\u041a\u0430\u0442\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',
                  '\u0421\u0430\u0448\u0430 \u0414\u0443\u0440\u043e\u0432',
                  '\u0412\u043b\u0430\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432',
                  '\u041a\u043e\u0441\u0442\u044f \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432',
                  '\u0420\u0443\u0441\u0442\u0430\u043c \u0413\u0443\u0441\u0435\u0432',
                  '\u0424\u0438\u043b\u0438\u043f \u0423\u0432\u0430\u0440\u043e\u0432',
                ]);
            }
          }
          return (
            (t.ɵfac = function (o) {
              return new (o || t)();
            }),
            (t.ɵcmp = e.Xpm({
              type: t,
              selectors: [['prizm-select-with-search-example']],
              decls: 1,
              vars: 3,
              consts: [[3, 'items', 'searchable', 'formControl']],
              template: function (o, r) {
                1 & o && e._UZ(0, 'prizm-select', 0),
                  2 & o && e.Q6J('items', r.items)('searchable', !0)('formControl', r.control);
              },
              dependencies: [m.JJ, m.oH, s.W],
              encapsulation: 2,
            })),
            t
          );
        })();
      var b = l(65619),
        W = l(99080),
        D = l(99397);
      let w = (() => {
        class t {
          constructor() {
            (this.value = !0),
              (this.control = new m.p4()),
              (this.allItems = [
                '\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432',
                '\u0421\u0435\u0440\u0433\u0435\u0439 \u041c\u0430\u0440\u043a\u043e\u0432',
                '\u0410\u043d\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',
                '\u041a\u0430\u0442\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',
                '\u0421\u0430\u0448\u0430 \u0414\u0443\u0440\u043e\u0432',
                '\u0412\u043b\u0430\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432',
                '\u041a\u043e\u0441\u0442\u044f \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432',
                '\u0420\u0443\u0441\u0442\u0430\u043c \u0413\u0443\u0441\u0435\u0432',
                '\u0424\u0438\u043b\u0438\u043f \u0423\u0432\u0430\u0440\u043e\u0432',
              ]),
              (this.items$ = new b.X(this.allItems)),
              (this.searchMatcher = () => !0);
          }
          search(o) {
            o || this.items$.next(this.allItems);
            const r = this.allItems.filter(n => n?.toLowerCase().includes(o?.toLowerCase()));
            (0, W.H)(500)
              .pipe((0, D.b)(() => this.items$.next(r)))
              .subscribe();
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-select-with-backend-search-example']],
            decls: 2,
            vars: 6,
            consts: [
              [
                'icon',
                'sort-zoom-in',
                3,
                'items',
                'searchable',
                'searchMatcher',
                'formControl',
                'searchChange',
              ],
            ],
            template: function (o, r) {
              1 & o &&
                (e.TgZ(0, 'prizm-select', 0),
                e.NdJ('searchChange', function (i) {
                  return r.search(i);
                }),
                e.ALo(1, 'async'),
                e.qZA()),
                2 & o &&
                  e.Q6J('items', e.lcZ(1, 4, r.items$))('searchable', !0)('searchMatcher', r.searchMatcher)(
                    'formControl',
                    r.control
                  );
            },
            dependencies: [m.JJ, m.oH, s.W, c.Ov],
            encapsulation: 2,
          })),
          t
        );
      })();
      function O(t, a) {
        if (
          (1 & t && (e.TgZ(0, 'div', 3), e._UZ(1, 'prizm-icon', 4), e.TgZ(2, 'span'), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const o = a.stringify;
          e.xp6(3), e.Oqu(o);
        }
      }
      let A = (() => {
        class t {
          constructor() {
            (this.items = [
              { id: 1, name: '\u0420\u043e\u0441\u0441\u0438\u044f' },
              { id: 2, name: '\u0421\u0428\u0410' },
              { id: 3, name: '\u041e\u0410\u042d' },
            ]),
              (this.valueControl = new m.p4({ id: 3 })),
              (this.searchMatcher = (o, r) => r.name.toLowerCase().includes(o.toLowerCase())),
              (this.identityMatcher = (o, r) => o?.id === r?.id),
              (this.stringify = o => o?.name);
          }
          setDefaultValue() {
            this.valueControl.setValue(this.items[0]);
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-select-with-object-example']],
            decls: 16,
            vars: 13,
            consts: [
              [
                3,
                'items',
                'valueTemplate',
                'formControl',
                'searchMatcher',
                'identityMatcher',
                'stringify',
                'searchable',
              ],
              [3, 'click'],
              ['valueTemplate', ''],
              [1, 'item'],
              ['iconClass', 'account-done'],
            ],
            template: function (o, r) {
              if (
                (1 & o &&
                  (e._UZ(0, 'prizm-select', 0)(1, 'br')(2, 'br'),
                  e.TgZ(3, 'div')(4, 'button', 1),
                  e.NdJ('click', function () {
                    return r.setDefaultValue();
                  }),
                  e._uU(5, ' Set default value: '),
                  e.TgZ(6, 'b'),
                  e._uU(7),
                  e.ALo(8, 'json'),
                  e.qZA()()(),
                  e._UZ(9, 'br')(10, 'br'),
                  e.TgZ(11, 'div'),
                  e._uU(12),
                  e.ALo(13, 'json'),
                  e.qZA(),
                  e.YNc(14, O, 4, 1, 'ng-template', null, 2, e.W1O)),
                2 & o)
              ) {
                const n = e.MAs(15);
                e.Q6J('items', r.items)('valueTemplate', n)('formControl', r.valueControl)(
                  'searchMatcher',
                  r.searchMatcher
                )('identityMatcher', r.identityMatcher)('stringify', r.stringify)('searchable', !0),
                  e.xp6(7),
                  e.Oqu(e.lcZ(8, 9, r.items[0].name)),
                  e.xp6(5),
                  e.hij('Current value: ', e.lcZ(13, 11, r.valueControl.value), '');
              }
            },
            dependencies: [m.JJ, m.oH, s.W, x.b, c.Ts],
            styles: ['.item[_ngcontent-%COMP%]{display:flex;gap:.5rem}'],
          })),
          t
        );
      })();
      function Q(t, a) {
        if (
          (1 & t && (e.TgZ(0, 'div', 4), e._UZ(1, 'prizm-icon', 5), e.TgZ(2, 'span'), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw().$implicit;
          e.xp6(3), e.Oqu(o);
        }
      }
      function K(t, a) {
        if ((1 & t && e._uU(0), 2 & t)) {
          const o = e.oxw().nullContent;
          e.hij(' ', o, ' ');
        }
      }
      function Y(t, a) {
        if (
          (1 & t && (e.YNc(0, Q, 4, 1, 'div', 2), e.YNc(1, K, 1, 1, 'ng-template', null, 3, e.W1O)), 2 & t)
        ) {
          const o = a.$implicit,
            r = e.MAs(2);
          e.Q6J('ngIf', o)('ngIfElse', r);
        }
      }
      let I = (() => {
        class t {
          constructor() {
            (this.items = ['One', 'Two', 'Three']), (this.control = new m.p4());
          }
        }
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵcmp = e.Xpm({
            type: t,
            selectors: [['prizm-select-with-template-example']],
            decls: 3,
            vars: 3,
            consts: [
              [3, 'items', 'valueTemplate', 'formControl'],
              ['valueTemplate', ''],
              ['class', 'item', 4, 'ngIf', 'ngIfElse'],
              ['empty', ''],
              [1, 'item'],
              ['iconClass', 'account-done'],
            ],
            template: function (o, r) {
              if (
                (1 & o && (e._UZ(0, 'prizm-select', 0), e.YNc(1, Y, 3, 2, 'ng-template', null, 1, e.W1O)),
                2 & o)
              ) {
                const n = e.MAs(2);
                e.Q6J('items', r.items)('valueTemplate', n)('formControl', r.control);
              }
            },
            dependencies: [c.O5, m.JJ, m.oH, s.W, x.b],
            styles: ['.item[_ngcontent-%COMP%]{display:flex;gap:.5rem}'],
          })),
          t
        );
      })();
      function F(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'prizm-doc-example', 4),
            e._UZ(1, 'prizm-select-base-example'),
            e.qZA(),
            e.TgZ(2, 'prizm-doc-example', 5),
            e._UZ(3, 'prizm-select-with-search-example'),
            e.qZA(),
            e.TgZ(4, 'prizm-doc-example', 6),
            e._UZ(5, 'prizm-select-with-backend-search-example'),
            e.qZA(),
            e.TgZ(6, 'prizm-doc-example', 7),
            e._UZ(7, 'prizm-select-with-template-example'),
            e.qZA(),
            e.TgZ(8, 'prizm-doc-example', 8),
            e._UZ(9, 'prizm-select-with-object-example'),
            e.qZA(),
            e.TgZ(10, 'prizm-doc-example', 9),
            e._UZ(11, 'prizm-select-full-width-example'),
            e.qZA(),
            e.TgZ(12, 'prizm-doc-example', 10),
            e._UZ(13, 'prizm-select-validators-example'),
            e.qZA()),
          2 & t)
        ) {
          const o = e.oxw();
          e.Q6J('content', o.exampleBase),
            e.xp6(2),
            e.Q6J('content', o.exampleWithSearch),
            e.xp6(2),
            e.Q6J('content', o.exampleWithBackendSearch),
            e.xp6(2),
            e.Q6J('content', o.exampleWithTemplate),
            e.xp6(2),
            e.Q6J('content', o.exampleWithObject),
            e.xp6(2),
            e.Q6J('content', o.exampleFullWidth),
            e.xp6(2),
            e.Q6J('content', o.exampleValidators);
        }
      }
      function B(t, a) {
        1 & t && e._uU(0, ' Scrollbar in dropdown ');
      }
      function G(t, a) {
        1 & t && e._uU(0, ' Icon ');
      }
      function j(t, a) {
        1 & t && e._uU(0, ' Search Value ');
      }
      function L(t, a) {
        1 & t && e._uU(0, ' Identity Matcher ');
      }
      function R(t, a) {
        1 & t && e._uU(0, ' Stringify ');
      }
      function X(t, a) {
        1 & t && e._uU(0, ' Search matcher (use for custom search) ');
      }
      function $(t, a) {
        1 & t && e._uU(0, ' Items ');
      }
      function q(t, a) {
        1 & t && e._uU(0, ' Show clear button ');
      }
      function k(t, a) {
        1 & t && e._uU(0, ' Clear Button (icon or template) ');
      }
      function ee(t, a) {
        1 & t && e._uU(0, ' Value Template ');
      }
      function te(t, a) {
        1 & t && e._uU(0, ' Size ');
      }
      function ne(t, a) {
        if (
          (1 & t && (e.TgZ(0, 'div', 49), e._UZ(1, 'prizm-icon', 50), e.TgZ(2, 'span'), e._uU(3), e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw().$implicit;
          e.xp6(3), e.Oqu(o);
        }
      }
      function oe(t, a) {
        if ((1 & t && e._uU(0), 2 & t)) {
          const o = e.oxw().nullContent;
          e.hij(' ', o, ' ');
        }
      }
      function ae(t, a) {
        if (
          (1 & t && (e.YNc(0, ne, 4, 1, 'div', 47), e.YNc(1, oe, 1, 1, 'ng-template', null, 48, e.W1O)),
          2 & t)
        ) {
          const o = a.$implicit,
            r = e.MAs(2);
          e.Q6J('ngIf', o)('ngIfElse', r);
        }
      }
      function le(t, a) {
        1 & t && e._uU(0, ' Searchable ');
      }
      function re(t, a) {
        1 & t && e._uU(0, ' Outer ');
      }
      function ie(t, a) {
        1 & t && e._uU(0, ' Label ');
      }
      function me(t, a) {
        1 & t && e._uU(0, ' Min Dropdown Height ');
      }
      function pe(t, a) {
        1 & t && e._uU(0, ' Max Dropdown Height ');
      }
      function ce(t, a) {
        1 & t && e._uU(0, ' Placeholder ');
      }
      function ue(t, a) {
        1 & t && e._uU(0, ' Null Content ');
      }
      function se(t, a) {
        1 & t && e._uU(0, ' Empty Content ');
      }
      function de(t, a) {
        1 & t && e._uU(0, ' dropdown Width ');
      }
      function he(t, a) {
        1 & t && e._uU(0, ' Read Only ');
      }
      function _e(t, a) {
        1 & t && e._uU(0, ' Val ');
      }
      function ge(t, a) {
        1 & t && e._uU(0, ' Pseudo Invalid ');
      }
      function ye(t, a) {
        1 & t && e._uU(0, ' Pseudo Hovered ');
      }
      function Pe(t, a) {
        1 & t && e._uU(0, ' Pseudo Pressed ');
      }
      function Ce(t, a) {
        1 & t && e._uU(0, ' Pseudo Focused ');
      }
      function fe(t, a) {
        1 & t && e._uU(0, ' Focusable ');
      }
      function xe(t, a) {
        1 & t && e._uU(0, ' Pseudo State ');
      }
      function Te(t, a) {
        1 & t && e._uU(0, ' Focused Change ');
      }
      function Ve(t, a) {
        1 & t && e._uU(0, ' Pressed Change ');
      }
      function Se(t, a) {
        1 & t && e._uU(0, ' Hovered Change ');
      }
      function ve(t, a) {
        1 & t && e._uU(0, ' Focus Visible Change ');
      }
      function ze(t, a) {
        if (1 & t) {
          const o = e.EpF();
          e.TgZ(0, 'prizm-doc-demo')(1, 'prizm-select', 11, 12),
            e.NdJ('valChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.val1 = n));
            }),
            e.qZA()(),
            e.TgZ(3, 'prizm-doc-documentation', 13),
            e.YNc(4, B, 1, 0, 'ng-template', 14),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.dropdownScroll = n));
            }),
            e.YNc(5, G, 1, 0, 'ng-template', 15),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.icon = n));
            }),
            e.YNc(6, j, 1, 0, 'ng-template', 16),
            e.YNc(7, L, 1, 0, 'ng-template', 17),
            e.YNc(8, R, 1, 0, 'ng-template', 18),
            e.YNc(9, X, 1, 0, 'ng-template', 19),
            e.YNc(10, $, 1, 0, 'ng-template', 20),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.items = n));
            }),
            e.YNc(11, q, 1, 0, 'ng-template', 21),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.forceClear = n));
            }),
            e.YNc(12, k, 1, 0, 'ng-template', 22),
            e.YNc(13, ee, 1, 0, 'ng-template', 23),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.valueTemplate = n));
            }),
            e.YNc(14, te, 1, 0, 'ng-template', 24),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.size = n));
            }),
            e.YNc(15, ae, 3, 2, 'ng-template', null, 25, e.W1O),
            e.YNc(17, le, 1, 0, 'ng-template', 26),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.searchable = n));
            }),
            e.YNc(18, re, 1, 0, 'ng-template', 27),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.outer = n));
            }),
            e.YNc(19, ie, 1, 0, 'ng-template', 28),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.label = n));
            }),
            e.YNc(20, me, 1, 0, 'ng-template', 29),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.minDropdownHeight = n));
            }),
            e.YNc(21, pe, 1, 0, 'ng-template', 30),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.maxDropdownHeight = n));
            }),
            e.YNc(22, ce, 1, 0, 'ng-template', 31),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.placeholder = n));
            }),
            e.YNc(23, ue, 1, 0, 'ng-template', 32),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.nullContent = n));
            }),
            e.YNc(24, se, 1, 0, 'ng-template', 33),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.emptyContent = n));
            }),
            e.YNc(25, de, 1, 0, 'ng-template', 34),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.dropdownWidth = n));
            }),
            e.YNc(26, he, 1, 0, 'ng-template', 35),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.readOnly = n));
            }),
            e.YNc(27, _e, 1, 0, 'ng-template', 36),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.val1 = n));
            }),
            e.YNc(28, ge, 1, 0, 'ng-template', 37),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.pseudoInvalid = n));
            }),
            e.YNc(29, ye, 1, 0, 'ng-template', 38),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.pseudoHovered = n));
            }),
            e.YNc(30, Pe, 1, 0, 'ng-template', 39),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.pseudoPressed = n));
            }),
            e.YNc(31, Ce, 1, 0, 'ng-template', 40),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.pseudoFocused = n));
            }),
            e.YNc(32, fe, 1, 0, 'ng-template', 41),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.focusable = n));
            }),
            e.YNc(33, xe, 1, 0, 'ng-template', 42),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.pseudoState = n));
            }),
            e.YNc(34, Te, 1, 0, 'ng-template', 43),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.focusedChange = n));
            }),
            e.YNc(35, Ve, 1, 0, 'ng-template', 44),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.pressedChange = n));
            }),
            e.YNc(36, Se, 1, 0, 'ng-template', 45),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.hoveredChange = n));
            }),
            e.YNc(37, ve, 1, 0, 'ng-template', 46),
            e.NdJ('documentationPropertyValueChange', function (n) {
              e.CHM(o);
              const i = e.oxw();
              return e.KtG((i.focusVisibleChange = n));
            }),
            e.qZA();
        }
        if (2 & t) {
          const o = e.MAs(2),
            r = e.MAs(16),
            n = e.oxw();
          e.xp6(1),
            e.Q6J('val', n.val1)('prizmDocHostElement', o)('formControl', n.control)(
              'nullContent',
              n.nullContent
            )('items', n.items)('outer', n.outer)('forceClear', n.forceClear)('size', n.size)('icon', n.icon)(
              'searchable',
              n.searchable
            )('emptyContent', n.emptyContent)('minDropdownHeight', n.minDropdownHeight)(
              'maxDropdownHeight',
              n.maxDropdownHeight
            )('label', n.label)('placeholder', n.placeholder)('valueTemplate', n.valueTemplate)(
              'dropdownScroll',
              n.dropdownScroll
            )('searchMatcher', n.searchMatcher)('identityMatcher', n.identityMatcher)(
              'dropdownWidth',
              n.dropdownWidth
            )('readOnly', n.readOnly)('focusable', n.focusable)('pseudoState', n.pseudoState)(
              'pseudoInvalid',
              n.pseudoInvalid
            )('pseudoHovered', n.pseudoHovered)('pseudoPressed', n.pseudoPressed)(
              'pseudoFocused',
              n.pseudoFocused
            ),
            e.xp6(2),
            e.Q6J('control', n.control)('hasTestId', !0),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.dropdownScroll)(
              'documentationPropertyValues',
              n.dropdownScrollVariants
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.icon)('documentationPropertyValues', n.iconVariants),
            e.xp6(5),
            e.Q6J('documentationPropertyValue', n.items)('documentationPropertyValues', n.itemsVariants),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.forceClear)(
              'documentationPropertyValues',
              n.forceClearVariants
            ),
            e.xp6(2),
            e.Q6J('documentationPropertyValue', n.valueTemplate)(
              'documentationPropertyValues',
              n.getValueTemplate(r)
            ),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.size)('documentationPropertyValues', n.sizeVariants),
            e.xp6(3),
            e.Q6J('documentationPropertyValue', n.searchable),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.outer),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.label),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.minDropdownHeight),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.maxDropdownHeight),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.placeholder),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.nullContent),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.emptyContent),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.dropdownWidth),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.readOnly),
            e.xp6(1),
            e.Q6J('documentationPropertyValue', n.val1),
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
      function Me(t, a) {
        if (
          (1 & t &&
            (e.TgZ(0, 'ol', 51)(1, 'li')(2, 'p'),
            e._uU(3, ' Import '),
            e.TgZ(4, 'code'),
            e._uU(5, 'PrizmSelectModule'),
            e.qZA(),
            e._uU(6, ' into a module where you want to use our component '),
            e.qZA(),
            e._UZ(7, 'prizm-doc-code', 52),
            e.qZA()()),
          2 & t)
        ) {
          const o = e.oxw();
          e.xp6(7), e.Q6J('code', o.setupModule);
        }
      }
      class _ {
        constructor() {
          (this.dropdownScrollVariants = ['auto', 'hidden', 'visible']),
            (this.dropdownScroll = 'auto'),
            (this.readOnly = !1),
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
            (this.dropdownWidth = '100%'),
            (this.control = new m.p4()),
            (this.searchable = !1),
            (this.outer = !1),
            (this.label =
              '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430'),
            (this.size = this.sizeVariants[0]),
            (this.forceClearVariants = [null, !1, !0]),
            (this.forceClear = this.forceClearVariants[0]),
            (this.emptyContent =
              '\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e'),
            (this.nullContent = '\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u043e'),
            (this.minDropdownHeight = 0),
            (this.maxDropdownHeight = 342),
            (this.placeholder = ''),
            (this.visibility = 'auto'),
            (this.itemsVariants = [
              [
                '\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432 \u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432 \u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432 \u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u0430\u0444\u0430\u043d\u043e\u0432',
                '\u0421\u0435\u0440\u0433\u0435\u0439 \u041c\u0430\u0440\u043a\u043e\u0432',
                '\u0410\u043d\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',
                '\u041a\u0430\u0442\u044f \u041f\u0435\u0442\u0440\u043e\u0432\u0430',
                '\u0421\u0430\u0448\u0430 \u0414\u0443\u0440\u043e\u0432',
                '\u0412\u043b\u0430\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432',
                '\u041a\u043e\u0441\u0442\u044f \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432',
                '\u0420\u0443\u0441\u0442\u0430\u043c \u0413\u0443\u0441\u0435\u0432',
                '\u0424\u0438\u043b\u0438\u043f \u0423\u0432\u0430\u0440\u043e\u0432',
                '\u0412\u043b\u0430\u0434 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432 2',
                '\u041a\u043e\u0441\u0442\u044f \u0429\u0435\u0440\u0431\u0430\u043a\u043e\u0432 2',
                '\u0420\u0443\u0441\u0442\u0430\u043c \u0413\u0443\u0441\u0435\u0432 2',
                '\u0424\u0438\u043b\u0438\u043f \u0423\u0432\u0430\u0440\u043e\u0432 2',
              ],
              null,
            ]),
            (this.valVariants = [...(this.itemsVariants[0] ?? []), null]),
            (this.items = this.itemsVariants[0]),
            (this.setupModule = l.e(88504).then(l.t.bind(l, 88504, 17))),
            (this.exampleBase = {
              TypeScript: l.e(20114).then(l.t.bind(l, 20114, 17)),
              HTML: l.e(75713).then(l.t.bind(l, 75713, 17)),
            }),
            (this.exampleFullWidth = {
              TypeScript: l.e(64581).then(l.t.bind(l, 64581, 17)),
              HTML: l.e(89081).then(l.t.bind(l, 89081, 17)),
            }),
            (this.exampleWithTemplate = {
              TypeScript: l.e(34494).then(l.t.bind(l, 34494, 17)),
              HTML: l.e(59267).then(l.t.bind(l, 59267, 17)),
            }),
            (this.exampleWithObject = {
              TypeScript: l.e(86198).then(l.t.bind(l, 86198, 17)),
              HTML: l.e(95984).then(l.t.bind(l, 95984, 17)),
            }),
            (this.exampleWithSearch = {
              TypeScript: l.e(26439).then(l.t.bind(l, 26439, 17)),
              HTML: l.e(35545).then(l.t.bind(l, 35545, 17)),
            }),
            (this.exampleValidators = {
              TypeScript: l.e(31490).then(l.t.bind(l, 31490, 17)),
              HTML: l.e(9342).then(l.t.bind(l, 9342, 17)),
            }),
            (this.exampleWithBackendSearch = {
              TypeScript: l.e(25662).then(l.t.bind(l, 25662, 17)),
              HTML: l.e(34569).then(l.t.bind(l, 34569, 17)),
            }),
            (this.valueTemplate = ''),
            (this.icon = null),
            (this.iconVariants = [null, 'sort-zoom-in']),
            (this.searchMatcher = (a, o) => !!o?.toString()?.toLowerCase().includes(a?.toLowerCase())),
            (this.identityMatcher = (a, o) => a === o);
        }
        get sizeVariants() {
          return this.outer ? ['s', 'm', 'l'] : ['m', 'l'];
        }
        set disabled(a) {
          a ? this.control.disable() : this.control.enable();
        }
        get disabled() {
          return this.control.disabled;
        }
        get val() {
          return this.control.value;
        }
        getValueTemplate(...a) {
          return [null, ...a];
        }
        setValue(a) {
          this.control.setValue(a);
        }
      }
      (_.ɵfac = function (a) {
        return new (a || _)();
      }),
        (_.ɵcmp = e.Xpm({
          type: _,
          selectors: [['prizm-select-example']],
          decls: 10,
          vars: 0,
          consts: [
            ['header', 'Select'],
            ['description', '', 1, 'page-description'],
            ['prizmDocPageTab', ''],
            ['prizmDocPageTab', '', 'prizmDocHost', ''],
            ['id', 'base', 'heading', 'Base', 3, 'content'],
            ['id', 'with-search', 'heading', 'With Search', 3, 'content'],
            ['id', 'with-backend-search', 'heading', 'With Backend Search', 3, 'content'],
            ['id', 'with-template', 'heading', 'With Template', 3, 'content'],
            ['id', 'with-object', 'heading', 'With Object', 3, 'content'],
            ['id', 'full-width', 'heading', 'Full Width', 3, 'content'],
            ['id', 'validators', 'heading', 'Validators', 3, 'content'],
            [
              3,
              'val',
              'prizmDocHostElement',
              'formControl',
              'nullContent',
              'items',
              'outer',
              'forceClear',
              'size',
              'icon',
              'searchable',
              'emptyContent',
              'minDropdownHeight',
              'maxDropdownHeight',
              'label',
              'placeholder',
              'valueTemplate',
              'dropdownScroll',
              'searchMatcher',
              'identityMatcher',
              'dropdownWidth',
              'readOnly',
              'focusable',
              'pseudoState',
              'pseudoInvalid',
              'pseudoHovered',
              'pseudoPressed',
              'pseudoFocused',
              'valChange',
            ],
            ['element', ''],
            [3, 'control', 'hasTestId'],
            [
              'documentationPropertyName',
              'dropdownScroll',
              'documentationPropertyType',
              'PrizmScrollbarVisibility',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'icon',
              'documentationPropertyType',
              'PolymorphContent<PrizmSelectIconContext>',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
            [
              'documentationPropertyName',
              'search',
              'documentationPropertyType',
              'string | null',
              'documentationPropertyMode',
              'input-output',
            ],
            [
              'documentationPropertyName',
              'identityMatcher',
              'documentationPropertyType',
              'PrizmSelectIdentityMatcher',
              'documentationPropertyMode',
              'input',
            ],
            [
              'documentationPropertyName',
              'stringify',
              'documentationPropertyType',
              'PrizmSelectIdentityMatcher',
              'documentationPropertyMode',
              'input',
            ],
            [
              'documentationPropertyName',
              'searchMatcher',
              'documentationPropertyType',
              'PrizmSelectSearchMatcher',
              'documentationPropertyMode',
              'input',
            ],
            [
              'documentationPropertyName',
              'items',
              'documentationPropertyType',
              'T[]',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
              'documentationPropertyValueChange',
            ],
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
              'valueTemplate',
              'documentationPropertyType',
              'PolymorphContent',
              'documentationPropertyMode',
              'input',
              3,
              'documentationPropertyValue',
              'documentationPropertyValues',
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
            ['valueTemp', ''],
            [
              'documentationPropertyName',
              'searchable',
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
              'minDropdownHeight',
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
              'maxDropdownHeight',
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
              'nullContent',
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
              'emptyContent',
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
              'dropdownWidth',
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
              'any[]',
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
            ['class', 'item', 4, 'ngIf', 'ngIfElse'],
            ['empty', ''],
            [1, 'item'],
            ['iconClass', 'account-done'],
            [1, 'b-demo-steps'],
            ['filename', 'custom.module.ts', 3, 'code'],
          ],
          template: function (a, o) {
            1 & a &&
              (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
              e._uU(2, ' This component is not longer supported.'),
              e._UZ(3, 'br'),
              e._uU(4, ' Use PrizmInputSelectModule.'),
              e._UZ(5, 'br'),
              e._uU(6, ' Our select component is a wrapper around the native select element. '),
              e.qZA(),
              e.YNc(7, F, 14, 7, 'ng-template', 2),
              e.YNc(8, ze, 38, 62, 'ng-template', 3),
              e.YNc(9, Me, 8, 1, 'ng-template', 2),
              e.qZA());
          },
          dependencies: [
            c.O5,
            y.c,
            C.F,
            f.K,
            S.N,
            v.W,
            z.l,
            M.a,
            N.w,
            J.k,
            m.JJ,
            m.oH,
            s.W,
            x.b,
            H,
            Z,
            U,
            E,
            w,
            A,
            I,
          ],
          styles: [
            '.item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem}',
          ],
          changeDetection: 0,
        })),
        (0, p.gn)(
          [
            u.zn,
            (0, p.w6)('design:type', Function),
            (0, p.w6)('design:paramtypes', [Object]),
            (0, p.w6)('design:returntype', Array),
          ],
          _.prototype,
          'getValueTemplate',
          null
        );
      var P = l(70169),
        Ne = l(47784);
      let Je = (() => {
        class t {}
        return (
          (t.ɵfac = function (o) {
            return new (o || t)();
          }),
          (t.ɵmod = e.oAB({ type: t })),
          (t.ɵinj = e.cJS({
            imports: [c.ez, d.Qp, m.u5, m.UX, P.m98, Ne.th, P.KBf, P.VMx, P.pqj, g.Bz.forChild((0, d.GB)(_))],
          })),
          t
        );
      })();
    },
    57679: (V, h, l) => {
      l.d(h, { k: () => g });
      var c = l(65879),
        d = l(45773);
      let g = (() => {
        class p {
          constructor(u) {
            (this.hostElementService = u), (this.prizmDocHostElementKey = 'index');
          }
          ngOnInit() {
            const u = Array.isArray(this.prizmDocHostElementKey)
                ? this.prizmDocHostElementKey
                : [this.prizmDocHostElementKey],
              e = Array.isArray(this.prizmDocHostElement)
                ? this.prizmDocHostElement
                : [this.prizmDocHostElement];
            for (const y in u) this.hostElementService.setHostElement(u[y], e[y]);
          }
        }
        return (
          (p.ɵfac = function (u) {
            return new (u || p)(c.Y36(d.R));
          }),
          (p.ɵdir = c.lG2({
            type: p,
            selectors: [['', 'prizmDocHostElement', '']],
            inputs: {
              prizmDocHostElement: 'prizmDocHostElement',
              prizmDocHostElementKey: 'prizmDocHostElementKey',
            },
          })),
          p
        );
      })();
    },
    56586: (V, h, l) => {
      l.d(h, { w: () => g });
      var c = l(45773),
        d = l(65879);
      let g = (() => {
        class p {}
        return (
          (p.ɵfac = function (u) {
            return new (u || p)();
          }),
          (p.ɵdir = d.lG2({ type: p, selectors: [['', 'prizmDocHost', '']], features: [d._Bn([c.R])] })),
          p
        );
      })();
    },
  },
]);
