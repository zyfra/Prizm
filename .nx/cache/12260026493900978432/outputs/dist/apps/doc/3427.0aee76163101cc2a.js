'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [3427],
  {
    3427: (G, c, n) => {
      n.r(c), n.d(c, { GridExampleModule: () => z });
      var l = n(96814),
        o = n(65879),
        m = n(8221),
        d = n(63796),
        p = n(75987),
        u = n(43015),
        a = n(55101),
        g = n(44652);
      function P(t, s) {
        if ((1 & t && o._UZ(0, 'prizm-grid-item', 4), 2 & t)) {
          const i = s.$implicit;
          o.Q6J('colPos', i.colPos)('rowPos', i.rowPos);
        }
      }
      function x(t, s) {
        if ((1 & t && o._UZ(0, 'prizm-grid-item', 4), 2 & t)) {
          const i = s.$implicit;
          o.Q6J('colPos', i.colPos)('rowPos', i.rowPos);
        }
      }
      let f = (() => {
        class t {
          constructor() {
            (this.grids8 = [
              { colPos: '1:8', rowPos: '1' },
              { colPos: '1:3', rowPos: '2:8' },
              { colPos: '4', rowPos: '2:8' },
              { colPos: '5', rowPos: '2:8' },
              { colPos: '6', rowPos: '2:8' },
              { colPos: '7', rowPos: '2:8' },
              { colPos: '8', rowPos: '2:8' },
            ]),
              (this.grids12 = [
                { colPos: '1:12', rowPos: '1:2' },
                { colPos: '1:3', rowPos: '3:14' },
                { colPos: '4', rowPos: '3:14' },
                { colPos: '5', rowPos: '3:14' },
                { colPos: '6', rowPos: '3:14' },
                { colPos: '7', rowPos: '3:14' },
                { colPos: '8', rowPos: '3:14' },
                { colPos: '9', rowPos: '3:14' },
                { colPos: '10', rowPos: '3:14' },
                { colPos: '11', rowPos: '3:14' },
                { colPos: '12', rowPos: '3:14' },
              ]);
          }
        }
        return (
          (t.ɵfac = function (i) {
            return new (i || t)();
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-grid-example-basic']],
            decls: 9,
            vars: 6,
            consts: [
              [1, 'container'],
              ['cols', '8', 'rows', '8'],
              [3, 'colPos', 'rowPos', 4, 'ngFor', 'ngForOf'],
              ['cols', '12', 'rows', '14'],
              [3, 'colPos', 'rowPos'],
            ],
            template: function (i, e) {
              1 & i &&
                (o.TgZ(0, 'div', 0)(1, 'h2'),
                o._uU(2, '8 columns grid'),
                o.qZA(),
                o.TgZ(3, 'prizm-grid', 1),
                o.YNc(4, P, 1, 2, 'prizm-grid-item', 2),
                o.qZA(),
                o.TgZ(5, 'h2'),
                o._uU(6, '12 columns grid'),
                o.qZA(),
                o.TgZ(7, 'prizm-grid', 3),
                o.YNc(8, x, 1, 2, 'prizm-grid-item', 2),
                o.qZA()()),
                2 & i &&
                  (o.xp6(3),
                  o.Udp('height', 400, 'px'),
                  o.xp6(1),
                  o.Q6J('ngForOf', e.grids8),
                  o.xp6(3),
                  o.Udp('height', 400, 'px'),
                  o.xp6(1),
                  o.Q6J('ngForOf', e.grids12));
            },
            dependencies: [l.sg, a.y, g.O],
            styles: [
              '[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{color:var(--prizm-v3-text-icon-primary)}',
            ],
            changeDetection: 0,
          })),
          t
        );
      })();
      function h(t, s) {
        if (
          (1 & t && (o.TgZ(0, 'prizm-doc-example', 4), o._UZ(1, 'prizm-grid-example-basic'), o.qZA()), 2 & t)
        ) {
          const i = o.oxw();
          o.Q6J('content', i.gridBasicExample);
        }
      }
      function E(t, s) {
        if (
          (1 & t &&
            (o.TgZ(0, 'ol', 5)(1, 'li')(2, 'p'),
            o._uU(3, ' \u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 '),
            o.TgZ(4, 'code'),
            o._uU(5, 'PrizmGridModule'),
            o.qZA(),
            o._uU(
              6,
              ' \u0432 \u043c\u043e\u0434\u0443\u043b\u044c \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0443 '
            ),
            o.qZA(),
            o._UZ(7, 'prizm-doc-code', 6),
            o.qZA()()),
          2 & t)
        ) {
          const i = o.oxw();
          o.xp6(7), o.Q6J('code', i.setupModule);
        }
      }
      let C = (() => {
        class t {
          constructor() {
            (this.gridBasicExample = {
              TypeScript: n.e(99302).then(n.t.bind(n, 99302, 17)),
              HTML: n.e(20565).then(n.t.bind(n, 20565, 17)),
              LESS: n.e(42003).then(n.t.bind(n, 42003, 17)),
            }),
              (this.setupModule = n.e(51656).then(n.t.bind(n, 51656, 17)));
          }
        }
        return (
          (t.ɵfac = function (i) {
            return new (i || t)();
          }),
          (t.ɵcmp = o.Xpm({
            type: t,
            selectors: [['prizm-grid-example']],
            decls: 5,
            vars: 0,
            consts: [
              ['header', 'Grids'],
              ['description', '', 1, 'page-description'],
              ['prizmDocPageTab', ''],
              ['prizmDocPageTab', 'Setup'],
              ['id', 'base', 'heading', 'Base', 3, 'content'],
              [1, 'b-demo-steps'],
              ['filename', 'MyComponent.module.ts', 3, 'code'],
            ],
            template: function (i, e) {
              1 & i &&
                (o.TgZ(0, 'prizm-doc-page', 0)(1, 'div', 1),
                o._uU(
                  2,
                  ' Our grid component is a powerful tool for laying out content. It is based on the 12-column grid system, and is fully responsive. It is built with flexbox and is available in a fixed-width and fluid-width container. '
                ),
                o.qZA(),
                o.YNc(3, h, 2, 1, 'ng-template', 2),
                o.YNc(4, E, 8, 1, 'ng-template', 3),
                o.qZA());
            },
            dependencies: [m.c, d.W, p.l, u.a, f],
            changeDetection: 0,
          })),
          t
        );
      })();
      var r = n(21004),
        Z = n(75187),
        v = n(70169);
      let z = (() => {
        class t {}
        return (
          (t.ɵfac = function (i) {
            return new (i || t)();
          }),
          (t.ɵmod = o.oAB({ type: t })),
          (t.ɵinj = o.cJS({ imports: [l.ez, r.Qp, Z.Bz.forChild((0, r.GB)(C)), v.X5b] })),
          t
        );
      })();
    },
  },
]);
