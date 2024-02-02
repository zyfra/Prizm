'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [42841],
  {
    42841: (f, s, p) => {
      p.r(s), p.d(s, { InputChipsExampleModule: () => et });
      var a = p(60095),
        c = p(75187),
        d = p(21004),
        l = p(70169),
        t = p(65879),
        r = p(8221),
        C = p(30990),
        h = p(83419),
        g = p(78905),
        x = p(63796),
        I = p(75987),
        z = p(43015),
        D = p(56586),
        v = p(57679),
        y = p(76153),
        E = p(19947),
        _ = p(60356),
        P = p(88059);
      let Z = (() => {
        class e {
          constructor() {
            this.deletable = !0;
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-input-chips-item-example']],
            decls: 7,
            vars: 2,
            consts: [
              [2, 'display', 'flex', 'gap', '0.5rem'],
              [3, 'deletable'],
              [3, 'selected'],
            ],
            template: function (o, u) {
              1 & o &&
                (t.TgZ(0, 'div', 0)(1, 'prizm-chips-item'),
                t._uU(
                  2,
                  ' \u0421\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0439 chip '
                ),
                t.qZA(),
                t.TgZ(3, 'prizm-chips-item', 1),
                t._uU(
                  4,
                  ' \u0421\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0439 chip not deletable '
                ),
                t.qZA(),
                t.TgZ(5, 'prizm-chips-item', 2),
                t._uU(
                  6,
                  ' \u0421\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u044b\u0439 chip selected'
                ),
                t.qZA()()),
                2 & o && (t.xp6(3), t.Q6J('deletable', !1), t.xp6(2), t.Q6J('selected', !0));
            },
            dependencies: [P.s],
            styles: ['prizm-chips[_ngcontent-%COMP%]{margin-bottom:11px}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      var T = p(96814);
      function M(e, i) {
        if ((1 & e && (t.TgZ(0, 'span'), t._uU(1), t.qZA()), 2 & e)) {
          const o = i.$implicit;
          t.xp6(1), t.hij(' ', o, ' ');
        }
      }
      const H = function () {
        return [];
      };
      let V = (() => {
        class e {
          constructor() {
            (this.deletable = !0),
              (this.requiredInputControl = new a.p4('')),
              (this.chipsControl = new a.p4(['\u0427\u0438\u043f\u0441 1', '\u0427\u0438\u043f\u0441 2']));
          }
          onEnter(o) {
            '' !== o && (this.chipsComponent.addChips(o), this.requiredInputControl.patchValue(''));
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-input-chips-basic-example']],
            viewQuery: function (o, u) {
              if ((1 & o && t.Gf(l.ooq, 7), 2 & o)) {
                let n;
                t.iGM((n = t.CRH())) && (u.chipsComponent = n.first);
              }
            },
            decls: 10,
            vars: 5,
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
                'prizmInput',
                '',
                'placeholder',
                '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435',
                3,
                'formControl',
                'enter',
              ],
              ['input', ''],
              ['prizm-input-bottom', '', 3, 'formControl', 'deletable'],
              ['chipsComponent', ''],
              [4, 'ngFor', 'ngForOf'],
            ],
            template: function (o, u) {
              if (
                (1 & o &&
                  (t.TgZ(0, 'prizm-input-layout', 0)(1, 'input', 1, 2),
                  t.NdJ('enter', function (m) {
                    return u.onEnter(m);
                  }),
                  t.qZA(),
                  t._UZ(3, 'prizm-chips', 3, 4),
                  t.qZA(),
                  t._UZ(5, 'br'),
                  t.TgZ(6, 'h1'),
                  t._uU(7, 'Chips:'),
                  t.qZA(),
                  t.TgZ(8, 'div'),
                  t.YNc(9, M, 2, 1, 'span', 5),
                  t.qZA()),
                2 & o)
              ) {
                let n;
                t.xp6(1),
                  t.Q6J('formControl', u.requiredInputControl),
                  t.xp6(2),
                  t.Q6J('formControl', u.chipsControl)('deletable', u.deletable),
                  t.xp6(6),
                  t.Q6J('ngForOf', null !== (n = u.chipsControl.value) && void 0 !== n ? n : t.DdM(4, H));
              }
            },
            dependencies: [T.sg, y.C, E.l, _.o, a.Fj, a.JJ, a.oH],
            styles: ['prizm-chips[_ngcontent-%COMP%]{margin-bottom:11px}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      function N(e, i) {
        if ((1 & e && (t.TgZ(0, 'span'), t._uU(1), t.qZA()), 2 & e)) {
          const o = i.$implicit;
          t.xp6(1), t.hij(' ', o, ' ');
        }
      }
      const J = function () {
        return [];
      };
      let A = (() => {
        class e {
          constructor() {
            (this.deletable = !0),
              (this.requiredInputControl = new a.p4('')),
              (this.chipsControl = new a.p4([
                '\u0427\u0438\u043f\u0441 1',
                '\u0427\u0438\u043f\u0441 2',
                '\u0427\u0438\u043f\u0441 3',
              ]));
          }
          onEnter(o) {
            '' !== o && (this.chipsComponent.addChips(o), this.requiredInputControl.patchValue(''));
          }
        }
        return (
          (e.ɵfac = function (o) {
            return new (o || e)();
          }),
          (e.ɵcmp = t.Xpm({
            type: e,
            selectors: [['prizm-input-chips-outer-example']],
            viewQuery: function (o, u) {
              if ((1 & o && t.Gf(l.ooq, 7), 2 & o)) {
                let n;
                t.iGM((n = t.CRH())) && (u.chipsComponent = n.first);
              }
            },
            decls: 10,
            vars: 6,
            consts: [
              [
                'label',
                '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                'size',
                'l',
                'status',
                'default',
                3,
                'outer',
              ],
              [
                'prizmInput',
                '',
                'placeholder',
                '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435',
                3,
                'formControl',
                'enter',
              ],
              ['input', ''],
              ['prizm-input-bottom', '', 3, 'formControl', 'deletable'],
              ['chipsComponent', ''],
              [4, 'ngFor', 'ngForOf'],
            ],
            template: function (o, u) {
              if (
                (1 & o &&
                  (t.TgZ(0, 'prizm-input-layout', 0)(1, 'input', 1, 2),
                  t.NdJ('enter', function (m) {
                    return u.onEnter(m);
                  }),
                  t.qZA(),
                  t._UZ(3, 'prizm-chips', 3, 4),
                  t.qZA(),
                  t._UZ(5, 'br'),
                  t.TgZ(6, 'h1'),
                  t._uU(7, 'Chips:'),
                  t.qZA(),
                  t.TgZ(8, 'div'),
                  t.YNc(9, N, 2, 1, 'span', 5),
                  t.qZA()),
                2 & o)
              ) {
                let n;
                t.Q6J('outer', !0),
                  t.xp6(1),
                  t.Q6J('formControl', u.requiredInputControl),
                  t.xp6(2),
                  t.Q6J('formControl', u.chipsControl)('deletable', u.deletable),
                  t.xp6(6),
                  t.Q6J('ngForOf', null !== (n = u.chipsControl.value) && void 0 !== n ? n : t.DdM(5, J));
              }
            },
            dependencies: [T.sg, y.C, E.l, _.o, a.Fj, a.JJ, a.oH],
            styles: ['prizm-chips[_ngcontent-%COMP%]{margin-bottom:11px}'],
            changeDetection: 0,
          })),
          e
        );
      })();
      function U(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'prizm-doc-example', 3),
            t._UZ(1, 'prizm-input-chips-basic-example'),
            t.qZA(),
            t.TgZ(2, 'prizm-doc-example', 4),
            t._UZ(3, 'prizm-input-chips-outer-example'),
            t.qZA(),
            t.TgZ(4, 'prizm-doc-example', 5),
            t._UZ(5, 'prizm-input-chips-item-example'),
            t.qZA()),
          2 & e)
        ) {
          const o = t.oxw();
          t.Q6J('content', o.prizmInputChipsExample),
            t.xp6(2),
            t.Q6J('content', o.prizmInputChipsOuterExample),
            t.xp6(2),
            t.Q6J('content', o.prizmInputChipsItemExample);
        }
      }
      function Q(e, i) {
        1 & e && t._uU(0, ' Disabled ');
      }
      function O(e, i) {
        1 & e && t._uU(0, ' Deletable ');
      }
      function B(e, i) {
        1 & e && t._uU(0, ' Selected ');
      }
      function K(e, i) {
        1 & e && t._uU(0, ' Deleted ');
      }
      function b(e, i) {
        1 & e && t._uU(0, ' Hint Can Show ');
      }
      function S(e, i) {
        1 & e && t._uU(0, ' Hint Direction ');
      }
      function G(e, i) {
        1 & e && t._uU(0, ' Hint Text ');
      }
      function F(e, i) {
        1 & e && t._uU(0, ' Single Line ');
      }
      function Y(e, i) {
        1 & e && t._uU(0, ' Deletable ');
      }
      function L(e, i) {
        1 & e && t._uU(0, ' Chips ');
      }
      function R(e, i) {
        1 & e && t._uU(0, ' Size ');
      }
      function j(e, i) {
        1 & e && t._uU(0, ' Hint Can Show ');
      }
      function W(e, i) {
        1 & e && t._uU(0, ' Hint Direction ');
      }
      function X(e, i) {
        1 & e && t._uU(0, ' Add Chip Event ');
      }
      function $(e, i) {
        1 & e && t._uU(0, ' Remove Chip Event ');
      }
      function w(e, i) {
        1 & e && t._uU(0, ' Click Chip Event ');
      }
      function q(e, i) {
        if (1 & e) {
          const o = t.EpF();
          t.TgZ(0, 'prizm-doc-demo')(1, 'div')(2, 'h1'),
            t._uU(3, 'With Chips ITEM'),
            t.qZA(),
            t.TgZ(4, 'div')(5, 'prizm-chips-item', 6, 7),
            t._uU(7, ' \u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 chips '),
            t.qZA()()(),
            t.TgZ(8, 'div')(9, 'h1'),
            t._uU(10, 'With Input Layout'),
            t.qZA(),
            t.TgZ(11, 'div')(12, 'prizm-input-layout', 8)(13, 'input', 9),
            t.NdJ('enter', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG(m.onEnter(n));
            }),
            t.qZA(),
            t._UZ(14, 'prizm-chips', 10, 11),
            t.qZA()()()(),
            t.TgZ(16, 'prizm-doc-documentation', 12),
            t.YNc(17, Q, 1, 0, 'ng-template', 13),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.disabled = n));
            }),
            t.YNc(18, O, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.deletable = n));
            }),
            t.YNc(19, B, 1, 0, 'ng-template', 15),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.selected = n));
            }),
            t.YNc(20, K, 1, 0, 'ng-template', 16),
            t.YNc(21, b, 1, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.hintCanShow = n));
            }),
            t.YNc(22, S, 1, 0, 'ng-template', 18),
            t.YNc(23, G, 1, 0, 'ng-template', 19),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.hintText = n));
            }),
            t.qZA(),
            t.TgZ(24, 'prizm-doc-documentation', 20),
            t.YNc(25, F, 1, 0, 'ng-template', 21),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.singleLine = n));
            }),
            t.YNc(26, Y, 1, 0, 'ng-template', 14),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.deletable = n));
            }),
            t.YNc(27, L, 1, 0, 'ng-template', 22),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.chips = n));
            }),
            t.YNc(28, R, 1, 0, 'ng-template', 23),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.size = n));
            }),
            t.YNc(29, j, 1, 0, 'ng-template', 17),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.hintCanShow = n));
            }),
            t.YNc(30, W, 1, 0, 'ng-template', 24),
            t.NdJ('documentationPropertyValueChange', function (n) {
              t.CHM(o);
              const m = t.oxw();
              return t.KtG((m.hintDirection = n));
            }),
            t.YNc(31, X, 1, 0, 'ng-template', 25),
            t.YNc(32, $, 1, 0, 'ng-template', 26),
            t.YNc(33, w, 1, 0, 'ng-template', 27),
            t.qZA();
        }
        if (2 & e) {
          const o = t.MAs(6),
            u = t.MAs(15),
            n = t.oxw();
          t.xp6(5),
            t.Q6J('deletable', n.deletable)('disabled', n.disabled)('hintText', n.hintText)(
              'hintDirection',
              n.hintDirection
            )('hintCanShow', n.hintCanShow)('prizmDocHostElement', o)('selected', n.selected),
            t.xp6(8),
            t.Q6J('disabled', n.control.disabled),
            t.xp6(1),
            t.ekj('single-line', n.singleLine),
            t.Q6J('formControl', n.control)('prizmDocHostElement', u)('singleLine', n.singleLine)(
              'chips',
              n.chips
            )('deletable', n.deletable)('disabled', n.disabled),
            t.xp6(3),
            t.Q6J('documentationPropertyValue', n.disabled),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.deletable),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.selected),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.hintCanShow),
            t.xp6(2),
            t.Q6J('documentationPropertyValue', n.hintText),
            t.xp6(1),
            t.Q6J('control', n.control)('hasTestId', !0),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.singleLine),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.deletable),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.chips),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.size),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.hintCanShow),
            t.xp6(1),
            t.Q6J('documentationPropertyValue', n.hintDirection);
        }
      }
      function k(e, i) {
        if (
          (1 & e &&
            (t.TgZ(0, 'ol', 28)(1, 'li')(2, 'p'),
            t._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            t.TgZ(4, 'code'),
            t._uU(5, 'PrizmInputChipsModule'),
            t.qZA(),
            t._uU(6, ' \u0438 '),
            t.TgZ(7, 'code'),
            t._uU(8, 'PrizmInputTextModule'),
            t.qZA(),
            t._uU(
              9,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            t.qZA(),
            t._UZ(10, 'prizm-doc-code', 29),
            t.qZA()()),
          2 & e)
        ) {
          const o = t.oxw();
          t.xp6(10), t.Q6J('code', o.setupModule);
        }
      }
      let tt = (() => {
          class e {
            constructor() {
              (this.hintCanShow = !0),
                (this.hintDirection = l._$_.RIGHT),
                (this.label = '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a'),
                (this.hintText = '\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 chips'),
                (this.inputPosition = 'left'),
                (this.inputPositions = ['left', 'center']),
                (this.control = new a.p4([])),
                (this.control2 = new a.p4([])),
                (this.size = 'l'),
                (this.sizesOuter = ['l', 'm', 's']),
                (this.sizesInner = ['l', 'm']),
                (this.status = 'default'),
                (this.statuses = ['default', 'success', 'warning', 'danger']),
                (this.forceClearVariants = [null, !1, !0]),
                (this.forceClear = this.forceClearVariants[0]),
                (this.chips = [
                  '\u0427\u0438\u043f\u0441 1',
                  '\u0427\u0438\u043f\u0441 2',
                  '\u0427\u0438\u043f\u0441 3',
                ]),
                (this.deletable = !0),
                (this.disabled = !1),
                (this.singleLine = !1),
                (this.selected = !1),
                (this.prizmInputChipsExample = {
                  TypeScript: p.e(4981).then(p.t.bind(p, 4981, 17)),
                  HTML: p.e(47777).then(p.t.bind(p, 47777, 17)),
                  LESS: p.e(9954).then(p.t.bind(p, 9954, 17)),
                }),
                (this.prizmInputChipsOuterExample = {
                  TypeScript: p.e(31743).then(p.t.bind(p, 31743, 17)),
                  HTML: p.e(31688).then(p.t.bind(p, 31688, 17)),
                  LESS: p.e(74969).then(p.t.bind(p, 74969, 17)),
                }),
                (this.prizmInputChipsItemExample = {
                  TypeScript: p.e(10154).then(p.t.bind(p, 10154, 17)),
                  HTML: p.e(9613).then(p.t.bind(p, 9613, 17)),
                  LESS: p.e(30036).then(p.t.bind(p, 30036, 17)),
                }),
                (this.setupModule = p.e(91395).then(p.t.bind(p, 91395, 17)));
            }
            onEnter(o) {
              console.log('enter'), '' !== o && (this.chipsComponent.addChips(o), (this.input.value = ''));
            }
          }
          return (
            (e.ɵfac = function (o) {
              return new (o || e)();
            }),
            (e.ɵcmp = t.Xpm({
              type: e,
              selectors: [['prizm-input-chips-example']],
              viewQuery: function (o, u) {
                if ((1 & o && (t.Gf(l.lzc, 5), t.Gf(l.ooq, 5)), 2 & o)) {
                  let n;
                  t.iGM((n = t.CRH())) && (u.input = n.first),
                    t.iGM((n = t.CRH())) && (u.chipsComponent = n.first);
                }
              },
              decls: 4,
              vars: 0,
              consts: [
                ['header', 'Input Chips'],
                ['prizmDocPageTab', ''],
                ['prizmDocPageTab', '', 'prizmDocHost', ''],
                ['id', 'chips', 'heading', 'Chips example', 3, 'content'],
                ['id', 'chips-outer', 'heading', 'Chips outer example', 3, 'content'],
                ['id', 'chips-item', 'heading', 'Chips item example', 3, 'content'],
                [
                  'prizmDocHostElementKey',
                  'PrizmChipsItemComponent',
                  2,
                  'width',
                  '100px',
                  3,
                  'deletable',
                  'disabled',
                  'hintText',
                  'hintDirection',
                  'hintCanShow',
                  'prizmDocHostElement',
                  'selected',
                ],
                ['chipsItem', ''],
                [
                  'label',
                  '\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a',
                  'size',
                  'l',
                  'status',
                  'default',
                ],
                [
                  'prizmInput',
                  '',
                  'placeholder',
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435',
                  3,
                  'disabled',
                  'enter',
                ],
                [
                  'prizmDocHostElementKey',
                  'PrizmChipsComponent',
                  'prizm-input-bottom',
                  '',
                  3,
                  'formControl',
                  'prizmDocHostElement',
                  'singleLine',
                  'chips',
                  'deletable',
                  'disabled',
                ],
                ['element', ''],
                ['heading', 'PrizmChipsItemComponent', 'hostComponentKey', 'PrizmChipsItemComponent'],
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
                  'deletable',
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
                  'selected',
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
                  'deleted',
                  'documentationPropertyType',
                  'MouseEvent',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'hintCanShow',
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
                  'hintDirection',
                  'documentationPropertyType',
                  'PrizmOverlayOutsidePlacement',
                  'documentationPropertyMode',
                  'input',
                ],
                [
                  'documentationPropertyName',
                  'hintText',
                  'documentationPropertyType',
                  'string',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'heading',
                  'PrizmChipsComponent',
                  'hostComponentKey',
                  'PrizmChipsComponent',
                  3,
                  'control',
                  'hasTestId',
                ],
                [
                  'documentationPropertyName',
                  'singleLine',
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
                  'chips',
                  'documentationPropertyType',
                  'string[]',
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
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'hintDirection',
                  'documentationPropertyType',
                  'PrizmOverlayOutsidePlacement',
                  'documentationPropertyMode',
                  'input',
                  3,
                  'documentationPropertyValue',
                  'documentationPropertyValueChange',
                ],
                [
                  'documentationPropertyName',
                  'addChipEvent',
                  'documentationPropertyType',
                  'boolean',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'removeChipEvent',
                  'documentationPropertyType',
                  'boolean',
                  'documentationPropertyMode',
                  'output',
                ],
                [
                  'documentationPropertyName',
                  'clickChipEvent',
                  'documentationPropertyType',
                  'boolean',
                  'documentationPropertyMode',
                  'output',
                ],
                [1, 'b-demo-steps'],
                ['filename', 'MyComponent.module.ts', 3, 'code'],
              ],
              template: function (o, u) {
                1 & o &&
                  (t.TgZ(0, 'prizm-doc-page', 0),
                  t.YNc(1, U, 6, 3, 'ng-template', 1),
                  t.YNc(2, q, 34, 29, 'ng-template', 2),
                  t.YNc(3, k, 11, 1, 'ng-template', 1),
                  t.qZA());
              },
              dependencies: [
                r.c,
                C.F,
                h.K,
                g.N,
                x.W,
                I.l,
                z.a,
                D.w,
                v.k,
                y.C,
                E.l,
                _.o,
                P.s,
                a.JJ,
                a.oH,
                Z,
                V,
                A,
              ],
              styles: ['prizm-chips.single-line[_ngcontent-%COMP%]{margin-bottom:11px}'],
              changeDetection: 0,
            })),
            e
          );
        })(),
        et = (() => {
          class e {}
          return (
            (e.ɵfac = function (o) {
              return new (o || e)();
            }),
            (e.ɵmod = t.oAB({ type: e })),
            (e.ɵinj = t.cJS({ imports: [d.Qp, c.Bz.forChild((0, d.GB)(tt)), l.Qjd, l.ynX, a.UX, a.u5] })),
            e
          );
        })();
    },
    57679: (f, s, p) => {
      p.d(s, { k: () => d });
      var a = p(65879),
        c = p(45773);
      let d = (() => {
        class l {
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
            for (const h in r) this.hostElementService.setHostElement(r[h], C[h]);
          }
        }
        return (
          (l.ɵfac = function (r) {
            return new (r || l)(a.Y36(c.R));
          }),
          (l.ɵdir = a.lG2({
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
    56586: (f, s, p) => {
      p.d(s, { w: () => d });
      var a = p(45773),
        c = p(65879);
      let d = (() => {
        class l {}
        return (
          (l.ɵfac = function (r) {
            return new (r || l)();
          }),
          (l.ɵdir = c.lG2({ type: l, selectors: [['', 'prizmDocHost', '']], features: [c._Bn([a.R])] })),
          l
        );
      })();
    },
  },
]);
