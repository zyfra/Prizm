'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [48556],
  {
    48556: (x, c, t) => {
      t.r(c), t.d(c, { ObservableModule: () => $ });
      var r = t(96814),
        b = t(21004),
        i = t(75187),
        e = t(65879),
        d = t(63796),
        g = t(75987),
        v = t(43015),
        o = t(97582),
        m = t(95102),
        p = t(97328),
        y = t(65619),
        Z = t(4377);
      const u = Symbol('test symbol');
      class l {
        getFromSymbol() {
          return this[u];
        }
        plus() {
          this.test5++, this.test4++, this.test3++, this.test2++, this.test1++;
        }
      }
      function T(n, a) {
        if (
          (1 & n && (e.TgZ(0, 'prizm-doc-example', 3), e._UZ(1, 'prizm-observable-base-example'), e.qZA()),
          2 & n)
        ) {
          const s = e.oxw();
          e.Q6J('content', s.baseExample);
        }
      }
      (l.ɵfac = function (a) {
        return new (a || l)();
      }),
        (l.ɵcmp = e.Xpm({
          type: l,
          selectors: [['prizm-observable-base-example']],
          decls: 30,
          vars: 15,
          consts: [
            [1, 'block'],
            ['prizmButton', '', 3, 'click'],
          ],
          template: function (a, s) {
            1 & a &&
              (e.TgZ(0, 'div', 0)(1, 'button', 1),
              e.NdJ('click', function () {
                return s.plus();
              }),
              e._uU(2, 'Plus'),
              e.qZA()(),
              e._UZ(3, 'br')(4, 'br'),
              e.TgZ(5, 'p'),
              e._uU(6, ' test1$$: '),
              e.TgZ(7, 'b'),
              e._uU(8),
              e.ALo(9, 'async'),
              e.qZA()(),
              e.TgZ(10, 'p'),
              e._uU(11, ' secondTest$$: '),
              e.TgZ(12, 'b'),
              e._uU(13),
              e.ALo(14, 'async'),
              e.qZA()(),
              e.TgZ(15, 'p'),
              e._uU(16, ' test3$$: '),
              e.TgZ(17, 'b'),
              e._uU(18),
              e.ALo(19, 'async'),
              e.qZA()(),
              e.TgZ(20, 'p'),
              e._uU(21, ' enumerable$$: '),
              e.TgZ(22, 'b'),
              e._uU(23),
              e.ALo(24, 'async'),
              e.qZA()(),
              e.TgZ(25, 'p'),
              e._uU(26, ' getFromSymbol: '),
              e.TgZ(27, 'b'),
              e._uU(28),
              e.ALo(29, 'async'),
              e.qZA()()),
              2 & a &&
                (e.xp6(8),
                e.Oqu(e.lcZ(9, 5, s.test1$$)),
                e.xp6(5),
                e.Oqu(e.lcZ(14, 7, s.secondTest$$)),
                e.xp6(5),
                e.Oqu(e.lcZ(19, 9, s.test3$$)),
                e.xp6(5),
                e.Oqu(e.lcZ(24, 11, s.enumerable$$)),
                e.xp6(5),
                e.Oqu(e.lcZ(29, 13, s.getFromSymbol())));
          },
          dependencies: [Z.K, r.Ov],
          styles: ['.block[_ngcontent-%COMP%]{display:flex;gap:1rem}'],
        })),
        (0, o.gn)([(0, m.ge)(), (0, o.w6)('design:type', Number)], l.prototype, 'test1', void 0),
        (0, o.gn)(
          [(0, m.ge)({ name: 'secondTest$$', subject: new p.t() }), (0, o.w6)('design:type', Number)],
          l.prototype,
          'test2',
          void 0
        ),
        (0, o.gn)(
          [(0, m.ge)({ defaultValue: null, subject: new y.X(null) }), (0, o.w6)('design:type', Number)],
          l.prototype,
          'test3',
          void 0
        ),
        (0, o.gn)(
          [
            (0, m.ge)({ name: 'enumerable$$', subject: new p.t(), attributes: { enumerable: !0 } }),
            (0, o.w6)('design:type', Number),
          ],
          l.prototype,
          'test4',
          void 0
        ),
        (0, o.gn)(
          [
            (0, m.ge)({ name: u, subject: new p.t(), attributes: { enumerable: !0 } }),
            (0, o.w6)('design:type', Number),
          ],
          l.prototype,
          'test5',
          void 0
        );
      let h = (() => {
        class n {
          constructor() {
            (this.exampleModule = t.e(33858).then(t.t.bind(t, 33858, 17))),
              (this.baseExample = {
                TypeScript: t.e(10990).then(t.t.bind(t, 10990, 17)),
                HTML: t.e(48081).then(t.t.bind(t, 48081, 17)),
              });
          }
        }
        return (
          (n.ɵfac = function (s) {
            return new (s || n)();
          }),
          (n.ɵcmp = e.Xpm({
            type: n,
            selectors: [['prizm-overlay-example']],
            decls: 4,
            vars: 0,
            consts: [
              ['header', 'Obsevable'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
            ],
            template: function (s, f) {
              1 & s &&
                (e.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                e._uU(2, ' Use this decorator to create and emit subject when you change value '),
                e.qZA(),
                e.YNc(3, T, 2, 1, 'ng-template', 2),
                e.qZA());
            },
            dependencies: [d.W, g.l, v.a, l],
            encapsulation: 2,
            changeDetection: 0,
          })),
          n
        );
      })();
      var O = t(70169);
      let $ = (() => {
        class n {}
        return (
          (n.ɵfac = function (s) {
            return new (s || n)();
          }),
          (n.ɵmod = e.oAB({ type: n })),
          (n.ɵinj = e.cJS({ imports: [r.ez, b.Qp, O.KBf, i.Bz.forChild((0, b.GB)(h))] })),
          n
        );
      })();
    },
  },
]);
